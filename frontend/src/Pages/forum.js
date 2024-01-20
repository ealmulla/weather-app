import './forum.css'
import plus from '../Assets/plus.png'
import Post from '../Components/Post/Post'
import { useState } from 'react'
import ImageButton from '../Components/ImageButton/ImageButton'

const Forum = () => {
    /* craeting a list to put posts in */
    const [posts, setPosts] = useState([])
    const [addPost, setAddPost] = useState(false)
    /* so the user can input their own title and content*/
    const [newPostTitle, setNewPostTitle] = useState('')
    const [newPostContent, setNewPostContent] = useState('')

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
            {addPost && (
                <div className='user-post-input'>
                    <input
                    className='title-input'
                    type='text'
                    placeholder='Enter title'
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                    />
                    <textarea 
                    className='content-input'
                    placeholder='Enter content'
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}/>
                    <div className='input-line'></div>
                    <button onClick={handleAddPost} className='post-confirmation'>Confirm</button>

                </div>
            )}

            {/* like a for loop */
            posts.map((post, index) => (
                <Post key={index} title={post.title} content={post.content}/>
            ))}
            <Post
            title="no"
            content="hi"
            />
        </div>
    )
}

export default Forum;