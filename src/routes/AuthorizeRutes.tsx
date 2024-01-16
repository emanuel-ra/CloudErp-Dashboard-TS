import { TagIcon } from "@heroicons/react/solid";
import { HomeIcon } from "../components/Icons/HomeIcon";
import { ProductsListPage } from "../pages/Products/ProductsListPage";
import { BranchesPage } from "../pages/BranchesPage";
import { CategoriesPage } from "../pages/CategoriesPage";

export const AuthorizeRutes = [
  {
    icon: <TagIcon />,
    label: "sideNavBar.home",
    path: "/",
    element: "HomePage",
  },
  {
    icon: <HomeIcon size={5} />,
    label: "sideNavBar.catalogues",
    children: [
      {
        icon: <TagIcon />,
        label: "sideNavBar.products",
        path: "/products",
        element: <ProductsListPage />,
      },

      {
        icon: <TagIcon />,
        label: "sideNavBar.categories",
        path: "/catalogue/categories",
        element: <CategoriesPage />,
      },
      {
        icon: <TagIcon />,
        label: "sideNavBar.brands",
        path: "/brand",
        element: <BranchesPage />,
      },
    ],
  },
];
