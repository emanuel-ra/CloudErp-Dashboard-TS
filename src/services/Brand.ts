import axios, { AxiosResponse } from 'axios'
import { API_URL, ENDPOINT_BRAND } from '../setup/constants'
import { IBrandResponse } from '../abstraction/Interfaces/IBrand'

interface ListProps {
  page: number
  search: string
}

export async function GetBrand ({
  page,
  search
}: ListProps): Promise<IBrandResponse> {
  try {
    const response: AxiosResponse<IBrandResponse> = await axios.post(
            `${API_URL}/V1${ENDPOINT_BRAND}`,
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
