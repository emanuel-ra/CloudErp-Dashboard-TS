import { useEffect, useId, useRef, useState } from "react";
import { Card } from "../../components/Card";
import { useCategoriesList } from "../../hooks/Catgories/useCategoriesList";
import { LabelInp } from '../../components/Labels/LabelsModal'
import { TextInput, InputModalS, InputModalL } from "../../components/Inputs/TextInput";
import { Modal, ModalFooter } from '../../components/Modal'; 
import { SearchCircle } from "../../components/Icons/SearchIcon";
import { Button, ButtonCircleEdit, ButtonCircleAdd, ButtonCircleDel } from "../../components/Buttons/Button";
import { useTranslation } from "react-i18next";
import { Table } from "../../components/Tables/Table";
import { Thead } from "../../components/Tables/Thead";
import { TableBody } from "../../components/Tables/TableBody";
import { BadgeGreen } from "../../components/Span/Badges";
import { BadgeRed } from "../../components/Span/Badges";
import { TableCell } from "../../components/Tables/TableCell";
import { TableHeadCell } from "../../components/Tables/TableHeadCell";
import { Pagination } from "../../components/Pagination/Pagination";
import { Select } from "../../components/Selects";
import { NumberFormat } from "../../utils/Formats";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export const CategoriesPage = () => {
<<<<<<< HEAD
  const [page, setPage] = useState<number>(0);
  const [modalIsOpenAdd, setModalIsOpenAdd] = useState(false);
  const formRef = useRef(null);


  const { t } = useTranslation();

  const searchInputId = useId();

  const { categories, getCategories, pages } = useCategoriesList();

  const handleSearch = () => {
    const search = (document.getElementById(searchInputId) as HTMLInputElement)
      .value;
      getCategories({ page: 0, search });
    setPage(0);
  };

  const handlePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleAddClick = async () => {
      setModalIsOpenAdd(true);  
  };

  const handleCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault(); 

      const formData = {
        vchNombres: event.currentTarget['Nombre'].value,
        Logo: event.currentTarget['Logo'].value,
        IsEnableEccomercer: event.currentTarget['IsEnableEccomercer'].checked ? 1 : 0,
        idStatus: event.currentTarget['StatusId'].checked ? 1 : 2
    };
      console.log(formData)
  
      const response = await createCustomer({ formData });
      if(response.id > 0){
        closeModal();
        Swal.fire({
          position: "top-end",
          icon: 'success',
          title: 'Operación completada con éxito',
          showConfirmButton: false,
          timer: 1500
        });
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Ocurrió un error',
          text: 'Por favor, intenta nuevamente.',
        });
      } 

    } catch (error) {
      console.error('Error al guardar los datos:', error);
      Swal.fire({
        icon: 'error',
        title: 'Ocurrió un error',
        text: 'Por favor, intenta nuevamente.',
      });
    }
  };

  useEffect(() => {
    getCategories({ page, search: "" });
  }, [page]);
  const closeModal = () => {
    formRef.current.reset();
    setModalIsOpenAdd(false)
  };
  return (
    <Card className={`grow flex flex-col  gap-y-2`}>
      <div className="flex justify-between items-center p-4 border-b mb-5">
        <div>
          <h1 className="text-3xl font-bold">Categorias</h1>
        </div>
        <div className="flex gap-4">
          <ButtonCircleAdd onClick={handleAddClick}
          svg={
            <svg className="w-4 h-4" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
          }
          >
          </ButtonCircleAdd>
        </div>
      </div>

      <Table>
        <Thead>
          <tr>
            <TableHeadCell>{t("ID")}</TableHeadCell>
            <TableHeadCell>{t("Nombre")}</TableHeadCell>
            <TableHeadCell>{t("Estatus")}</TableHeadCell>
            <TableHeadCell> </TableHeadCell>
          </tr>
        </Thead>
        <TableBody>
          {categories.map((item) => (
            <tr key={item.Id}>
              <TableCell>{item.Name}</TableCell>
              <TableCell className="text-center" >
                  {item.StatusId === 1 ? <BadgeGreen children={item.StatusName} /> : <BadgeRed children={item.StatusName} />}
              </TableCell>             
            </tr>
          ))}
        </TableBody>
      </Table>

      <Pagination
        pageCount={pages}
        pageIndex={page}
        setPageIndex={handlePage}
      />
        <Modal isOpen={modalIsOpenAdd} onClose={closeModal} maxWidth="50%" maxHeight="50%">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-center text-lg font-semibold text-white-900 dark:text-white">
              Crear Nueva Categoria 
          </h3>
        </div>                
        <form className="p-4 md:p-5" onSubmit={handleCreate} ref={formRef}>
          <div className="grid gap-4 mb-4 grid-cols-2">
            <div className="col-span-2 sm:col-span-1">
                <LabelInp>
                  Nombre
                </LabelInp>
                <InputModalS name={"Nombre"}>
                </InputModalS>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <LabelInp>
                Logo
              </LabelInp>
              <InputModalS name={"Logo"}>
                </InputModalS>
            </div>  
            <div className="col-span-2 sm:col-span-1 mt-3" >
                <label className="relative inline-flex items-center mb-5 cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" name="IsEnableEccomercer"/>
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Categoria para Eccomerce</span>
                </label>
            </div>
            <div className="col-span-2 sm:col-span-1 mt-3" >
                <label className="relative inline-flex items-center mb-5 cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" name="StatusId"/>
                <div className="w-11 h-6 bg-red-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-red-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500 bg-red-500"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Estatus</span>
                </label>
            </div>
          </div>
        <ModalFooter onClose={closeModal}>
        </ModalFooter>
        </form>
      </Modal>
    </Card>
    
  );
};
=======
  return 'Categories page'
}
>>>>>>> 28dfc839a50759e21c184197d60f5a3339683999
