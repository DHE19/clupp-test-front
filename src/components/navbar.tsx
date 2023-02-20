import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import Link from "next/link";
import { logOut } from "../services/firebase/auth";
import {User} from '@styled-icons/heroicons-outline'
import {PowerOff} from '@styled-icons/fa-solid'
import {CarSport} from '@styled-icons/ionicons-solid'


const Navbar = () => {
    const {user} = useContext(AuthContext);

    const handleLogout = () => logOut();
    return (
    <header>
        <nav className='flex justify-between py-4 px-3 items-center'>
            <div>
                <Link href={'/'}>
                    <h1 className="logo">Clupp Vehicles</h1>
                </Link>
            </div>
            <div className='flex gap-2 items-center'>

                {
                    user ? 
                    (
                        <>
                            <Link href={'/addVehicle'} className="add">Nuevo</Link>
                            <Link href={'/'} className="car"><CarSport className="h-7"/></Link>
                            <span className="logout-btn" onClick={handleLogout}>
                                <PowerOff className="font-semibold h-5"/>
                            </span>
                        </>
                    ):
                    <Link href={'/authentication'}>
                            <span className="avatar-login">
                                <User className="font-semibold h-8"/>
                            </span>
                    </Link>
                }

            </div>
        </nav>
    </header>
    )
}

export default Navbar

