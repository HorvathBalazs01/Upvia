import React from 'react';
import '../styles/pageStyles/supporters.css';

const Supporters = () => {
  const goldSupporters = [
    { id: 'FIG', name: 'Foundation for Growth', level: 'Gold Supporter' },
    { id: 'MLI', name: 'Mindful Living Institute', level: 'Gold Supporter' },
    { id: 'AF', name: 'Acme Foundation', level: 'Gold Supporter' }
  ];

  const silverSupporters = [
    { id: 'PDC', name: 'Personal Development Co', level: 'Silver Supporter' },
    { id: 'WP', name: 'Wellness Partners', level: 'Silver Supporter' },
    { id: 'FLF', name: 'Future Leaders Fund', level: 'Silver Supporter' },
    { id: 'EN', name: 'Empowerment Network', level: 'Silver Supporter' }
  ];

  const communityChampions = [
    { id: 'SJ', name: 'Sarah Johnson', level: 'Community Champion' },
    { id: 'MC', name: 'Michael Chen', level: 'Community Champion' },
    { id: 'ER', name: 'Emily Rodriguez', level: 'Community Champion' },
    { id: 'DK', name: 'David Kim', level: 'Community Champion' },
    { id: 'LA', name: 'Lisa Anderson', level: 'Community Champion' },
    { id: 'JW', name: 'James Wilson', level: 'Community Champion' }
  ];

  return (
    <div className="supporters-page">
      <div className="supporters-header">
        <h1 className="supporters-title">Our Supporters</h1>
        <p className="supporters-subtitle">
          We're grateful to the organizations and individuals who believe in<br />
          our mission to help people achieve autonomy.
        </p>
      </div>

      <div className="thank-you-section">
        <h2 className="thank-you-title">Thank You!</h2>
        <p className="thank-you-text">
          Your generous support enables us to provide free resources, develop new<br />
          tools, and reach more people on their journey to self-motivated living.
        </p>
      </div>

      <div className="supporters-content">
        <section className="supporter-tier">
          <h3 className="tier-title">Gold Supporters</h3>
          <div className="supporters-grid gold-grid">
            {goldSupporters.map(supporter => (
              <div key={supporter.id} className="supporter-card">
                <div className="supporter-initials gold-initials">{supporter.id}</div>
                <h4 className="supporter-name">{supporter.name}</h4>
                <p className="supporter-level">{supporter.level}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="supporter-tier">
          <h3 className="tier-title">Silver Supporters</h3>
          <div className="supporters-grid silver-grid">
            {silverSupporters.map(supporter => (
              <div key={supporter.id} className="supporter-card">
                <div className="supporter-initials silver-initials">{supporter.id}</div>
                <h4 className="supporter-name">{supporter.name}</h4>
                <p className="supporter-level">{supporter.level}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="supporter-tier">
          <h3 className="tier-title">Community Champions</h3>
          <div className="supporters-grid champions-grid">
            {communityChampions.map(supporter => (
              <div key={supporter.id} className="supporter-card">
                <div className="supporter-initials champion-initials">{supporter.id}</div>
                <h4 className="supporter-name">{supporter.name}</h4>
                <p className="supporter-level">{supporter.level}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="cta-section">
          <h3 className="cta-title">Become a Supporter</h3>
          <p className="cta-text">
            Join our community of supporters and help us expand our impact. Every contribution makes a difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Supporters;