import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { ReactNode } from "react";

interface Props{
    children: ReactNode;
}
export default function publicRoute({children}:Props){
    const{loading, isAuthenticated} = useAuth();
    if(loading){
        return(
            <div className="flex min-h-screen items-center justify-center">Cargando...</div>
        );
    }
    if(isAuthenticated){
        return <Navigate to="/dashboard" replace/>
    }
    return <>{children}</>
}