import { TagIcon } from "@heroicons/react/solid";
import { HomeIcon } from "../components/Icons/HomeIcon";
import { ProductsPage } from "../pages/Products/ProductsPage";
import { BranchesPage } from "../pages/Branches/BranchesPage";
import { CategoriesPage } from "../pages/Categories/CategoriesPage";

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
        element: <ProductsPage />,
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
