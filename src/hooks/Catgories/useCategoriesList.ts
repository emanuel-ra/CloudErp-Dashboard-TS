import { useCallback, useRef, useState } from 'react'
import {
  CategoriesWithChildren,
  DefaultCategory
} from '../../abstraction/Interfaces/ICategories'
import { GetCategoriesAndChildrenService, GetCategoriesService, GetParentsService } from '../../services/Categories'
interface Props {
  page: number
  search: string
}

export const useCategoriesList = () => {
  const [categories, setCategories] = useState<DefaultCategory[]>([])
  const [parentCategories, setParentCategories] = useState<DefaultCategory[]>([])
  const [categoriesWithChildren, setCategoriesWithChildren] = useState<CategoriesWithChildren[]>([])
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
      const { totalPages, data } = await GetCategoriesService({page: newPage,search})
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

  const getCategoriesWithChildren = useCallback( async()=>{
    try{
      const data = await GetCategoriesAndChildrenService();
      setCategoriesWithChildren(data)
    }catch (e) {
      throw e
    }
  },[])

  return { categories, getCategories, loading, pages, getParents,  parents:parentCategories, categoriesWithChildren,getCategoriesWithChildren }
}
