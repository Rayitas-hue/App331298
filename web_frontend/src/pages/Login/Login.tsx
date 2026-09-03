import LoginForm from "../../components/auth/loginForm";
export default function Login()
{
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="w-ful max-wmd rounded-xl bg-white p-8 shadow-xl">
                <div className="mb-8 text-center">
                    <h1 className="text-3x1 font-bold">
                        API EDUCATIVA
                    </h1>
                    <p className="mt-2 text-gary-500">
                        Iniciar Sesión
                    </p>
                </div>
                <LoginForm/>
            </div>
        </div>
    )
}
