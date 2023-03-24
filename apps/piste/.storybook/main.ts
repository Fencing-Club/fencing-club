import { main } from "storybook-config"
import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
  ...main,
  stories: ["../**/*.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
}
export default config
