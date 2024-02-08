import { useEffect, useId, useRef, useState } from "react";

import { Card } from "../../components/Card";
import { useUsoCfdiList } from "../../hooks/Catalogo_SAT/useUsoCfdiList";
import { useCustomerList } from "../../hooks/Customers/useCustomerList";
import { useCustomerID } from "../../hooks/Customers/useCustomerID";
import { useCustomerUpd } from "../../hooks/Customers/useCustomerUpdate";
import { usedeleteCustomerID } from "../../hooks/Customers/useCustomerDelete";
import { useCustomerCreate } from "../../hooks/Customers/useCustomerCreate";
import { useRegimenFiscalList } from "../../hooks/Catalogo_SAT/useRegimenFiscalList";
import { Button, ButtonCircleEdit, ButtonCircleAdd, ButtonCircleDel } from "../../components/Buttons/Button";
import { TextInput, InputModalS, InputModalL } from "../../components/Inputs/TextInput";
import { SearchCircle } from "../../components/Icons/SearchIcon";
import { Select } from "../../components/Selects";
import { useTranslation } from "react-i18next";
import { Table } from "../../components/Tables/Table";
import { Thead } from "../../components/Tables/Thead";
import { TableBody } from "../../components/Tables/TableBody";
import { BadgeGreen, BadgeRed } from "../../components/Span/Badges";
import { TableCell } from "../../components/Tables/TableCell";
import { TableHeadCell } from "../../components/Tables/TableHeadCell";
import { Pagination } from "../../components/Pagination/Pagination";
import { NumberFormat } from "../../utils/Formats";
import { Modal, ModalFooter } from '../../components/Modal'; 
import { LabelInp } from '../../components/Labels/LabelsModal'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';




