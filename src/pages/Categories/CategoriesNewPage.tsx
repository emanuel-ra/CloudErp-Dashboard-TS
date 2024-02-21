import {  useEffect, useRef, useState } from "react";
import { Card } from "../../components/Card";
import { useUsoCfdiList } from "../../hooks/Catalogo_SAT/useUsoCfdiList";
import { useUsoSatPaisesList } from "../../hooks/Catalogo_SAT/usoSatPaiseList";
import { useUsoSatEstadoList } from "../../hooks/Catalogo_SAT/usoSatEstadoList";
import { useCategoriesCreate } from "../../hooks/Catgories/useCategoriesCreate";
import { useRegimenFiscalList } from "../../hooks/Catalogo_SAT/useRegimenFiscalList";
import {  InputModalL } from "../../components/Inputs/TextInput";
import { ButtonCircleAdd } from "../../components/Buttons/Button";
import { LabelInp } from '../../components/Labels/LabelsModal';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';




export const CategoriesNewPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { createCategories } = useCategoriesCreate();

  const handleCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault(); 

      const formData = {
        parentId: 1,
        name: event.currentTarget['Nombre'].value,
        Logo: event.currentTarget['Logo'].value,
        isEnableEccomerce: event.currentTarget['IsEnableEccomercer'].checked ? 1 : 0,
        statusId: event.currentTarget['StatusId'].checked ? 1 : 2
    };
      console.log(formData)
  
      const response: any = await createCategories({ formData });
      if(response.id > 0){
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

  return (
    <Card className={`grow flex flex-col  gap-y-2`}>
        <form className="p-4 md:p-5" onSubmit={handleCreate} ref={formRef}>
            <div className="flex justify-between items-center p-4 border-b mb-5">
            <div>
                <h1 className="text-3xl font-bold">Registro de Categoria Nueva</h1>
            </div>
            <div className="flex gap-4">
                <Link
                    className="bg-blue-700/90 text-white hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
                    to="/catalogue/categories"
                >
                    <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    strokeWidth="1.5" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg" 
                    aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"></path>
                    </svg>
                </Link>
                <ButtonCircleAdd 
                svg={            
                    <svg 
                        className="w-4 h-4" 
                        fill="none" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg" 
                        aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"></path>
                    </svg>
                }>
                </ButtonCircleAdd>
            </div>  
            </div> 
            <div className="flex justify-center">
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <LabelInp>
                        Nombre
                        </LabelInp>
                        <InputModalL name={"Nombre"}>
                        </InputModalL>
                    </div>
                    <div className="col-span-2 ">
                        <LabelInp>
                            Logo
                        </LabelInp>
                        <InputModalL name={"Logo"}>
                        </InputModalL>
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
            </div>
        </form>
    </Card>
  );
};
