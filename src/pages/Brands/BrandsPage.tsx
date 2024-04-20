import { PlusIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import 'sweetalert2/dist/sweetalert2.css'
import { ButtonLinkCircle } from '../../components/Buttons/ButtonLinkCircle'
import { Card } from '../../components/Card'
import { Pagination } from '../../components/Pagination/Pagination'
import { BadgeGreen, BadgeRed } from '../../components/Span/Badges'
import { Table } from '../../components/Tables/Table'
import { TableBody } from '../../components/Tables/TableBody'
import { TableCell } from '../../components/Tables/TableCell'
import { TableHeadCell } from '../../components/Tables/TableHeadCell'
import { Thead } from '../../components/Tables/Thead'
import { useBrandList } from '../../hooks/Brands/useBrandList'

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
          <ButtonLinkCircle path='/categories/create'>
            <PlusIcon className='size-6' />
          </ButtonLinkCircle>
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
          {brand?.map((item) => (
            <tr key={item.id}>
              <TableCell className='text-center'>{item.id}</TableCell>
              <TableCell className='text-center'>{item.name}</TableCell>
              <TableCell className='text-center'>
                {item.statusId === 1 ? (
                  <BadgeGreen children={item.statusName} />
                ) : (
                  <BadgeRed children={item.statusName} />
                )}
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
