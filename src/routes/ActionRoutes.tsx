import { TagIcon } from '@heroicons/react/solid'
import { CategoriesNewPage } from '../pages/Categories/CategoriesNewPage'
import { CustomerNewPage } from '../pages/Customers/CustomerNewPage'
import { CustomerUpdatePage } from '../pages/Customers/CustomerUpdatePage'
import { ProductsCreatePage } from '../pages/Products/ProductsCreatePage'
import { ProductsEditPage } from '../pages/Products/ProductsEditPage'
import { UsersCreatePage } from '../pages/Users/UsersCreatePage'

export const ActionRoutes = [
  {
    icon: <TagIcon />,
    label: 'Crear Cliente',
    path: '/users/create',
    element: <UsersCreatePage />
  },
  {
    icon: <TagIcon />,
    label: 'Editar Product',
    path: '/products/edit/:id',
    element: <ProductsEditPage />
  },
  {
    icon: <TagIcon />,
    label: 'Crear Producto',
    path: '/products/create',
    element: <ProductsCreatePage />
  },
  {
    icon: <TagIcon />,
    label: '',
    path: '/Cliente/create',
    element: <CustomerNewPage />
  },
  {
    icon: <TagIcon />,
    label: '',
    path: '/Cliente/Actualizar/:id',
    element: <CustomerUpdatePage />
  },
  {
    icon: <TagIcon />,
    label: '',
    path: '/categories/create',
    element: <CategoriesNewPage />
  }
]
