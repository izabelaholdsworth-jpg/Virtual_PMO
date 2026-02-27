import React from 'react';
import { getProgrammeData } from '../../../data/mockData';

interface MeetingsTabProps {
  programmeId: string;
}

const MeetingsTab: React.FC<MeetingsTabProps> = ({ programmeId }) => {
  const programmeData = getProgrammeData(programmeId);
  
  if (!programmeData) return <div>No data available</div>;
  
  const { meetings } = programmeData;
  
  return (
    <>
      <div className="ai-banner">
        <div className="ai-icon">🤖</div>
        <div className="ai-text">
          <strong>Meeting Agent active</strong> — Teams transcripts are automatically processed after each meeting. Actions, decisions and risks are extracted and posted to the relevant logs. Minutes draft is generated within 30 minutes of meeting end.
        </div>
        <button className="btn btn-outline btn-sm">Configure</button>
      </div>
      <div className="card">
        <div className="card-header">
          <div className="card-title">Meetings</div>
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
          <div className="card-title">AI-Generated Minutes — Programme Board 18 Feb 2026</div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span className="agent-tag">Auto-generated</span>
            <button className="btn btn-outline btn-sm">Edit & Approve</button>
          </div>
        </div>
        <div className="card-body">
          <div style={{ background: 'var(--grey-1)', borderRadius: '3px', padding: '14px', marginBottom: '16px', fontSize: '12px', color: 'var(--grey-4)', borderLeft: '3px solid var(--light-blue)' }}>
            ⚡ These minutes were auto-drafted from the Teams meeting transcript. Please review, edit if needed, and approve before circulating.
          </div>
          <div className="report-section">
            <div className="report-section-title">Attendees</div>
            <div className="report-text">Dr Sarah Chen (SRO), Izabela Holdsworth (PM), Dr Anita Patel, IT Programme Manager, HR Business Partner, Comms Lead, Finance Business Partner, Clinical Lead (x2), ICB Representative, NHS England Representative</div>
          </div>
          <div className="report-section">
            <div className="report-section-title">Key Decisions</div>
            <div className="report-text">Gateway Review 2 date confirmed as 15 March 2026. Benefits Realisation Framework to be finalised by I. Morgan by 28 Feb. Three pilot sites confirmed: Royal Free, Salford Royal, Leeds Teaching Hospitals.</div>
          </div>
          <div className="report-section">
            <div className="report-section-title">Actions Arising (auto-added to Actions Log)</div>
            <div className="report-text">1. I. Morgan to finalise Benefits Realisation Framework — due 28 Feb. 2. Comms Lead to circulate stakeholder comms plan — due 25 Feb. 3. IT PM to confirm system readiness for pilot sites — due 07 Mar. 4. Finance BP to review revised budget model — due 07 Mar.</div>
          </div>
          <div className="report-section">
            <div className="report-section-title">Risks Identified (auto-flagged to Risk Register)</div>
            <div className="report-text">⚠️ Digital infrastructure delays at Salford Royal may impact pilot go-live date. Flagged as AMBER — Risk Owner: IT Programme Manager. ⚠️ Workforce capacity constraints in clinical team raised — to be assessed. Flagged for Risk Register review.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetingsTab;
