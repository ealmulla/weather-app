import "./AuthForm.css"
import { useState } from "react"

const AuthForm = ({onSubmit, formLabel}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        
        <form className="input-box" onSubmit={(e) => onSubmit(e, email, password)}>
            <h1>SIGN UP:</h1>
            <input 
                className="box-input" 
                placeholder=" Full name"
                />
            <input 
                className="box-input"
                id="email"
                name="email" 
                placeholder=" Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            <input
                className="box-input"
                id="passsowrd"
                type="password"
                name="password"
                placeholder=" Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            <input 
                className="box-input"
                placeholder=" Confirm password"
                /> 
            <button className="confirm-button" type="submit">Confirm</button>
        </form>

    )
}

export default AuthForm