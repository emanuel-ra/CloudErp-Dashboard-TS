import axios, { AxiosResponse } from 'axios'
import { ICategorieNew, ICatogoriesResponse, IParentsCategories } from '../abstraction/Interfaces/ICategories'
import { API_URL, ENDPOINT_CATEGORIES } from '../setup/constants'

interface ListProps {
  page: number
  search: string
}

export async function GetCategories ({
  page,
  search
}: ListProps): Promise<ICatogoriesResponse> {
  try {
    const response: AxiosResponse<ICatogoriesResponse> = await axios.post(
            `${API_URL}/V1${ENDPOINT_CATEGORIES}/List`,
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

export async function GetParentsService(){
  try{
    const response: AxiosResponse<IParentsCategories[]> = await axios.get(
      `${API_URL}/V1${ENDPOINT_CATEGORIES}/List/Parents`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    return response.data
  }catch (error) {
    throw error
  }
}

export async function CreateCagories (category: ICategorieNew): Promise<ICategorieNew> {
  try {
    const response: AxiosResponse<ICategorieNew> = await axios.post(
        `${API_URL}/V1${ENDPOINT_CATEGORIES}/create`,
        category,
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
