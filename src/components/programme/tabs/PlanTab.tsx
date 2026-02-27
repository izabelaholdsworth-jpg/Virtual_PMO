import React from 'react';
import { getProgrammeData } from '../../../data/mockData';

interface PlanTabProps {
  programmeId: string;
}

const PlanTab: React.FC<PlanTabProps> = ({ programmeId }) => {
  const programmeData = getProgrammeData(programmeId);
  
  if (!programmeData) return <div>No data available</div>;
  
  const { milestones } = programmeData;
  
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Programme Plan — Key Milestones</div>
        <span className="agent-tag">Auto-updated from meetings</span>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Milestone</th>
            <th>Due Date</th>
            <th>Owner</th>
            <th>RAG</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {milestones.map((milestone, index) => (
            <tr key={index}>
              <td><strong>{milestone.name}</strong></td>
              <td>{milestone.dueDate}</td>
              <td>{milestone.owner}</td>
              <td>
                <span className={`rag-pill ${milestone.rag}`}>
                  {milestone.rag === 'complete' ? 'Complete' : milestone.rag === 'amber' ? 'At Risk' : 'On Track'}
                </span>
              </td>
              <td style={{ fontSize: '12px', color: 'var(--grey-4)' }}>{milestone.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlanTab;
