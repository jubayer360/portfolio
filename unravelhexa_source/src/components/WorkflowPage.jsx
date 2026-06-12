import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import headerLogo from '../assets/logos/header_logo.png';
import heroLogo from '../assets/logos/hero_logo.png';

const workflowPhases = [
  {
    phase: 'Registration & Onboarding',
    phaseNum: '01',
    color: '#f58220',
    steps: [
      {
        icon: 'form',
        title: 'Registration Form',
        tech: 'HTML · CSS · JavaScript',
        desc: 'Full registration portal with personalization, team formation up to 4 members, and real-time custom validation.',
        before: 'Manual Google Form with no personalization and customization',
        after: 'Automated portal with personalization and nd real-time custom validation',
        metric: '300+ registrations processed',
      },
      {
        icon: 'script',
        title: 'Casebook Mailer',
        tech: 'Google Apps Script',
        desc: 'Webhook that captures form data, logs it to Google Sheets, and auto-sends branded Round 1 casebook confirmation emails.',
        before: 'Manually copying data to sheets, sending emails one by one or using bcc without personalization',
        after: 'Instant auto-logging + auto-email on submission as it was an open case',
        metric: 'Zero manual data entry',
      },
      {
        icon: 'script',
        title: 'Standalone Verifier',
        tech: 'Google Apps Script',
        desc: 'Trigger-based verifier that watches for admin approval in Sheets and dispatches confirmation emails to verified teams.',
        before: 'Admin manually sends confirmation after checking payment',
        after: 'One-click approve triggers automatic confirmation email',
        metric: 'Instant verification pipeline',
      },
      {
        icon: 'bot',
        title: 'WhatsApp Bot Integration',
        tech: 'Apps Script · Webhook',
        desc: 'Instant onsite registration alternative to the main form. Built for quick walk-in registrations during the event launch phase.',
        before: 'Walk-ins had to fill long Google Forms on-site',
        after: 'Quick WhatsApp chat completes registration and sends the open casebook instantly',
        metric: 'On-site registration in 60s',
      },
    ],
  },
  {
    phase: 'Round 1',
    phaseNum: '02',
    color: '#d72027',
    steps: [
      {
        icon: 'email',
        title: 'Casebook Distribution',
        tech: 'HTML Email Template',
        desc: 'Branded HTML email template sent to all registered teams with casebook download link and submission deadline.',
        before: 'Plain-text email, manual recipient list',
        after: 'Branded email blast to 100+ teams in seconds',
        metric: '100+ emails in one click',
      },
      {
        icon: 'form',
        title: 'R1 Submission Portal',
        tech: 'HTML · JavaScript · Apps Script',
        desc: 'Submission portal with auto-logging, file upload verification, and instant confirmation emails to participants.',
        before: 'Email-based submissions, manual tracking',
        after: 'Auto-logged submissions with instant confirmations',
        metric: 'All submissions auto-tracked',
      },
    ],
  },
  {
    phase: 'Finals',
    phaseNum: '03',
    color: '#4f6ef7',
    steps: [
      {
        icon: 'email',
        title: 'Finalist Congratulations',
        tech: 'HTML Email · Apps Script',
        desc: 'Automated celebratory email sent to finalist teams with final round details, venue info, and preparation guidelines.',
        before: 'Individual congratulations messages, inconsistent info',
        after: 'Branded congratulatory email with all details, sent in bulk',
        metric: 'Finalists notified instantly',
      },
      {
        icon: 'email',
        title: 'Final Casebook Mail',
        tech: 'HTML Email Template',
        desc: 'Final round case distribution email with branded template, casebook link, and submission deadline for the grand finale.',
        before: 'Manual email with attached PDF',
        after: 'Branded template with download link + deadline',
        metric: 'Professional case delivery',
      },
      {
        icon: 'script',
        title: 'Finalist Mailer',
        tech: 'Google Apps Script',
        desc: 'Bulk mailer automation that processes finalist data from Sheets and dispatches personalized communications to each team.',
        before: 'Copy-paste emails to each team individually',
        after: 'One-click bulk send with personalization',
        metric: 'Bulk mail in seconds',
      },
    ],
  },
  {
    phase: 'Onboardings',
    phaseNum: '04',
    color: '#34d399',
    steps: [
      {
        icon: 'form',
        title: 'Judge Onboarding',
        tech: 'HTML Form · Apps Script · Email',
        desc: 'Complete judge management pipeline: onboarding form, invitation emails, evaluation sheet distribution, and thank-you mails.',
        before: 'Separate forms, emails, and tracking for each judge',
        after: 'End-to-end automated pipeline per judge',
        metric: '4-step pipeline automated',
      },
      {
        icon: 'form',
        title: 'Mentor Onboarding',
        tech: 'HTML Form · Apps Script · Email',
        desc: 'Mentor invitation and confirmation pipeline with branded form, auto-confirmation, and session scheduling communications.',
        before: 'Individual outreach, manual confirmation tracking',
        after: 'Automated invitation + confirmation flow',
        metric: 'Seamless mentor pipeline',
      },
      {
        icon: 'form',
        title: 'Workshop Speaker Onboarding',
        tech: 'HTML Form · Apps Script · Email',
        desc: 'Full speaker management system: onboarding form, session details email, logistics coordination, and post-event thank-you.',
        before: 'Phone calls and scattered WhatsApp messages',
        after: 'Structured digital pipeline with automated emails',
        metric: 'Complete speaker management',
      },
    ],
  },
];

