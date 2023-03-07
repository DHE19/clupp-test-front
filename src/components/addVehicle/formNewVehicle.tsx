import { FormEvent, useState } from "react"
import axios from 'axios';
import { useRouter } from "next/router";
import { API_URL_VEHICLES } from '../../constants/constants'
const FormNewVehicle = () => {
    const [brand, setBrand] = useState('');
    const [year, setYear] = useState(2023);
    const [model, setModel] = useState('');
    const router = useRouter();
    
    const handleForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
            axios.post(API_URL_VEHICLES,{year,model,brand}).
            then(_res => router.push('/'));
    }



    return (
        <div className="flex flex-col justify-center gap-5 items-center min-h-[90vh] px-2">
            <h1 className="text-4xl font-bold">Agregar Nuevo Carro</h1>
            <div className="featured-form-card w-full md:w-2/3 lg:w-1/2">
                <form onSubmit={handleForm} className='flex flex-col gap-5 p-4'>
                    <input type="text"  className="input-form" name="brand" id="brand" placeholder="Marca"  onChange={e => setBrand(e.target.value.toLowerCase())}/>
                    <input type="text"  className="input-form" name="model" id="model" placeholder="Modelo"  onChange={e => setModel(e.target.value.toLowerCase())}/>
                    <input type="number" value={year}  className="input-form" name="year" id="year" placeholder="Año"  onChange={e => setYear( parseInt(e.target.value))}/>
                    <button className="btn">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default FormNewVehicle
