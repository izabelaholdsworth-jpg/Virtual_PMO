import React from 'react';
import { RAGStatus } from '../../data/mockData';

interface Milestone {
  name: string;
  date: Date;
  rag: RAGStatus | 'complete';
  position: number; // 0-100 percentage position
}

interface TimelineStripProps {
  startDate: string;
  endDate: string;
  todayLabel?: string;
  milestones: Milestone[];
  todayPosition: number; // 0-100 percentage
}

const TimelineStrip: React.FC<TimelineStripProps> = ({
  startDate,
  endDate,
  todayLabel = 'TODAY',
  milestones,
  todayPosition
}) => {
  return (
    <div className="programme-timeline">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginBottom: '10px',
        fontSize: '11px',
        fontWeight: 600,
        color: 'var(--grey-4)'
      }}>
        <span>{startDate}</span>
        <span>{endDate}</span>
      </div>
      <div className="timeline-track">
        <div className="timeline-line" />
        
        {/* Today marker */}
        <div className="timeline-today" style={{ left: `${todayPosition}%` }}>
          <div className="timeline-today-label">{todayLabel}</div>
        </div>

        {/* Milestones */}
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="timeline-milestone"
            style={{ left: `${milestone.position}%` }}
            title={milestone.name}
          >
            <div className={`milestone-dot ${milestone.rag}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineStrip;
