import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import { useTheme } from './Context/ThemeContext';
import Home from './Pages/Home';
import Blog from './Pages/Bolg';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Header from './Components/header/Header';
import Pollen from './Components/BlogPages/Pollen.js'
import Forum from './Pages/forum.js';


function App() {
  const {theme} = useTheme();

  return (
    <div id="App" className={theme}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Registration" element={<Registration/>}/>
        <Route path='/Pollen' element={<Pollen/>}/>
        <Route path='/Forum' element={<Forum/>}/>
      </Routes>
    </div>
  );
}

export default App;
