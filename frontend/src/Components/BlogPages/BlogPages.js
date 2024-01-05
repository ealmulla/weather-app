import "./BlogPages.css"

const BlogPages = ({picture, title, content}) => {
    return(
        <div className="blog-page-layout">
            <h1 className="blog-page-title">{title}</h1>
            <img src={picture} className="blog-image"/>
            <p className="blog-content">{content}</p>         
        </div>
    )
}

export default BlogPages;