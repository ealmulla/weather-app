import "./Login.css"


const Login = () => {
    return(
        <div className="login">

            <div className="input-box">
                <form>
                    <h1>LOGIN:</h1>
                    <input className="box-input" placeholder=" Email"></input>
                    <input className="box-input" placeholder=" Password"></input>
                    <button className="confirm-button">Confirm</button>
                </form>
                
            </div>
        </div>
    )
}

export default Login;