import { FC , useContext, useEffect, useState} from "react";
import Vehicle from "./vehicle"
import {AuthContext} from '../../context/authContext';
import axios from 'axios';
import { SearchContext } from "../../context/searchContext";
import { initialState } from "../../context/searchContext";

interface Iprops{data: IVehicle[];}
const Vehicles:FC<Iprops> = ({data}) => {
    const [vehicles, setVehicles] = useState(data);
    const {user} = useContext(AuthContext);
    const {parameters} = useContext(SearchContext)


   
    const deleteVehicle = (id:string) =>{
        axios.delete(`https://clupp-server.herokuapp.com/vehicle/${id}`).
        then(() => setVehicles(v => v.filter(i => i.id !== id))).
        catch(e => console.log(e));
    }

    const hanldeSearch = () =>{
        if(initialState.parameters === parameters){
            setVehicles(data);
            return;
        }
        const {year,model,brand} = parameters;
        let newVehicles = data
        newVehicles = brand ? newVehicles.filter(v => v.brand === brand) : newVehicles;
        newVehicles = model ? newVehicles.filter(v => v.model === model) : newVehicles;
        newVehicles = year ? newVehicles.filter(v => v.year === year) : newVehicles;
        setVehicles(newVehicles);
    }

    useEffect(() => {
        hanldeSearch();
    }, [parameters]);
    
    return (
        vehicles.length  ?
            <div className="grid  grid-cols-1 lg:grid-cols-3 gap-5 justify-center px-2 py-5 lg:px-10">
                {
                    vehicles.filter(i => !i.deleted).map(i => (
                        <Vehicle 
                        key={i.id}
                        model={i.model} id={i.id} 
                        logged={user ? true : false  } 
                        handleDelete={deleteVehicle} 
                        brand={i.brand} year={i.year} />))
                }
            </div> : 
            <h2 className="text-center text-xl">No se encontro Ningun carro</h2>
    )
}

export default Vehicles
