export interface ICustomersResponse {
    page: number;
    totalPages: number;
    sizePage: number;
    data: ICustomer[];
  }
  
  export interface ICustomer {
    id: number;
    vchCodigo: string;
    vchNombres: string;
    vchApellidos: string;
    vchTelefonos: string;
    vchCorreos: string;
    address: string;
    vchRFC: string;
    vchCodigoPostal: string;
    vchComentario: string;
    dFechaIN: Date;
    vchNumInt: string;
    vchNumExt: string;
    sat_cp: string
    sat_razonsocial: string | null;
    email_cfdi: string | null;
    sat_regimen_fiscal_clave: string | null;
    sat_uso_cfdi_clave: string;
    idStatus: number;
    status: string | null;
  }

  export interface ICustomerUpd {
    id: number;
    vchCodigo: string;
    vchNombres: string;
    vchApellidos: string;
    vchTelefonos: string;
    vchCorreos: string;
    address: string;
    vchRFC: string;
    vchCodigoPostal: string;
    vchComentario: string;
    idPais: number,
    idEstado: number,
    vchNumInt: string;
    vchNumExt: string;
    external_id: number,
    sat_cp: string
    sat_razonsocial: string | null;
    email_cfdi: string | null;
    sat_regimen_fiscal_clave: string | null;
    sat_uso_cfdi_clave: string;
    idStatus: number;
  }

  export interface ICustomerNew {
    vchNombres: string;
    vchApellidos: string;
    vchCodigo: string;
    vchTelefonos: string;
    vchCorreos: string;
    address: string;
    vchRFC: string;
    vchCodigoPostal: string;
    vchComentario: string;
    idPais: number,
    idEstado: number,
    vchNumInt: string;
    vchNumExt: string;
    external_id: number,
    sat_cp: string
    sat_razonsocial: string | null;
    email_cfdi: string | null;
    sat_regimen_fiscal_clave: string | null;
    sat_uso_cfdi_clave: string;
    idStatus: number;
  }
  
  export enum Status {
    Activo = "Activo",
  }
  