import { useEffect, useRef, useState } from 'react'
import { Card } from '../../components/Card'
import { useUsoCfdiList } from '../../hooks/Catalogo_SAT/useUsoCfdiList'
import { useUsoSatPaisesList } from '../../hooks/Catalogo_SAT/usoSatPaiseList'
import { useUsoSatEstadoList } from '../../hooks/Catalogo_SAT/usoSatEstadoList'
import { useCustomerCreate } from '../../hooks/Customers/useCustomerCreate'
import { useRegimenFiscalList } from '../../hooks/Catalogo_SAT/useRegimenFiscalList'
import { InputModalS, InputModalL } from '../../components/Inputs/TextInput'
import { Select } from '../../components/Selects'
import { ButtonCircleAdd } from '../../components/Buttons/Button'
import { LabelInp } from '../../components/Labels/LabelsModal'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

export const CustomerNewPage = () => {
  const [page] = useState<number>(0)
  const formRef = useRef<HTMLFormElement>(null)
  const { createCustomer } = useCustomerCreate()

  const { regimenfiscal, getRegimenFiscal } = useRegimenFiscalList()

  const { paises, getPaises } = useUsoSatPaisesList()

  const { estados, getEstados } = useUsoSatEstadoList()

  const data = [
    { value: 0, label: 'Seleccione una opción' },
    ...regimenfiscal.map((row) => ({
      value: row.clave,
      label: `${row.clave} - ${row.descripcion}`
    }))
  ]

  const { usocfdi, getUsoCfdi } = useUsoCfdiList()

  const dataUso = [
    { value: 0, label: 'Seleccione una opción' },
    ...usocfdi.map((row) => ({
      value: row.clave,
      label: `${row.clave} - ${row.descripcion}`
    }))
  ]

  const dataPaises = [
    { value: 0, label: 'Seleccione una opción' },
    ...paises.map((row) => ({
      value: row.id,
      label: `${row.vchClave} - ${row.vchPais}`
    }))
  ]

  const dataEstados = [
    { value: 0, label: 'Seleccione una opción' },
    ...estados.map((row) => ({
      value: row.id,
      label: `${row.vchClave} - ${row.vchEstado}`
    }))
  ]

  const handleCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()

      const formData = {
        vchNombres: event.currentTarget.Nombre.value,
        vchApellidos: event.currentTarget.Apellidos.value,
        vchCodigo: event.currentTarget.codeCte.value,
        vchTelefonos: event.currentTarget.Telefono.value,
        vchCorreos: event.currentTarget.Correo.value,
        address: event.currentTarget.Domicilio.value,
        vchRFC: event.currentTarget.RFC.value,
        vchCodigoPostal: event.currentTarget.CodigoPostal.value,
        vchComentario: event.currentTarget.Commentary.value,
        idPais: event.currentTarget.cmbPais.value,
        idEstado: event.currentTarget.cmbEstado.value,
        vchNumInt: event.currentTarget.NumeroInt.value,
        vchNumExt: event.currentTarget.NumeroExt.value,
        external_id: 1,
        sat_cp: event.currentTarget.CodigoPostal.value,
        sat_razonsocial: event.currentTarget.Nombre.value,
        email_cfdi: event.currentTarget.Correo.value,
        sat_regimen_fiscal_clave: event.currentTarget.cmbRegimenF.value,
        sat_uso_cfdi_clave: event.currentTarget.cmbUsoCFDI.value,
        idStatus: 1
      }

      const response: any = await createCustomer({ formData })
      if (response.id > 0) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Operación completada con éxito',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Ocurrió un error',
          text: 'Por favor, intenta nuevamente.'
        })
      }
    } catch (error) {
      console.error('Error al guardar los datos:', error)
      Swal.fire({
        icon: 'error',
        title: 'Ocurrió un error',
        text: 'Por favor, intenta nuevamente.'
      })
    }
  }
  useEffect(() => {
    getRegimenFiscal({ page, search: '' })
    getUsoCfdi({ page, search: '' })
    getPaises({ page, search: '' })
    getEstados({ page, search: '' })
  }, [page])

  return (
    <Card className='grow flex flex-col  gap-y-2'>
      <form className=' ml' onSubmit={handleCreate} ref={formRef}>
        <div className='flex justify-between items-center p-4 border-b mb-5'>
          <div>
            <h1 className='text-3xl font-bold'>Registro de Cliente Nuevo</h1>
          </div>
          <div className='flex gap-4'>
            <Link
              className='bg-blue-700/90 text-white hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center'
              to='/Cliente'
            >
              <svg
                className='w-4 h-4'
                fill='none'
                strokeWidth='1.5'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path clipRule='evenodd' fillRule='evenodd' d='M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z' />
              </svg>
            </Link>
            <ButtonCircleAdd
              svg={
                <svg
                  className='w-4 h-4'
                  fill='none'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path clipRule='evenodd' fillRule='evenodd' d='M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z' />
                </svg>
              }
            />
          </div>
        </div>

        <div className='grid gap-4 mb-4 grid-cols-2'>
          <div className='col-span-2'>
            <LabelInp>
              Codigo Cliente
            </LabelInp>
            <InputModalL name='codeCte' />
          </div>
          <div className='col-span-2 sm:col-span-1'>
            <LabelInp>
              Nombre
            </LabelInp>
            <InputModalS name='Nombre' />
          </div>
          <div className='col-span-2 sm:col-span-1'>
            <LabelInp>
              Apellidos
            </LabelInp>
            <InputModalS name='Apellidos' />
          </div>
          <div className='col-span-2 sm:col-span-1'>
            <LabelInp>
              Telefono
            </LabelInp>
            <InputModalS name='Telefono' />
          </div>
          <div className='col-span-2 sm:col-span-1'>
            <LabelInp>
              Correo
            </LabelInp>
            <InputModalS name='Correo' />
          </div>
          <div className='col-span-2 sm:col-span-1'>
            <LabelInp>
              RFC
            </LabelInp>
            <InputModalS name='RFC' />
          </div>
          <div className='col-span-2 sm:col-span-1'>
            <LabelInp>
              Codigo Postal
            </LabelInp>
            <InputModalS name='CodigoPostal' />
          </div>
          <div className='col-span-2 sm:col-span-1'>
            <Select
              id='cmbRegimenF'
              label='Regimen Fiscal'
              name='cmbRegimenF'
              options={data}
            />
          </div>
          <div className='col-span-2 sm:col-span-1'>
            <Select
              id='cmbUsoCFDI'
              label='Uso de CFDI'
              name='cmbUsoCFDI'
              options={dataUso}
            />
          </div>
          <div className='col-span-2 sm:col-span-1'>
            <Select
              id='cmbPais'
              label='Pais'
              name='cmbPais'
              options={dataPaises}
            />
          </div>
          <div className='col-span-2 sm:col-span-1'>
            <Select
              id='cmbEstado'
              label='Estado'
              name='cmbEstado'
              options={dataEstados}
            />
          </div>
          <div className='col-span-2 sm:col-span-1'>
            <LabelInp>
              Numero exterior
            </LabelInp>
            <InputModalS name='NumeroExt' />
          </div>
          <div className='col-span-2 sm:col-span-1'>
            <LabelInp>
              Numero interior
            </LabelInp>
            <InputModalS name='NumeroInt' />
          </div>
          <div className='col-span-2'>
            <LabelInp>
              Domicilio
            </LabelInp>
            <InputModalL name='Domicilio' />
          </div>
          <div className='col-span-2'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Comentarios</label>
            <input type='text' name='Commentary' className='block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
          </div>
        </div>
      </form>
    </Card>
  )
}
