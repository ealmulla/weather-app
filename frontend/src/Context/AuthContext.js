import { createContext,useContext, useState } from "react";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)
/* this is so we dont have to import two things constanly */

export const AuthProvider =({children}) => {
    const [userId, setUserId] = useState(localStorage.getItem("userId"))
    const [username, setUsername] = useState(localStorage.getItem("username"))
    /* this is so when we refresh the page the data doesnt get lost */

    /* this is so the user can logout*/
    function logout() {
        localStorage.removeItem("userId")
        localStorage.removeItem("username")
        setUserId(null)
        setUsername(null)
    }
    /* refer to Integrating the login _ register pages with backend 
    presentaion page 9 for explainsion */
    return(
        <AuthContext.Provider value={{userId,setUserId, username, setUsername, logout}}>
            {children}
        </AuthContext.Provider>

    );

}
