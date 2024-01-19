import axios, { AxiosResponse } from "axios";
import { API_URL, ENDPOINT_PRODUCTS } from "../setup/constants";
import { IProductResponse } from "../abstraction/Interfazes/IProducts";
import { useLoginStore } from "../stores/auth";
interface ListProps {
  page: number;
  search: string;
}
export async function GetProducts({
  page,
  search,
}: ListProps): Promise<IProductResponse> {
  try {
    const response: AxiosResponse<IProductResponse> = await axios.post(
      `${API_URL}/V1${ENDPOINT_PRODUCTS}/List`,
      {
        page,
        search,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result: IProductResponse = response.data;
    return result;
  } catch (error) {
    throw error;
  }
}
