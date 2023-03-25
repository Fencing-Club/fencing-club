import { preview as sharedPreview } from "storybook-config"
import type { Preview } from "@storybook/react"
import React from "react"

import { AppThemeProvider } from "../components/AppThemeProvider"

const sharedDecorators = sharedPreview.decorators || []

const preview: Preview = {
  ...sharedPreview,
  decorators: [
    ...sharedDecorators,
    (Story) => (
      <AppThemeProvider>
        <Story />
      </AppThemeProvider>
    ),
  ],
}

export default preview
