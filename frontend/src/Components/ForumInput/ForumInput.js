import './ForumInput.css'
import plus from '../../Assets/plus.png'
import Post from '../../Components/Post/Post'
import { useState, useEffect } from 'react'
import ImageButton from '../../Components/ImageButton/ImageButton'
import axios from 'axios'
import { useAuth } from "../../Context/AuthContext"


const ForumInput = () =>{
    const [addPost, setAddPost] = useState(false)
    /* craeting a list to put posts in */
    const [posts, setPosts] = useState([])
    /* so the user can input their own title and content*/
    const [newPostTitle, setNewPostTitle] = useState('')
    /* allows user to add new data*/  /* eqv is newData*/
    const [newPostContent, setNewPostContent] = useState('')
    const {userId} = useAuth()

    useEffect(() =>{
        axios.get('http://localhost:8000/forum/posts')
        .then(response =>  setPosts([...posts, response.data.posts]))
        .catch(error => console('Error fetching data: ', error))
    },[])

    useEffect(() => {
        if (userId) {
            axios.get(`http://localhost:8000/forum/posts?userId=${userId}`)
            .then(response => {console.log(response.data);})
            .catch(error => console.error("Error fetching data:",error))
        }
    },[userId])

    const handleAddPost = ( ) => {
        // dont post it unless a there is a title and content
        if (newPostTitle.trim() == '' || newPostContent.trim() === ''){
        return;}

        /* genrate new post */
        const newPost = {
            title : newPostTitle,
            content : newPostContent
        }

        /* adding to list */
        setPosts([...posts, newPost])
       
        //clear input after adding post
        setNewPostTitle('')
        setNewPostContent('')
        //close the input form?
        setAddPost(false)
        
    }

    function changeField(event) {
        /* prevents browser refresh */
        event.preventDefault()
        // {console.log("this is the change field one",userId)}
        const localStorageData = localStorage;
        const dataToSend = {
            "user_id": localStorage.userId,
            "title": newPostTitle,
            "content": newPostContent
        }
        axios.post("http://localhost:8000/forum/createPost",dataToSend)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            alert(err)
        })
    }

    

    return(

        <div className='forum'>
            <h1>forum</h1>
            <div className='forum-buttons'>
                <button className='forum-button'>
                    Popular
                </button>
                <button className='forum-button'>
                    Recent
                </button>
                <button className='forum-button'>
                    unanswered
                </button>
                <button className='forum-button'>
                    featured
                </button>
                <ImageButton
                imageSrc={plus}
                className={'forum-button'}
                onClickHandle={() => setAddPost(!addPost)}
                />
                
            </div>
            {/*user input for post */}
                {addPost &&  <form onSubmit={changeField}>
                
                <div className='user-post-input'>
                    {<input
                    className='title-input'
                    type='text'
                    placeholder='Enter title'
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                    maxLength={100}
                    />}
                    {<textarea 
                    className='content-input'
                    placeholder='Enter content'
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    maxLength={2000}
                    />}
                    <div className='input-line'></div>
                    <button 
                    type="submit"
                    onSubmit={handleAddPost}
                    className='post-confirmation'
                    >Confirm</button>

                </div>
                  </form>}
         
            {/* like a for loop */
            posts && posts.map((post, index) => (
                <Post key={index} title={post.title} content={post.content}/>
            ))}

        </div>
    )     
}

export default ForumInput