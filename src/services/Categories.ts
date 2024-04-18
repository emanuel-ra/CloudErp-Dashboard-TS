import axios, { AxiosResponse } from 'axios'
import { CategoryPaginate, CreateCategory, DefaultCategory, ResponseNewCategory } from '../abstraction/Interfaces/ICategories'
import { API_URL, ENDPOINT_CATEGORIES } from '../setup/constants'

interface ListProps {
  page: number
  search: string
}

export async function GetCategoriesService ({
  page,
  search
}: ListProps): Promise<CategoryPaginate> {
  try {
    const response: AxiosResponse<CategoryPaginate> = await axios.post(
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
    const response: AxiosResponse<DefaultCategory[]> = await axios.get(
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



export async function CreateCategoryService (props: CreateCategory): Promise<AxiosResponse<ResponseNewCategory>> {
  try {
    const response: AxiosResponse = await axios.post(
        `${API_URL}/V1${ENDPOINT_CATEGORIES}/create`,
        props,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
    )
    return response
  } catch (error) {
    throw error
  }
}
