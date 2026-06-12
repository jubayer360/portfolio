import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import heroLogo from '../assets/logos/hero_logo.png';

export default function HeroPopup() {
  const [visible, setVisible] = useState(true);
  const [animateIn, setAnimateIn] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setAnimateIn(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setAnimateOut(true);
    setTimeout(() => setVisible(false), 450);
  };

  const handleCheckCodebase = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setVisible(false);
      navigate('/IDE');
    }, 400);
  };

  if (!visible) return null;

  return (
    <div className={`hero-popup-overlay ${animateIn ? 'active' : ''} ${animateOut ? 'closing' : ''}`} id="hero-popup">
      <div className={`hero-popup-card ${animateIn ? 'active' : ''} ${animateOut ? 'closing' : ''}`}>
        {/* Decorative particles */}
        <div className="hero-popup-particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="hero-particle" style={{
              '--delay': `${i * 0.4}s`,
              '--x': `${20 + i * 13}%`,
              '--size': `${3 + (i % 3) * 2}px`,
            }} />
          ))}
        </div>

        {/* Hero Image */}
        <div className="hero-popup-image-wrap">
          <img
            src={heroLogo}
            alt="Unravel Hexa"
            className="hero-popup-image"
          />
        </div>

        {/* Content */}
        <h1 className="hero-popup-title">
          The Automated Engine Behind
          <span className="hero-popup-title-accent"> Unravel Hexa</span>
        </h1>

        <p className="hero-popup-summary">
          From registration to finals, from judge onboarding to speaker management,
          every operational pipeline of north-Bengal's biggest case competition was
          designed, coded, and automated single-handedly. <strong>300+ participants</strong>,{' '}
          <strong>50+ branded emails</strong>, <strong>4 stakeholder pipelines</strong>,
          and <strong>zero manual data entry</strong>.
        </p>

        {/* CTA Buttons */}
        <div className="hero-popup-actions">
          <button className="hero-popup-btn hero-popup-btn-primary" onClick={handleClose} id="view-workflow-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
            View Full Workflow
          </button>
          <button className="hero-popup-btn hero-popup-btn-secondary" onClick={handleCheckCodebase} id="check-codebase-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            Check the Codebase
          </button>
        </div>

        {/* Subtle credit */}
        <p className="hero-popup-credit">
          Built by <a href="https://www.linkedin.com/in/ahmadjubayer" target="_blank" rel="noopener noreferrer">Jubayer Ahmad</a>
        </p>
      </div>
    </div>
  );
}
