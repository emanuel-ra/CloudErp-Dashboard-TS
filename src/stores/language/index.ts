import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ILanguage } from '../../abstraction/Interfaces/ILanguage'
import { PREFIX_STORAGE } from '../../setup/constants'

export const useLanguageStore = create<ILanguage>()(
  persist(
    (set) => {
      return {
        lang: 'en',
        setLanguage: (lang) => {
          set({ lang })
        }
      }
    },
    { name: `${PREFIX_STORAGE}::LANGUAGE` }
  )
)
