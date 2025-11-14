import React, { useState } from 'react';
import '../styles/pageStyles/donations.css';

const Donations = () => {
  const [selectedAmount, setSelectedAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const amount = selectedAmount === 'custom' ? Number(customAmount) : Number(selectedAmount);

    if (!amount || amount <= 0) {
      setStatusMessage("Please enter a valid amount.");
      return;
    }

    const payload = { name, email, amount };

    setIsLoading(true);
    setStatusMessage('');

    try {
      const res = await fetch("https://YOURDOMAIN.com/donations/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatusMessage("Something went wrong. Try again!");
        setIsLoading(false);
        return;
      }

      setStatusMessage(`Donation successful! Your rank: ${data.supporter_rank}`);
      setIsLoading(false);

      setName('');
      setEmail('');
      setCustomAmount('');
      setSelectedAmount('50');

    } catch (err) {
      setStatusMessage("Server error. Please try again later.");
      setIsLoading(false);
    }
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
                  {["25", "50", "100", "250"].map((value) => (
                    <div 
                      key={value}
                      className={`amount-option ${selectedAmount === value ? 'selected' : ''}`}
                      onClick={() => setSelectedAmount(value)}
                    >
                      <input
                        type="radio"
                        name="amount"
                        value={value}
                        checked={selectedAmount === value}
                        onChange={(e) => setSelectedAmount(e.target.value)}
                      />
                      <span className="amount-label">${value}</span>
                    </div>
                  ))}
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

                {selectedAmount === 'custom' && (
                  <input
                    type="number"
                    className="custom-input"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                  />
                )}
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

              <button type="submit" className="submit-button" disabled={isLoading}>
                {isLoading ? "Processing..." : "Complete Donation"}
              </button>

              {statusMessage && (
                <p className="status-message">{statusMessage}</p>
              )}
            </form>
          </div>
        </div>

        <div className="sidebar-section">
        </div>
      </div>
    </div>
  );
};

export default Donations;
