import React from 'react';
import { getProgrammeData } from '../../../data/mockData';
import TimelineStrip from '../../shared/TimelineStrip';
import FeatureBadge from '../../shared/FeatureBadge';
import RAGBadge from '../../shared/RAGBadge';

interface PlanTabProps {
  programmeId: string;
}

const PlanTab: React.FC<PlanTabProps> = ({ programmeId }) => {
  const programmeData = getProgrammeData(programmeId);
  
  if (!programmeData) return <div>No data available</div>;
  
  const { milestones } = programmeData;
  
  // Calculate milestone positions for timeline (simplified example)
  const timelineMilestones = milestones.slice(0, 6).map((m, idx) => ({
    name: m.name,
    date: new Date(m.dueDate),
    rag: m.rag,
    position: 10 + (idx * 15) // Simplified positioning
  }));
  
  // Get row class based on milestone RAG status
  const getRowClass = (rag: string) => {
    if (rag === 'complete') return 'milestone-row-complete';
    if (rag === 'amber') return 'milestone-row-at-risk';
    return '';
  };
  
  return (
    <>
      <TimelineStrip
        startDate="Nov 2025"
        endDate="Mar 2027"
        todayLabel="TODAY"
        milestones={timelineMilestones}
        todayPosition={35}
      />
      
      <div className="card">
        <div className="card-header">
          <div className="section-header">Programme Plan — Key Milestones</div>
          <FeatureBadge 
            icon="🤖" 
            label="Auto-updated from meetings"
            tooltip="Milestone dates sync automatically when confirmed in meeting minutes"
          />
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
              <tr key={index} className={getRowClass(milestone.rag)}>
                <td className="milestone-name">
                  <strong>{milestone.name}</strong>
                </td>
                <td>{milestone.dueDate}</td>
                <td>{milestone.owner}</td>
                <td>
                  {milestone.rag === 'complete' ? (
                    <RAGBadge status="complete" label="Complete" />
                  ) : milestone.rag === 'amber' ? (
                    <RAGBadge status="amber" label="At Risk" />
                  ) : (
                    <RAGBadge status="green" label="On Track" />
                  )}
                </td>
                <td style={{ fontSize: '12px', color: 'var(--grey-4)' }}>{milestone.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PlanTab;
