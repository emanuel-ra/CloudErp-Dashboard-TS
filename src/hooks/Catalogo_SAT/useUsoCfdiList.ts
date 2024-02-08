import { useCallback, useState, useRef } from "react";
import { GetUsoCfdi } from "../../services/Catalogo_SAT/UsoCfdi";
import {
  type IUsoCfdiResponse,
  type IUsoCfdi,
} from "../../abstraction/Interfazes/IUsoCfdi";
interface Props {
  page: number;
  search: string;
}

export const useUsoCfdiList = () => {
  const [usocfdi, setUsoCfdi] = useState<IUsoCfdi[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [pagesU, setPages] = useState<number>(0);

  const previousSearch = useRef("null");
  const previousPage = useRef(0);

  const getUsoCfdi = useCallback(async ({ page, search }: Props) => {
    const newPage = page + 1;

    setLoading(true);

    try {
      previousSearch.current = search;
      previousPage.current = newPage;
      const { totalPages, data }: IUsoCfdiResponse = await GetUsoCfdi({
        page: newPage,
        search,
      });
      setUsoCfdi(data);
      setPages(totalPages);
      setLoading(false);
    } catch (e) {
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  return { usocfdi, getUsoCfdi, loading, pagesU };
};
