import { useCallback, useState, useRef } from "react";
import { GetProducts } from "../../services/Products";
import {
  type IProductResponse,
  type IProduct,
} from "../../abstraction/Interfazes/IProducts";
interface Props {
  page: number;
  search: string;
}

export const useProductsList = ({ page, search }: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const previousSearch = useRef(search);
  const previousPage = useRef(page);

  const getProducts = useCallback(async ({ page, search }: Props) => {
    if (search === previousSearch.current && page === previousPage.current)
      return;

    setLoading(true);

    try {
      previousSearch.current = search;
      const { data }: IProductResponse = await GetProducts({
        page,
        search,
      });
      setProducts(data);
      setLoading(false);
    } catch (e) {
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  return { products, getProducts, loading };
};
