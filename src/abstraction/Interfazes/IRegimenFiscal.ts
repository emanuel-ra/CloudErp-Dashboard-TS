export interface IRegimenFiscalResponse {
    page: number;
    totalPages: number;
    sizePage: number;
    data: IRegimenFiscal[];
  }
  
  export interface IRegimenFiscal {
    id: number;
    clave: string;
    descripcion: string;
    fisica: string | null;
    moral: string | null;
    idStatus: number;
    status: string;
  }
  
  export enum Status {
    Activo = "Activo",
  }
  