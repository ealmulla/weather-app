import "./Registration.css"
import Header from "../Components/header/Header";


const Registration = () => {
    return(
        <div className="registration">  
            <Header></Header>
            <h1>registration</h1>
            <div className="registration-box">
                <form>
                    <input className="registration-input" placeholder=" Full name"></input>
                    <input className="registration-input" placeholder=" Email"></input>
                    <input className="registration-input" placeholder=" Password"></input>
                    <input className="registration-input" placeholder=" Confirm password"></input>
                </form>
            </div>
        </div>
    )
}

export default Registration;