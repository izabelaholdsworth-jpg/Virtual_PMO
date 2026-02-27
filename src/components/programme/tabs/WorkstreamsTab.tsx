import React from 'react';
import { getProgrammeData } from '../../../data/mockData';

interface WorkstreamsTabProps {
  programmeId: string;
}

const WorkstreamsTab: React.FC<WorkstreamsTabProps> = ({ programmeId }) => {
  const programmeData = getProgrammeData(programmeId);
  
  if (!programmeData) return <div>No data available</div>;
  
  const { workstreams } = programmeData;
  
  return (
    <div className="grid-2">
      {workstreams.map((workstream) => (
        <div key={workstream.id} className={`workstream-item ${workstream.rag}`}>
          <div className="workstream-name">{workstream.name}</div>
          <div className="workstream-owner">Lead: {workstream.lead} · {workstream.taskCount} tasks</div>
          <div className="progress-bar">
            <div className={`progress-fill ${workstream.rag}`} style={{ width: `${workstream.progress}%` }}></div>
          </div>
          <div className="progress-label">
            <span>{workstream.progress}% complete</span>
            <span className={`rag-pill ${workstream.rag}`} style={{ fontSize: '10px' }}>
              {workstream.rag === 'green' ? 'Green' : 'Amber'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkstreamsTab;
