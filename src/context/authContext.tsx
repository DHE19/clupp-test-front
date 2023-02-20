import React, { FC } from 'react';
import { auth } from '../services/firebase/firebaseConfig';
import {onAuthStateChanged,User} from 'firebase/auth';

interface IProps {
    children?:React.ReactNode;
}
const initialState: IAuthState = { user: null };

export const AuthContext = React.createContext(initialState);

const AuthContextProvider:FC<IProps> = ({children}) => {
    const [user, setUser] = React.useState<User | null>(null);
    /* const [loading, setLoading] = React.useState<boolean>(false); */

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user ?? null);
           /*  setLoading(false); */
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;