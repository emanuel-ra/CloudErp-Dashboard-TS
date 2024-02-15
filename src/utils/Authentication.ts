import { jwtDecode } from 'jwt-decode'
export const VerifyExpiration = (token: string) => {
  const { exp } = jwtDecode(token)

  if (!exp) {
    return true
  }
  const unix_timestamp = exp * 1000
  const expireDate = new Date(unix_timestamp)
  const currentDate = new Date()
  const seconds = (expireDate.getTime() - currentDate.getTime()) / 1000

  return !(seconds > 0)
}
