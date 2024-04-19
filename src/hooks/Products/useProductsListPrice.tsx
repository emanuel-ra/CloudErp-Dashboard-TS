import { useCallback, useState } from 'react'
import { ProductsListPrice } from '../../abstraction/Interfaces/IProducts'
import { GetPriceList } from '../../services/products/ProductsListPrice'

export const useProductsListPrice = () => {
  const [data, setData] = useState<ProductsListPrice[]>([])

  const getPriceList = useCallback(async () => {
    const result = await GetPriceList()
    if (result.status === 200) {
      setData(result.data)
    } else {
      setData([])
    }
  }, [])

  return { priceList: data, getPriceList }
}
