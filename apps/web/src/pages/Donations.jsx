import React, { useState } from 'react';
import '../styles/pageStyles/donations.css';

const Donations = () => {
  const [selectedAmount, setSelectedAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = selectedAmount === 'custom' ? customAmount : selectedAmount;
    console.log('Donation submitted:', { amount, name, email });
    // Add your donation processing logic here
  };

  return (
    <div className="donation-page">
      <div className="hero-section">
        <div className="heart-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#7c93c3" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
        <h1 className="hero-title">Support Our Mission</h1>
        <p className="hero-subtitle">
          Your donation helps us provide free resources and tools to people<br />
          seeking autonomy and self-motivation.
        </p>
      </div>

      <div className="content-wrapper">
        <div className="donation-form-section">
          <div className="donation-container">
            <h2 className="donation-title">Make a Donation</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="amount-section">
                <label className="section-label">Select Amount</label>
                
                <div className="amount-grid">
                  <div 
                    className={`amount-option ${selectedAmount === '25' ? 'selected' : ''}`}
                    onClick={() => setSelectedAmount('25')}
                  >
                    <input
                      type="radio"
                      name="amount"
                      value="25"
                      checked={selectedAmount === '25'}
                      onChange={(e) => setSelectedAmount(e.target.value)}
                    />
                    <span className="amount-label">$25</span>
                  </div>

                  <div 
                    className={`amount-option ${selectedAmount === '50' ? 'selected' : ''}`}
                    onClick={() => setSelectedAmount('50')}
                  >
                    <input
                      type="radio"
                      name="amount"
                      value="50"
                      checked={selectedAmount === '50'}
                      onChange={(e) => setSelectedAmount(e.target.value)}
                    />
                    <span className="amount-label">$50</span>
                  </div>

                  <div 
                    className={`amount-option ${selectedAmount === '100' ? 'selected' : ''}`}
                    onClick={() => setSelectedAmount('100')}
                  >
                    <input
                      type="radio"
                      name="amount"
                      value="100"
                      checked={selectedAmount === '100'}
                      onChange={(e) => setSelectedAmount(e.target.value)}
                    />
                    <span className="amount-label">$100</span>
                  </div>

                  <div 
                    className={`amount-option ${selectedAmount === '250' ? 'selected' : ''}`}
                    onClick={() => setSelectedAmount('250')}
                  >
                    <input
                      type="radio"
                      name="amount"
                      value="250"
                      checked={selectedAmount === '250'}
                      onChange={(e) => setSelectedAmount(e.target.value)}
                    />
                    <span className="amount-label">$250</span>
                  </div>
                </div>

                <div 
                  className={`amount-option custom-amount ${selectedAmount === 'custom' ? 'selected' : ''}`}
                  onClick={() => setSelectedAmount('custom')}
                >
                  <input
                    type="radio"
                    name="amount"
                    value="custom"
                    checked={selectedAmount === 'custom'}
                    onChange={(e) => setSelectedAmount(e.target.value)}
                  />
                  <span className="amount-label">Custom Amount</span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Complete Donation
              </button>
            </form>
          </div>
        </div>

        <div className="sidebar-section">
          <div className="info-card">
            <h3 className="info-card-title">Where Your Money Goes</h3>
            
            <div className="info-item">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c93c3" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="info-content">
                <h4 className="info-heading">Free Educational Resources</h4>
                <p className="info-description">Developing and maintaining our quiz, guides, and exercises</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c93c3" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="info-content">
                <h4 className="info-heading">Community Support</h4>
                <p className="info-description">Hosting events and creating spaces for connection</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c93c3" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="info-content">
                <h4 className="info-heading">Research & Development</h4>
                <p className="info-description">Improving our methods based on latest findings</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c93c3" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="info-content">
                <h4 className="info-heading">Outreach Programs</h4>
                <p className="info-description">Reaching underserved communities</p>
              </div>
            </div>
          </div>

          <div className="info-card impact-card">
            <h3 className="info-card-title">Impact by the Numbers</h3>
            
            <div className="impact-item">
              <span className="impact-label">People helped last year</span>
              <span className="impact-value">10,000+</span>
            </div>

            <div className="impact-item">
              <span className="impact-label">Free resources created</span>
              <span className="impact-value">50+</span>
            </div>

            <div className="impact-item">
              <span className="impact-label">Community events hosted</span>
              <span className="impact-value">24</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations;