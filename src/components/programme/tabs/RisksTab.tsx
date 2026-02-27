import React, { useState } from 'react';
import { getProgrammeData } from '../../../data/mockData';
import AgentBanner from '../../shared/AgentBanner';

interface RisksTabProps {
  programmeId: string;
}

const RisksTab: React.FC<RisksTabProps> = ({ programmeId }) => {
  const programmeData = getProgrammeData(programmeId);
  const [activeRAIDTab, setActiveRAIDTab] = useState<'risks' | 'assumptions' | 'issues' | 'dependencies'>('risks');
  
  if (!programmeData) return <div>No data available</div>;
  
  const { risks } = programmeData;
  
  // Add mock data for mitigation and review dates
  const enrichedRisks = risks.map(risk => ({
    ...risk,
    mitigation: risk.id === 'R-001' ? 'Weekly readiness check meetings scheduled' : 
                risk.id === 'R-002' ? 'Contingency budget identified' :
                risk.id === 'R-003' ? 'Additional training sessions planned' :
                'Monitoring ongoing',
    reviewDate: risk.id === 'R-001' ? '07 Mar 2026' : '15 Mar 2026',
    impact: risk.score >= 12 ? 4 : risk.score >= 8 ? 3 : 2,
    likelihood: Math.ceil(risk.score / 4)
  }));
  
  return (
    <>
      <AgentBanner
        agentName="Risk Agent"
        description="Meeting transcripts are scanned automatically for new risks and issues. Flagged items appear here for PM review. Risk owners receive weekly automated reminders for open items."
        lastAction="2 risks flagged · 18 Feb"
        onConfigure={() => console.log('Configure Risk Agent')}
      />
      
      {/* RAID Tabs */}
      <div className="tabs" style={{ marginBottom: '16px' }}>
        <div
          className={`tab ${activeRAIDTab === 'risks' ? 'active' : ''}`}
          onClick={() => setActiveRAIDTab('risks')}
        >
          Risks <span className="tab-badge">{risks.length}</span>
        </div>
        <div
          className={`tab ${activeRAIDTab === 'assumptions' ? 'active' : ''}`}
          onClick={() => setActiveRAIDTab('assumptions')}
        >
          Assumptions <span className="tab-badge">2</span>
        </div>
        <div
          className={`tab ${activeRAIDTab === 'issues' ? 'active' : ''}`}
          onClick={() => setActiveRAIDTab('issues')}
        >
          Issues <span className="tab-badge">1</span>
        </div>
        <div
          className={`tab ${activeRAIDTab === 'dependencies' ? 'active' : ''}`}
          onClick={() => setActiveRAIDTab('dependencies')}
        >
          Dependencies <span className="tab-badge">3</span>
        </div>
      </div>
      
      {activeRAIDTab === 'risks' && (
        <>
          <div className="card">
            <div className="card-header">
              <div className="section-header">Risk Register</div>
              <button className="btn btn-primary btn-sm">+ Add Risk</button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Owner</th>
                  <th>Score</th>
                  <th>RAG</th>
                  <th>Mitigation</th>
                  <th>Review Date</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                {enrichedRisks.map((risk) => (
                  <tr key={risk.id} className={risk.rag === 'high' ? 'row-high-risk' : ''}>
                    <td className="risk-id">{risk.id}</td>
                    <td>{risk.description}</td>
                    <td>{risk.category}</td>
                    <td>{risk.owner}</td>
                    <td>
                      <span 
                        className={`risk-score ${risk.rag}`}
                        title={`Impact: ${risk.impact} × Likelihood: ${risk.likelihood} = ${risk.score} (${risk.rag === 'high' ? 'High' : risk.rag === 'medium' ? 'Medium' : 'Low'})`}
                      >
                        {risk.score}
                      </span>
                    </td>
                    <td>
                      <span className={`rag-badge ${risk.rag === 'high' ? 'red' : risk.rag === 'medium' ? 'amber' : 'green'}`}>
                        {risk.rag === 'high' ? 'High' : risk.rag === 'medium' ? 'Medium' : 'Low'}
                      </span>
                    </td>
                    <td style={{ fontSize: '12px', maxWidth: '200px' }}>{risk.mitigation}</td>
                    <td style={{ fontSize: '12px' }}>{risk.reviewDate}</td>
                    <td>
                      {risk.source.startsWith('Meeting') ? (
                        <span className="source-badge meeting">{risk.source}</span>
                      ) : (
                        <span className="source-badge">{risk.source}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Risk Matrix */}
          <div className="card" style={{ marginTop: '20px' }}>
            <div className="card-header">
              <div className="section-header">Risk Matrix — Impact × Likelihood</div>
            </div>
            <div className="card-body">
              <div className="risk-matrix">
                <div className="risk-quadrant risk-quadrant-high-high">
                  <strong>Manage Closely</strong>
                  {enrichedRisks
                    .filter(r => r.impact >= 3 && r.likelihood >= 3)
                    .map((r, idx) => (
                      <div
                        key={r.id}
                        className="risk-dot"
                        style={{
                          top: `${20 + idx * 35}%`,
                          left: `${30 + idx * 20}%`
                        }}
                        title={r.description}
                      >
                        {r.id}
                      </div>
                    ))}
                </div>
                <div className="risk-quadrant risk-quadrant-low-high">
                  <strong>Keep Satisfied</strong>
                </div>
                <div className="risk-quadrant risk-quadrant-high-low">
                  <strong>Keep Informed</strong>
                  {enrichedRisks
                    .filter(r => r.impact >= 3 && r.likelihood < 3)
                    .map((r, idx) => (
                      <div
                        key={r.id}
                        className="risk-dot"
                        style={{
                          top: `${30 + idx * 25}%`,
                          left: `${40 + idx * 15}%`
                        }}
                        title={r.description}
                      >
                        {r.id}
                      </div>
                    ))}
                </div>
                <div className="risk-quadrant risk-quadrant-low-low">
                  <strong>Monitor</strong>
                  {enrichedRisks
                    .filter(r => r.impact < 3 && r.likelihood < 3)
                    .map((r, idx) => (
                      <div
                        key={r.id}
                        className="risk-dot"
                        style={{
                          top: `${40 + idx * 20}%`,
                          left: `${50 + idx * 15}%`
                        }}
                        title={r.description}
                      >
                        {r.id}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      
      {activeRAIDTab !== 'risks' && (
        <div className="card">
          <div className="card-body" style={{ textAlign: 'center', padding: '40px', color: 'var(--grey-3)' }}>
            {activeRAIDTab === 'assumptions' && 'Assumptions tracking coming soon'}
            {activeRAIDTab === 'issues' && 'Issues tracking coming soon'}
            {activeRAIDTab === 'dependencies' && 'Dependencies tracking coming soon'}
          </div>
        </div>
      )}
    </>
  );
};

export default RisksTab;
