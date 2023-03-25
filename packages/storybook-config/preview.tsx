import type { Preview } from "@storybook/react"

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      current: "ligth",
    },
  },
  decorators: [
    // Add some spacing so screenshots don't cut off shadows/edges
    (Story) => (
      <div style={{ margin: "0.2em" }}>
        <Story />
      </div>
    ),
  ],
}
