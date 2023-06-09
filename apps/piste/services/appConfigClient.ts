import { createAppConfigClient } from "@piste/app-config"

type FeatureFlags = {
  isChallengeEnabled: boolean
  secondFlag: boolean
}

const defaultFlags: Partial<FeatureFlags> = {
  isChallengeEnabled: false,
}

export const client = createAppConfigClient({
  config: {
    region: "us-east-2",
    credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_APP_CONFIG_ACCESS_ID,
      secretAccessKey: process.env.NEXT_PUBLIC_APP_CONFIG_SECRET_ACCESS_KEY,
    },
  },
  params: {
    ApplicationIdentifier: process.env.NEXT_PUBLIC_APP_CONFIG_APPID,
    ConfigurationProfileIdentifier: process.env.NEXT_PUBLIC_APP_CONFIG_CONFIGID,
    EnvironmentIdentifier: process.env.NEXT_PUBLIC_APP_CONFIG_ENVID,
  },
  defaultFlags,
})

export const { useFeatureFlag, useAppConfig } = client
