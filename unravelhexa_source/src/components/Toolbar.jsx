export default function Toolbar({ file, viewMode, onViewChange, isHtml }) {
  if (!file) return null;

  return (
    <div className="toolbar">
      <div className="toolbar-left">
        <span className="toolbar-filename">{file.shortName}</span>
        <span className="toolbar-lang">{file.language}</span>
      </div>

      <div className="toolbar-right">
        {isHtml && (
          <div className="view-toggle">
            <button
              className={`view-toggle-btn ${viewMode === 'code' ? 'active' : ''}`}
              onClick={() => onViewChange('code')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              Code
            </button>
            <button
              className={`view-toggle-btn ${viewMode === 'preview' ? 'active' : ''}`}
              onClick={() => onViewChange('preview')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Preview
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
