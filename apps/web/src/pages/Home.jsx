import Navbar from "../components/Navbar";
import "../styles/pageStyles/home.css"

function Home(){
    return(
        <>
            <Navbar/>
            <div>
                <div className="hero">
                    <div className="hero-content">
                        <h1>Welcome to Our Site</h1>
                        <p>Your motivational and mental well-being partner.</p>
                        <p>Join us to grow and thrive together.</p>
                    </div>
                </div>

                <div className="content">
                    {/* Your other page content here */}
                    <h2>About Us</h2>
                    <p>More detailed info and content goes here...</p>
                </div>
            </div>
        </>
    )
}

export default Home;