import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/pageStyles/aboutUs.css"


function AboutUs(){
    return(
        <>
            <div className="about-container">
                <div className="our-mission-container">
                    <h1>Our Mission</h1>
                    <p>Helping people discover their path to autonomy through self-motivation and personalized guidance.</p>
                </div>

                <div className="our-story-container">
                    <div className="our-story-image">
                        <img src="/surfing-girl.jpg" alt="" />
                    </div>
                    <div className="our-story-text">
                        <h2>Our Story</h2>
                        <p>Autonomy Path was founded on the belief that true freedom comes from the ability to make decisions based on your own values and principles, not external pressures.
                        We've developed a comprehensive system to help individuals understand their decision-making patterns and build the self-motivation needed for genuine autonomy.
                        Through our quiz, educational resources, and mindset exercises, we've helped thousands of people take control of their lives and make choices that align with their authentic selves.</p>
                    </div>
                </div>
                <div className="our-core-values">   
                    <h2 style={{paddingBottom: "40px"}}>Our Core Values</h2>
                    <div className="our-core-values-cards">
                        <div className="our-core-values-card">
                            <div className="value-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <circle cx="12" cy="12" r="6"></circle>
                                <circle cx="12" cy="12" r="2"></circle>
                                </svg>
                            </div>
                            <h3>Empowerment</h3>
                            <p>We believe everyone has the capacity to make autonomous decisions.</p>
                        </div>
                        <div className="our-core-values-card">
                            <div className="value-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                            </div>
                            <h3>Compassion</h3>
                            <p>We support each person's unique journey without judgment.</p>
                        </div>
                        <div className="our-core-values-card">
                            <div className="value-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <h3>Community</h3>
                            <p>We grow stronger together through shared experiences.</p>
                        </div>
                        <div className="our-core-values-card">
                            <div className="value-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2v6"></path>
                                    <path d="M12 18v4"></path>
                                    <path d="m4.93 4.93 4.24 4.24"></path>
                                    <path d="m14.83 14.83 4.24 4.24"></path>
                                    <path d="M2 12h6"></path>
                                    <path d="M18 12h4"></path>
                                    <path d="m4.93 19.07 4.24-4.24"></path>
                                    <path d="m14.83 9.17 4.24-4.24"></path>
                                </svg>
                            </div>
                            <h3>Growth</h3>
                            <p>Continuous learning and development are at our core.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;