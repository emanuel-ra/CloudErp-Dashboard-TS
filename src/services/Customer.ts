import axios, { AxiosResponse } from 'axios';
import { ICustomer, ICustomerNew, ICustomerUpd, ICustomersResponse } from '../abstraction/Interfaces/ICustomers';
import { API_URL, ENDPOINT_CUSTOMER } from '../setup/constants';

export interface ListProps {
  page: number
  search: string
}

export async function GetCustomer ({
  page,
  search
}: ListProps): Promise<ICustomersResponse> {
  try {
    const response: AxiosResponse<ICustomersResponse> = await axios.post(
            `${API_URL}/V1${ENDPOINT_CUSTOMER}/List`,
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

export async function UpdateCustomer (updatedData: any): Promise<ICustomerUpd> {
  try {
    const response: AxiosResponse<ICustomerUpd> = await axios.put(
        `${API_URL}/V1${ENDPOINT_CUSTOMER}/Update`,
        updatedData,
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

export async function CreateCustomer(customer: ICustomerNew): Promise<ICustomerNew> {
  try {
    const response: AxiosResponse<ICustomerNew> = await axios.post(
      `${API_URL}/V1${ENDPOINT_CUSTOMER}/create`,
      customer,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function GetCustomerById (id: number): Promise<ICustomer> {
  try {
    const response: AxiosResponse<ICustomer> = await axios.get(
            `${API_URL}/V1${ENDPOINT_CUSTOMER}/find_by_id/${id}`
    )
    return response.data
  } catch (error) {
    throw error
  }
}

export async function DeleteCustomer (id: number): Promise<AxiosResponse> {
  try {
    const response: AxiosResponse<AxiosResponse> = await axios.delete(
          `${API_URL}/V1${ENDPOINT_CUSTOMER}/Delete/${id}`
    )
    return response
  } catch (error) {
    throw error
  }
}
