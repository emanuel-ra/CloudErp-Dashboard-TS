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

export const useProductsList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [pages, setPages] = useState<number>(0);

  const previousSearch = useRef("null");
  const previousPage = useRef(0);

  const getProducts = useCallback(async ({ page, search }: Props) => {
    const newPage = page + 1;

    setLoading(true);

    try {
      previousSearch.current = search;
      previousPage.current = newPage;
      const { totalPages, data }: IProductResponse = await GetProducts({
        page: newPage,
        search,
      });
      setProducts(data);
      setPages(totalPages);
      setLoading(false);
    } catch (e) {
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  return { products, getProducts, loading, pages };
};
