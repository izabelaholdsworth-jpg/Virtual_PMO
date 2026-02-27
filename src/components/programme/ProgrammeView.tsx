import React from 'react';
import { programmes, getProgrammeData } from '../../data/mockData';
import DocumentsTab from './tabs/DocumentsTab';
import PlanTab from './tabs/PlanTab';
import WorkstreamsTab from './tabs/WorkstreamsTab';
import MeetingsTab from './tabs/MeetingsTab';
import ReportsTab from './tabs/ReportsTab';
import RisksTab from './tabs/RisksTab';
import OutcomesTab from './tabs/OutcomesTab';
import StakeholdersTab from './tabs/StakeholdersTab';

interface ProgrammeViewProps {
  programmeId: string;
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onNavigateToPortfolio: () => void;
}

const ProgrammeView: React.FC<ProgrammeViewProps> = ({
  programmeId,
  activeTab,
  onTabChange,
  onNavigateToPortfolio
}) => {
  const programme = programmes.find(p => p.id === programmeId);
  const programmeData = getProgrammeData(programmeId);

  if (!programme || !programmeData) {
    return <div>Programme not found</div>;
  }

  const { stats, risks, meetings } = programmeData;

  // Determine stat tile colors based on RAG status
  const getStatTileColor = (type: 'overall' | 'actions' | 'risks' | 'milestone') => {
    if (type === 'overall') {
      return programme.rag;
    }
    if (type === 'actions') {
      return stats.openActionsSub.includes('overdue') ? 'amber' : 'blue';
    }
    if (type === 'risks') {
      return stats.openRisksSub.includes('high') ? 'red' : 'amber';
    }
    return 'green';
  };

  // Calculate badge counts
  const meetingBadgeCount = meetings.filter(m => m.status === 'upcoming').length;
  const riskBadgeCount = risks.length;

  const tabs = [
    { id: 'documents', label: '📄 Documents', component: DocumentsTab },
    { id: 'plan', label: '📅 Programme Plan', component: PlanTab },
    { id: 'workstreams', label: '🔀 Workstreams', component: WorkstreamsTab },
    { id: 'meetings', label: '🎙 Meetings', badge: meetingBadgeCount, component: MeetingsTab },
    { id: 'reports', label: '📊 Reports', component: ReportsTab },
    { id: 'risks', label: '⚠️ Risks', badge: riskBadgeCount, component: RisksTab },
    { id: 'outcomes', label: '📈 Outcomes', component: OutcomesTab },
    { id: 'stakeholders', label: '👥 Stakeholders', component: StakeholdersTab }
  ];

  const ActiveTabComponent = tabs.find(t => t.id === activeTab)?.component || DocumentsTab;

  return (
    <div>
      <div className="page-header">
        <div>
          <div className="breadcrumb">
            <span onClick={onNavigateToPortfolio} style={{ cursor: 'pointer' }}>Portfolio</span>
            <span>›</span>
            <span>{programme.name}</span>
          </div>
          <div className="page-title">{programme.name} Programme</div>
          <div className="page-subtitle">
            SRO: {programme.sro} · Programme Manager: {programme.pm} · Last updated: 25 Feb 2026
          </div>
        </div>
        <div className="header-actions">
          <span className={`rag-pill ${programme.rag}`}>
            {programme.rag === 'green' ? 'Green' : programme.rag === 'amber' ? 'Amber' : 'Red'}
          </span>
          <button className="btn btn-outline btn-sm">Generate Report</button>
          <button className="btn btn-primary btn-sm">Edit Programme</button>
        </div>
      </div>

      {/* SUMMARY TILES */}
      <div className="grid-4" style={{ marginBottom: '20px' }}>
        <div className={`stat-tile ${getStatTileColor('overall')}`}>
          <div className="stat-label">Overall RAG</div>
          <div className="stat-value" style={{ fontSize: '20px', paddingTop: '4px' }}>
            {stats.overall}
          </div>
          <div className="stat-sub">{stats.overallSub}</div>
        </div>
        <div className={`stat-tile ${getStatTileColor('actions')}`}>
          <div className="stat-label">Open Actions</div>
          <div className="stat-value">{stats.openActions}</div>
          <div className="stat-sub">{stats.openActionsSub}</div>
        </div>
        <div className={`stat-tile ${getStatTileColor('risks')}`}>
          <div className="stat-label">Open Risks</div>
          <div className="stat-value">{stats.openRisks}</div>
          <div className="stat-sub">{stats.openRisksSub}</div>
        </div>
        <div className={`stat-tile ${getStatTileColor('milestone')}`}>
          <div className="stat-label">Next Milestone</div>
          <div className="stat-value" style={{ fontSize: '16px', paddingTop: '6px' }}>
            {stats.nextMilestone}
          </div>
          <div className="stat-sub">{stats.nextMilestoneSub}</div>
        </div>
      </div>

      {/* TABS */}
      <div className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
            {tab.badge ? <span className="tab-badge">{tab.badge}</span> : null}
          </div>
        ))}
      </div>

      {/* TAB CONTENT */}
      <ActiveTabComponent programmeId={programmeId} />
    </div>
  );
};

export default ProgrammeView;
