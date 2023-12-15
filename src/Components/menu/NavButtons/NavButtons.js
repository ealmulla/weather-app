import "./NavButtons.css"
import { useNavigate } from "react-router-dom";

const NavButtons = ({text,path}) => {
    const navigate = useNavigate()
    return(
        <button className="nav-link" onClick={() => navigate(path)}> <span className="text-headline">{text} </span> </button>
    )
}

export default NavButtons;