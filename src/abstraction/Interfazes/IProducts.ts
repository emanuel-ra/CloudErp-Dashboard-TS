export interface IProductResponse {
  page: number;
  totalPages: number;
  sizePage: number;
  data: IProduct[];
}

export interface IProduct {
  id: number;
  code: string;
  name: string;
  description: string | null;
  model: string | null;
  imageUrl: string | null;
  barcode: string | null;
  price: number;
  priceWolesale: number;
  priceStockist: number;
  priceBox: number;
  priceVip: number;
  lowerPrice: number;
  width: number;
  height: number;
  weight: number;
  enableWeb: number;
  enableInvoice: number;
  satUseCode: string | null;
  satUnitCode: string | null;
  brandId: number;
  statusId: number;
  userId: number;
  externalId: number;
  createdAt: Date;
  updatedAt: Date;
  status: Status;
}

export enum Status {
  Activo = "Activo",
}
