import axios, { AxiosResponse } from 'axios'
import { IProductResponse } from '../../abstraction/Interfaces/IProducts'
import { API_URL, ENDPOINT_PRODUCTS, ENDPOINT_PRODUCTS_IMAGES } from '../../setup/constants'
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

interface UploadImagesProps {
  id:number 
  images:File[]
}
export async function UploadImages (props:UploadImagesProps){
  const {id, images} = props
  const formData = new FormData()
  images.map(file => {
    formData.append('formFiles',file)
  })

  try{
    const response = await axios.post(`${API_URL}/V1${ENDPOINT_PRODUCTS_IMAGES}/${id}`,
    formData,
    {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'multipart/form-data'

      }
    })

    return response.data
  }catch (error) {
    throw error
  }

} 