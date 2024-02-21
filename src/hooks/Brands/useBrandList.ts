import { useCallback, useRef, useState } from 'react'
import {
    type IBrand,
    type IBrandResponse
} from '../../abstraction/Interfaces/IBrand'
import { GetBrand } from '../../services/Brand'
interface Props {
  page: number
  search: string
}

export const useBrandList = () => {
  const [brand, setBrand] = useState<IBrand[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const [pages, setPages] = useState<number>(0)

  const previousSearch = useRef('null')
  const previousPage = useRef(0)

  const getBrand = useCallback(async ({ page, search }: Props) => {
    const newPage = page + 1

    setLoading(true)

    try {
      previousSearch.current = search
      previousPage.current = newPage
      const { totalPages, data }: IBrandResponse = await GetBrand({
        page: newPage,
        search
      })
      setBrand(data)
      setPages(totalPages)
      setLoading(false)
    } catch (e) {
      throw e
    } finally {
      setLoading(false)
    }
  }, [])

  return { brand, getBrand, loading, pages }
}
