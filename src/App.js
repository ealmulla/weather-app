import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import { useTheme } from './Context/ThemeContext';
import Home from './Pages/Home';

function App() {
  const {theme} = useTheme();

  return (
    <div id="App" className={theme}>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
