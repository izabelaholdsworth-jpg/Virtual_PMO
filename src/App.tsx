import { useState } from 'react';
import './App.css';
import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import PortfolioView from './components/portfolio/PortfolioView';
import ProgrammeView from './components/programme/ProgrammeView';

type View = 'portfolio' | 'programme';

function App() {
  const [activeView, setActiveView] = useState<View>('portfolio');
  const [activeProgramme, setActiveProgramme] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('documents');

  const handleNavigateToPortfolio = () => {
    setActiveView('portfolio');
    setActiveProgramme(null);
  };

  const handleNavigateToProgramme = (programmeId: string) => {
    setActiveView('programme');
    setActiveProgramme(programmeId);
    setActiveTab('documents'); // Reset to first tab when navigating to a programme
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <TopNav />
      <div className="layout">
        <Sidebar
          activeView={activeView}
          activeProgramme={activeProgramme}
          onNavigateToPortfolio={handleNavigateToPortfolio}
          onNavigateToProgramme={handleNavigateToProgramme}
        />
        <main className="main">
          {activeView === 'portfolio' ? (
            <PortfolioView onNavigateToProgramme={handleNavigateToProgramme} />
          ) : activeProgramme ? (
            <ProgrammeView
              programmeId={activeProgramme}
              activeTab={activeTab}
              onTabChange={handleTabChange}
              onNavigateToPortfolio={handleNavigateToPortfolio}
            />
          ) : null}
        </main>
      </div>
    </>
  );
}

export default App;
