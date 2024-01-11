import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ProtectedRoutes  } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { AuthorizeRutes } from "./AuthorizeRutes";

export const Routes = () =>{

 

    const routes = createBrowserRouter([
        ...PublicRoutes ,       
        ...authorized 
    ]);

    return <RouterProvider router={routes} />
}

const authorized = [
    {
        path:'/' ,
        element: <ProtectedRoutes /> ,
        children: AuthorizeRutes ,
    }
]