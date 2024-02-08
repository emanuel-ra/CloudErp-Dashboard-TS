import axios, { AxiosResponse } from "axios";
import { API_URL, ENDPOINT_REGIMENFISCAL} from "../../setup/constants";
import { IRegimenFiscalResponse } from "../../abstraction/Interfazes/IRegimenFiscal";
import { useLoginStore } from "../../stores/auth";

interface ListProps {
    page: number;
    search: string;
  }

export async function GetRegimenFiscal({
    page,
    search,
}:ListProps): Promise<IRegimenFiscalResponse> {
    try{
        const response: AxiosResponse<IRegimenFiscalResponse> = await axios.post(
            `${API_URL}/V1/Catalogo_SAT${ENDPOINT_REGIMENFISCAL}/List`,
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