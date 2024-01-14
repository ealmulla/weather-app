import './Post.css'
import profilePic from '../../Assets/userCircleicon.png'

const Post = ({content, title}) => {
    return(
        <div className="post">
            <div className='user-info'>
                <img className='profile-pic' src={profilePic}/>
                <p>@username</p>
            </div>
            <div className='post-conent'>
                <h1 className='post-tittle'>{title}</h1>
                <p lassNamepost-content> {content}</p>
            </div>
        </div>
        
    )
}

export default Post;