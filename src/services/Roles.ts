export interface Roles {
  page: number;
  totalPages: number;
  sizePage: number;
  data: Role[];
}

export interface Role {
  id: number;
  role: string;
  statusId: number;
  status: string;
}