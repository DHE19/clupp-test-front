import { useEffect,useContext } from "react"
import {AuthContext} from "../context/authContext"
import MetaHead from "../components/metaHead"
import Navbar from "../components/navbar"
import { useRouter } from "next/router"
import FormNewVehicle from "../components/addVehicle/formNewVehicle"

const AddVehicle = () => {
    const {user} = useContext(AuthContext);
    const router = useRouter();
    useEffect(() => {
        if(!user){
            router.push('/')
        }
    }, [user,router])

    return (
        <div className="container mx-auto">
            <MetaHead title='Clipp - Add New Vehicle'/>
            <Navbar/>
            {user ? <FormNewVehicle/>: <h2>No tiene los permisos</h2>}
        </div>
    )
}

export default AddVehicle;
