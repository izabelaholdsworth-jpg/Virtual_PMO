import React from 'react';
import { getProgrammeData } from '../../../data/mockData';
import AgentBanner from '../../shared/AgentBanner';

interface MeetingsTabProps {
  programmeId: string;
}

const MeetingsTab: React.FC<MeetingsTabProps> = ({ programmeId }) => {
  const programmeData = getProgrammeData(programmeId);
  
  if (!programmeData) return <div>No data available</div>;
  
  const { meetings } = programmeData;
  
  // Mock structured actions data
  const actionsArising = [
    {
      owner: 'I. Morgan',
      description: 'Finalise Benefits Realisation Framework',
      dueDate: '28 Feb',
      status: 'open',
      linkedToActionsLog: true
    },
    {
      owner: 'Comms Lead',
      description: 'Circulate stakeholder comms plan',
      dueDate: '25 Feb',
      status: 'open',
      linkedToActionsLog: true
    },
    {
      owner: 'IT PM',
      description: 'Confirm system readiness for pilot sites',
      dueDate: '07 Mar',
      status: 'open',
      linkedToActionsLog: true
    },
    {
      owner: 'Finance BP',
      description: 'Review revised budget model',
      dueDate: '07 Mar',
      status: 'open',
      linkedToActionsLog: true
    }
  ];
  
  // Mock structured risks data
  const risksIdentified = [
    {
      description: 'Digital infrastructure delays at Salford Royal may impact pilot go-live date',
      rag: 'amber' as const,
      owner: 'IT Programme Manager',
      addedToRegister: true
    },
    {
      description: 'Workforce capacity constraints in clinical team raised — to be assessed',
      rag: 'amber' as const,
      owner: 'TBC',
      addedToRegister: false
    }
  ];
  
  return (
    <>
      <AgentBanner
        agentName="Meeting Agent"
        description="Teams transcripts are automatically processed after each meeting. Actions, decisions and risks are extracted and posted to the relevant logs. Minutes draft is generated within 30 minutes of meeting end."
        lastAction="3 actions auto-logged · 18 Feb"
        onConfigure={() => console.log('Configure Meeting Agent')}
      />
      
      <div className="card">
        <div className="card-header">
          <div className="section-header">Meetings</div>
          <button className="btn btn-primary btn-sm">+ Schedule Meeting</button>
        </div>
        <div className="card-body" style={{ padding: '0 20px' }}>
          {meetings.map((meeting, index) => (
            <div key={index} className="meeting-item">
              <div
                className="meeting-date-block"
                style={meeting.dateBlockColor ? { background: meeting.dateBlockColor } : {}}
              >
                <div
                  className="meeting-day"
                  style={meeting.dayColor ? { color: meeting.dayColor } : {}}
                >
                  {meeting.day}
                </div>
                <div className="meeting-month">{meeting.month}</div>
              </div>
              <div className="meeting-details">
                <div className="meeting-title">{meeting.title}</div>
                <div className="meeting-meta">
                  <span>⏰ {meeting.time}</span>
                  <span>📍 {meeting.location}</span>
                  <span>👥 {meeting.attendees} attendees</span>
                </div>
              </div>
              <div className="meeting-actions">
                {meeting.agendaPending && (
                  <span style={{ fontSize: '11px', color: 'var(--amber)', fontWeight: 600 }}>
                    Agenda pending
                  </span>
                )}
                {meeting.hasAiMinutes && <span className="agent-tag">AI Minutes</span>}
                <button className="btn btn-outline btn-sm">
                  {meeting.hasAiMinutes ? 'View Minutes' : 'View Agenda'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI GENERATED MINUTES EXAMPLE */}
      <div className="card" style={{ marginTop: '16px' }}>
        <div className="card-header">
          <div className="section-header">AI-Generated Minutes — Programme Board 18 Feb 2026</div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span className="draft-badge">Generated 18 Feb 2026 at 11:47 from Teams transcript</span>
            <button className="btn btn-outline btn-sm">Edit & Approve</button>
          </div>
        </div>
        <div className="card-body">
          <div style={{ 
            background: 'var(--complete-bg)', 
            borderRadius: '3px', 
            padding: '14px', 
            marginBottom: '16px', 
            fontSize: '12px', 
            color: 'var(--grey-5)', 
            borderLeft: '3px solid var(--blue)' 
          }}>
            ⚡ These minutes were auto-drafted from the Teams meeting transcript. Please review, edit if needed, and approve before circulating.
          </div>
          
          <div className="report-section">
            <div className="report-section-title">Attendees</div>
            <div className="report-text">
              Dr Sarah Chen (SRO), Izabela Holdsworth (PM), Dr Anita Patel, IT Programme Manager, 
              HR Business Partner, Comms Lead, Finance Business Partner, Clinical Lead (x2), 
              ICB Representative, NHS England Representative
            </div>
          </div>
          
          <div className="report-section">
            <div className="report-section-title">Key Decisions</div>
            <div className="report-text">
              Gateway Review 2 date confirmed as 15 March 2026. Benefits Realisation Framework 
              to be finalised by I. Morgan by 28 Feb. Three pilot sites confirmed: Royal Free, 
              Salford Royal, Leeds Teaching Hospitals.
            </div>
          </div>
          
          <div className="report-section">
            <div className="report-section-title">Actions Arising</div>
            <div className="actions-list">
              {actionsArising.map((action, idx) => (
                <div key={idx} className="action-item">
                  <div className="action-item-description">
                    <strong>{action.owner}</strong> to {action.description}
                    <div className="action-item-meta">
                      <span>Due: {action.dueDate}</span>
                      {action.linkedToActionsLog && (
                        <span className="action-item-linked">Added to Actions Log</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="report-section">
            <div className="report-section-title">Risks Identified</div>
            <div className="risks-list">
              {risksIdentified.map((risk, idx) => (
                <div key={idx} className={`risk-item ${risk.rag}`}>
                  <div style={{ flex: 1 }}>
                    <div style={{ marginBottom: '4px' }}>{risk.description}</div>
                    <div style={{ fontSize: '11px', color: 'var(--grey-4)' }}>
                      Risk Owner: {risk.owner}
                      {risk.addedToRegister && (
                        <span style={{ marginLeft: '8px', color: 'var(--green)', fontWeight: 600 }}>
                          ✓ Added to Risk Register
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetingsTab;
