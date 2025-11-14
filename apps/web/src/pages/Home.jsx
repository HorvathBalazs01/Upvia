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
                    <a href="self-motivation"><button>Start Your Journey</button></a>
                    <a href="about-us"><button>Learn More</button></a>
                </div>
            </div>

            <div className="content">
                <div className="content-description" style={{paddingBottom: "40px"}}>
                    <h2>Why Choose Autonomy Path?</h2>
                    <p>Discover the tools and insights you need to make decisions according to your own rules.</p>
                </div>
                <div className="content-cards">
                    <div className="card">
                        <div className="value-icon">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#4A6CF7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="9"/>
                                <circle cx="12" cy="12" r="5"/>
                                <circle cx="12" cy="12" r="2"/>
                            </svg>
                        </div>
                        <h3>Personalized Path</h3>
                        <p>Get customized recommendations based on your unique answers and goals.</p>
                    </div>
                    <div className="card">
                        <div className="value-icon">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#4A6CF7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M9 3a3 3 0 0 0-3 3v1a2 2 0 0 0-2 2c0 1.1.9 2 2 2v1a3 3 0 0 0 3 3"/>
                                <path d="M15 3a3 3 0 0 1 3 3v1a2 2 0 0 1 2 2c0 1.1-.9 2-2 2v1a3 3 0 0 1-3 3"/>
                                <path d="M9 3c0 3 0 12 3 12s3-9 3-12"/>
                            </svg>
                        </div>
                        <h3>Self-Awareness</h3>
                        <p>Understand your decision-making patterns and build stronger self-motivation.</p>
                    </div>
                    <div className="card">
                        <div className="value-icon">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#4A6CF7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 17l6-6 4 4 8-8"/>
                                <path d="M14 7h7v7"/>
                            </svg>
                        </div>
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
                        <br />
                        <a href="survey"><button>Take the Quiz Now</button></a>
                    </div>
                </div>  
            </div>

            <div className="community">
                <div className="community-container">
                    <h2>What Our Community Says</h2>
                    <p style={{fontSize: "16px", color: "#6b6b6b", lineHeight: "1.6"}}>Real stories from people on their autonomy journey</p>
                    <br />
                    <div className="community-cards">
                        <div className="community-card">
                            <div className="quote-icon">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g>
                                        <path d="M11 11c-2.21 0-4 1.79-4 4v4h4v-4h2v-2c0-2.21-1.79-4-4-4zm10 0c-2.21 0-4 1.79-4 4v4h4v-4h2v-2c0-2.21-1.79-4-4-4z" fill="#90A4AE"/>
                                    </g>
                                </svg>
                            </div>
                            <p>This quiz helped me understand my decision-making patterns and gave me practical steps to build true autonomy in my life.</p>
                            <div className="profile-icon" style={{paddingTop: "20px"}}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <circle cx="20" cy="20" r="18" fill="#F5F7FA" stroke="#E3E6EC" stroke-width="2"/>
                                    <text x="50%" y="50%" text-anchor="middle" fill="#90A4AE" font-size="16" font-family="Arial, sans-serif" font-weight="bold" dy=".3em">SJ</text>
                                </svg>
                            </div>
                            <h5>Sarah Johnson</h5>
                            <p>Entrepreneur</p>
                        </div>
                        <div className="community-card">
                            <div className="quote-icon">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g>
                                        <path d="M11 11c-2.21 0-4 1.79-4 4v4h4v-4h2v-2c0-2.21-1.79-4-4-4zm10 0c-2.21 0-4 1.79-4 4v4h4v-4h2v-2c0-2.21-1.79-4-4-4z" fill="#90A4AE"/>
                                    </g>
                                </svg>
                            </div>
                            <p>The personalized recommendations were eye-opening. I finally feel like I'm making decisions based on my own values.</p>
                            <div className="profile-icon" style={{paddingTop: "20px"}}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <circle cx="20" cy="20" r="18" fill="#F5F7FA" stroke="#E3E6EC" stroke-width="2"/>
                                    <text x="50%" y="50%" text-anchor="middle" fill="#90A4AE" font-size="16" font-family="Arial, sans-serif" font-weight="bold" dy=".3em">MC</text>
                                </svg>
                            </div>
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