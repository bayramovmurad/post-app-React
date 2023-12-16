import { createContext, useContext,useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

import { signOut } from "firebase/auth";

const AppContext = createContext();


export const AppProvider = ({children}) => {
    const [user, isLoading] = useAuthState(auth);

    const handleSignOut = useCallback((e) => {
        e.preventDefault();
        const confirmSignOut = window.confirm("Are you sure you want to sign out?");
        if (confirmSignOut) {
            signOut(auth);
           
        }
        

    }, [user])
    return(
        <AppContext.Provider value={{user,isLoading,handleSignOut}}>
            {children}
        </AppContext.Provider>
    )
}   

export const useGlobalContext = () => {
    return useContext(AppContext)
}