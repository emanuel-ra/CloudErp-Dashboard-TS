export interface IPaisesResponse {
  page: number
  totalPages: number
  sizePage: number
  data: IPaises[]
}

export interface IPaises {
  id: number
  vchPais: string
  vchClave: string
  dFechaIn: Date
  idStatus: number
  status: string
}

export enum Status {
  Activo = 'Activo',
}
