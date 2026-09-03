import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface Props{
    children: React.ReactNode;
}
export default function ProtectedRoute({children}:Props){
    const {loading, isAuthentcated} = useAuth();
    if(loading){
        return(
            <div className="flex min-h-screen items-center justify-center">
                <p className="text-gray-500">Cargando...</p>
            </div>
        );
    }
    if(!isAuthentcated){
        return <Navigate to="/" replace/>
    }
    return <>{children}</>
}