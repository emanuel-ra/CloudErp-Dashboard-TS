export interface ICatogoriesResponse {
    page: number;
    totalPages: number;
    sizePage: number;
    data: ICategorie[];
  }
  
  export interface ICategorie {
    Id: number;
    Name: string;
    StatusId: number;
    StatusName: string;
  }
  
  export enum Status {
    Activo = "Activo",
  }
  