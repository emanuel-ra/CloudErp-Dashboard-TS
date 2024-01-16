import { IRoutes } from "./IRoutes";
export interface IUserLogged {
  givenName: string;
  userName: string;
  email: string;
  role: string;
  avatar: string;
}

export interface ISessionResponse {
  isSuccess: boolean;
  token: string;
  expiredAt?: string;
  errors?: string[];
  user?: IUserLogged;
  routes?: IRoutes;
}

export interface ISession {
  token: string;
  user?: IUserLogged;
  routes?: IRoutes;
}

export interface IAuthState {
  session: ISession;
  errors?: string[];
  logIn: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => void;
  logOut: () => void;
}
