import { useCallback, useRef, useState } from 'react'
import {
    type ICustomer,
    type ICustomersResponse
} from '../../abstraction/Interfaces/ICustomers'
import { GetCustomer } from '../../services/Customer'
interface Props {
  page: number
  search: string
}

export const useCustomerList = () => {
  const [customer, setCustomer] = useState<ICustomer[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const [pages, setPages] = useState<number>(0)

  const previousSearch = useRef('null')
  const previousPage = useRef(0)

  const getCustomer = useCallback(async ({ page, search }: Props) => {
    const newPage = page + 1

    setLoading(true)

    try {
      previousSearch.current = search
      previousPage.current = newPage
      const { totalPages, data }: ICustomersResponse = await GetCustomer({
        page: newPage,
        search
      })
      setCustomer(data)
      setPages(totalPages)
      setLoading(false)
    } catch (e) {
      throw e
    } finally {
      setLoading(false)
    }
  }, [])

  return { customer, getCustomer, loading, pages }
}
