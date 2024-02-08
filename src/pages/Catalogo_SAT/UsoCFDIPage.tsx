import { useEffect, useId, useRef, useState } from "react";
import { Card } from "../../components/Card";
import { useUsoCfdiList } from "../../hooks/Catalogo_SAT/useUsoCfdiList";
import { Button } from "../../components/Buttons/Button";
import { TextInput } from "../../components/Inputs/TextInput";
import { SearchCircle } from "../../components/Icons/SearchIcon";
import { useTranslation } from "react-i18next";
import { Table } from "../../components/Tables/Table";
import { Thead } from "../../components/Tables/Thead";
import { TableBody } from "../../components/Tables/TableBody";
import { BadgeGreen } from "../../components/Span/Badges";
import { BadgeRed } from "../../components/Span/Badges";
import { TableCell } from "../../components/Tables/TableCell";
import { TableHeadCell } from "../../components/Tables/TableHeadCell";
import { Pagination } from "../../components/Pagination/Pagination";
import { NumberFormat } from "../../utils/Formats";

export const UsoCfdiPage = () => {
  const [page, setPage] = useState<number>(0);

  const { t } = useTranslation();

  const searchInputId = useId();

  const { usocfdi, getUsoCfdi, pagesU } = useUsoCfdiList();

  const handleSearch = () => {
    const search = (document.getElementById(searchInputId) as HTMLInputElement)
      .value;
      getUsoCfdi({ page: 0, search });
    setPage(0);
  };

  const handlePage = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    getUsoCfdi({ page, search: "" });
  }, [page]);

  return (
    <Card className={`grow flex flex-col  gap-y-2`}>
      <h1>Uso De CFDI 4.0</h1>
      <div className="flex gap-2">
        <div className="grow">
          <TextInput placeholder={`${t("search")}....`} id={searchInputId} />
        </div>
        <Button Click={handleSearch}>
          <SearchCircle size={6} /> {t("search")}
        </Button>
      </div>

      <Table>
        <Thead>
          <tr>
            <TableHeadCell>{t("Clave")}</TableHeadCell>
            <TableHeadCell>{t("Descripcion")}</TableHeadCell>
            <TableHeadCell>{t("Regimen fiscal receptor")}</TableHeadCell>
            <TableHeadCell>{t("Estatus")}</TableHeadCell>
          </tr>
        </Thead>
        <TableBody>
          {usocfdi.map((item) => (
            <tr key={item.id}>
              <TableCell>{item.clave}</TableCell>
              <TableCell className="text-center">{item.descripcion}</TableCell>
              <TableCell className="text-center">
                {item.regimen_fiscal_receptor}
              </TableCell>
              <TableCell className="text-center" >
                  {item.idStatus === 1 ? <BadgeGreen children={item.status} /> : <BadgeRed children={item.status} />}
              </TableCell>
            </tr>
          ))}
        </TableBody>
      </Table>

      <Pagination
        pageCount={pagesU}
        pageIndex={page}
        setPageIndex={handlePage}
      />
    </Card>
  );
};
