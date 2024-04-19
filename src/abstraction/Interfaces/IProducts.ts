export interface IProductResponse {
  page: number
  totalPages: number
  sizePage: number
  data: IProduct[]
}

export interface IProduct {
  id: number
  code: string
  name: string
  description: string | null
  model: string | null
  imageUrl: string | null
  barcode: string | null
  price: number
  priceWolesale: number
  priceStockist: number
  priceBox: number
  priceVip: number
  lowerPrice: number
  width: number
  height: number
  weight: number
  enableWeb: number
  enableInvoice: number
  satUseCode: string | null
  satUnitCode: string | null
  brandId: number
  statusId: number
  userId: number
  externalId: number
  createdAt: Date
  updatedAt: Date
  images: Image[]
  status: Status
}

export enum Status {
  Activo = 'Activo',
}


export interface Image {
    id: number;
    productId: number;
    imageUrl: string;
    userId: number;
    createdAt: string;
    updatedAt: string;
    product: any;
}

export interface ProductsListPrice{
    id: number;
    name: string;
    currency: string;
    createdAt: string;
    updatedAt: string;
}