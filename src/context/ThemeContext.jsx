import { createContext, useState, useEffect} from "react";

export const ThemeContext = createContext();


export function ThemeProvider({children}) {
    const[theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme")
        return savedTheme || "light"
    })

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === "light" ? "dark" : "light"
        )
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)

        if(theme === "dark"){
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }

    }, [theme])

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}   