export interface IUsoCfdiResponse {
    page: number;
    totalPages: number;
    sizePage: number;
    data: IUsoCfdi[];
  }
  
  export interface IUsoCfdi {
    id: number;
    clave: string;
    descripcion: string;
    fisica: string | null;
    moral: string | null;
    regimen_fiscal_receptor: string | null;
    idStatus: number;
    status: string;
  }
  
  export enum Status {
    Activo = "Activo",
  }
  