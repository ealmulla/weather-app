import "./Preview.css"
import arrow from "../../Assets/arrow.png"
import ImageButton from "../ImageButton/ImageButton"
import { Navigate, useNavigate } from "react-router-dom"

const Preview = ({tittle,content,path}) => {

    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate(path)
    }
    return(
        <div className="preview">
            <tittle className="preview-tittle">{tittle}</tittle>
            <div className="arrow-positioning"> 
                <p className="preview-content">{content}</p>
                <ImageButton imageSrc={arrow} className={"arrow"} onClickHandle={handleButtonClick} ></ImageButton>
            </div>
        </div>
    )

}

 export default Preview