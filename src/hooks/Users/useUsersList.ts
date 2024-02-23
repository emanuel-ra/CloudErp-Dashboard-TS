import { useCallback, useRef, useState } from 'react';
import { User } from '../../abstraction/Interfaces/IUsers';
import { GetUsers } from '../../services/Users';

interface Props {
    page:number
    search:string
}
export const useUsersList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [pages, setPages] = useState<number>(0);

    const previousSearch = useRef('null');
    const previousPage = useRef(0);

    const getUsers = useCallback(async ({ page, search }: Props) => {
        const newPage = page +1
        setLoading(true)
        const { totalPages, data } = await GetUsers({ page: newPage, search });
        setUsers(data)
        setPages(totalPages);
        setLoading(false);
        try {
          previousSearch.current = search;
          previousPage.current = newPage;
        } catch (e) {
          throw e;
        } finally {
          setLoading(false);
        }
    },[]);
    
    return { users , getUsers, loading, pages }

}
