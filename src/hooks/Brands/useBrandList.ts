import { useCallback, useRef, useState } from 'react'
import {
  type IBrand
} from '../../abstraction/Interfaces/IBrand'
import { GetAllBrand, GetBrand } from '../../services/Brand'
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
      const { totalPages, data } = await GetBrand({page: newPage,search})
      
      console.log(data)
      setBrand(data)
      setPages(totalPages)
      setLoading(false)
    } catch (e) {
      throw e
    } finally {
      setLoading(false)
    }
  }, [])

  const getAllBrands = useCallback( async() => {
    const result:IBrand[] = await GetAllBrand("")
    setBrand(result)
  },[])

  
  return { brand, getBrand, loading, pages,getAllBrands }
}
