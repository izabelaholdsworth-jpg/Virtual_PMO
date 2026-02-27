import React from 'react';
import { getProgrammeData } from '../../../data/mockData';

interface RisksTabProps {
  programmeId: string;
}

const RisksTab: React.FC<RisksTabProps> = ({ programmeId }) => {
  const programmeData = getProgrammeData(programmeId);
  
  if (!programmeData) return <div>No data available</div>;
  
  const { risks } = programmeData;
  
  return (
    <>
      <div className="ai-banner">
        <div className="ai-icon">🤖</div>
        <div className="ai-text">
          <strong>Risk Agent active</strong> — Meeting transcripts are scanned automatically for new risks and issues. Flagged items appear here for PM review. Risk owners receive weekly automated reminders for open items.
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <div className="card-title">RAID Log</div>
          <button className="btn btn-primary btn-sm">+ Add Risk</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Category</th>
              <th>Owner</th>
              <th>Score</th>
              <th>RAG</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            {risks.map((risk) => (
              <tr key={risk.id}>
                <td className="risk-id">{risk.id}</td>
                <td>{risk.description}</td>
                <td>{risk.category}</td>
                <td>{risk.owner}</td>
                <td>
                  <span className={`risk-score ${risk.rag}`}>{risk.score}</span>
                </td>
                <td>
                  <span className={`rag-pill ${risk.rag === 'high' ? 'red' : risk.rag === 'medium' ? 'amber' : 'green'}`}>
                    {risk.rag === 'high' ? 'High' : risk.rag === 'medium' ? 'Medium' : 'Low'}
                  </span>
                </td>
                <td>
                  {risk.source.startsWith('Meeting') ? (
                    <span className="agent-tag">{risk.source}</span>
                  ) : (
                    risk.source
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RisksTab;
