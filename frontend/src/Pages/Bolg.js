import "./Blog.css"
import Preview from "../Components/Preview/Preview";

const Blog = () => {
    return(
        <div className="blog">
            <h1 className="nav-header">topics</h1>
            <div className="line-1"></div>
            <h2>our resources</h2>
            /* the diffrent topics available */
            <div className="nav-preview">
                <div className="line-2">
                <Preview 
                tittle={"Tips to Help Manage Your Pollen Allergies."}
                content={"Nulla semper augue ac dolor mollis fringilla. Vivamus mattis magna et fermentum hendrerit. Vestibulum sit amet diam a arcu suscipit condimentum."}
                path={"/pollen"}
                />
                </div>
                <div className="line-2">
                <Preview 
                tittle={"Tips to Help Manage Your Asthma."}
                content={"Nulla semper augue ac dolor mollis fringilla. Vivamus mattis magna et fermentum hendrerit. Vestibulum sit amet diam a arcu suscipit condimentum."}
                />
                </div>
                <Preview 
                tittle={"Lorem ipsum dolor sit amet adipiscing elit."}
                content={"Nulla semper augue ac dolor mollis fringilla. Vivamus mattis magna et fermentum hendrerit. Vestibulum sit amet diam a arcu suscipit condimentum."}
                />
                <Preview 
                tittle={"Lorem ipsum dolor sit amet adipiscing elit."}
                content={"Nulla semper augue ac dolor mollis fringilla. Vivamus mattis magna et fermentum hendrerit. Vestibulum sit amet diam a arcu suscipit condimentum."}
                />
            </div>
            
        </div>
    )
}

export default Blog;