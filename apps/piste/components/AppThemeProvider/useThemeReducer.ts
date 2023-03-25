import { Reducer, useReducer } from "react"
import { Theme } from "@fluentui/react-components"

import { AppTheme, themes } from "./AppThemeProvider.types"

type ThemeState = {
  theme: Theme
  name: AppTheme
}

function themeReducer(state: ThemeState, theme: AppTheme): ThemeState {
  switch (theme) {
    case "dark":
      return {
        theme: themes.dark,
        name: "dark",
      }
    case "light":
    default:
      return {
        theme: themes.light,
        name: "light",
      }
  }
}

export function useThemeReducer(theme: AppTheme) {
  return useReducer<Reducer<ThemeState, AppTheme>>(themeReducer, {
    theme: themes[theme],
    name: theme,
  })
}
