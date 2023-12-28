import "./Preview.css"
import arrow from "../../Assets/arrow.png"
import ImageButton from "../ImageButton/ImageButton"

const Preview = ({tittle,content}) => {
    return(
        <div className="preview">
            <tittle className="preview-tittle">{tittle}</tittle>
            <div className="arrow-positioning"> 
                <p className="preview-content">{content}</p>
                <ImageButton imageSrc={arrow} className={"arrow"} />
            </div>
        </div>
    )

}

 export default Preview