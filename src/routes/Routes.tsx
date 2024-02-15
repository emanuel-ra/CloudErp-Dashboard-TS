import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ActionRoutes } from './ActionRoutes'
import { AuthorizeRutes } from './AuthorizeRutes'
import { OnlyAuthenticateRotes } from './OnlyAuthenticateRoutes'
import { ProtectedRoutes } from './ProtectedRoutes'
import { PublicRoutes } from './PublicRoutes'

export const Routes = () => {
  const routes = createBrowserRouter([
    ...PublicRoutes,
    ...authorized
    // ...(!token ? authorized : []),
  ])

  return <RouterProvider router={routes} />
}

const authorized = [
  {
    path: '/',
    element: <ProtectedRoutes />,
    children: [...AuthorizeRutes, ...OnlyAuthenticateRotes, ...ActionRoutes]
  }
]
