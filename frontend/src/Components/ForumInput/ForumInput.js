import './ForumInput.css'
import { useState } from 'react'
import axios from 'axios'
import { useAuth } from "../../Context/AuthContext"


const ForumInput = (fieldName, fieldData, tpye = "small") =>{
    const [isEditing,setIsEditing] = useState(false)
    /* allows user to add new data*/
    const [newData, setNewData] = useState("")
    const {userId} = useAuth()

    function changeField(event) {
        /* prevents browser refresh */
        event.preventDefuat()
        const dataToSend = {
            "user_id": userId,
            [fieldName]: newData
        }
        axios.post("http://localhost:8000/forum/createPost",dataToSend)
        .then((res) => {
            window.location.reload()
        })
        .catch((err) => {
            alert(err)
        })

    }

    return(
        <div >

        </div>
    )
}

