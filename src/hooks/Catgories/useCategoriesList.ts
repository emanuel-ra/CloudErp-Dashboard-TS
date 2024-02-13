import { useCallback, useState, useRef } from "react";
import { GetCategories } from "../../services/Categories";
import {
  type ICatogoriesResponse,
  type ICategorie,
} from "../../abstraction/Interfazes/ICategories";
interface Props {
  page: number;
  search: string;
}

export const useCategoriesList = () => {
  const [categories, setCategories] = useState<ICategorie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [pages, setPages] = useState<number>(0);

  const previousSearch = useRef("null");
  const previousPage = useRef(0);

  const getCategories = useCallback(async ({ page, search }: Props) => {
    const newPage = page + 1;

    setLoading(true);

    try {
      previousSearch.current = search;
      previousPage.current = newPage;
      const { totalPages, data }: ICatogoriesResponse = await GetCategories({
        page: newPage,
        search,
      });
      setCategories(data);
      setPages(totalPages);
      setLoading(false);
    } catch (e) {
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  return { categories, getCategories, loading, pages };
};
