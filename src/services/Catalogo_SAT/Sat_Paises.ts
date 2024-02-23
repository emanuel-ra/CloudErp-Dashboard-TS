import axios, { AxiosResponse } from 'axios'
import { API_URL, ENDPOINT_PAISES } from '../../setup/constants'
import { IPaisesResponse } from '../../abstraction/Interfaces/IPaises'

interface ListProps {
  page: number
  search: string
}

export async function GetPaises ({
  page,
  search
}: ListProps): Promise<IPaisesResponse> {
  try {
    const response: AxiosResponse<IPaisesResponse> = await axios.post(
            `${API_URL}/V1/Catalogo_SAT${ENDPOINT_PAISES}/List`,
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
