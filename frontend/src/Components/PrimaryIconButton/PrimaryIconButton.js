import "./PrimaryIconButton.css"

const PrimaryIconButton = ({text, icon, onClick}) =>{
    return <button className="primaryIconButton" onClick={onClick}>{icon}{text}</button>
}

export default PrimaryIconButton