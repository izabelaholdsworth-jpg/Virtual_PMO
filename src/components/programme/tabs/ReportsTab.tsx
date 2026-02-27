import React, { useState } from 'react';
import AgentBanner from '../../shared/AgentBanner';
import RAGBadge from '../../shared/RAGBadge';

interface ReportsTabProps {
  programmeId: string;
}

const ReportsTab: React.FC<ReportsTabProps> = () => {
  const [showSources, setShowSources] = useState(false);
  
  return (
    <>
      <AgentBanner
        agentName="Report Agent"
        description="Highlight reports are auto-drafted on the 25th of each month using data from the actions log, risk register, milestone tracker, and meeting summaries. Review and approve before submission."
        lastAction="Draft generated · 25 Feb"
        onConfigure={() => console.log('Configure Report Agent')}
      />
      
      <div className="card">
        <div className="card-header">
          <div className="section-header">Highlight Report — February 2026</div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn btn-primary btn-sm">Edit Report</button>
            <button className="btn btn-outline btn-sm">Approve & Submit to SRO</button>
          </div>
        </div>
        <div className="card-body">
          <div className="draft-badge">
            Auto-drafted 25 Feb 2026 · from actions log, risk register & meeting summaries
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '12px', marginBottom: '20px' }}>
            <div style={{ textAlign: 'center', padding: '12px', background: 'var(--grey-1)', borderRadius: '3px' }}>
              <div style={{ fontSize: '11px', color: 'var(--grey-3)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>
                Overall RAG
              </div>
              <RAGBadge status="amber" />
              <div style={{ fontSize: '11px', color: 'var(--grey-4)', marginTop: '6px' }}>
                Schedule pressure
              </div>
            </div>
            <div style={{ textAlign: 'center', padding: '12px', background: 'var(--grey-1)', borderRadius: '3px' }}>
              <div style={{ fontSize: '11px', color: 'var(--grey-3)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>
                Budget RAG
              </div>
              <RAGBadge status="green" />
              <div style={{ fontSize: '11px', color: 'var(--grey-4)', marginTop: '6px' }}>
                Within tolerance
              </div>
            </div>
            <div style={{ textAlign: 'center', padding: '12px', background: 'var(--grey-1)', borderRadius: '3px' }}>
              <div style={{ fontSize: '11px', color: 'var(--grey-3)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>
                Schedule RAG
              </div>
              <RAGBadge status="amber" />
              <div style={{ fontSize: '11px', color: 'var(--grey-4)', marginTop: '6px' }}>
                Benefits framework delayed
              </div>
            </div>
            <div style={{ textAlign: 'center', padding: '12px', background: 'var(--grey-1)', borderRadius: '3px' }}>
              <div style={{ fontSize: '11px', color: 'var(--grey-3)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>
                Benefits RAG
              </div>
              <RAGBadge status="green" />
              <div style={{ fontSize: '11px', color: 'var(--grey-4)', marginTop: '6px' }}>
                On track
              </div>
            </div>
          </div>
          
          <div className="report-section">
            <div className="report-section-title">Progress This Period</div>
            <div className="report-text">
              The programme has made good progress in February with the Discovery Phase completed 
              and three pilot sites confirmed. The Programme Board met on 18 February and confirmed 
              Gateway Review 2 for 15 March 2026. Clinical pathway redesign workstream is 75% complete 
              and ahead of schedule.
            </div>
          </div>
          
          <div className="report-section">
            <div className="report-section-title">Issues and Risks</div>
            <div className="report-text">
              The programme is rated AMBER overall due to schedule risk associated with the Benefits 
              Realisation Framework, which is currently in draft. Digital infrastructure readiness 
              at Salford Royal remains a concern and is being monitored. Two actions are overdue and 
              have been escalated to workstream leads.
            </div>
          </div>
          
          <div className="report-section">
            <div className="report-section-title">Planned Activity Next Period</div>
            <div className="report-text">
              Gateway Review 2 preparation and submission by 15 March. Finalise Benefits Realisation 
              Framework. IT system readiness checks at all three pilot sites. Stakeholder communications 
              plan to be approved and circulated.
            </div>
          </div>
          
          <div style={{ marginTop: '16px' }}>
            <button className="toggle-button" onClick={() => setShowSources(!showSources)}>
              {showSources ? 'Hide data sources' : 'Show data sources'}
            </button>
            {showSources && (
              <div style={{ 
                marginTop: '12px', 
                padding: '12px', 
                background: 'var(--grey-1)', 
                borderRadius: '3px',
                fontSize: '12px',
                color: 'var(--grey-4)'
              }}>
                <strong>Data sources:</strong> Actions Log (updated 25 Feb), Risk Register (reviewed 24 Feb), 
                Programme Board Minutes (18 Feb), Milestone Tracker (updated 20 Feb), Workstream Status Reports 
                (week ending 23 Feb)
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Previous Reports Archive */}
      <div className="report-archive">
        <div className="report-archive-title">Previous Reports</div>
        <div className="report-link">
          <span>January 2026</span>
          <span style={{ fontSize: '11px', color: 'var(--green)', fontWeight: 600 }}>✓ Submitted</span>
        </div>
        <div className="report-link">
          <span>December 2025</span>
          <span style={{ fontSize: '11px', color: 'var(--green)', fontWeight: 600 }}>✓ Submitted</span>
        </div>
        <div className="report-link">
          <span>November 2025</span>
          <span style={{ fontSize: '11px', color: 'var(--green)', fontWeight: 600 }}>✓ Submitted</span>
        </div>
      </div>
    </>
  );
};

export default ReportsTab;
