import Navbar from "../components/Navbar";
import "../styles/pageStyles/home.css"

function Home(){
    return(
        <>
            <div className="hero">
                <div className="hero-content">
                    <h1>Discover Your Path to Autonomy</h1>
                    <p>Build self-motivation and make decisions according to your own rules. Take our quiz to get personalized recommendations.</p>
                </div>
                <div className="hero-buttons">
                    <button>Start Your Journey</button>
                    <button>Learn More</button>
                </div>
            </div>

            <div className="content">
                <div className="content-description">
                    <h2>Why Choose Autonomy Path?</h2>
                    <p>Discover the tools and insights you need to make decisions according to your own rules.</p>
                </div>
                <div className="content-cards">
                    <div className="card">
                        <h3>Personalized Path</h3>
                        <p>Get customized recommendations based on your unique answers and goals.</p>
                    </div>
                    <div className="card">
                        <h3>Self-Awareness</h3>
                        <p>Understand your decision-making patterns and build stronger self-motivation.</p>
                    </div>
                    <div className="card">
                        <h3>Track Progress</h3>
                        <p>Monitor your journey toward autonomy with actionable insights and exercises.</p>
                    </div>
                </div>
            </div>

            <div className="take-quiz">
                <div className="take-quiz-container">
                    <div className="take-quiz-content">
                        <h2>Ready to Start Your Journey?</h2>
                        <p>Take our comprehensive quiz to receive personalized recommendations for building self-motivation and autonomy.</p>
                        <button>Take the Quiz Now</button>
                    </div>
                </div>  
            </div>

            <div className="community">
                <div className="community-container">
                    <h2>What Our Community Says</h2>
                    <p>Real stories from people on their autonomy journey</p>
                    <br />
                    <div className="community-cards">
                        <div className="community-card">
                            <p>This quiz helped me understand my decision-making patterns and gave me practical steps to build true autonomy in my life.</p>
                            <h5>Sarah Johnson</h5>
                            <p>Entrepreneur</p>
                        </div>
                        <div className="community-card">
                            <p>The personalized recommendations were eye-opening. I finally feel like I'm making decisions based on my own values.</p>
                            <h5>Michael Chen</h5>
                            <p>Software Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;