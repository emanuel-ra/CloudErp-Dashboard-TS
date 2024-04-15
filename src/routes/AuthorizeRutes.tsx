import { TagIcon } from '@heroicons/react/solid'
import { HomeIcon } from '../components/Icons/HomeIcon'
import { MinusIcon } from '../components/Icons/MinusIcon'
import { ScaleIcon } from '../components/Icons/ScaleIcon'
import { UserGroupIcon } from '../components/Icons/UserGroupIcon'
import { BrandsPage } from '../pages/Brands/BrandsPage'
import { UsoCfdiPage } from '../pages/Catalogo_SAT/UsoCFDIPage'
import { CategoriesPage } from '../pages/Categories/CategoriesPage'
import { CustomerPage } from '../pages/Customers/CustomersPage'
import { ProductsPage } from '../pages/Products/ProductsPage'
import { RolePage } from '../pages/Roles/RolePage'
import { UsersPage } from '../pages/Users/UsersPage'

export const AuthorizeRutes = [
  {
    icon: <TagIcon />,
    label: 'sideNavBar.home',
    path: '/',
    element: 'HomePage'
  },
  {
    icon: <HomeIcon size={5} />,
    label: 'sideNavBar.system',
    children: [
      {
        icon: <TagIcon />,
        label: 'sideNavBar.users',
        path: '/users',
        element: <UsersPage />
      },
      {
        icon: <TagIcon />,
        label: 'sideNavBar.roles',
        path: '/products',
        element: <RolePage />
      }
    ]
  },
  {
    icon: <HomeIcon size={5} />,
    label: 'sideNavBar.catalogues',
    children: [
      {
        icon: <TagIcon />,
        label: 'sideNavBar.products',
        path: '/products',
        element: <ProductsPage />
      },
      {
        icon: <TagIcon />,
        label: 'sideNavBar.categories',
        path: '/catalogue/categories',
        element: <CategoriesPage />
      },
      {
        icon: <TagIcon />,
        label: 'sideNavBar.brands',
        path: '/brand',
        element: <BrandsPage />
      }
    ]
  },
  {
    icon: <ScaleIcon size={5} />,
    label: 'sideNavBar.catalogueSat',
    children: [
      {
        icon: <MinusIcon />,
        label: 'sideNavBar.usoCfdi',
        path: '/UsoCfdi',
        element: <UsoCfdiPage />
      }
    ]
  },
  {
    icon: <UserGroupIcon />,
    label: 'sideNavBar.client',
    path: '/Cliente',
    element: <CustomerPage />
  }
]
