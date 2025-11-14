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
                    <h2>Our Core Values</h2>
                    <div className="our-core-values-cards">
                        <div className="our-core-values-card">
                            <h3>Empowerment</h3>
                            <p>We believe everyone has the capacity to make autonomous decisions.</p>
                        </div>
                        <div className="our-core-values-card">
                            <h3>Compassion</h3>
                            <p>We support each person's unique journey without judgment.</p>
                        </div>
                        <div className="our-core-values-card">
                            <h3>Community</h3>
                            <p>We grow stronger together through shared experiences.</p>
                        </div>
                        <div className="our-core-values-card">
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