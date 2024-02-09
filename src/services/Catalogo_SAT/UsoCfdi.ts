import axios, { AxiosResponse } from 'axios'
import { IUsoCfdiResponse } from '../../abstraction/Interfaces/IUsoCfdi'
import { API_URL, ENDPOINT_USOCFDI } from '../../setup/constants'

interface ListProps {
  page: number
  search: string
}

export async function GetUsoCfdi ({
  page,
  search
}: ListProps): Promise<IUsoCfdiResponse> {
  try {
    const response: AxiosResponse<IUsoCfdiResponse> = await axios.post(
            `${API_URL}/V1/Catalogo_SAT${ENDPOINT_USOCFDI}/List`,
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
