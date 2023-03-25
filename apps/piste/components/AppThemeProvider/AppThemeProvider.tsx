import { useEffect, useMemo } from "react"
import { FluentProvider } from "@fluentui/react-components"

import { AppTheme } from "./AppThemeProvider.types"
import { AppThemeContext, IAppThemeContextValue } from "./AppThemeProvider.context"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./components/GlobalStyles"
import { useThemeReducer } from "./useThemeReducer"

type AppThemeProviderProps = {
  children: React.ReactNode
}

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  const urlParams = new URLSearchParams(window.location.search)
  const defaultTheme = (urlParams.get("theme") || "light") as AppTheme

  const [{ theme, name }, setTheme] = useThemeReducer(defaultTheme)

  // Update the background color of the page to match the theme
  useEffect(() => {
    const body = document.getElementsByTagName("body")?.[0]
    if (body) {
      body.style.backgroundColor = theme.colorNeutralBackground1
    }
  }, [theme])

  const value: IAppThemeContextValue = useMemo(() => {
    return {
      theme,
      themeName: name,
      setTheme,
    }
  }, [theme, name, setTheme])

  return (
    <>
      <GlobalStyles />
      <AppThemeContext.Provider value={value}>
        <FluentProvider theme={value.theme}>
          <ThemeProvider theme={value.theme}>{children}</ThemeProvider>
        </FluentProvider>
      </AppThemeContext.Provider>
    </>
  )
}
