import { useMemo } from 'react';

export default function PreviewViewer({ file }) {
  const srcDoc = useMemo(() => {
    if (!file?.content) return '';
    // Wrap in a base tag to handle relative URLs and inject a little reset
    return file.content;
  }, [file]);

  return (
    <iframe
      className="preview-frame"
      srcDoc={srcDoc}
      title={`Preview of ${file.shortName}`}
      sandbox="allow-scripts allow-same-origin"
    />
  );
}
