export interface ICatogoriesResponse {
  page: number
  totalPages: number
  sizePage: number
  data: ICategorie[]
}

export interface ICategorie {
  id: number
  name: string
  statusId: number
  statusName: string
}

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
