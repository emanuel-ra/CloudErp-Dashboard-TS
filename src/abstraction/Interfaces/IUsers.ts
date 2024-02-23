export interface UserList {
  page: number;
  totalPages: number;
  sizePage: number;
  data: User[];
}

export interface User {
  id: number;
  name: string;
  userName: string;
  profilePhoto?: string;
  email: string;
  statusId: number;
  role: string;
  status: string;
}