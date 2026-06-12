import { useState, useCallback } from 'react';
import { portfolioFiles } from './data/files';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SummaryBar from './components/SummaryBar';
import Toolbar from './components/Toolbar';
import CodeViewer from './components/CodeViewer';
import PreviewViewer from './components/PreviewViewer';
import Footer from './components/Footer';

function App() {
  const [activeFileId, setActiveFileId] = useState(portfolioFiles[0].id);
  const [viewMode, setViewMode] = useState(portfolioFiles[0].language === 'html' ? 'preview' : 'code'); // 'code' | 'preview'
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
          <SummaryBar file={activeFile} />

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
        </div>
      </div>

      <Footer fileCount={portfolioFiles.length} />

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

export default App;
