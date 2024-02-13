<<<<<<< HEAD
import { TagIcon } from "@heroicons/react/solid";
import { ProductsCreatePage } from "../pages/Products/ProductsCreatePage";
import { ProductsEditPage } from "../pages/Products/ProductsEditPage";
import { CustomerNewPage } from "../pages/Customers/CustomerNewPage";
import { CustomerUpdatePage } from "../pages/Customers/CustomerUpdatePage";
=======
import { TagIcon } from '@heroicons/react/solid'
import { ProductsCreatePage } from '../pages/Products/ProductsCreatePage'
import { ProductsEditPage } from '../pages/Products/ProductsEditPage'
>>>>>>> 28dfc839a50759e21c184197d60f5a3339683999

export const ActionRoutes = [
  {
    icon: <TagIcon />,
    label: 'Editar Product',
    path: '/products/edit/:id',
    element: <ProductsEditPage />
  },
  {
    icon: <TagIcon />,
<<<<<<< HEAD
    label: "Crear Producto",
    path: "/products/create",
    element: <ProductsCreatePage />,
  },
  {
    icon: <TagIcon />,
    label: "",
    path: "/Cliente/create",
    element: <CustomerNewPage />,
  },
  {
    icon: <TagIcon />,
    label: "",
    path: "/Cliente/Actualizar/:id",
    element: <CustomerUpdatePage />,
  },
];
=======
    label: 'Crear Producto',
    path: '/products/create',
    element: <ProductsCreatePage />
  }
]
>>>>>>> 28dfc839a50759e21c184197d60f5a3339683999
