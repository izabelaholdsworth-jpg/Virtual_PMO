import React from 'react';
import { getProgrammeData } from '../../../data/mockData';

interface DocumentsTabProps {
  programmeId: string;
}

const DocumentsTab: React.FC<DocumentsTabProps> = ({ programmeId }) => {
  const programmeData = getProgrammeData(programmeId);
  
  if (!programmeData) return <div>No data available</div>;
  
  const { documents } = programmeData;
  
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Programme Documents</div>
        <button className="btn btn-outline btn-sm">+ Upload Document</button>
      </div>
      <div className="card-body" style={{ padding: '0 20px' }}>
        {documents.map((doc) => (
          <div key={doc.id} className="doc-item">
            <div className="doc-icon">{doc.icon}</div>
            <div className="doc-name">{doc.name}</div>
            <div className="doc-meta">Updated {doc.updatedDate} · {doc.updatedBy}</div>
            <span className={`doc-status ${doc.status}`}>
              {doc.status === 'approved' ? 'Approved' : 'Draft'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentsTab;
