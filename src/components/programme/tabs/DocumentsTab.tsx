import React from 'react';
import { getProgrammeData } from '../../../data/mockData';

interface DocumentsTabProps {
  programmeId: string;
}

const DocumentsTab: React.FC<DocumentsTabProps> = ({ programmeId }) => {
  const programmeData = getProgrammeData(programmeId);
  
  if (!programmeData) return <div>No data available</div>;
  
  const { documents } = programmeData;
  
  // Convert icon emoji to monochrome/greyscale representation
  const getMonochromeIcon = (icon: string) => {
    return <span style={{ filter: 'grayscale(1)', opacity: 0.6 }}>{icon}</span>;
  };
  
  return (
    <div className="card">
      <div className="card-header">
        <div className="section-header">Programme Documents</div>
        <button className="btn btn-outline btn-sm">+ Upload Document</button>
      </div>
      <div className="card-body" style={{ padding: '0 20px' }}>
        {documents.map((doc) => (
          <div key={doc.id} className="doc-item">
            <div className="doc-primary">
              <div className="doc-icon">{getMonochromeIcon(doc.icon)}</div>
              <div style={{ flex: 1 }}>
                <div className="doc-name">{doc.name}</div>
                <div className="doc-meta">Updated {doc.updatedDate} · {doc.updatedBy}</div>
              </div>
              <span className={`doc-status ${doc.status}`}>
                {doc.status === 'approved' ? 'Approved' : 'Draft'}
              </span>
            </div>
            <div className="doc-actions">
              <button className="doc-action-btn" title="Preview">👁 Preview</button>
              <button className="doc-action-btn" title="Download">↓ Download</button>
              <button className="doc-action-btn" title="History">🕐 History</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentsTab;
