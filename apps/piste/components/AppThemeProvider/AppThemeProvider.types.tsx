import { Theme, webLightTheme, webDarkTheme } from "@fluentui/react-components"

export type AppTheme = "light" | "dark"

export const themes: Record<AppTheme, Theme> = {
  light: webLightTheme,
  dark: webDarkTheme,
}
