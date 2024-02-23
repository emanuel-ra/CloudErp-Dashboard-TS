import { useCallback, useState } from 'react'
import {
  type ICategorieNew
} from '../../abstraction/Interfaces/ICategories'
import { CreateCagories } from '../../services/Categories'

interface Props {
  formData: ICategorieNew
}

export const useCategoriesCreate = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const createCategories = useCallback(async ({ formData }: Props) => {
    setLoading(true)
    try {
      const mappedData = {
        parentId: 0,
        name: formData.name,
        Logo: formData.Logo,
        isEnableEccomerce: formData.isEnableEccomerce,
        statusId: formData.statusId
      }

      const response: ICategorieNew = await CreateCagories(mappedData)
      return response
    } catch (error) {
      console.error('Error al actualizar los datos:', error)
      return error
    } finally {
      setLoading(false)
    }
  }, [])

  return { createCategories, loading }
}
