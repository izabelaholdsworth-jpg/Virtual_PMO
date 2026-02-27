import React from 'react';
import { programmes, portfolioStats, overdueActions } from '../../data/mockData';
import KPICard from '../shared/KPICard';

interface PortfolioViewProps {
  onNavigateToProgramme: (programmeId: string) => void;
}

// Helper function to calculate days overdue
const calculateDaysOverdue = (dueDate: string): number => {
  const today = new Date('2026-02-27');
  const due = new Date(`${dueDate} 2026`);
  const diffTime = today.getTime() - due.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

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
        </div>
      </div>

      {/* STAT TILES */}
      <div className="grid-4" style={{ marginBottom: '20px' }}>
        <KPICard
          label="ACTIVE PROGRAMMES"
          value={portfolioStats.activeProgrammes}
          subtext={portfolioStats.activeProgrammesSub}
          color="blue"
        />
        <KPICard
          label="OPEN ACTIONS"
          value={portfolioStats.openActions}
          subtext="6 overdue"
          subtextVariant="warning"
          color="amber"
        />
        <KPICard
          label="OPEN RISKS"
          value={portfolioStats.openRisks}
          subtext="3 high severity"
          subtextVariant="danger"
          color="red"
        />
        <KPICard
          label="MILESTONES THIS MONTH"
          value={portfolioStats.milestones}
          subtext={portfolioStats.milestonesSub}
          color="green"
        />
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
          <div className="section-header">Overdue Actions — All Programmes</div>
          <span className="agent-tag">Actions Agent</span>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Action</th>
              <th>Programme</th>
              <th>Owner</th>
              <th>Due</th>
              <th>Days Overdue</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {overdueActions.map((action, index) => {
              const daysOverdue = calculateDaysOverdue(action.due);
              return (
                <tr key={index}>
                  <td>{action.description}</td>
                  <td>{action.programme}</td>
                  <td>{action.owner}</td>
                  <td style={{ color: 'var(--red)' }}>{action.due}</td>
                  <td>
                    <span className="days-overdue">{daysOverdue} days</span>
                  </td>
                  <td>
                    <span className={`action-status ${action.status}`}>
                      {action.status === 'overdue' ? 'Overdue' : action.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PortfolioView;
