import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ITheme } from '../../abstraction/Interfaces/IUI'
import { PREFIX_STORAGE } from '../../setup/constants'

export const useThemeStore = create<ITheme>()(
  persist(
    (set) => {
      return {
        theme: 'light',
        setTheme (theme: string) {
          set({ theme })
        }
      }
    },
    { name: `${PREFIX_STORAGE}::THEME` }
  )
)
