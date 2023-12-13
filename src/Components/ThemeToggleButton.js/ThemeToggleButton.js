// ThemeToggleButton.js
import "./ThemeToggleButton.css";
import { useTheme } from "../../Context/ThemeContext";

const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();
  
  return <button onClick={toggleTheme}>Toggle theme</button>;
};

export default ThemeToggleButton;
