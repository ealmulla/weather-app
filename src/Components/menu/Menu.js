import "./Menu.css";
import NavButtons from "./NavButtons/NavButtons.js";

const Menu = () => {
    
    return(
        <div>
            <NavButtons text="Home" path="/"/>
            <NavButtons text="Blog" path="/Blog"/>
            <NavButtons text="Home" path="/"/>
        </div>
    )
}

export default Menu;
