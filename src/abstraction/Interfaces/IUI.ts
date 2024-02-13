export interface ITheme {
  theme: string
  setTheme: (theme: string) => void
}

export interface ISideNavBar {
  mini: boolean
  setState: (mini: boolean) => void
}
