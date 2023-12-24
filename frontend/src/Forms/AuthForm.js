import "./AuthForm.css"
import { useState } from "react"

const AuthForm = ({onSubmit, formLabel}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        
        <form className="auth-form" onSubmit={(e) => onSubmit(e, email, password)}>
            <h1>SIGN UP:</h1>
            <input 
                className="registration-input" 
                placeholder=" Full name"
                />
            <input 
                className="registration-input"
                id="email"
                name="email" 
                placeholder=" Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            <input
                className="registration-input"
                id="passsowrd"
                type="password"
                name="password"
                placeholder=" Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            <input 
                className="registration-input"
                placeholder=" Confirm password"
                /> 
            <button className="confirm-button">Confirm</button>
        </form>

    )
}

export default AuthForm