const impactStats = [
  { value: '300+', label: 'Participants', icon: 'users' },
  { value: '50+', label: 'Branded Emails Automated', icon: 'mail' },
  { value: '4', label: 'Pipelines Automated', icon: 'pipeline' },
  { value: '0', label: 'Manual Data Entries', icon: 'check' },
];

function StepIcon({ type }) {
  const icons = {
    form: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <line x1="9" y1="9" x2="15" y2="9" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="12" y2="17" />
      </svg>
    ),
    email: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <polyline points="22 4 12 13 2 4" />
      </svg>
    ),
    script: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    bot: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="18" height="12" rx="3" />
        <circle cx="9" cy="14" r="1.5" />
        <circle cx="15" cy="14" r="1.5" />
        <line x1="12" y1="4" x2="12" y2="8" />
        <circle cx="12" cy="3" r="1" />
      </svg>
    ),
  };
  return <div className="wf-step-icon">{icons[type]}</div>;
}

function ImpactIcon({ type }) {
  const icons = {
    users: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    mail: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <polyline points="22 4 12 13 2 4" />
      </svg>
    ),
    pipeline: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" />
        <line x1="12" y1="8" x2="12" y2="14" />
        <circle cx="6" cy="19" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="M12 14l-6 2" />
        <path d="M12 14l6 2" />
      </svg>
    ),
    check: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  };
  return <div className="wf-impact-icon">{icons[type]}</div>;
}

