import headerLogo from '../assets/logos/header_logo.png';

export default function Header({ fileCount }) {
  return (
    <div className="header-section">
      <div className="header-content">
        <img
          src={headerLogo}
          alt="Unravel Hexa"
          className="header-logo"
        />
        <div className="header-text">
          <h1 className="header-title">The Workflow Automation of Unravel Hexa</h1>
          <p className="header-subtitle">Registration, submissions, emails, and mailer automations built end-to-end</p>
        </div>
      </div>
    </div>
  );
}
