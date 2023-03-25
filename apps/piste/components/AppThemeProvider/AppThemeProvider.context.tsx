import { createContext } from "react"
import { AppTheme } from "./AppThemeProvider.types"
import { Theme } from "@fluentui/react-components"

export interface IAppThemeContextValue {
  themeName: AppTheme
  theme: Theme
  setTheme: (name: AppTheme) => void
}

export const AppThemeContext = createContext<IAppThemeContextValue | undefined>(undefined)
