import { useState } from "react";
import "./Menu.css";
import ImageButton from "../ImageButton/ImageButton";
import  MenuIcon from "../../Assets/MenuIcon.png";
import NavButtons from "./NavButtons/NavButtons.js"



const InsideMenu = () => {
        return(
            <div className="inside-menu">
                <NavButtons className="nav-link" text="Home" path="/"/>
                <NavButtons className="nav-link" text="Blog" path="/Blog"/>
                <NavButtons className="nav-link" text="Login" path="/Login"/>
                <NavButtons className="nav-link" text="Registration" path="/Registration"/>
            </div>
        )
} 

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    

    return(

        <div >
            <ImageButton 
                imageSrc={MenuIcon} 
                onClickHandle={() => setIsMenuOpen(!isMenuOpen)}
                className="open-menu-button"
             />
            {isMenuOpen && <InsideMenu/>}
        </div>
    )
}

export default Menu;
