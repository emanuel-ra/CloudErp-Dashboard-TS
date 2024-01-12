import { Navigate } from "react-router-dom"
import { Layout } from "../setup/Layout"
import { useLoginStore } from "../stores/auth"

export const ProtectedRoutes = ()=>{
    const session = useLoginStore(state => state.session)
    if(!session?.token){
        return <Navigate to={`/login`} />        
    }

    return (<Layout />)
}