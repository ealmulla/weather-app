import "./Home.css"
import ThemeToggleButton from "../Components/ThemeToggleButton.js/ThemeToggleButton"
import Header from "../Components/header/Header"
import Search from "../Components/Search/Search"

const Home = () => {
    const handleOnsearchChange  = (searchData) => {
        console.log(searchData)
    }
    return(
         <div className="home">

            home page
            <ThemeToggleButton/>
            <Search
            onSearchChange={handleOnsearchChange}></Search>
        </div>
    )
}

export default Home;