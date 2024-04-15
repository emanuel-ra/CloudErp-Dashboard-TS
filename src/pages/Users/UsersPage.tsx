import { useEffect, useId, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../components/Buttons/Button'
import { ButtonLinkCircle } from '../../components/Buttons/ButtonLinkCircle'
import { Card } from '../../components/Card'
import { PeoplePlusIcon } from '../../components/Icons/PeopleIcon'
import { SearchCircle } from '../../components/Icons/SearchIcon'
import { TextInput } from '../../components/Inputs/TextInput'
import { Pagination } from '../../components/Pagination/Pagination'
import { Table } from '../../components/Tables/Table'
import { TableBody } from '../../components/Tables/TableBody'
import { TableCell } from '../../components/Tables/TableCell'
import { TableHeadCell } from '../../components/Tables/TableHeadCell'
import { Thead } from '../../components/Tables/Thead'
import { useUsersList } from '../../hooks/Users/useUsersList'

export const UsersPage = () => {
  const { t } = useTranslation()
  const searchInputId = useId()  
  const [page, setPage] = useState<number>(0);
  const { users, getUsers, pages } = useUsersList()

  const handleSearch = () => {
    const search = (document.getElementById(searchInputId) as HTMLInputElement)
      .value;   
    getUsers({page:0,search})
    setPage(0)
  };
  
  const handlePage = (newPage:number) => {
    setPage(newPage)
  }

  useEffect(() => {
    getUsers({ page, search: '' });
  }, [page]);

  return (
    <Card className={`grow flex flex-col  gap-y-2`}>
      <div className='flex justify-between items-center p-4 border-b mb-5'>
        <h1 className='text-3xl font-bold capitalize'>{t('list of users')}</h1>
        <ButtonLinkCircle path='/users/create'>
          <PeoplePlusIcon />
        </ButtonLinkCircle>
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
          <TableHeadCell>{t('id')}</TableHeadCell>
          <TableHeadCell>{t('name')}</TableHeadCell>
          <TableHeadCell>{t('username')}</TableHeadCell>
          <TableHeadCell>{t('email')}</TableHeadCell>
          <TableHeadCell>{t('role')}</TableHeadCell>
          <TableHeadCell>{t('status')}</TableHeadCell>
        </Thead>
        <TableBody>
          {users?.map((user) => (
            <tr key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.userName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
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
  );
}
