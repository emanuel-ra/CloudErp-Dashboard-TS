import axios, { AxiosResponse } from 'axios'
import { IBrand, IBrandResponse } from '../abstraction/Interfaces/IBrand'
import { API_URL, ENDPOINT_BRAND } from '../setup/constants'

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
            `${API_URL}/V1${ENDPOINT_BRAND}/GetByPage`,
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

export async function GetAllBrand (search?:string): Promise<IBrand[]> {
  try {
    const response: AxiosResponse<IBrand[]> = await axios.post(
            `${API_URL}/V1${ENDPOINT_BRAND}`,
            {              
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
