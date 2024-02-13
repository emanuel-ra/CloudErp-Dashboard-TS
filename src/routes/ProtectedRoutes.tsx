import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { Layout } from '../setup/Layout'
import { useLoginStore } from '../stores/auth'

export const ProtectedRoutes = () => {
  const session = useLoginStore((state) => state.session)
  const token = session?.token
  if (!token) {
    return <Navigate to='/login' />
  }

  axios.defaults.headers.common.Authorization = `Bearer ${token}`

  return <Layout />
}
