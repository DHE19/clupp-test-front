/* eslint-disable @next/next/no-img-element */
import { FC, FormEvent } from "react"
import { useRouter } from "next/router"
import { useState } from "react"
import { signUp } from "../../services/firebase/auth"
import { checkEmail, checkPassword, checkConfirmPassword} from "../../services/formsValidator";

interface IProps {
    showSignIn(change:boolean):void;
}

const initialErros: ISignUpErrors ={password:null, confirmPassword:null,email:null}
const SignUp:FC<IProps> = ({showSignIn}) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [errors, setErrors] = useState<ISignUpErrors>(initialErros);
    const avatar = "https://www.pngmart.com/files/21/Account-Avatar-Profile-PNG-Clipart.png"
    const router = useRouter()

    const checker = ():boolean =>{
        setErrors(initialErros);
        if(!checkEmail(email)) setErrors({...errors,email:'correo invalido'})
        if(!checkPassword(password)) {setErrors({...errors,password:'require 6 caracteres'});}
        if(!checkConfirmPassword(password,confirmPassword)) setErrors({...errors,confirmPassword:'no coinciden las contraseñas'})
        return errors === initialErros;
    }
    const handleForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(checker()){
            const {error } = await signUp(email, password);
            if (error) return console.log(error)
            return router.push("/")
        }
    }
    return (
        <div className="flex flex-col gap-5 justify-center items-center min-h-[90vh] ">
            <h1 className="text-4xl font-bold">Crear Cuenta</h1>
            <div className="featured-form-card w-full md:w-2/3 lg:w-1/2">
                <form onSubmit={handleForm} className="flex flex-col gap-5 p-4">
                    <div className="bg-gray-300 w-32 mx-auto rounded-full border-4 border-white shadow-md">
                            <img src={avatar} alt="avatar" className="w-full" />
                        </div>
                        <input className="input-form" onChange={(e) => setEmail(e.target.value.trim().toLowerCase())} required type="email" name="email" id="email" placeholder="email" />
                            {errors.email && <span className="text-red-500">{errors.email}</span>}                       
                        <input className="input-form" onChange={(e) => setPassword(e.target.value.trim().toLowerCase())} required type="password" name="password" id="password" placeholder="password" />
                            {errors.password && <span className="text-red-500">{errors.password}</span>}                       
                        <input className="input-form" onChange={(e) => setConfirmPassword(e.target.value.trim().toLowerCase())} required type="password" name="repeat-password" id="repeat-password" placeholder="Repeat password" />
                            {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword}</span>}                       
                    <button type="submit" className="btn">Crear cuenta</button>
                    <label className="text-center">
                        Ya tienes cuenta?
                        <span className="text-blue-500 cursor-pointer"
                        onClick={() => showSignIn(!true)}>
                            {" Inicia Sessión"}
                        </span>
                    </label>
                </form>
            </div>
        </div>

    );
}

export default SignUp;
