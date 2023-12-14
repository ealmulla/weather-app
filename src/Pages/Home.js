import "./Home.css"
import ThemeToggleButton from "../Components/ThemeToggleButton.js/ThemeToggleButton"
import Header from "../Components/header/Header"

const Home = () => {
    return(
         <div className="home">
            <Header> </Header>
            home page
            <ThemeToggleButton/>
        </div>
    )
}

export default Home;