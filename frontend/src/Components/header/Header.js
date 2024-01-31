import "./Header.css"
import ThemeToggleButton from "../ThemeToggleButton.js/ThemeToggleButton";
import logo from "../../Assets/logo.png"
import Menu from "../menu/Menu";
import {useAuth} from "../../Context/AuthContext"
import PrimaryIconButton from "../PrimaryIconButton/PrimaryIconButton";
import SecondaryIconButton from "../SecondaryIconButton/SecondaryIconButton"
import ProfileButton from "../ProfileButton/ProfileButton"
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const {username, logout} = useAuth()

    return(
        <div className="header">
            <img src={logo} className="header-logo" alt="Logo"/>
            <div className="header-toggle">
                <ThemeToggleButton />
            </div>
            <input className="search-bar"></input>

            
            {!username && <PrimaryIconButton  className="primaryIconButton" text="Sign in" onClick={() => navigate("/login")} />}
            {!username && <SecondaryIconButton text="Sign up" onClick={() => navigate("/registration")}/>}
            {username && <ProfileButton/>}
            {username && <SecondaryIconButton text="Sign out" onClick={() => {logout(); navigate("/login")}} />}
            <Menu className="homepage-menu"></Menu>
        </div>
    )
}

export default Header;