import axios, { AxiosResponse } from 'axios';
import { UserList } from '../abstraction/Interfaces/IUsers';
import { API_URL, ENDPOINT_USERS } from '../setup/constants';
interface ListProps {
  page: number;
  search: string;
}

export async function GetUsers({ page, search }: ListProps): Promise<UserList> {
  try {
    const response: AxiosResponse<UserList> = await axios.post(
      `${API_URL}/V1${ENDPOINT_USERS}/List`,
      {
        page,
        search,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
