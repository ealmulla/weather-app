import "./Header.css"
import ThemeToggleButton from "../ThemeToggleButton.js/ThemeToggleButton";
import logo from "../../Assets/logo.png"
import Menu from "../menu/Menu";
import {useAuth} from "../../Context/AuthContext"

const Header = () => {
    const {username, logout} = useAuth()
    return(
        <div className="header">
            <img src={logo} className="header-logo" alt="Logo"/>
            <div className="header-toggle">
                <ThemeToggleButton />
            </div>
            <input className="search-bar"></input>
            <button className="sign-up-header"> sign up</button>
            <Menu className="homepage-menu"></Menu>
            {}
        </div>
    )
}

export default Header;