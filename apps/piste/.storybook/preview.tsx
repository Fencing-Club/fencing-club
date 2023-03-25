import { preview as sharedPreview } from "storybook-config"
import type { Preview } from "@storybook/react"
import { withThemeProvider, themeGlobalType } from "./withThemeProvider"

const sharedDecorators = sharedPreview.decorators || []

const preview: Preview = {
  ...sharedPreview,
  decorators: [...sharedDecorators, withThemeProvider],
  globalTypes: {
    ...sharedPreview.globalTypes,
    ...themeGlobalType,
  },
}

export default preview
