import { useCallback, useRef, useState } from 'react'
import {
    type IRegimenFiscal,
    type IRegimenFiscalResponse
} from '../../abstraction/Interfaces/IRegimenFiscal'
import { GetRegimenFiscal } from '../../services/Catalogo_SAT/RegimenFiscal'
interface Props {
  page: number
  search: string
}

export const useRegimenFiscalList = () => {
  const [regimenfiscal, setregimenfiscal] = useState<IRegimenFiscal[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const [pagesR, setPages] = useState<number>(0)

  const previousSearch = useRef('null')
  const previousPage = useRef(0)

  const getRegimenFiscal = useCallback(async ({ page, search }: Props) => {
    const newPage = page + 1
    console.log('RegimenFiscal')
    setLoading(true)

    try {
      previousSearch.current = search
      previousPage.current = newPage
      const { totalPages, data }: IRegimenFiscalResponse = await GetRegimenFiscal({
        page: newPage,
        search
      })
      setregimenfiscal(data)
      setPages(totalPages)
      setLoading(false)
    } catch (e) {
      throw e
    } finally {
      setLoading(false)
    }
  }, [])

  return { regimenfiscal, getRegimenFiscal, loading, pagesR }
}
