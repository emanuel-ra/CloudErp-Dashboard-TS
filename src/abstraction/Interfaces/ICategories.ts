export interface ICatogoriesResponse {
  page: number
  totalPages: number
  sizePage: number
  data: ICategorie[]
}

export interface NewCategoryProps {
  name:string
  parentId:number
  isEnableEcommerce:number
}
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

export interface ICategorie {
  id: number
  name: string
  statusId: number
  statusName: string
}

/// TODO REMOVE THIS INTERFACE 
export interface ICategorieNew {
  parentId: number
  name: string
  Logo: string
  isEnableEccomerce: number
  statusId: number

}





export interface IParentsCategories {
  id:number
  name:string
}

export enum Status {
  Activo = 'Activo',
}
