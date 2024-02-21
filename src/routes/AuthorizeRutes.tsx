import { TagIcon } from '@heroicons/react/solid'
import { HomeIcon } from '../components/Icons/HomeIcon'
import { UserGroupIcon } from '../components/Icons/UserGroupIcon'
import { ScaleIcon } from '../components/Icons/ScaleIcon'
import { MinusIcon } from '../components/Icons/MinusIcon'
import { ProductsPage } from '../pages/Products/ProductsPage'
import { CustomerPage } from '../pages/Customers/CustomersPage'
import { UsoCfdiPage } from '../pages/Catalogo_SAT/UsoCFDIPage'
import { BrandsPage } from '../pages/Brands/BrandsPage'
import { CategoriesPage } from '../pages/Categories/CategoriesPage'

export const AuthorizeRutes = [
  {
    icon: <TagIcon />,
    label: 'sideNavBar.home',
    path: '/',
    element: 'HomePage'
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
      },
    ]
  },
  {
    icon: <UserGroupIcon />,
    label: 'sideNavBar.client',
    path: '/Cliente',
    element: <CustomerPage />
  }
]
