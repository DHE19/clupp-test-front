/* eslint-disable @next/next/no-img-element */
import { FC, FormEvent } from "react"
import { useRouter } from "next/router"
import { useState } from "react"
import { signIn } from "../../services/firebase/auth"
import { checkEmail } from "../../services/formsValidator";
interface IProps {
    showSignUp(change:boolean):void;
}

const avatar = "https://www.pngmart.com/files/21/Account-Avatar-Profile-PNG-Clipart.png"

const SignIn:FC<IProps> = ({showSignUp}) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const router = useRouter()
    const handleForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log('usuario creado: ',result)
        return router.push("/")
    }
    return (
        <div className="flex flex-col gap-5 justify-center items-center min-h-[90vh] ">
            <h1 className="text-4xl font-bold">Iniciar session</h1>
            <div className="featured-form-card w-full md:w-2/3 lg:w-1/2">
                <form onSubmit={handleForm} className="flex flex-col gap-5 p-4">
                        <div className="bg-gray-300 w-32 mx-auto rounded-full border-4 border-white shadow-md">
                            <img src={avatar} alt="avatar" className="w-full" />
                        </div>
                        <input className="input-form" onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="email" />
                        <input className="input-form" onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                    <button type="submit" className="btn">Iniciar Session</button>
                    <label className="text-center">
                        No tienes cuenta?
                        <span className="text-blue-500 cursor-pointer"onClick={() => showSignUp(true)}>
                            {" Crea una Ya"}
                        </span>
                    </label>
                </form>
            </div>
        </div>

    );
}

export default SignIn;
