import "./NavButtons.css"
import { useNavigate } from "react-router-dom";

const NavButtons = ({text,path,className}) => {
    const navigate = useNavigate()
    return(
        <button className={className} onClick={() => navigate(path)}> <span className="text-headline">{text} </span> </button>
    )
}

export default NavButtons;