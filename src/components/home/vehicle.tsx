/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { getRandomImage } from "../../services/img/imagesCars";
import {Trash} from '@styled-icons/ionicons-solid'
interface IProps {
    id:string;
    model:string;
    brand:string;
    year: number;
    logged: boolean;
    handleDelete(id:string):void;
}


const Vehicle:FC<IProps> = ({handleDelete,model,year,brand,logged,id}) => {

    return (
        <div className="featured-car-card">
            <div className="w-full h-[180px]">
                <img src={getRandomImage()} alt="car" className="rounded-lg object-cover h-full w-full"/>
            </div>
            <h3 className="capitalize">{model}</h3>
            <div className="flex justify-between">
                <p className="capitalize">{brand}</p>
                <p>{year}</p>
            </div>
            <div className=" border-t-[1px] border-gray-300 flex justify-between pt-2 mt-3">
                {logged && <button className="btn w-full flex items-center justify-center gap-2" onClick={() => handleDelete(id)}>
                    <Trash size={20}/>
                    Eliminar
                </button>}
            </div>
        </div>
    )
}

export default Vehicle
