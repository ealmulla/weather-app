import { useState } from "react";
import "./Menu.css";
import ImageButton from "../ImageButton/ImageButton";
import  MenuIcon from "../../Assets/MenuIcon.png";
import NavButtons from "./NavButtons/NavButtons.js";

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const InsideMenu = () => {
            return(
                <div>
                    <NavButtons text="Home" path="/"/>
                    <NavButtons text="Blog" path="/Blog"/>
                    <NavButtons text="Home" path="/"/>
                </div>
            )
    } 
    const OpenMenuButton = () => {
        return(
            <ImageButton 
                className="open-menu-button"
                imageSrc={MenuIcon} 
                onClickHandle={() => setIsMenuOpen(!isMenuOpen)}
             />
        )
    }

    return(

        <div className="open-menu-button">
            <OpenMenuButton />
            {isMenuOpen && <InsideMenu/>}
        </div>
    )
}

export default Menu;
