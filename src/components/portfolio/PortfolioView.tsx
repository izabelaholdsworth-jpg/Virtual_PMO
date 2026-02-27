import React from 'react';
import { programmes, portfolioStats, overdueActions } from '../../data/mockData';

interface PortfolioViewProps {
  onNavigateToProgramme: (programmeId: string) => void;
}

const PortfolioView: React.FC<PortfolioViewProps> = ({ onNavigateToProgramme }) => {
  return (
    <div>
      <div className="page-header">
        <div>
          <div className="page-title">Programme Portfolio</div>
          <div className="page-subtitle">National Elective Care Programme — February 2026</div>
        </div>
        <div className="header-actions">
          <button className="btn btn-outline btn-sm">Export Report</button>
          <button className="btn btn-primary btn-sm">+ New Programme</button>
        </div>
      </div>

      {/* STAT TILES */}
      <div className="grid-4" style={{ marginBottom: '20px' }}>
        <div className="stat-tile blue">
          <div className="stat-label">Active Programmes</div>
          <div className="stat-value">{portfolioStats.activeProgrammes}</div>
          <div className="stat-sub">{portfolioStats.activeProgrammesSub}</div>
        </div>
        <div className="stat-tile amber">
          <div className="stat-label">Open Actions</div>
          <div className="stat-value">{portfolioStats.openActions}</div>
          <div className="stat-sub">{portfolioStats.openActionsSub}</div>
        </div>
        <div className="stat-tile red">
          <div className="stat-label">Open Risks</div>
          <div className="stat-value">{portfolioStats.openRisks}</div>
          <div className="stat-sub">{portfolioStats.openRisksSub}</div>
        </div>
        <div className="stat-tile green">
          <div className="stat-label">Milestones This Month</div>
          <div className="stat-value">{portfolioStats.milestones}</div>
          <div className="stat-sub">{portfolioStats.milestonesSub}</div>
        </div>
      </div>

      {/* PROGRAMMES GRID */}
      <div style={{ marginBottom: '8px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--grey-3)' }}>
        All Programmes — click to open
      </div>
      <div className="grid-3" style={{ marginBottom: '24px' }}>
        {programmes.map((programme) => (
          <div
            key={programme.id}
            className={`programme-card ${programme.rag}`}
            onClick={() => onNavigateToProgramme(programme.id)}
          >
            <div className={`programme-rag ${programme.rag}`}>
              {programme.rag.toUpperCase()}
            </div>
            <div className="programme-name">{programme.name}</div>
            <div className="programme-lead">
              SRO: {programme.sro} · PM: {programme.pm}
            </div>
            <div className="programme-stats">
              <div className="pstat">
                <strong>{programme.workstreamCount}</strong>Workstreams
              </div>
              <div className="pstat">
                <strong>{programme.openActions}</strong>Open Actions
              </div>
              <div className="pstat">
                <strong>{programme.risks}</strong>Risks
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CROSS PROGRAMME ACTIONS */}
      <div className="card">
        <div className="card-header">
          <div className="card-title">Overdue Actions — All Programmes</div>
          <span className="agent-tag">Actions Agent</span>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Action</th>
              <th>Programme</th>
              <th>Owner</th>
              <th>Due</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {overdueActions.map((action, index) => (
              <tr key={index}>
                <td>{action.description}</td>
                <td>{action.programme}</td>
                <td>{action.owner}</td>
                <td style={{ color: 'var(--red)' }}>{action.due}</td>
                <td>
                  <span className={`action-status ${action.status}`}>
                    {action.status === 'overdue' ? 'Overdue' : action.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PortfolioView;