export const CustomerPage = () => {
  const [page, setPage] = useState<number>(0);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenAdd, setModalIsOpenAdd] = useState(false);

  const formRef = useRef(null);

  const { t } = useTranslation();

  const searchInputId = useId();

  const { customer, getCustomer, pages } = useCustomerList();

  const { updtCustomer, loading: updatingCustomer } = useCustomerUpd();
  const { createCustomer, loading: creatingCustomer } = useCustomerCreate();


  const { getCustomerById, customerid, loading } = useCustomerID();
  const { deleteCustomerID, loading: deleteingCustomer } = usedeleteCustomerID();


  const { regimenfiscal, getRegimenFiscal, pagesR } = useRegimenFiscalList();
  const data = [
    { value: 0, label: 'Seleccione una opción' },
    ...regimenfiscal.map((row) => ({
      value: row.clave,
      label: `${row.clave} - ${row.descripcion}`,
    })),
  ];

  const { usocfdi, getUsoCfdi, pagesU } = useUsoCfdiList();
  const dataUso = [
    { value: 0, label: 'Seleccione una opción' },
    ...usocfdi.map((row) => ({
      value: row.clave,
      label: `${row.clave} - ${row.descripcion}`,
    })),
  ];

  const handleSearch = () => {
    const search = (document.getElementById(searchInputId) as HTMLInputElement)
      .value;
      getCustomer({ page: 0, search });
    setPage(0);
  };

  const handleGuardar = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault(); 

      const formData = {
        id: selectedCustomerId ?? 0,
        vchCodigo: event.currentTarget['codeCte'].value,
        vchNombres: event.currentTarget['Nombre'].value,
        vchApellidos: event.currentTarget['Apellidos'].value,
        vchTelefonos: event.currentTarget['Telefono'].value,
        vchCorreos: event.currentTarget['Correo'].value,
        address: event.currentTarget['Domicilio'].value,
        vchRFC: event.currentTarget['RFC'].value,
        vchCodigoPostal: event.currentTarget['CodigoPostal'].value,
        vchComentario: 'Commentary',
        idPais: 1,
        idEstado: 1,
        vchNumInt: '1',
        vchNumExt: '1',
        external_id: 1,
        sat_cp: event.currentTarget['CodigoPostal'].value,
        sat_razonsocial: event.currentTarget['Nombre'].value,
        email_cfdi: event.currentTarget['Correo'].value,
        sat_regimen_fiscal_clave: event.currentTarget['cmbRegimenF'].value,
        sat_uso_cfdi_clave: event.currentTarget['cmbUsoCFDI'].value,
        idStatus: 1
      };
  
      const response = await updtCustomer({ formData });
      console.log(response)
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

  const handleCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault(); 

      const formData = {
        vchNombres: event.currentTarget['Nombre'].value,
        vchApellidos: event.currentTarget['Apellidos'].value,
        vchCodigo: event.currentTarget['codeCte'].value,
        vchTelefonos: event.currentTarget['Telefono'].value,
        vchCorreos: event.currentTarget['Correo'].value,
        address: event.currentTarget['Domicilio'].value,
        vchRFC: event.currentTarget['RFC'].value,
        vchCodigoPostal: event.currentTarget['CodigoPostal'].value,
        vchComentario: 'Commentary',
        idPais: 1,
        idEstado: 1,
        vchNumInt: '1',
        vchNumExt: '1',
        external_id: 1,
        sat_cp: event.currentTarget['CodigoPostal'].value,
        sat_razonsocial: event.currentTarget['Nombre'].value,
        email_cfdi: event.currentTarget['Correo'].value,
        sat_regimen_fiscal_clave: event.currentTarget['cmbRegimenF'].value,
        sat_uso_cfdi_clave: event.currentTarget['cmbUsoCFDI'].value,
        idStatus: 1
      };
  
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

  const getCustomerId = async (id:number)=>{
    await getCustomerById({id});  
    setModalIsOpen(true);  
  }

  const handlePage = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    getCustomer({ page, search: "" });

  }, [page]);

  const handleEditClick = async (id: number) => {
    setSelectedCustomerId(id);
    try {
      await Promise.all([
        getRegimenFiscal({ page, search: "" }),
        getUsoCfdi({ page, search: "" }),
      ]);
  
      await getCustomerId(id);
    } catch (error) {
      console.error("Error al realizar las llamadas:", error);
    }
  };

  const handleDeleteClick = async (id: number) => {
    const respuesta =  await deleteCustomerID({id})
    if(respuesta.status === 204)
    {
      Swal.fire({
        position: "top-end",
        icon: 'success',
        title: 'Operación completada con éxito',
        showConfirmButton: false,
        timer: 1500
      });
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Ocurrió un error',
        text: 'Por favor, intenta nuevamente.',
      });
    }
  };

  const handleAddClick = async () => {
    try {
      await Promise.all([
        getRegimenFiscal({ page, search: "" }),
        getUsoCfdi({ page, search: "" }),
      ]);
      setModalIsOpenAdd(true);  

    } catch (error) {
      console.error("Error al realizar las llamadas:", error);
    }
  };

  const closeModal = () => {
    getCustomer({ page, search: "" });
    formRef.current.reset();
    setModalIsOpen(false);
    setModalIsOpenAdd(false)
  };

  return (
    <Card className={`grow flex flex-col  gap-y-2`}>
      <div className="flex justify-between items-center p-4 border-b mb-5">
        <div>
          <h1 className="text-3xl font-bold">Clientes</h1>
        </div>
        <div className="flex gap-4">
          <ButtonCircleAdd onClick={handleAddClick} 
          svg={
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke-width="1.5" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg" 
            aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"></path>
          </svg>}>
          </ButtonCircleAdd>
        </div>
      </div>
     
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
            <TableHeadCell>{t("Nombre")}</TableHeadCell>
            <TableHeadCell>{t("RFC")}</TableHeadCell>
            <TableHeadCell>{t("Correo")}</TableHeadCell>
            <TableHeadCell>{t("Telefono")}</TableHeadCell>
            <TableHeadCell>{t("Codigo Postal")}</TableHeadCell>
            <TableHeadCell>{t("Estatus")}</TableHeadCell>
            <TableHeadCell> </TableHeadCell>

          </tr>
        </Thead>
        <TableBody>
          {customer.map((row) => (
            <tr key={row.id}>
              <TableCell className="text-center">{row.vchCodigo}</TableCell>
              <TableCell className="text-center">{row.vchNombres}</TableCell>
              <TableCell className="text-center">
                {row.vchRFC}
              </TableCell>
              <TableCell className="text-center">
                {row.vchCorreos}
              </TableCell>
              <TableCell className="text-center">
                {row.vchTelefonos}
              </TableCell>
              <TableCell className="text-center">
                {row.vchCodigoPostal}
              </TableCell>
              <TableCell className="text-center" >
                  {row.idStatus === 1 ? <BadgeGreen children={row.status} /> : <BadgeRed children={row.status} />}
              </TableCell>
              <TableCell className="text-center" >
              <div className="flex justify-center space-x-2"> 
                <ButtonCircleEdit onClick={() => handleEditClick(row.id)}>Edit</ButtonCircleEdit>
                <div style={{ marginRight: '1px' }}></div> 
                <ButtonCircleDel onClick={() => handleDeleteClick(row.id)}></ButtonCircleDel>
              </div>
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
      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-center text-lg font-semibold text-white-900 dark:text-white">
              Actualizar Datos Cliente
          </h3>
        </div>                
        <form className="p-4 md:p-5" onSubmit={handleGuardar} ref={formRef}>
          <div className="grid gap-4 mb-4 grid-cols-2">
            <div className="col-span-2">
              <LabelInp>
                Codigo Cliente
              </LabelInp>
              <InputModalL name={"codeCte"} value={customerid?.vchCodigo} disabled>
              </InputModalL>
            </div>
            <div className="col-span-2 sm:col-span-1">
                <LabelInp>
                  Nombre
                </LabelInp>
                <InputModalS name={"Nombre"} value={customerid?.vchNombres}>
                </InputModalS>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <LabelInp>
                Apellidos
              </LabelInp>
              <InputModalS name={"Apellidos"} value={customerid?.vchApellidos}>
                </InputModalS>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <LabelInp>
                Telefono
              </LabelInp>
              <InputModalS name={"Telefono"} value={customerid?.vchTelefonos}>
                </InputModalS>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <LabelInp>
                Correo
              </LabelInp>
              <InputModalS name={"Correo"} value={customerid?.vchCorreos}>
                </InputModalS>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <LabelInp>
                RFC
              </LabelInp>
              <InputModalS name={"RFC"} value={customerid?.vchRFC}>
                </InputModalS>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <LabelInp>
                Codigo Postal
              </LabelInp>
              <InputModalS name={"CodigoPostal"} value={customerid?.vchCodigoPostal}>
                </InputModalS>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Select
                id="cmbRegimenF"
                label="Regimen Fiscal"
                name="cmbRegimenF"
                options={data}
                value={customerid?.sat_regimen_fiscal_clave}>
              </Select>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Select
                id="cmbUsoCFDI"
                label="Uso de CFDI"
                name="cmbUsoCFDI"
                options={dataUso}
                value={customerid?.sat_uso_cfdi_clave}>
              </Select>
            </div>
            <div className="col-span-2">
              <LabelInp>
                Domicilio
              </LabelInp>
              <InputModalL name={"Domicilio"} value={customerid?.address}>
              </InputModalL>
            </div>   
          </div>
        <ModalFooter onClose={closeModal}>
        </ModalFooter>
        </form>
      </Modal>

      <Modal isOpen={modalIsOpenAdd} onClose={closeModal}>
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-center text-lg font-semibold text-white-900 dark:text-white">
              Crear Nuevo Cliente
          </h3>
        </div>                
        <form className="p-4 md:p-5" onSubmit={handleCreate} ref={formRef}>
          <div className="grid gap-4 mb-4 grid-cols-2">
            <div className="col-span-2">
              <LabelInp>
                Codigo Cliente
              </LabelInp>
              <InputModalL name={"codeCte"}>
              </InputModalL>
            </div>
            <div className="col-span-2 sm:col-span-1">
                <LabelInp>
                  Nombre
                </LabelInp>
                <InputModalS name={"Nombre"}>
                </InputModalS>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <LabelInp>
                Apellidos
              </LabelInp>
              <InputModalS name={"Apellidos"}>
                </InputModalS>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <LabelInp>
                Telefono
              </LabelInp>
              <InputModalS name={"Telefono"}>
                </InputModalS>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <LabelInp>
                Correo
              </LabelInp>
              <InputModalS name={"Correo"}>
                </InputModalS>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <LabelInp>
                RFC
              </LabelInp>
              <InputModalS name={"RFC"}>
                </InputModalS>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <LabelInp>
                Codigo Postal
              </LabelInp>
              <InputModalS name={"CodigoPostal"}>
                </InputModalS>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Select
                id="cmbRegimenF"
                label="Regimen Fiscal"
                name="cmbRegimenF"
                options={data}>
              </Select>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Select
                id="cmbUsoCFDI"
                label="Uso de CFDI"
                name="cmbUsoCFDI"
                options={dataUso}>
              </Select>
            </div>
            <div className="col-span-2">
              <LabelInp>
                Domicilio
              </LabelInp>
              <InputModalL name={"Domicilio"}>
              </InputModalL>
            </div>   
          </div>
        <ModalFooter onClose={closeModal}>
        </ModalFooter>
        </form>
      </Modal>
    </Card>
  );
};
