import React, { useMemo, useState } from "react"
import { webLightTheme, webDarkTheme, FluentProvider } from "@fluentui/react-components"

import { AppTheme } from "./AppThemeProvider.types"
import { AppThemeContext, IAppThemeContextValue } from "./AppThemeProvider.context"
import { ThemeProvider } from "styled-components"

const lightTheme = webLightTheme
const darkTheme = webDarkTheme

type AppThemeProviderProps = {
  children: React.ReactNode
}

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  // const [params] = useSearchParams()
  // const defaultTheme = (params.get("theme") as AppTheme) ?? "light"
  const defaultTheme: AppTheme = "light"

  const [themeName, setTheme] = useState<AppTheme>(defaultTheme)

  const value: IAppThemeContextValue = useMemo(() => {
    let theme = lightTheme
    switch (themeName) {
      case "dark":
        theme = darkTheme
      case "light":
      default:
    }

    return {
      theme,
      themeName,
      setTheme,
    }
  }, [themeName])

  return (
    <AppThemeContext.Provider value={value}>
      <FluentProvider theme={value.theme}>
        <ThemeProvider theme={value.theme}>{children}</ThemeProvider>
      </FluentProvider>
    </AppThemeContext.Provider>
  )
}
