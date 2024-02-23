import { useCallback, useState, useRef } from 'react'
import { GetEstados } from '../../services/Catalogo_SAT/Sat_Estados'
import {
  type IEstadosResponse,
  type IEstados
} from '../../abstraction/Interfaces/IEstados'
interface Props {
  page: number
  search: string
}

export const useUsoSatEstadoList = () => {
  const [estados, setEstados] = useState<IEstados[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const [pagesU, setPages] = useState<number>(0)

  const previousSearch = useRef('null')
  const previousPage = useRef(0)

  const getEstados = useCallback(async ({ page, search }: Props) => {
    const newPage = page + 1

    setLoading(true)

    try {
      previousSearch.current = search
      previousPage.current = newPage
      const { totalPages, data }: IEstadosResponse = await GetEstados({
        page: newPage,
        search
      })
      setEstados(data)
      setPages(totalPages)
      setLoading(false)
    } catch (e) {
      throw e
    } finally {
      setLoading(false)
    }
  }, [])

  return { estados, getEstados, loading, pagesU }
}
