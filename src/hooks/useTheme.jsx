import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const useTheme = () => {

    const context = useContext(ThemeContext)


    if (context === undefined) {
        throw new Error('Context Undefined. Make sure to have component accessing context as child of ThemeProvider');
    }


    return context

}