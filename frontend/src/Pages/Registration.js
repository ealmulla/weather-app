import "./Registration.css"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useState } from "react";
import AuthForm from "../Forms/AuthForm";
import axios from "axios"

const Registration = () => {
    const [error, setError] = useState()

    const navigate = useNavigate()
    const {setUserId, setUsername} = useAuth()

    const  onSubmit = async (e, email, password) => {
        e.preventDefault(); 

       const dataToSend = {
        "email" : email,
        "paasword" : password
       }

       console.log(dataToSend)

       axios.post("http://localhost:8000/users/register", dataToSend)
       .then((res)=> {
        setUserId(res.data.id)
        setUsername(res.data.username)
        localStorage.setItem("userId", res.data.id)
        localStorage.setItem("username", res.data.username)
        navigate("/")
       })
       .catch((err) => {
        setError(err.response.data.detail)
       })

    }

    return(
        <div className="registration">
            {error && <div className="login-error text-label">{error}</div>}
            <AuthForm onSubmit={onSubmit} formLabel="Sign Up"/>
        </div>
    )
}

export default Registration;