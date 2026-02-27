import React from 'react';
import { getProgrammeData } from '../../../data/mockData';

interface StakeholdersTabProps {
  programmeId: string;
}

const StakeholdersTab: React.FC<StakeholdersTabProps> = ({ programmeId }) => {
  const programmeData = getProgrammeData(programmeId);
  
  if (!programmeData) return <div>No data available</div>;
  
  const { stakeholders } = programmeData;
  
  // Enrich stakeholders with additional data
  const enrichedStakeholders = stakeholders.map((s, idx) => ({
    ...s,
    lastContacted: idx === 0 ? '15 Feb 2026' : idx === 1 ? '08 Feb 2026' : idx === 2 ? '22 Jan 2026' : '10 Feb 2026',
    hasNamedContact: !s.name.includes('Representative') && !s.name.includes('ICB')
  }));
  
  // Mock comms log data
  const commsLog = [
    {
      stakeholder: 'Dr Sarah Chen',
      type: 'meeting',
      date: '18 Feb 2026',
      notes: 'Programme Board meeting — discussed Gateway Review 2 preparation',
      outcome: 'Supportive — approved pilot sites'
    },
    {
      stakeholder: 'NHS England Rep',
      type: 'email',
      date: '15 Feb 2026',
      notes: 'Update on national RTT performance data',
      outcome: 'Information shared'
    },
    {
      stakeholder: 'Royal Free Trust CEO',
      type: 'call',
      date: '12 Feb 2026',
      notes: '1-2-1 discussion on pilot readiness',
      outcome: 'Concerns raised about timeline — follow-up needed'
    }
  ];
  
  // Calculate position for matrix (simplified)
  const getMatrixPosition = (interest: string, influence: string) => {
    const interestVal = interest === 'High' ? 75 : interest === 'Medium' ? 50 : 25;
    const influenceVal = influence === 'High' ? 75 : influence === 'Medium' ? 50 : 25;
    return { x: interestVal, y: influenceVal };
  };
  
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="section-header">Stakeholder Register</div>
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
              <th>Last Contacted</th>
            </tr>
          </thead>
          <tbody>
            {enrichedStakeholders.map((stakeholder, index) => (
              <tr key={index}>
                <td>
                  <strong>{stakeholder.name}</strong>
                  {!stakeholder.hasNamedContact && (
                    <span className="inline-warning">Named contact required</span>
                  )}
                </td>
                <td>{stakeholder.organisation}</td>
                <td>{stakeholder.role}</td>
                <td>{stakeholder.interest}</td>
                <td>{stakeholder.influence}</td>
                <td>
                  <span className={`rag-badge ${stakeholder.engagement}`}>
                    {stakeholder.engagement === 'green' ? 'Active' : stakeholder.engagement === 'amber' ? 'Partial' : 'At Risk'}
                  </span>
                </td>
                <td style={{ fontSize: '12px', color: 'var(--grey-4)' }}>{stakeholder.lastContacted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Stakeholder Matrix */}
      <div className="card" style={{ marginTop: '20px' }}>
        <div className="card-header">
          <div className="section-header">Stakeholder Power/Interest Matrix</div>
        </div>
        <div className="card-body">
          <div className="stakeholder-matrix">
            {/* Y-axis label */}
            <div style={{ 
              position: 'absolute', 
              left: '-50px', 
              top: '50%', 
              transform: 'translateY(-50%) rotate(-90deg)',
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--grey-4)',
              whiteSpace: 'nowrap'
            }}>
              INFLUENCE →
            </div>
            
            {/* X-axis label */}
            <div style={{ 
              position: 'absolute', 
              bottom: '-30px', 
              left: '50%', 
              transform: 'translateX(-50%)',
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--grey-4)'
            }}>
              INTEREST →
            </div>
            
            <div className="matrix-quadrant quadrant-top-right">Manage Closely</div>
            <div className="matrix-quadrant quadrant-top-left">Keep Satisfied</div>
            <div className="matrix-quadrant quadrant-bottom-right">Keep Informed</div>
            <div className="matrix-quadrant quadrant-bottom-left">Monitor</div>
            
            {enrichedStakeholders.slice(0, 6).map((s, idx) => {
              const pos = getMatrixPosition(s.interest, s.influence);
              const initials = s.name.split(' ').map(n => n[0]).join('');
              return (
                <div
                  key={idx}
                  className="stakeholder-dot"
                  style={{
                    left: `${pos.x}%`,
                    bottom: `${pos.y}%`,
                    transform: 'translate(-50%, 50%)',
                    background: s.engagement === 'green' ? 'var(--green)' : 
                                s.engagement === 'amber' ? 'var(--amber)' : 'var(--red)'
                  }}
                  title={`${s.name} - ${s.engagement === 'green' ? 'Active' : s.engagement === 'amber' ? 'Partial' : 'At Risk'}`}
                >
                  {initials}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Communications Log */}
      <div className="comms-log" style={{ marginTop: '20px' }}>
        <div className="report-archive-title">Communications Log</div>
        {commsLog.map((event, idx) => (
          <div key={idx} className="comms-entry">
            <div className="comms-entry-header">
              <span>
                {event.stakeholder}
                <span className="comms-entry-type">{event.type}</span>
              </span>
              <span style={{ fontSize: '11px', color: 'var(--grey-4)' }}>{event.date}</span>
            </div>
            <div style={{ fontSize: '12px', marginBottom: '4px', color: 'var(--text)' }}>
              {event.notes}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--grey-4)' }}>
              <strong>Outcome:</strong> {event.outcome}
            </div>
          </div>
        ))}
        <button className="btn btn-outline btn-sm" style={{ marginTop: '12px' }}>
          + Log Communication
        </button>
      </div>
    </>
  );
};

export default StakeholdersTab;
