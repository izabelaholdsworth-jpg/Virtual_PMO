import React from 'react';
import { programmes, getProgrammeData } from '../../data/mockData';
import KPICard from '../shared/KPICard';
import RAGBadge from '../shared/RAGBadge';
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

  // Determine stat tile colors and subtextVariant based on RAG status
  const getStatTileConfig = (type: 'overall' | 'actions' | 'risks' | 'milestone') => {
    if (type === 'overall') {
      return { color: programme.rag as 'red' | 'amber' | 'green', subtextVariant: 'default' as const };
    }
    if (type === 'actions') {
      const hasOverdue = stats.openActionsSub.includes('overdue');
      return { 
        color: hasOverdue ? 'amber' as const : 'blue' as const, 
        subtextVariant: hasOverdue ? 'warning' as const : 'default' as const 
      };
    }
    if (type === 'risks') {
      const hasHighSeverity = stats.openRisksSub.includes('high');
      return { 
        color: hasHighSeverity ? 'red' as const : 'amber' as const, 
        subtextVariant: hasHighSeverity ? 'danger' as const : 'warning' as const 
      };
    }
    return { color: 'green' as const, subtextVariant: 'default' as const };
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
          <RAGBadge status={programme.rag} />
          <button className="btn btn-primary btn-sm">Generate Report</button>
          <button className="btn btn-outline btn-sm">Edit Programme</button>
        </div>
      </div>

      {/* SUMMARY TILES */}
      <div className="grid-4" style={{ marginBottom: '20px' }}>
        <KPICard
          label="OVERALL RAG"
          value={stats.overall}
          subtext={stats.overallSub}
          color={getStatTileConfig('overall').color}
        />
        <KPICard
          label="OPEN ACTIONS"
          value={stats.openActions}
          subtext={stats.openActionsSub}
          color={getStatTileConfig('actions').color}
          subtextVariant={getStatTileConfig('actions').subtextVariant}
        />
        <KPICard
          label="OPEN RISKS"
          value={stats.openRisks}
          subtext={stats.openRisksSub}
          color={getStatTileConfig('risks').color}
          subtextVariant={getStatTileConfig('risks').subtextVariant}
        />
        <KPICard
          label="NEXT MILESTONE"
          value={stats.nextMilestone}
          subtext={stats.nextMilestoneSub}
          color={getStatTileConfig('milestone').color}
        />
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
