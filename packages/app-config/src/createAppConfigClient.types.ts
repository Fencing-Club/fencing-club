import { AppConfigDataClient, AppConfigDataClientConfig, StartConfigurationSessionCommandInput } from "@aws-sdk/client-appconfigdata"

export type ListenerFunction = () => void

export type AppConfigClient<Flags> = {
  client: AppConfigDataClient
  getConfig: () => Promise<Flags | undefined>
  useAppConfig: () => Flags
  useFeatureFlag: <T extends keyof Flags>(name: T) => boolean | undefined
}

export interface AppConfigClientOptions<Flags> {
  config: AppConfigDataClientConfig
  params: StartConfigurationSessionCommandInput
  defaultFlags: Flags
}
