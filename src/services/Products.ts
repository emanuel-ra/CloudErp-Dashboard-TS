import axios, { AxiosResponse } from 'axios'
import { IProductResponse } from '../abstraction/Interfaces/IProducts'
import { API_URL, ENDPOINT_PRODUCTS } from '../setup/constants'
interface ListProps {
  page: number
  search: string
}

export async function GetProducts ({
  page,
  search
}: ListProps): Promise<IProductResponse> {
  try {
    const response: AxiosResponse<IProductResponse> = await axios.post(
      `${API_URL}/V1${ENDPOINT_PRODUCTS}/List`,
      {
        page,
        search
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    return response.data
  } catch (error) {
    throw error
  }
}
