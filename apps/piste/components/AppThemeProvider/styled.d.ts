import "styled-components"
import { Theme } from "@fluentui/react-components"

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}
