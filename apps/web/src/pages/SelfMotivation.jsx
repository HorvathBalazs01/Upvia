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
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c93c3" strokeWidth="2">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
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
                    <h2 style={{textAlign: "center", paddingBottom: "40px"}}>Core Principles of Autonomy</h2>
                    <div className="core-principles-cards">
                        <div className="core-principles-card">
                            <div className="principle-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <circle cx="12" cy="12" r="6"></circle>
                                    <circle cx="12" cy="12" r="2"></circle>
                                </svg>
                            </div>
                            <h3>Value-Based Decisions</h3>
                            <p>Learn to identify and prioritize your core values in every decision you make.</p>
                        </div>
                        <div className="core-principles-card">
                            <div className="principle-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                                </svg>
                            </div>
                            <h3>Internal Navigation</h3>
                            <p>Develop the ability to trust your inner compass rather than external validation.</p>
                        </div>
                        <div className="core-principles-card">
                            <div className="principle-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 18h6"></path>
                                    <path d="M10 22h4"></path>
                                    <path d="M15 8a5 5 0 0 0-10 0c0 1.8.7 3.3 2 4.5V15h6v-2.5c1.3-1.2 2-2.7 2-4.5z"></path>
                                </svg>
                            </div>
                            <h3>Self-Awareness</h3>
                            <p>Build deep understanding of your motivations, strengths, and growth areas.</p>
                        </div>
                    </div>
                </div>

                <div className="path">
                    <h2>The Path to Autonomous Living</h2>
                    <br />
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
                        <br />
                        <a href="/survey"><button>Start the Quiz</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelfMotivation;