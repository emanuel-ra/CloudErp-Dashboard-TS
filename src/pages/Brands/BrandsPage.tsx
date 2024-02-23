import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../../components/Card'
import { useBrandList } from '../../hooks/Brands/useBrandList'
import { useTranslation } from 'react-i18next'
import { Table } from '../../components/Tables/Table'
import { Thead } from '../../components/Tables/Thead'
import { TableBody } from '../../components/Tables/TableBody'
import { BadgeGreen, BadgeRed } from '../../components/Span/Badges'

import { TableCell } from '../../components/Tables/TableCell'
import { TableHeadCell } from '../../components/Tables/TableHeadCell'
import { Pagination } from '../../components/Pagination/Pagination'
import 'sweetalert2/dist/sweetalert2.css'

export const BrandsPage = () => {
  const [page, setPage] = useState<number>(0)

  const { t } = useTranslation()

  const { brand, getBrand, pages } = useBrandList()

  const handlePage = (newPage: number) => {
    setPage(newPage)
  }

  useEffect(() => {
    getBrand({ page, search: '' })
  }, [page])

  return (
    <Card className='grow flex flex-col  gap-y-2'>
      <div className='flex justify-between items-center p-4 border-b mb-5'>
        <div>
          <h1 className='text-3xl font-bold'>Marcas</h1>
        </div>
        <div className='flex gap-4'>
          <Link
            className='bg-blue-700/90 text-white hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center'
            to='/categories/create'
          >
            <svg
              data-slot='icon'
              className='w-4 h-4'
              fill='currentColor'
              strokeWidth='1.5'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
            >
              <path clip-rule='evenodd' fill-rule='evenodd' d='M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z' />
            </svg>
          </Link>
        </div>
      </div>

      <Table>
        <Thead>
          <tr>
            <TableHeadCell>{t('ID')}</TableHeadCell>
            <TableHeadCell>{t('Nombre')}</TableHeadCell>
            <TableHeadCell>{t('Estatus')}</TableHeadCell>
          </tr>
        </Thead>
        <TableBody>
          {brand.map((item) => (
            <tr key={item.id}>

              <TableCell className='text-center'>{item.id}</TableCell>
              <TableCell className='text-center'>{item.name}</TableCell>
              <TableCell className='text-center'>
                {item.statusId === 1 ? <BadgeGreen children={item.statusName} /> : <BadgeRed children={item.statusName} />}
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
