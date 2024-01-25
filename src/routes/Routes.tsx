import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { AuthorizeRutes } from "./AuthorizeRutes";
import { ActionRoutes } from "./ActionRoutes";
import { OnlyAuthenticateRotes } from "./OnlyAuthenticateRoutes";
import { useLoginStore } from "../stores/auth";

export const Routes = () => {
  const routes = createBrowserRouter([
    ...PublicRoutes,
    ...authorized,
    // ...(!token ? authorized : []),
  ]);

  return <RouterProvider router={routes} />;
};

const authorized = [
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [...AuthorizeRutes, ...OnlyAuthenticateRotes, ...ActionRoutes],
  },
];
