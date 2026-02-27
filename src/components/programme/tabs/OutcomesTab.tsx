import React, { useState } from 'react';
import { outcomeStats, rttPerformanceData, longWaitersData } from '../../../data/mockData';
import AgentBanner from '../../shared/AgentBanner';

interface OutcomesTabProps {
  programmeId: string;
}

const OutcomesTab: React.FC<OutcomesTabProps> = () => {
  const [aiQuery, setAiQuery] = useState('');
  
  return (
    <>
      <AgentBanner
        agentName="Performance Agent"
        description="Dashboard data refreshes automatically from connected data sources. Current data sourced from RTT national dataset, trust-level activity returns, and programme KPI tracker."
        lastAction="Data refreshed · 26 Feb"
        onConfigure={() => console.log('Configure Performance Agent')}
      />
      
      <div className="grid-4" style={{ marginBottom: '20px' }}>
        <div className={`stat-tile ${outcomeStats.rtt18Week.rag}`}>
          <div className="stat-label">{outcomeStats.rtt18Week.label}</div>
          <div className="stat-value">
            {outcomeStats.rtt18Week.value}<span style={{ fontSize: '16px' }}>%</span>
          </div>
          <div className="stat-sub">
            <span className="kpi-trend positive">+2.3%</span> vs last month
          </div>
        </div>
        <div className={`stat-tile ${outcomeStats.longWaiters.rag}`}>
          <div className="stat-label">{outcomeStats.longWaiters.label}</div>
          <div className="stat-value">{outcomeStats.longWaiters.value.toLocaleString()}</div>
          <div className="stat-sub">
            <span className="kpi-trend negative">+14%</span> {outcomeStats.longWaiters.sub}
          </div>
        </div>
        <div className={`stat-tile ${outcomeStats.diagnosticWait.rag}`}>
          <div className="stat-label">{outcomeStats.diagnosticWait.label}</div>
          <div className="stat-value">
            {outcomeStats.diagnosticWait.value}<span style={{ fontSize: '16px' }}>%</span>
          </div>
          <div className="stat-sub">
            <span className="kpi-trend positive">+1.8%</span> {outcomeStats.diagnosticWait.sub}
          </div>
        </div>
        <div className={`stat-tile ${outcomeStats.patientsTreated.rag}`}>
          <div className="stat-label">{outcomeStats.patientsTreated.label}</div>
          <div className="stat-value">{outcomeStats.patientsTreated.value.toLocaleString()}</div>
          <div className="stat-sub">
            <span className="kpi-trend positive">+8%</span> {outcomeStats.patientsTreated.sub}
          </div>
        </div>
      </div>
      
      <div className="grid-2">
        <div className="card">
          <div className="card-header">
            <div className="section-header">RTT 18-week Performance — 12 months</div>
          </div>
          <div className="card-body">
            <div className="mini-bars" style={{ height: '80px' }}>
              {rttPerformanceData.map((value, index) => (
                <div
                  key={index}
                  className="mini-bar"
                  style={{
                    height: `${value}%`,
                    background: index === rttPerformanceData.length - 1 ? 'var(--green)' : 'var(--light-blue)',
                    opacity: index === rttPerformanceData.length - 1 ? 1 : 0.7
                  }}
                ></div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--grey-3)', marginTop: '6px' }}>
              <span>Mar 25</span>
              <span>Jun 25</span>
              <span>Sep 25</span>
              <span>Dec 25</span>
              <span>Feb 26</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="section-header">52+ Week Waiters — Trend</div>
          </div>
          <div className="card-body">
            <div className="mini-bars" style={{ height: '80px' }}>
              {longWaitersData.map((value, index) => {
                let color = 'var(--red)';
                let opacity = 0.6;
                if (value < 65) {
                  color = 'var(--amber)';
                  opacity = 0.7;
                }
                if (value < 60) {
                  color = 'var(--green)';
                  opacity = 0.8;
                }
                if (index === longWaitersData.length - 1) {
                  opacity = 1;
                }
                return (
                  <div
                    key={index}
                    className="mini-bar"
                    style={{ height: `${value}%`, background: color, opacity }}
                  ></div>
                );
              })}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--grey-3)', marginTop: '6px' }}>
              <span>Mar 25</span>
              <span>Jun 25</span>
              <span>Sep 25</span>
              <span>Dec 25</span>
              <span>Feb 26</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Power BI Embed Placeholder */}
      {/* 
        To integrate Power BI:
        1. Install: npm install powerbi-client powerbi-client-react
        2. Set up environment variables for embedUrl, reportId, and accessToken
        3. Uncomment and configure the code below:
        
        import { PowerBIEmbed } from 'powerbi-client-react';
        import { models } from 'powerbi-client';
        
        <div className="card" style={{ marginTop: '20px' }}>
          <div className="card-header">
            <div className="section-header">Programme Performance Dashboard</div>
          </div>
          <div className="card-body" style={{ padding: 0 }}>
            <PowerBIEmbed
              embedConfig={{
                type: 'report',
                id: process.env.REACT_APP_PBI_REPORT_ID,
                embedUrl: process.env.REACT_APP_PBI_EMBED_URL,
                accessToken: accessToken,
                tokenType: models.TokenType.Embed,
                settings: {
                  navContentPaneEnabled: false,
                  filterPaneEnabled: false,
                  background: models.BackgroundType.Transparent,
                }
              }}
              cssClassName="pbi-report-container"
              style={{ height: '500px', width: '100%' }}
            />
          </div>
        </div>
      */}
      
      {/* AI Performance Analysis Panel */}
      <div className="ai-analysis-panel">
        <div className="panel-header">
          <div>
            <div className="panel-title">AI Performance Insights — February 2026</div>
            <div className="doc-meta">
              Generated 26 Feb 2026 · Sources: RTT national dataset, trust activity returns, programme KPI tracker
            </div>
          </div>
        </div>
        
        <div className="insight-section">
          <div className="insight-section-title">What the data shows</div>
          <div className="report-text">
            RTT 18-week performance has improved to 79.2% (+2.3% from January), driven by increased 
            throughput at Royal Free and Leeds sites. However, 52-week waiters have increased by 14% 
            (now 847 patients), concentrated in endoscopy services. Diagnostic wait performance 
            remains stable at 92.7%. Total patients treated increased by 8% (now 3,240/month).
          </div>
        </div>
        
        <div className="insight-section interpretive">
          <div className="insight-section-title">Why it matters</div>
          <div className="report-text">
            At current trajectory, the programme will miss the 78% RTT target by March unless throughput 
            increases by ~120 patients/month. The 52-week waiter increase is concerning and requires 
            immediate attention — Salford Royal accounts for 68% of the growth due to ongoing digital 
            infrastructure constraints. If unresolved, this could impact Gateway Review 2 approval.
          </div>
        </div>
        
        <div className="insight-section actionable">
          <div className="insight-section-title">Recommended actions</div>
          <div>
            <div className="recommendation-item urgent">
              <strong>High priority:</strong> Escalate Salford Royal digital infrastructure delays to 
              Programme Board. Consider temporary workarounds or additional capacity at alternative sites.
            </div>
            <div className="recommendation-item">
              <strong>Medium priority:</strong> Review endoscopy capacity model across all three pilot 
              sites. Current wait times suggest demand exceeds planned capacity by ~15%.
            </div>
            <div className="recommendation-item">
              <strong>Track closely:</strong> Monitor Royal Free throughput — recent improvements may not 
              be sustainable without additional workforce investment (link to Workforce workstream).
            </div>
          </div>
        </div>
        
        <div className="ai-query-input">
          <input
            type="text"
            placeholder="Ask about this data... e.g. 'Which site is driving the 52-week waiter increase?'"
            value={aiQuery}
            onChange={(e) => setAiQuery(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                console.log('AI Query:', aiQuery);
                alert('AI query feature coming soon: ' + aiQuery);
                setAiQuery('');
              }
            }}
          />
        </div>
      </div>
    </>
  );
};

export default OutcomesTab;
