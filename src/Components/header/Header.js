import "./Header.css"
import ThemeToggleButton from "../ThemeToggleButton.js/ThemeToggleButton";
import logo from "/Users/school/weather-app/src/Assets/logo.png"


const Header = () => {
    return(
        <div className="header">
            <img src={logo} className="header-logo" alt="Logo"/>
            <div className="header-toggle">
                <ThemeToggleButton />
            </div>
            <input className="search-bar"></input>
            <button></button>
        </div>
    )
}

export default Header;