import logo from './logo.svg';
import './App.css';
import { useTheme } from './Context/ThemeContext';

function App() {
  const {theme} = useTheme();

  return (
    <div id="app" className={theme}>
      
    </div>
  );
}

export default App;
