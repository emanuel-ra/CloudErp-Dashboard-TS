import { useCallback, useState, useRef } from "react";
import { DeleteCustomer } from "../../services/Customer";
import { ICustomer } from "../../abstraction/Interfazes/ICustomers";
import { AxiosResponse } from "axios";
interface Props {
  id: number
}

export const usedeleteCustomerID = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const deleteCustomerID = useCallback(async ({ id }: Props) => {
      setLoading(true);
      try {
        const customerResponse: AxiosResponse = await DeleteCustomer(id);
        return customerResponse
      } catch (e) {
        throw e;
      } finally {
        setLoading(false);
      }
    }, []);
  
    return { deleteCustomerID, loading };
  };
