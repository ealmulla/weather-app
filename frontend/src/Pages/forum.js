import './forum.css'
import plus from '../Assets/plus.png'

const Forum = () => {
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
                <button className='forum-button'>
                    <img src={plus}/>
                </button>
            </div>

        </div>
    )
}

export default Forum;