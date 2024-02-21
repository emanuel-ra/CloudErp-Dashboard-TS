export interface IBrandResponse {
    page: number;
    totalPages: number;
    sizePage: number;
    data: IBrand[];
}
  
  export interface IBrand {
    id: number;
    name: string;
    statusId: number;
    statusName: string;
}

  export interface IBrandNew{
    parentId: number;
    name: string;
    Logo: string;
    isEnableEccomerce: number;
    statusId: number;
}
  
  export enum Status {
    Activo = "Activo",
}
  