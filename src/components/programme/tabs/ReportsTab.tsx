import React from 'react';

interface ReportsTabProps {
  programmeId: string;
}

const ReportsTab: React.FC<ReportsTabProps> = () => {
  return (
    <>
      <div className="ai-banner">
        <div className="ai-icon">🤖</div>
        <div className="ai-text">
          <strong>Report Agent active</strong> — Highlight reports are auto-drafted on the 25th of each month using data from the actions log, risk register, milestone tracker, and meeting summaries. Review and approve before submission.
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <div className="card-title">Highlight Report — February 2026</div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span className="agent-tag">Auto-drafted</span>
            <button className="btn btn-outline btn-sm">Edit</button>
            <button className="btn btn-primary btn-sm">Approve & Submit</button>
          </div>
        </div>
        <div className="card-body">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '12px', marginBottom: '20px' }}>
            <div style={{ textAlign: 'center', padding: '12px', background: 'var(--grey-1)', borderRadius: '3px' }}>
              <div style={{ fontSize: '11px', color: 'var(--grey-3)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>Overall RAG</div>
              <span className="rag-pill amber">Amber</span>
            </div>
            <div style={{ textAlign: 'center', padding: '12px', background: 'var(--grey-1)', borderRadius: '3px' }}>
              <div style={{ fontSize: '11px', color: 'var(--grey-3)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>Budget RAG</div>
              <span className="rag-pill green">Green</span>
            </div>
            <div style={{ textAlign: 'center', padding: '12px', background: 'var(--grey-1)', borderRadius: '3px' }}>
              <div style={{ fontSize: '11px', color: 'var(--grey-3)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>Schedule RAG</div>
              <span className="rag-pill amber">Amber</span>
            </div>
            <div style={{ textAlign: 'center', padding: '12px', background: 'var(--grey-1)', borderRadius: '3px' }}>
              <div style={{ fontSize: '11px', color: 'var(--grey-3)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>Benefits RAG</div>
              <span className="rag-pill green">Green</span>
            </div>
          </div>
          <div className="report-section">
            <div className="report-section-title">Progress This Period</div>
            <div className="report-text">The programme has made good progress in February with the Discovery Phase completed and three pilot sites confirmed. The Programme Board met on 18 February and confirmed Gateway Review 2 for 15 March 2026. Clinical pathway redesign workstream is 75% complete and ahead of schedule.</div>
          </div>
          <div className="report-section">
            <div className="report-section-title">Issues and Risks</div>
            <div className="report-text">The programme is rated AMBER overall due to schedule risk associated with the Benefits Realisation Framework, which is currently in draft. Digital infrastructure readiness at Salford Royal remains a concern and is being monitored. Two actions are overdue and have been escalated to workstream leads.</div>
          </div>
          <div className="report-section">
            <div className="report-section-title">Planned Activity Next Period</div>
            <div className="report-text">Gateway Review 2 preparation and submission by 15 March. Finalise Benefits Realisation Framework. IT system readiness checks at all three pilot sites. Stakeholder communications plan to be approved and circulated.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportsTab;
