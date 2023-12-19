const ImageButton = ({imageSrc, onClickHandle, className}) => {
    return(
        <button onClick={onClickHandle} className={className}>
            <img src={imageSrc} alt="Button image" className={className}/>
        </button>
    )
}

export default ImageButton;