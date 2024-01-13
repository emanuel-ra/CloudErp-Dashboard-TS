import { TagIcon } from "@heroicons/react/solid"
import { ProductsPage } from "../pages/ProductsPage"
export const ActionRoutes = [
    {
        icon:<TagIcon /> ,
        label:'Editar Product' ,
        path: "/products/edit/:id",
        element: <ProductsPage />,
    },
    {
        icon:<TagIcon /> ,
        label:'Crear Producto' ,
        path: "/products/create",
        element: <ProductsPage />,
    },
]