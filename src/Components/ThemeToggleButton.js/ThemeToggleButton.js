import "./ThemeToggleButton.css"
import { useTheme } from "../../Context/ThemeContext"

const ThemeToggleButton = () => {
    const {ToggleTheme} = useTheme();
    return <button onClick={ToggleTheme}> Toggle theme</button>
}

export default ThemeToggleButton