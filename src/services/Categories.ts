import axios, { AxiosResponse } from "axios";
import { API_URL, ENDPOINT_CATEGORIES } from "../setup/constants";
import { ICatogoriesResponse } from "../abstraction/Interfaces/ICategories";

interface ListProps {
    page: number;
    search: string;
  }

export async function GetCategories({
    page,
    search,
}:ListProps): Promise<ICatogoriesResponse> {
    try{
        const response: AxiosResponse<ICatogoriesResponse> = await axios.post(
            `${API_URL}/V1${ENDPOINT_CATEGORIES}/List`,
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
        return response.data
    } catch (error) {
        throw error;
    }
   
}