//* DEFAULT ESTRUCTURE OF THE CATEGORY
export interface DefaultCategory {
  id: number;
  name: string;
  statusId: number;
  statusName: string;
  isEnableEcommerce: number;
}

// * THI INTERFACE IS USED FOR PAGINATED PRODUCTS 
export interface CategoryPaginate {
  page: number
  totalPages: number
  sizePage: number
  data: DefaultCategory[]
}

export interface CategoriesWithChildren {
  id: number;
  parentId: number | null;
  name: string;
  logo: any;
  isEnableEcommerce: number;
  statusId: number;
  userId: number;
  externalId: number;
  createdAt: string;
  updatedAt: string;
  catStatus: any;
  user: any;
  children: CategoriesWithChildren[];
  parentCategory: CategoriesWithChildren[];
}

export interface CreateCategory{
  name:string
  parentId:number
  isEnableEcommerce:number
}
/// REMPLACE THIS 



export enum Status {
  Activo = 'Activo',
}