export default function WorkflowPage() {
  const observerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for scroll-reveal animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.wf-reveal');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="workflow-page" id="workflow-page">
      <header className={`wf-main-header ${isScrolled ? 'visible' : ''}`}>
        <div className="wf-main-header-inner">
          <img
            src={headerLogo}
            alt="Unravel Hexa Header Logo"
            className="wf-main-logo"
          />
          <span className="wf-main-header-title">Operations Workflow</span>
        </div>
      </header>

      {/* Unified Top Section for Hero & Impact */}
      <div className="wf-top-section">
        {/* Hero Section */}
        <header className="wf-hero-header">
          <div className="wf-hero-bg-shapes">
            <div className="wf-hero-shape wf-hero-shape-1" />
            <div className="wf-hero-shape wf-hero-shape-2" />
            <div className="wf-hero-shape wf-hero-shape-3" />
          </div>
          <div className="wf-hero-content">
            <img
              src={heroLogo}
              alt="Unravel Hexa"
              className="wf-hero-logo"
            />
            <h1 className="wf-hero-title">Operations Workflow</h1>
            <p className="wf-hero-desc">
              Every pipeline below was designed, coded, and automated from scratch to run Unravel Hexa,
              north-Bengal's biggest inter-university case competition.
            </p>
          </div>
        </header>

        {/* Impact Section */}
        <section className="wf-impact wf-reveal">
          <div className="wf-impact-inner">
            <div className="wf-impact-grid">
              {impactStats.map((stat) => (
                <div key={stat.label} className="wf-impact-card wf-reveal">
                  <ImpactIcon type={stat.icon} />
                  <span className="wf-impact-value">{stat.value}</span>
                  <span className="wf-impact-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Main Timeline */}
      <main className="wf-timeline-container">
        <div className="wf-timeline-line" />

        {workflowPhases.map((phase, phaseIdx) => (
          <section key={phase.phase} className="wf-phase wf-reveal" style={{ '--phase-color': phase.color }}>
            {/* Phase Header */}
            <div className="wf-phase-header">
              <span className="wf-phase-num">{phase.phaseNum}</span>
              <h2 className="wf-phase-title">{phase.phase}</h2>
              <div className="wf-phase-line" />
            </div>

            {/* Steps */}
            <div className="wf-steps">
              {phase.steps.map((step, stepIdx) => (
                <div
                  key={step.title}
                  className={`wf-step-card wf-reveal ${stepIdx % 2 === 0 ? 'from-left' : 'from-right'}`}
                  style={{ '--step-delay': `${stepIdx * 0.12}s` }}
                >
                  {/* Timeline dot */}
                  <div className="wf-step-dot" style={{ background: phase.color }} />

                  {/* Card content */}
                  <div className="wf-step-content">
                    <div className="wf-step-header">
                      <StepIcon type={step.icon} />
                      <div>
                        <h3 className="wf-step-title">{step.title}</h3>
                        <span className="wf-step-tech">{step.tech}</span>
                      </div>
                    </div>

                    <p className="wf-step-desc">{step.desc}</p>

                    {/* Before/After */}
                    <div className="wf-step-comparison">
                      <div className="wf-step-before">
                        <span className="wf-step-tag wf-step-tag-before">Before</span>
                        <span className="wf-step-tag-text">{step.before}</span>
                      </div>
                      <div className="wf-step-arrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="14 7 19 12 14 17" />
                        </svg>
                      </div>
                      <div className="wf-step-after">
                        <span className="wf-step-tag wf-step-tag-after">After</span>
                        <span className="wf-step-tag-text">{step.after}</span>
                      </div>
                    </div>

                    {/* Metric */}
                    <div className="wf-step-metric">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                      </svg>
                      <span>{step.metric}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Unified Bottom Section */}
      <div className="wf-bottom-section">
        {/* Final CTA to IDE */}
        <section className="wf-cta-section wf-reveal">
          <div className="wf-cta-inner">
            <h2 className="wf-cta-title">Curious about the implementation?</h2>
            <p className="wf-cta-desc">Explore the exact codebase and scripts that powered these automations.</p>
            <button className="wf-cta-btn" onClick={() => navigate('/IDE')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              Check the Codebase
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="wf-footer">
          <div className="wf-footer-inner">
            <p className="wf-footer-summary">
              This automated ecosystem replaced fragmented manual processes with a seamless, interconnected
              pipeline, saving many hours and ensuring a professional experience for all stakeholders throughout Unravel Hexa.
            </p>
            <div className="wf-footer-bottom">
              <a href="https://www.linkedin.com/in/ahmadjubayer" target="_blank" rel="noopener noreferrer" className="wf-footer-link">
                Jubayer Ahmad &nbsp;|&nbsp; IBA, RU
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
