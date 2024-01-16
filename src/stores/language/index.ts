import { create } from "zustand";
import { ILanguage } from "../../abstraction/Interfazes/ILanguage";
import { persist } from "zustand/middleware";
import { PREFIX_STORAGE } from "../../setup/constants";

export const useLanguageStore = create<ILanguage>()(
  persist(
    (set) => {
      return {
        lang: "en",
        setLanguage: (lang) => {
          set({ lang });
        },
      };
    },
    { name: `${PREFIX_STORAGE}::LANGUAGE` }
  )
);
