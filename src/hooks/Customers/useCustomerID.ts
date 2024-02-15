import { useCallback, useState } from 'react'
import { ICustomer } from '../../abstraction/Interfaces/ICustomers'
import { GetCustomerById } from '../../services/Customer'
interface Props {
  id: number
}

export const useCustomerID = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [customerid, setResponse] = useState<ICustomer | null>(null)

  const getCustomerById = useCallback(async ({ id }: Props) => {
    setLoading(true)

    try {
      const customerResponse: ICustomer = await GetCustomerById(id)
      setResponse(customerResponse)
    } catch (e) {
      throw e
    } finally {
      setLoading(false)
    }
  }, [])

  return { customerid, getCustomerById, loading }
}
