import { useEffect, useId, useRef, useState } from "react";
import { Card } from "../../components/Card";
import { useProductsList } from "../../hooks/Products/useProductsList";
import { useSideNavStores } from "../../stores/ui/sidenavbar";
import { ButtonIcon } from "../../components/Buttons/ButtonIcon";
import { TextInput } from "../../components/Inputs/TextInput";
import { SearchCircle } from "../../components/Icons/SearchIcon";
import { useTranslation } from "react-i18next";
import { Table } from "../../components/Tables/Table";
import { Thead } from "../../components/Tables/Thead";
import { TableBody } from "../../components/Tables/TableBody";
import { TableCell } from "../../components/Tables/TableCell";
import { TableHeadCell } from "../../components/Tables/TableHeadCell";
import { Pagination } from "../../components/Pagination/Pagination";

export const ProductsPage = () => {
  const [page, setPage] = useState<number>(0);

  const { t } = useTranslation();

  const searchInputId = useId();

  const { products, getProducts, pages } = useProductsList();

  const handleSearch = () => {
    const search = (document.getElementById(searchInputId) as HTMLInputElement)
      .value;
    getProducts({ page: 0, search });
    setPage(0);
  };

  const handlePage = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    getProducts({ page, search: "" });
  }, [page]);

  return (
    <Card css={`grow flex flex-col gap-y-2`}>
      <h1>List of Products</h1>
      <div className="flex gap-2">
        <div className="grow">
          <TextInput placeholder={`${t("search")}....`} id={searchInputId} />
        </div>
        <ButtonIcon Click={handleSearch}>
          <SearchCircle size={6} /> {t("search")}
        </ButtonIcon>
      </div>

      <Table>
        <Thead>
          <tr>
            <TableHeadCell>Code</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>Price2</TableHeadCell>
          </tr>
        </Thead>
        <TableBody>
          {products.map((item) => (
            <tr key={item.id}>
              <TableCell>{item.code}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.code}</TableCell>
              <TableCell>{item.name}</TableCell>
            </tr>
          ))}
        </TableBody>
      </Table>

      <Pagination
        pageCount={pages}
        pageIndex={page}
        setPageIndex={handlePage}
      />
    </Card>
  );
};
