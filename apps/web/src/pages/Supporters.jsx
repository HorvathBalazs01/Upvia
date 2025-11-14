import React, { useEffect, useState } from 'react';
import '../styles/pageStyles/supporters.css';

const Supporters = () => {
  const [supporters, setSupporters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSupporters() {
      try {
        const response = await fetch('https://team04.hackplay.eu/supporters');
        if (!response.ok) throw new Error('Failed to fetch supporters');
        const data = await response.json();
        setSupporters(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchSupporters();
  }, []);

  if (loading) return <p>Loading supporters...</p>;

  const goldSupporters = supporters.filter(s => s.rank === 'gold');
  const silverSupporters = supporters.filter(s => s.rank === 'silver');
  const communityChampions = supporters.filter(s => s.rank === 'community_champion');

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
                <div className="supporter-initials gold-initials">{supporter.id || supporter.name[0]}</div>
                <h4 className="supporter-name">{supporter.name}</h4>
                <p className="supporter-level">{supporter.rank === 'gold' ? 'Gold Supporter' : supporter.rank}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="supporter-tier">
          <h3 className="tier-title">Silver Supporters</h3>
          <div className="supporters-grid silver-grid">
            {silverSupporters.map(supporter => (
              <div key={supporter.id} className="supporter-card">
                <div className="supporter-initials silver-initials">{supporter.id || supporter.name[0]}</div>
                <h4 className="supporter-name">{supporter.name}</h4>
                <p className="supporter-level">{supporter.rank === 'silver' ? 'Silver Supporter' : supporter.rank}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="supporter-tier">
          <h3 className="tier-title">Community Champions</h3>
          <div className="supporters-grid champions-grid">
            {communityChampions.map(supporter => (
              <div key={supporter.id} className="supporter-card">
                <div className="supporter-initials champion-initials">{supporter.id || supporter.name[0]}</div>
                <h4 className="supporter-name">{supporter.name}</h4>
                <p className="supporter-level">Community Champion</p>
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
