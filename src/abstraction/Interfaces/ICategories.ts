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

export interface CreateCategory{
  name:string
  parentId:number
  isEnableEcommerce:number
}
/// REMPLACE THIS 

export interface ResponseNewCategory {
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
  children: any;
  parentCategory: any;
}

export enum Status {
  Activo = 'Activo',
}
