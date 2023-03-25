import React, { useEffect } from "react"
import { useDarkMode } from "storybook-dark-mode"

import { AppThemeProvider } from "../components/AppThemeProvider"
import { useAppTheme } from "../components/AppThemeProvider/useAppTheme"

export const themeGlobalType = {
  // theme: {
  //   name: "Theme",
  //   description: "Global theme for components",
  //   defaultValue: "light",
  //   toolbar: {
  //     icon: "sun",
  //     showName: true,
  //     dynamicTitle: true,
  //     items: [
  //       { value: "light", title: "Light", icon: "sun" },
  //       { value: "dark", title: "Dark", icon: "moon" },
  //     ],
  //   },
  // },
}

export const withThemeProvider = (Story, context) => {
  const isDarkMode = useDarkMode()

  return (
    <AppThemeProvider>
      <StorybookThemeAdapter theme={isDarkMode ? "dark" : "light"}>
        <Story />
      </StorybookThemeAdapter>
    </AppThemeProvider>
  )
}

function StorybookThemeAdapter({ theme, children }) {
  const { setTheme } = useAppTheme()

  useEffect(() => {
    setTheme(theme)
  }, [theme])

  return <>{children}</>
}
