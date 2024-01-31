import "./SecondaryIconButton.css"

const SecondaryIconButton = ({text, icon, onClick}) => {
    return(
        <button className="log-in-out-button" onClick={onClick}>{icon} {text} </button>
    )
}

export default SecondaryIconButton