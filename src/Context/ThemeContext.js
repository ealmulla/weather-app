import { useState, createContext, useContext, useEffect } from "react";

const ThemeContext = createContext()

/* this lets you import the theme alot easier later not to sure how*/
export const useTheme = () => (ThemeContext); 

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState();
    /*creating toggle function*/
    const toggleTheme = () => {
        const newTheme = theme =="dark-theme" ? "light theme" : "dark theme"
        //same as "if its dark theme change it to light else change to dark theme"
        // so dark them is the defualt 
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
    }

useEffect(() => {

},[])

    return(
        <ThemeContext.provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.provider>
    )
} 