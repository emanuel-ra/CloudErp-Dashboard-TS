import { useEffect, useId, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../components/Buttons/Button'
import { Card } from '../../components/Card'
import { SearchCircle } from '../../components/Icons/SearchIcon'
import { TextInput } from '../../components/Inputs/TextInput'
import { Pagination } from '../../components/Pagination/Pagination'
import { Table } from '../../components/Tables/Table'
import { TableBody } from '../../components/Tables/TableBody'
import { TableCell } from '../../components/Tables/TableCell'
import { TableHeadCell } from '../../components/Tables/TableHeadCell'
import { Thead } from '../../components/Tables/Thead'
import { useProductsList } from '../../hooks/Products/useProductsList'
import { NumberFormat } from '../../utils/Formats'

export const ProductsPage = () => {
  const [page, setPage] = useState<number>(0)

  const { t } = useTranslation()

  const searchInputId = useId()

  const { products, getProducts, pages } = useProductsList()

  const handleSearch = () => {
    const search = (document.getElementById(searchInputId) as HTMLInputElement)
      .value
    getProducts({ page: 0, search })
    setPage(0)
  }

  const handlePage = (newPage: number) => {
    setPage(newPage)
  }

  useEffect(() => {
    getProducts({ page, search: '' })
  }, [page])

  return (
    <Card className='grow flex flex-col  gap-y-2'>
      <h1>List of Products</h1>
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
            <TableHeadCell>{t('code')}</TableHeadCell>
            <TableHeadCell>{t('name')}</TableHeadCell>
            <TableHeadCell className='text-right'>{t('price')}</TableHeadCell>
            <TableHeadCell className='text-right'>
              {t('price wholesale')}
            </TableHeadCell>
            <TableHeadCell className='text-right'>
              {t('price stockist')}
            </TableHeadCell>
            <TableHeadCell className='text-right'>
              {t('price vip')}
            </TableHeadCell>
            <TableHeadCell className='text-right'>
              {t('price box')}
            </TableHeadCell>
          </tr>
        </Thead>
        <TableBody>
          {products.map((item) => (
            <tr key={item.id}>
              <TableCell>{item.code}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell className='text-right'>
                {NumberFormat(item.price)}
              </TableCell>
              <TableCell className='text-right'>
                {NumberFormat(item.priceWolesale)}
              </TableCell>
              <TableCell className='text-right'>
                {NumberFormat(item.priceStockist)}
              </TableCell>
              <TableCell className='text-right'>
                {NumberFormat(item.priceVip)}
              </TableCell>
              <TableCell className='text-right'>
                {NumberFormat(item.priceBox)}
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
