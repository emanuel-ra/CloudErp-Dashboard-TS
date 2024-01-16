import { TagIcon } from "@heroicons/react/solid";
import { ProductsCreatePage } from "../pages/Products/ProductsCreatePage";
import { ProductsEditPage } from "../pages/Products/ProductsEditPage";

export const ActionRoutes = [
  {
    icon: <TagIcon />,
    label: "Editar Product",
    path: "/products/edit/:id",
    element: <ProductsEditPage />,
  },
  {
    icon: <TagIcon />,
    label: "Crear Producto",
    path: "/products/create",
    element: <ProductsCreatePage />,
  },
];
