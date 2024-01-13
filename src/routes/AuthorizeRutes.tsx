import { TagIcon } from "@heroicons/react/solid"
import { HomeIcon } from "../components/Icons/HomeIcon"
import { ProductsPage } from "../pages/ProductsPage"
import { BranchesPage } from "../pages/BranchesPage"
import { CategoriesPage } from "../pages/CategoriesPage"

export const AuthorizeRutes = [
    {
        icon:<TagIcon /> ,
        label:'Home' ,
        path: "/",
        element: "HomePage",        
           
    },
    {
        icon:<HomeIcon size={5} /> ,
        label:'Catalogue' ,         
                
        children:[
            {
                icon:<TagIcon /> ,
                label:'Products' ,
                path: "/products",
                element: <ProductsPage />,
                
            },
            
            {
                icon:<TagIcon /> ,
                label:'Categories' ,
                path: "/catalogue/categories",
                element: <CategoriesPage />,
                
            },
            {
                icon:<TagIcon /> ,
                label:'Brands' ,
                path: "/brand",
                element: <BranchesPage />,
                
            }
        ]
    }
]