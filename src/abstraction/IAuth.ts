export interface UserLogged {
  givenName: string;
  userName: string;
  email: string;
  role: string;
  avatar: string;
}
export interface SessionResponse {
  isSuccess: boolean;
  token: string;
  expiredAt?: string;
  errors?: string;
  user: UserLogged;
}
