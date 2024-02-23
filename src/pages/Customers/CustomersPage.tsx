import { useEffect, useId, useState } from 'react'
import { Card } from '../../components/Card'
import { useCustomerList } from '../../hooks/Customers/useCustomerList'
import { usedeleteCustomerID } from '../../hooks/Customers/useCustomerDelete'
import { Button, ButtonCircleDel } from '../../components/Buttons/Button'
import { TextInput } from '../../components/Inputs/TextInput'
import { SearchCircle } from '../../components/Icons/SearchIcon'
import { useTranslation } from 'react-i18next'
import { Table } from '../../components/Tables/Table'
import { Thead } from '../../components/Tables/Thead'
import { TableBody } from '../../components/Tables/TableBody'
import { BadgeGreen, BadgeRed } from '../../components/Span/Badges'
import { TableCell } from '../../components/Tables/TableCell'
import { TableHeadCell } from '../../components/Tables/TableHeadCell'
import { Pagination } from '../../components/Pagination/Pagination'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

export const CustomerPage = () => {
  const [page, setPage] = useState<number>(0)

  const { t } = useTranslation()

  const searchInputId = useId()

  const { customer, getCustomer, pages } = useCustomerList()

  const { deleteCustomerID } = usedeleteCustomerID()

  const handleSearch = () => {
    const search = (document.getElementById(searchInputId) as HTMLInputElement)
      .value
    getCustomer({ page: 0, search })
    setPage(0)
  }

  const handlePage = (newPage: number) => {
    setPage(newPage)
  }

  useEffect(() => {
    getCustomer({ page, search: '' })
  }, [page])

  const handleDeleteClick = async (id: number) => {
    const respuesta = await deleteCustomerID({ id })
    if (respuesta.status === 204) {
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
  }

  return (
    <Card className='grow flex flex-col  gap-y-2'>
      <div className='flex justify-between items-center p-4 border-b mb-5'>
        <div>
          <h1 className='text-3xl font-bold'>Clientes</h1>
        </div>
        <div className='flex gap-4'>

          <Link
            className='bg-blue-700/90 text-white hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center'
            to='/Cliente/create'
          >
            <svg
              className='w-4 h-4'
              fill='none'
              strokeWidth='1.5'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/26000/svg'
              aria-hidden='true'
            >
              <path d='M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z' />
            </svg>
          </Link>
        </div>
      </div>

      <div className='flex gap-2'>
        <div className='grow'>
          <TextInput placeholder={`${t('search')}....`} id={searchInputId} />
        </div>
        <Button Click={handleSearch}>
          <SearchCircle size={6} /> {t('search')}
        </Button>
      </div>

      <Table>
        <Thead>
          <tr>
            <TableHeadCell>{t('Clave')}</TableHeadCell>
            <TableHeadCell>{t('Nombre')}</TableHeadCell>
            <TableHeadCell>{t('RFC')}</TableHeadCell>
            <TableHeadCell>{t('Correo')}</TableHeadCell>
            <TableHeadCell>{t('Telefono')}</TableHeadCell>
            <TableHeadCell>{t('Codigo Postal')}</TableHeadCell>
            <TableHeadCell>{t('Estatus')}</TableHeadCell>
            <TableHeadCell> </TableHeadCell>
          </tr>
        </Thead>
        <TableBody>
          {customer.map((row) => (
            <tr key={row.id}>
              <TableCell className='text-center'>{row.vchCodigo}</TableCell>
              <TableCell className='text-center'>{row.vchNombres}</TableCell>
              <TableCell className='text-center'>
                {row.vchRFC}
              </TableCell>
              <TableCell className='text-center'>
                {row.vchCorreos}
              </TableCell>
              <TableCell className='text-center'>
                {row.vchTelefonos}
              </TableCell>
              <TableCell className='text-center'>
                {row.vchCodigoPostal}
              </TableCell>
              <TableCell className='text-center'>
                {row.idStatus === 1 ? <BadgeGreen children={row.status} /> : <BadgeRed children={row.status} />}
              </TableCell>
              <TableCell className='text-center'>
                <div className='flex justify-center space-x-2'>
                  <Link
                    className='bg-blue-700/90 text-white hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center'
                    to={`/Cliente/Actualizar/${row.id}`}
                  >
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' />
                    </svg>
                  </Link>
                  <div style={{ marginRight: '1px' }} />
                  <ButtonCircleDel onClick={async () => await handleDeleteClick(row.id)} />
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
    </Card>
  )
}
