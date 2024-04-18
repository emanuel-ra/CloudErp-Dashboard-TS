import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Card } from '../../components/Card'
import { BadgeGreen, BadgeRed } from '../../components/Span/Badges'
import { Table } from '../../components/Tables/Table'
import { TableBody } from '../../components/Tables/TableBody'
import { Thead } from '../../components/Tables/Thead'
import { useCategoriesList } from '../../hooks/Catgories/useCategoriesList'

import { PlusIcon } from '@heroicons/react/solid'
import 'sweetalert2/dist/sweetalert2.css'
import { ButtonLinkCircle } from '../../components/Buttons/ButtonLinkCircle'
import { Pagination } from '../../components/Pagination/Pagination'
import { TableCell } from '../../components/Tables/TableCell'
import { TableHeadCell } from '../../components/Tables/TableHeadCell'

export const CategoriesPage = () => {
  const [page, setPage] = useState<number>(0)

  const { t } = useTranslation()

  const { categories, getCategories, pages } = useCategoriesList()

  const handlePage = (newPage: number) => {
    setPage(newPage)
  }

  useEffect(() => {
    getCategories({ page, search: '' })
  }, [page])

  return (
    <Card className='grow flex flex-col  gap-y-2'>
      <div className='flex justify-between items-center p-4 border-b mb-5'>
        <div>
          <h1 className='text-3xl font-bold uppercase'>{t('categories')}</h1>
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
            <TableHeadCell>{t('Website')}</TableHeadCell>
          </tr>
        </Thead>
        <TableBody>
          {categories.map((item) => (
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
              <TableCell className='text-center'>
                {item.isEnableEcommerce === 1 ? (
                  <BadgeGreen children={`Si`} />
                ) : (
                  <BadgeRed children={`No`} />
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
