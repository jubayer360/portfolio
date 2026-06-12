export default function Footer({ fileCount }) {
  return (
    <div className="footer-section">
      <div className="footer-left">
        <a href="https://www.linkedin.com/in/ahmadjubayer" target="_blank" rel="noopener noreferrer" className="footer-link">
          Jubayer Ahmad &nbsp;|&nbsp; IBA, RU
        </a>
      </div>
      <div className="footer-right">
        <div className="footer-stat">
          <span className="footer-stat-dot" />
          {fileCount} files
        </div>
        <span>Unravel Hexa</span>
      </div>
    </div>
  );
}
