import { AxiosResponse } from 'axios'
import { useCallback, useState } from 'react'
import { DeleteCustomer } from '../../services/Customer'
interface Props {
  id: number
}

export const usedeleteCustomerID = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const deleteCustomerID = useCallback(async ({ id }: Props) => {
    setLoading(true)
    try {
      const customerResponse: AxiosResponse = await DeleteCustomer(id)
      return customerResponse
    } catch (e) {
      throw e
    } finally {
      setLoading(false)
    }
  }, [])

  return { deleteCustomerID, loading }
}
