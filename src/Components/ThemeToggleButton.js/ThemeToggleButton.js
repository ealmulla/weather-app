// ThemeToggleButton.js
import "./ThemeToggleButton.css";
import { useTheme } from "../../Context/ThemeContext";

const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();
  
  return <div class="toggle-theme-container">
    <button onClick={toggleTheme} className="toggle-theme-button">Toggle theme</button>
</div>

  
};

export default ThemeToggleButton;
