import { useCallback, useState, useRef } from 'react'
import { GetPaises } from '../../services/Catalogo_SAT/Sat_Paises'
import {
  type IPaisesResponse,
  type IPaises
} from '../../abstraction/Interfaces/IPaises'
interface Props {
  page: number
  search: string
}

export const useUsoSatPaisesList = () => {
  const [paises, setPaises] = useState<IPaises[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const [pagesU, setPages] = useState<number>(0)

  const previousSearch = useRef('null')
  const previousPage = useRef(0)

  const getPaises = useCallback(async ({ page, search }: Props) => {
    const newPage = page + 1

    setLoading(true)

    try {
      previousSearch.current = search
      previousPage.current = newPage
      const { totalPages, data }: IPaisesResponse = await GetPaises({
        page: newPage,
        search
      })
      setPaises(data)
      setPages(totalPages)
      setLoading(false)
    } catch (e) {
      throw e
    } finally {
      setLoading(false)
    }
  }, [])

  return { paises, getPaises, loading, pagesU }
}
