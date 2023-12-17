import { useState } from "react";
import "./Menu.css";
import ImageButton from "../ImageButton/ImageButton";
import  MenuIcon from "../../Assets/MenuIcon.png";
import NavButtons from "./NavButtons/NavButtons.js";



const InsideMenu = () => {
        return(
            <div className="inside-menu">
                <NavButtons text="Home" path="/"/>
                <NavButtons text="Blog" path="/Blog"/>
                <NavButtons text="Login" path="/Login"/>
                <NavButtons text="Registration" path="/Registration"/>
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
