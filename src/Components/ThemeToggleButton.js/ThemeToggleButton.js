// ThemeToggleButton.js
import "./ThemeToggleButton.css";
import { useTheme } from "../../Context/ThemeContext";

const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();
  
  return <div class="toggle-theme-button">
    <button onClick={toggleTheme} className="theme-button-cd">Toggle theme</button>
  <label class="theme-button-label" for="fs">
      <div class="theme-button-inner"></div>
      <div class="theme-button-switch"></div>
  </label>
</div>

  
};

export default ThemeToggleButton;
