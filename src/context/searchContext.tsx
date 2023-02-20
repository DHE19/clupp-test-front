import { stringify } from 'querystring';
import React, { FC } from 'react';


interface IProps {
    children?:React.ReactNode;
}
export const initialState: IStateSearch = {parameters:{} };


export const SearchContext = React.createContext(initialState);

const SearchContextProvider:FC<IProps> = ({children}) => {
    const [state, setState] = React.useState<ISearchParameters>({});

    return (
        <SearchContext.Provider value={{ parameters:state,setSearch: (search) => setState(search) }}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchContextProvider;