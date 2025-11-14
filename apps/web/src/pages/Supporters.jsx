import "../styles/pageStyles/supporters.css"

function Supporters(){
    return(
        <>
            <div className="supporters-container">
                <div className="our-supporters">
                    <h1>Our Supporters</h1>
                    <p>We're grateful to the organizations and individuals who believe in our mission to help people achieve autonomy.</p>
                </div>

                <div className="thank-you-container">
                    <h2>Thank You!</h2>
                    <p>Your generous support enables us to provide free resources, develop new tools, and reach more people on their journey to self-motivated living.</p>
                </div>

                <div className="supporters">
                    <div className="gold-supporters">
                        <div><h2>Gold Supporters</h2></div>
                        <div className="supporter-cards">
                            <div className="supporter-card">
                                <h4>Foundation for Growth</h4>
                                <p>Gold Supporter</p>
                            </div>
                            <div className="supporter-card">
                                <h4>Mindful Living Institute</h4>
                                <p>Gold Supporter</p>
                            </div>
                            <div className="supporter-card">
                                <h4>Acme Foundation</h4>
                                <p>Gold Supporter</p>
                            </div>
                        </div>
                    </div>
                    <div className="silver-supporters">
                        <div><h2>Silver Supporters</h2></div>
                        <div className="supporter-cards">
                            <div className="supporter-card">
                                <h4>Personal Development Co</h4>
                                <p>Silver Supporter</p>
                            </div>
                            <div className="supporter-card">
                                <h4>Wellness Partners</h4>
                                <p>Silver Supporter</p>
                            </div>
                            <div className="supporter-card">
                                <h4>Future Leaders Fund</h4>
                                <p>Silver Supporter</p>
                            </div>
                            <div className="supporter-card">
                                <h4>Empowerment Network</h4>
                                <p>Silver Supporter</p>
                            </div>
                        </div>
                    </div>
                    <div className="community-supporters">
                        <div><h2>Community Champions</h2></div>
                        <div className="supporter-cards">
                            <div className="supporter-card">
                                <h4>Sarah Johnson</h4>
                                <p>Community Champion</p>
                            </div>
                            <div className="supporter-card">
                                <h4>Michael Chen</h4>
                                <p>Community Champion</p>
                            </div>
                            <div className="supporter-card">
                                <h4>Emily Rodriguez</h4>
                                <p>Community Champion</p>
                            </div>
                            <div className="supporter-card">
                                <h4>David Kim</h4>
                                <p>Community Champion</p>
                            </div>
                            <div className="supporter-card">
                                <h4>Lisa Anderson</h4>
                                <p>Community Champion</p>
                            </div>
                            <div className="supporter-card">
                                <h4>James Wilson</h4>
                                <p>Community Champion</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="become-a-supporter">
                    <h2>Become a Supporter</h2>
                    <p>Join our community of supporters and help us expand our impact. Every contribution makes a difference.</p>
                </div>
            </div>
        </>
    )
}

export default Supporters;