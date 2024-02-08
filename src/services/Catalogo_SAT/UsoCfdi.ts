import axios, { AxiosResponse } from "axios";
import { API_URL, ENDPOINT_PRODUCTS, ENDPOINT_USOCFDI } from "../../setup/constants";
import { IUsoCfdiResponse } from "../../abstraction/Interfazes/IUsoCfdi";
import { useLoginStore } from "../../stores/auth";

interface ListProps {
    page: number;
    search: string;
  }

export async function GetUsoCfdi({
    page,
    search,
}:ListProps): Promise<IUsoCfdiResponse> {
    try{
        const response: AxiosResponse<IUsoCfdiResponse> = await axios.post(
            `${API_URL}/V1/Catalogo_SAT${ENDPOINT_USOCFDI}/List`,
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