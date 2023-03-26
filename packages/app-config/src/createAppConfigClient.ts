import {
  AppConfigDataClient,
  StartConfigurationSessionCommand,
  GetLatestConfigurationCommand,
  BadRequestException,
} from "@aws-sdk/client-appconfigdata"
import { useSyncExternalStoreWithSelector } from "use-sync-external-store/shim/with-selector"
import { AppConfigClient, AppConfigClientOptions, ListenerFunction } from "./createAppConfigClient.types"

// TODO: Shift into package of it's own
// TODO: Add a way to force a refresh
// TODO: Cache in sessionStorage
// TODO: Add retry logic
//  TODO: Add exponential backoff
// TODO: Add requery logic as defined in the settings
// TODO: Add function to query an endpoint to get the sessionToken

export function createAppConfigClient<Flags extends Record<string, boolean>>(
  options: AppConfigClientOptions<Flags>
): AppConfigClient<Flags> {
  const { config, params, defaultFlags } = options

  const client = new AppConfigDataClient(config)

  let _flags: Flags = { ...defaultFlags }
  let _token: string | undefined = undefined
  const _listeners = new Set<ListenerFunction>()

  async function getToken(): Promise<string> {
    const getSession = new StartConfigurationSessionCommand(params)

    const sessionToken = await client.send(getSession)
    return sessionToken.InitialConfigurationToken || ""
  }

  async function getConfig(): Promise<Flags | undefined> {
    if (!_token) {
      _token = await getToken()
    }

    try {
      const command = new GetLatestConfigurationCommand({
        ConfigurationToken: _token,
      })

      const response = await client.send(command)
      if (response.Configuration) {
        const values = mapConfigResponseToFlags(response.Configuration)
        _flags = { ...defaultFlags, ...values }

        emitChange()

        return values as Flags
      }

      return undefined
    } catch (err) {
      if (err instanceof BadRequestException) {
        _token = undefined
        return getConfig()
      } else {
        throw err
      }
    }
  }

  function subscribe(listener: ListenerFunction): () => void {
    _listeners.add(listener)

    return () => {
      _listeners.delete(listener)
    }
  }

  function emitChange() {
    for (const listener of _listeners) {
      listener()
    }
  }

  function getSnapshot() {
    return _flags
  }

  function getServerSnapshot() {
    return defaultFlags
  }

  function useAppConfig(): Flags {
    return useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, (c) => c)
  }

  function useFeatureFlag<T extends keyof Flags>(name: T): boolean | undefined {
    return useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, (c) => c[name])
  }

  // Perform initial fetch of config
  getConfig()

  return { client, getConfig, useAppConfig, useFeatureFlag }
}

function mapConfigResponseToFlags<Flags>(config: Uint8Array): Partial<Flags> {
  let str = ""
  for (let i = 0; i < config.length; i++) {
    str += String.fromCharCode(config[i])
  }

  const rawValues = JSON.parse(str)

  // Map raw response to Flags type
  const values: Partial<Flags> = {}
  for (const key in rawValues) {
    values[key as keyof Flags] = rawValues[key].enabled
  }

  return values
}
