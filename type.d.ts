
interface IStateSearch{
    parameters: ISearchParameters;
    setSearch?(search:ISearchParameters):void;
}
interface ISearchParameters{
    brand?:string;
    model?:string;
    year?:number;
}
interface IVehicle {
    id:string;
    brand:string;
    model:string;
    year:number;
    deleted:boolean;
    timestamp:number;
}

interface IAuthState {
    user: User | null;
}

interface ISignUpErrors{
    email:string | null;
    password:string | null;
    confirmPassword:string |null;
}