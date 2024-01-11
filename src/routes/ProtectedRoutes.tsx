import { Navigate } from "react-router-dom"
import { Layout } from "../setup/Layout"

export const ProtectedRoutes = ()=>{
    const token = ''

    if(!token){
        return <Navigate to={`/login`} />        
    }

    return (<Layout />)
}