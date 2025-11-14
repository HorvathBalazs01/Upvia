import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/pageStyles/selfMotivation.css"


function SelfMotivation(){
    return(
        <>
            <div className="self-motivation">
                <div className="intro-container">
                    <h1>Introduction to Self-Motivation</h1>
                    <p>Understanding the foundation of autonomous decision-making</p>
                </div>

                <div className="description">
                    <div className="description-text">
                        <h2>What is Self-Motivation?</h2>
                        <p>Self-motivation is the ability to drive yourself toward your goals based on internal desires and values, rather than external rewards or pressures. 
                            It's the cornerstone of autonomy—the power to make decisions according to your own rules.
                            <br />
                            <br />
                            When you're self-motivated, you don't wait for others to push you forward. 
                            You understand what matters to you and why, and you take action aligned with those insights.
                        </p>
                    </div>
                </div>

                <div className="core-principles">
                    <h2 style={{textAlign: "center"}}>Core Principles of Autonomy</h2>
                    <div className="core-principles-cards">
                        <div className="core-principles-card">
                            <h3>Value-Based Decisions</h3>
                            <p>Learn to identify and prioritize your core values in every decision you make.</p>
                        </div>
                        <div className="core-principles-card">
                            <h3>Internal Navigation</h3>
                            <p>Develop the ability to trust your inner compass rather than external validation.</p>
                        </div>
                        <div className="core-principles-card">
                            <h3>Self-Awareness</h3>
                            <p>Build deep understanding of your motivations, strengths, and growth areas.</p>
                        </div>
                    </div>
                </div>

                <div className="path">
                    <h2>The Path to Autonomous Living</h2>
                    <h3>1. Discover Your Values</h3>
                    <p>Begin by identifying what truly matters to you. Not what society says should matter, but what resonates with your authentic self. This forms the foundation of all autonomous decisions.</p>

                    <h3>2. Build Self-Awareness</h3>
                    <p>Develop the ability to observe your thoughts, emotions, and behaviors without judgment. This awareness helps you understand why you make certain choices and how to align them with your values.</p>

                    <h3>3. Practice Independent Thinking</h3>
                    <p>Learn to question assumptions, analyze information critically, and form your own conclusions. Autonomy requires the courage to think differently when your values demand it.</p>

                    <h3>4. Take Aligned Action</h3>
                    <p>Bridge the gap between understanding and doing. Make choices that reflect your values, even when they're difficult or unpopular. Each aligned action strengthens your autonomy.</p>
                </div>

                <div className="begin-journey">
                    <div className="begin-journey-content">
                        <h2>Ready to Begin Your Journey?</h2>
                        <p>Take our quiz to understand where you are on your autonomy path and get personalized recommendations.</p>
                        <button>Start the Quiz</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelfMotivation;