import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ISideNavBar } from "../../abstraction/IUI";
import { PREFIX_STORAGE } from "../../setup/constants";

export const useSideNavStores = create<ISideNavBar>()(
  persist(
    (set, get) => {
      return {
        mini: false,
        setState: (mini: boolean) => {
          set({ mini });
        },
      };
    },
    { name: `${PREFIX_STORAGE}::SIDE_NAV_BAR` }
  )
);
