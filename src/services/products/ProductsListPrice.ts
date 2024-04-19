import axios, { AxiosResponse } from "axios";
import { ProductsListPrice } from "../../abstraction/Interfaces/IProducts";
import { API_URL } from "../../setup/constants";


export async function GetPriceList(): Promise<AxiosResponse<ProductsListPrice[]>>{
    try{
        const response : AxiosResponse<ProductsListPrice[]> = await axios.get(`${API_URL}/V1/ProductsListPrice`);
        return response
    }catch(error){
        throw error
    }
}