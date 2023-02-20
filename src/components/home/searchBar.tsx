import { useContext, useState } from "react";
import { SearchContext } from "../../context/searchContext";
import { initialState } from "../../context/searchContext";
import {CloseCircle} from '@styled-icons/ionicons-solid'

const SearchBar = () => {
    const [search, setNewSearch] = useState<ISearchParameters>({brand:'',model:''})
    const {setSearch,parameters} = useContext(SearchContext);

    const handleSearch = () =>{
        const sendData= {brand: search.brand?.toLocaleLowerCase(), model: search.model?.toLocaleLowerCase(), year: search.year}
        if(setSearch) setSearch(sendData);
    }

    const handleRemoveSearch = ( ) =>{
        if(setSearch) setSearch(initialState.parameters);
        setNewSearch({brand:'',model:''});
    }

    return (
        <div className="my-5 lg:px-10">
            <h1 className="text-center text-3xl font-semibold my-2">Encuentra El Carro Que Buscas</h1>
            <div className="featured-search-card ">
                <div className="flex flex-col w-full lg:w-fit ">
                    <label className="text-lg ml-2 font-light">Marca</label>
                    <input 
                     className="input-form-search"
                     type="text"
                     placeholder="¿Cual es la marca?"
                     value={search.brand} 
                     onChange={ (e) => setNewSearch({...search,brand:e.target.value.trim()})}
                     />
                </div>
                <div className="flex flex-col w-full lg:w-fit">
                    <label className="text-lg ml-2 font-light">Modelo</label>
                    <input 
                     className="input-form-search"
                     type="text"
                     placeholder="¿Cual es el modelo?"
                     value={search.model} 
                      onChange={ (e) => setNewSearch({...search,model: e.target.value.trim()})}/>
                </div>
                <div className="flex flex-col w-full lg:w-fit">
                    <label className="text-lg ml-2 font-light">Año</label>
                    <input 
                     className="input-form-search"
                     type="number"
                     placeholder="¿Cual es el año?"
                     onChange={ (e) => setNewSearch({...search, year: parseInt(e.target.value)})}
                     />
                </div>
                <div className="flex gap-2 lg:flex-row flex-col w-full lg:w-fit">
                    <button className="btn-2" onClick={handleSearch}>Buscar</button>
                    {
                        parameters !== initialState.parameters && <button className="btn-2" onClick={handleRemoveSearch}><CloseCircle size={23} /></button>
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchBar
