import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IAuthState, ISession } from "../../abstraction/IAuth";
import { LogInService } from "../../services/Auth";
import { PREFIX_STORAGE } from "../../setup/constants";

export const useLoginStore = create<IAuthState>()(
  persist(
    (set) => {
      return {
        session: [],
        errors: [],
        logIn: async ({
          username,
          password,
        }: {
          username: string;
          password: string;
        }) => {
          const result = await LogInService({ username, password });
          const session: ISession = {
            token: result.token,
            user: result.user,
            routes: result.routes,
          };

          if (result.isSuccess) {
            set({ session });
          } else {
            set({ errors: result.errors });
          }
        },
        logOut: () => {
          const session: ISession = { token: "" };
          set({ session, errors: [] });
        },
      };
    },
    { name: `${PREFIX_STORAGE}::SESSION` }
  )
);
