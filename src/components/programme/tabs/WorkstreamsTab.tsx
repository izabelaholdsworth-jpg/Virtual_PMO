import React, { useState } from 'react';
import { getProgrammeData } from '../../../data/mockData';
import RAGBadge from '../../shared/RAGBadge';

interface WorkstreamsTabProps {
  programmeId: string;
}

const WorkstreamsTab: React.FC<WorkstreamsTabProps> = ({ programmeId }) => {
  const programmeData = getProgrammeData(programmeId);
  const [expandedWorkstream, setExpandedWorkstream] = useState<string | null>(null);
  
  if (!programmeData) return <div>No data available</div>;
  
  const { workstreams } = programmeData;
  
  // Helper to check if lead is a named person (contains a dot or capital letter pattern suggesting a name)
  const isNamedOwner = (lead: string): boolean => {
    return lead.includes('Dr ') || lead.includes('Mr ') || lead.includes('Ms ') || 
           lead.includes('Mrs ') || lead.includes('Prof ') ||
           /^[A-Z][a-z]+ [A-Z]/.test(lead); // Simple name pattern
  };
  
  // Remove number prefixes from workstream names
  const cleanWorkstreamName = (name: string): string => {
    return name.replace(/^\d+\.\s*/, '');
  };
  
  // Calculate completed tasks (based on progress percentage)
  const getCompletedTasks = (total: number, progress: number): number => {
    return Math.round((total * progress) / 100);
  };
  
  // Mock task data for expanded view
  const getMockTasks = (workstreamId: string) => [
    { name: 'Initial requirements gathering', completed: true },
    { name: 'Stakeholder workshop completion', completed: true },
    { name: 'Draft specification review', completed: false, overdue: false },
    { name: 'Final approval', completed: false, overdue: false }
  ];
  
  return (
    <div className="grid-2">
      {workstreams.map((workstream) => {
        const isExpanded = expandedWorkstream === workstream.id;
        const completedTasks = getCompletedTasks(workstream.taskCount, workstream.progress);
        const hasNamedOwner = isNamedOwner(workstream.lead);
        
        return (
          <div 
            key={workstream.id} 
            className={`workstream-item ${workstream.rag} ${isExpanded ? 'workstream-expanded' : ''}`}
            onClick={() => setExpandedWorkstream(isExpanded ? null : workstream.id)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="workstream-name">{cleanWorkstreamName(workstream.name)}</div>
              <span style={{ fontSize: '16px', color: 'var(--grey-3)' }}>
                {isExpanded ? '▲' : '▼'}
              </span>
            </div>
            <div className="workstream-owner">
              Lead: {workstream.lead}
              {!hasNamedOwner && (
                <span className="inline-warning">Named owner required</span>
              )}
              <span className="task-count">
                {' · '}
                <span className="complete">{completedTasks}</span>
                /{workstream.taskCount} tasks complete
              </span>
            </div>
            <div className="progress-bar">
              <div className={`progress-fill ${workstream.rag}`} style={{ width: `${workstream.progress}%` }}></div>
            </div>
            <div className="progress-label">
              <span>{workstream.progress}% complete</span>
              <RAGBadge status={workstream.rag} />
            </div>
            
            {isExpanded && (
              <div className="workstream-task-list" onClick={(e) => e.stopPropagation()}>
                <div style={{ 
                  fontSize: '11px', 
                  fontWeight: 600, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.08em',
                  color: 'var(--grey-4)',
                  marginBottom: '10px'
                }}>
                  Tasks
                </div>
                {getMockTasks(workstream.id).map((task, idx) => (
                  <div key={idx} className={`workstream-task-item ${task.overdue ? 'overdue' : ''}`}>
                    <span style={{ marginRight: '8px' }}>
                      {task.completed ? '✓' : '○'}
                    </span>
                    {task.name}
                    {task.overdue && <span style={{ marginLeft: '8px', color: 'var(--red)' }}>(Overdue)</span>}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WorkstreamsTab;
