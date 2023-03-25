import { useMemo, useState } from "react"
import { webLightTheme, webDarkTheme, FluentProvider } from "@fluentui/react-components"

import { AppTheme } from "./AppThemeProvider.types"
import { AppThemeContext, IAppThemeContextValue } from "./AppThemeProvider.context"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./components/GlobalStyles"

const lightTheme = webLightTheme
const darkTheme = webDarkTheme

type AppThemeProviderProps = {
  children: React.ReactNode
}

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  const urlParams = new URLSearchParams(window.location.search)
  const defaultTheme: AppTheme = (urlParams.get("theme") as AppTheme) || "light"

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
    <div>
      <GlobalStyles />
      <AppThemeContext.Provider value={value}>
        <FluentProvider theme={value.theme}>
          <ThemeProvider theme={value.theme}>{children}</ThemeProvider>
        </FluentProvider>
      </AppThemeContext.Provider>
    </div>
  )
}
