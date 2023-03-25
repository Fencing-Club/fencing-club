import { TestRunnerConfig } from "@storybook/test-runner"
import { injectAxe, checkA11y } from "axe-playwright"

export const testRunner: TestRunnerConfig = {
  async preRender(page) {
    await injectAxe(page)
  },

  async postRender(page) {
    await checkA11y(page, "#storybook-root", {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    })
  },
}
