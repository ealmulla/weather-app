import "./Registration.css"
import Header from "../Components/header/Header";


const Registration = () => {
    return(
        <div className="registration">
            <div className="registration-header">
                <Header ></Header>
            </div>
            
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