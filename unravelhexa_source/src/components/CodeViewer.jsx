import { useEffect, useRef, useMemo } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';

export default function CodeViewer({ file }) {
  const containerRef = useRef(null);

  const lines = useMemo(() => {
    if (!file?.content) return [];
    return file.content.split('\n');
  }, [file]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [file.id]);

  // Highlight each line
  const highlightedLines = useMemo(() => {
    const grammar = file.language === 'html'
      ? Prism.languages.markup
      : Prism.languages.javascript;
    const langKey = file.language === 'html' ? 'markup' : 'javascript';

    return lines.map((line) => {
      const html = Prism.highlight(line || ' ', grammar, langKey);
      return html;
    });
  }, [lines, file.language]);

  return (
    <div className="code-viewer" ref={containerRef}>
      <div className="code-block">
        {highlightedLines.map((html, i) => (
          <div className="code-line" key={i}>
            <span className="line-number">{i + 1}</span>
            <span
              className="line-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
