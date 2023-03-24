import { TestRunnerConfig } from "@storybook/test-runner"
import { injectAxe, checkA11y } from "axe-playwright"

export const testRunner: TestRunnerConfig = {
  async preRender(page, context) {
    await injectAxe(page)
  },

  async postRender(page, context) {
    await checkA11y(page, "#storybook-root", {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    })
  },
}
