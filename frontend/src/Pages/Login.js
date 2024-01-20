import "./Login.css"
import AuthForm from "../Forms/AuthForm"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { useAuth } from "../Context/AuthContext"

const Login = () => {
    const navigate = useNavigate()
    const [error, setError] = useState()

    const[email,setEmail]= useState("")
    const[password, setPassword] = useState("")

    const {setUserId, setUsername} = useAuth()
    const onSubmit = async (e, email, password) => {
        e.preventDefault()

        const dataToSend = {
            "email": email,
            "password": password
        }

        axios.post("http://localhost:8000/users/login", dataToSend)
        .then( (res) => {
            setUsername(res.data.username)
            setUserId(res.data.id)
            localStorage.setItem("userId", res.data.id)
            localStorage.setItem("username",res.data.username)
            navigate("/")
        })
        .catch( (err) => {
            setError(err.response?.data?.detail || err.message || "An Unknown error occured")
        })
    }

    return(
        <div className="login">

            <div className="input-box">
                <form className="login-form" onSubmit={(e) => onSubmit(e, email, password)}>
                    <h1>LOGIN:</h1>
                    {error && <div className="login-error text-label">{error}</div>}
                    <input 
                    id="email-adress"
                    name="email"
                    type="email"
                    className="box-input"
                    placeholder=" Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                    <input 
                    id="password-adress"
                    name="password"
                    type="password"
                    className="box-input" 
                    placeholder=" Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                    <button className="confirm-button" type="submit">Confirm</button>
                </form>
                
            </div>
        </div>
    )
}

export default Login;