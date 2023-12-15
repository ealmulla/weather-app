const ImageButton = ({imageSrc, onClickHandle}) => {
    return(
        <button onClick={onClickHandle}>
            <img src={imageSrc} alt="Button image"/>
        </button>
    )
}

export default ImageButton;