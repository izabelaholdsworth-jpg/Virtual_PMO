import React from 'react';
import { getProgrammeData } from '../../../data/mockData';

interface StakeholdersTabProps {
  programmeId: string;
}

const StakeholdersTab: React.FC<StakeholdersTabProps> = ({ programmeId }) => {
  const programmeData = getProgrammeData(programmeId);
  
  if (!programmeData) return <div>No data available</div>;
  
  const { stakeholders } = programmeData;
  
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Stakeholder Register</div>
        <button className="btn btn-outline btn-sm">+ Add Stakeholder</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Organisation</th>
            <th>Role</th>
            <th>Interest</th>
            <th>Influence</th>
            <th>Engagement</th>
          </tr>
        </thead>
        <tbody>
          {stakeholders.map((stakeholder, index) => (
            <tr key={index}>
              <td><strong>{stakeholder.name}</strong></td>
              <td>{stakeholder.organisation}</td>
              <td>{stakeholder.role}</td>
              <td>{stakeholder.interest}</td>
              <td>{stakeholder.influence}</td>
              <td>
                <span className={`rag-pill ${stakeholder.engagement}`}>
                  {stakeholder.engagement === 'green' ? 'Active' : 'Partial'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StakeholdersTab;
