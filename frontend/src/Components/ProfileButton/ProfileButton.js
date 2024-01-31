import "./ProfileButton.css"
import { useAuth } from "../../Context/AuthContext"
import { useNavigate } from "react-router-dom"

const ProfileButton = () => {
    const navigate= useNavigate()
    const {username} = useAuth()

    return(
        <button className="profile-button-header" onClick={() => navigate("/profile")}>
            <span className="username-profile-button">{username}</span>
        </button>
    )
}

export default ProfileButton