import "./Registration.css"


const Registration = () => {
    return(
        <div className="registration">
            
            <div className="input-box">
                <form>
                    <h1>SIGN UP:</h1>
                    <input className="registration-input" placeholder=" Full name"></input>
                    <input className="registration-input" placeholder=" Email"></input>
                    <input className="registration-input" placeholder=" Password"></input>
                    <input className="registration-input" placeholder=" Confirm password"></input>
                    <button className="confirm-button">Confirm</button>
                </form>
                
            </div>
        </div>
    )
}

export default Registration;