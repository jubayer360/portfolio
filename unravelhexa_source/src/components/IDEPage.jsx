import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { portfolioFiles } from '../data/files';
import Header from './Header';
import Sidebar from './Sidebar';
import SummaryBar from './SummaryBar';
import Toolbar from './Toolbar';
import CodeViewer from './CodeViewer';
import PreviewViewer from './PreviewViewer';
import Footer from './Footer';

export default function IDEPage() {
  const [activeFileId, setActiveFileId] = useState(portfolioFiles[0].id);
  const [viewMode, setViewMode] = useState(portfolioFiles[0].language === 'html' ? 'preview' : 'code');
  const [sidebarOpen, setSidebarOpen] = useState(typeof window !== 'undefined' && window.innerWidth <= 768);

  const activeFile = portfolioFiles.find(f => f.id === activeFileId);
  const isHtml = activeFile?.language === 'html';

  const handleFileSelect = useCallback((id) => {
    const selectedFile = portfolioFiles.find(f => f.id === id);
    setActiveFileId(id);
    setViewMode(selectedFile?.language === 'html' ? 'preview' : 'code');
    setSidebarOpen(false);
  }, []);

  const handleViewChange = useCallback((mode) => {
    setViewMode(mode);
  }, []);

  return (
    <div className="app">
      <Header fileCount={portfolioFiles.length} />

      <div className="ide-layout">
        {/* Mobile overlay */}
        <div
          className={`sidebar-overlay ${sidebarOpen ? 'visible' : ''}`}
          onClick={() => setSidebarOpen(false)}
        />

        <Sidebar
          files={portfolioFiles}
          activeFileId={activeFileId}
          onFileSelect={handleFileSelect}
          isOpen={sidebarOpen}
        />

        <div className="main-content">
          <Toolbar
            file={activeFile}
            viewMode={viewMode}
            onViewChange={handleViewChange}
            isHtml={isHtml}
          />

          <div className="code-viewer-wrapper">
            {viewMode === 'code' ? (
              <CodeViewer key={activeFile.id} file={activeFile} />
            ) : (
              <PreviewViewer key={activeFile.id + '-preview'} file={activeFile} />
            )}
          </div>
          
          <SummaryBar file={activeFile} />
        </div>
      </div>

      {/* Back to Workflow button */}
      <Link to="/" className="back-to-workflow-btn" id="back-to-workflow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        <span>Workflow</span>
      </Link>

      {/* Portfolio homepage button */}
      <a href="https://jubayer.pro" className="back-to-portfolio-btn" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        <span>Portfolio</span>
      </a>

      {/* Mobile sidebar toggle */}
      <button
        className="mobile-sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle file explorer"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {sidebarOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>
    </div>
  );
}
