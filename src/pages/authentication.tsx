import Navbar from "../components/navbar"

import { useState } from "react"
import SignUp from "../components/authentication/signUp"
import SignIn from "../components/authentication/signIn"
import MetaHead from "../components/metaHead"

//login / logout
const Authentication = () => {
    const [showSignUpMenu, setShowSignUpMenu] = useState<boolean>(false)
    return (
        <div className="container mx-auto px-2">
            <MetaHead title="Iniciar sessión | Crear cuenta" />
            <Navbar/>
            {
            showSignUpMenu ? 
            <SignUp showSignIn={setShowSignUpMenu}/> :
            <SignIn showSignUp={setShowSignUpMenu}/>
            }
        </div>
    )
}

export default Authentication
