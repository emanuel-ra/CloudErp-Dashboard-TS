import axios, { AxiosResponse } from "axios";
import { API_URL, ENDPOINT_ESTADO } from "../../setup/constants";
import { IEstadosResponse } from "../../abstraction/Interfazes/IEstados";

interface ListProps {
    page: number;
    search: string;
  }

export async function GetEstados({
    page,
    search,
}:ListProps): Promise<IEstadosResponse> {
    try{
        const response: AxiosResponse<IEstadosResponse> = await axios.post(
            `${API_URL}/V1/Catalogo_SAT${ENDPOINT_ESTADO}/List`,
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