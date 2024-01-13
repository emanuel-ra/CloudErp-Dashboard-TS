import { TagIcon } from "@heroicons/react/solid"
import { ProductsPage } from "../pages/ProductsPage"
import { RoutesType } from "../abstraction/enums/routes"
export const ActionRoutes = [
    {
        icon:<TagIcon /> ,
        label:'Editar Product' ,
        path: "/products/edit/:id",
        element: <ProductsPage />,
        type: RoutesType.ACTION_ROUTE ,
    },
    {
        icon:<TagIcon /> ,
        label:'Crear Producto' ,
        path: "/products/create",
        element: <ProductsPage />,
        type: RoutesType.ACTION_ROUTE ,
    },
]