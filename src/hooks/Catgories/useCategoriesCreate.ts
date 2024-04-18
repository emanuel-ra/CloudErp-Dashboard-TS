import { useCallback, useState } from 'react'
import { CreateCategory } from '../../abstraction/Interfaces/ICategories'
import { CreateCategoryService } from '../../services/Categories'



export const useCategoriesCreate = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const createCategories = useCallback(async (props: CreateCategory):Promise<boolean> => {
    setLoading(true)
    try {   
      const response = await CreateCategoryService(props)
      if(response.status===200){
        return true
      }
      return false
    } catch {
      //console.error('Error al actualizar los datos:', error)
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  return { createCategories, loading }
}
