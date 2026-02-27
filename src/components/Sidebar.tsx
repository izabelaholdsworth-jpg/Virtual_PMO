import React from 'react';
import { programmes } from '../data/mockData';

interface SidebarProps {
  activeView: 'portfolio' | 'programme';
  activeProgramme: string | null;
  onNavigateToPortfolio: () => void;
  onNavigateToProgramme: (programmeId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeView,
  activeProgramme,
  onNavigateToPortfolio,
  onNavigateToProgramme
}) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-label">Navigation</div>
        <div
          className={`sidebar-item ${activeView === 'portfolio' ? 'active' : ''}`}
          onClick={onNavigateToPortfolio}
        >
          <span>📊</span> Portfolio Overview
        </div>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-label">Programmes</div>
        {programmes.map((programme) => (
          <div
            key={programme.id}
            className={`sidebar-item ${activeView === 'programme' && activeProgramme === programme.id ? 'active' : ''}`}
            onClick={() => onNavigateToProgramme(programme.id)}
          >
            <span>{programme.emoji}</span> {programme.name}
            <span className={`rag rag-${programme.rag}`}></span>
          </div>
        ))}
      </div>
      <div className="sidebar-section">
        <div className="sidebar-label">Tools</div>
        <div className="sidebar-item" onClick={onNavigateToPortfolio}>
          <span>📋</span> All Actions
        </div>
        <div className="sidebar-item" onClick={onNavigateToPortfolio}>
          <span>⚠️</span> Risk Register
        </div>
        <div className="sidebar-item" onClick={onNavigateToPortfolio}>
          <span>📅</span> Meetings
          <span className="notif-dot"></span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
