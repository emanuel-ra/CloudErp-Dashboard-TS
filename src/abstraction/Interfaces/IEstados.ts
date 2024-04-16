export interface IEstadosResponse {
  page: number
  totalPages: number
  sizePage: number
  data: IEstados[]
}

export interface IEstados {
  id: number
  idPais: number
  vchEstado: string
  vchClave: string
  vchClavePais: string
  create_at: Date
  idStatus: number
  status: string
}

export enum Status {
  Activo = 'Activo',
}
