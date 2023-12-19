import "./Login.css"
import Header from "../Components/header/Header";


const Login = () => {
    return(
        <div className="login">

            <div className="input-box">
                <form>
                    <h1>LOGIN:</h1>
                    <input className="registration-input" placeholder=" Email"></input>
                    <input className="registration-input" placeholder=" Password"></input>
                    <button className="confirm-button">Confirm</button>
                </form>
                
            </div>
        </div>
    )
}

export default Login;