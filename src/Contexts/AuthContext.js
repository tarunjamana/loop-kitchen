import React,{useContext,useState} from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';

const AuthContext = React.createContext();


export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider =({children}) => {
    const [isLoggedIn,setIsLoggedIn] = useLocalStorage(false,"isLoggedIn")

    

    return(
        <AuthContext.Provider value={{isLoggedIn , setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
} 