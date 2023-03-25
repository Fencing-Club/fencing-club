import { useContext } from "react"
import { AppThemeContext } from "./AppThemeProvider.context"

export function useAppTheme() {
  const value = useContext(AppThemeContext)
  if (!value) throw Error("The useAppTheme() hook was used before the <AppThemeProvider /> component in the component tree.")

  return value
}
