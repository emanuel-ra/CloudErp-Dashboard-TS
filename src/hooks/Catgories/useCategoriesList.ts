import { useCallback, useRef, useState } from 'react'
import {
  IParentsCategories,
  type ICategorie,
  type ICatogoriesResponse
} from '../../abstraction/Interfaces/ICategories'
import { GetCategories, GetParentsService } from '../../services/Categories'
interface Props {
  page: number
  search: string
}

export const useCategoriesList = () => {
  const [categories, setCategories] = useState<ICategorie[]>([])
  const [parentCategories, setParentCategories] = useState<IParentsCategories[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const [pages, setPages] = useState<number>(0)

  const previousSearch = useRef('null')
  const previousPage = useRef(0)

  const getCategories = useCallback(async ({ page, search }: Props) => {
    const newPage = page + 1

    setLoading(true)

    try {
      previousSearch.current = search
      previousPage.current = newPage
      const { totalPages, data }: ICatogoriesResponse = await GetCategories({
        page: newPage,
        search
      })
      setCategories(data)
      setPages(totalPages)
      setLoading(false)
    } catch (e) {
      throw e
    } finally {
      setLoading(false)
    }
  }, [])

  const getParents = useCallback( async()=>{
    try{
      const data = await GetParentsService();
      setParentCategories(data)
    }catch (e) {
      throw e
    }
  },[])

  return { categories, getCategories, loading, pages, getParents,  parents:parentCategories }
}
