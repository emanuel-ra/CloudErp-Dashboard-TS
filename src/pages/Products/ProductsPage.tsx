import { useEffect, useId, useRef, useState } from "react";
import { Card } from "../../components/Card";

import { useProductsList } from "../../hooks/Products/useProductsList";
import { useSideNavStores } from "../../stores/ui/sidenavbar";

export const ProductsPage = () => {
  const setState = useSideNavStores((state) => state.setState);

  const page = 1;
  const searchInputId = useId();
  const { search, updateSearch, error } = useSearch();

  const { products, getProducts } = useProductsList({ page, search });

  const handleSearch = () => {
    const value = (document.getElementById(searchInputId) as HTMLInputElement)
      .value;
    updateSearch(value);
  };

  useEffect(() => {
    setState(true);
  }, []);

  useEffect(() => {
    getProducts({ page, search });
  }, [search]);

  return (
    <Card css={`grow`}>
      <h1>List of Products</h1>
      <div className="flex gap-2">
        {/*  <div className="grow">
          <TextInput
            icon={SearchIcon}
            placeholder="Search..."
            id={searchInputId}
            error={error?.length ? true : false}
            errorMessage={error}
          />
        </div> */}
        {/* <Button
          className="items-center justify-center"
          onClick={handleSearch}
          icon={SearchIcon}
        ></Button> */}
      </div>
      {/* <Table className="mt-5 lg:max-h-[700px]">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Code</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.code}</TableCell>
              <TableCell>
                <Text>{item.name}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.description}</Text>
              </TableCell>
              <TableCell>
                <Badge color="emerald" icon={StatusOnlineIcon}>
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
    </Card>
  );
};

function useSearch() {
  const [search, updateSearch] = useState<string>("");
  const [error, setError] = useState<string>("");
  const isFirstInput = useRef(true);

  useEffect(() => {
    // if (isFirstInput.current) {
    //   isFirstInput.current = search === "";
    //   return;
    // }
    // if (search === "") {
    //   setError("No se puede buscar una pelicula vacia");
    //   return;
    // }
    // if (search.match(/^\d+$/)) {
    //   setError("No se puede buscar una pelicula con un numero");
    //   return;
    // }
    // if (search.length < 3) {
    //   setError("La busqueda debe de tener almenos 3 caracteres");
    //   return;
    // }
    //setError(null);
  }, [search]);

  return { search, updateSearch, error };
}
