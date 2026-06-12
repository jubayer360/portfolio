export default function Sidebar({ files, activeFileId, onFileSelect, isOpen }) {
  // Group files by category
  const groupedFiles = files.reduce((acc, file) => {
    if (!acc[file.category]) acc[file.category] = [];
    acc[file.category].push(file);
    return acc;
  }, {});

  // Define the order of categories
  const categories = ['Round 1', 'Final Round', 'Judges', 'Mentors', 'Workshop Speakers'];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
        <span className="sidebar-header-text">Explorer</span>
      </div>

      <div className="file-list">
        {categories.map((category, index) => {
          const categoryFiles = groupedFiles[category];
          if (!categoryFiles || categoryFiles.length === 0) return null;

          return (
            <div key={category}>
              <div className="sidebar-section-label" style={{ marginTop: index === 0 ? 0 : 8 }}>{category}</div>
              {categoryFiles.map((file) => (
                <FileItem
                  key={file.id}
                  file={file}
                  isActive={file.id === activeFileId}
                  onClick={() => onFileSelect(file.id)}
                />
              ))}
            </div>
          );
        })}
      </div>
    </aside>
  );
}

function FileItem({ file, isActive, onClick }) {
  return (
    <div
      className={`file-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
    >
      {file.language === 'html' ? <HtmlIcon /> : <JsIcon />}
      <span className="file-name">{file.shortName}</span>
    </div>
  );
}

function HtmlIcon() {
  return (
    <svg className="file-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#e44d26"/>
      <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="800" fontFamily="Inter, sans-serif" fill="#fff">&lt;/&gt;</text>
    </svg>
  );
}

function JsIcon() {
  return (
    <svg className="file-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#f0db4f"/>
      <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="800" fontFamily="Inter, sans-serif" fill="#323330">JS</text>
    </svg>
  );
}

