import React from 'react';
import { outcomeStats, rttPerformanceData, longWaitersData } from '../../../data/mockData';

interface OutcomesTabProps {
  programmeId: string;
}

const OutcomesTab: React.FC<OutcomesTabProps> = () => {
  return (
    <>
      <div className="ai-banner">
        <div className="ai-icon">🤖</div>
        <div className="ai-text">
          <strong>Performance Agent active</strong> — Dashboard data refreshes automatically from connected data sources. Current data sourced from RTT national dataset, trust-level activity returns, and programme KPI tracker.
        </div>
      </div>
      <div className="grid-4" style={{ marginBottom: '20px' }}>
        <div className={`stat-tile ${outcomeStats.rtt18Week.rag}`}>
          <div className="stat-label">{outcomeStats.rtt18Week.label}</div>
          <div className="stat-value">
            {outcomeStats.rtt18Week.value}<span style={{ fontSize: '16px' }}>%</span>
          </div>
          <div className="stat-sub">{outcomeStats.rtt18Week.sub}</div>
        </div>
        <div className={`stat-tile ${outcomeStats.longWaiters.rag}`}>
          <div className="stat-label">{outcomeStats.longWaiters.label}</div>
          <div className="stat-value">{outcomeStats.longWaiters.value.toLocaleString()}</div>
          <div className="stat-sub">{outcomeStats.longWaiters.sub}</div>
        </div>
        <div className={`stat-tile ${outcomeStats.diagnosticWait.rag}`}>
          <div className="stat-label">{outcomeStats.diagnosticWait.label}</div>
          <div className="stat-value">
            {outcomeStats.diagnosticWait.value}<span style={{ fontSize: '16px' }}>%</span>
          </div>
          <div className="stat-sub">{outcomeStats.diagnosticWait.sub}</div>
        </div>
        <div className={`stat-tile ${outcomeStats.patientsTreated.rag}`}>
          <div className="stat-label">{outcomeStats.patientsTreated.label}</div>
          <div className="stat-value">{outcomeStats.patientsTreated.value.toLocaleString()}</div>
          <div className="stat-sub">{outcomeStats.patientsTreated.sub}</div>
        </div>
      </div>
      <div className="grid-2">
        <div className="card">
          <div className="card-header">
            <div className="card-title">RTT 18-week Performance — 12 months</div>
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
            <div className="card-title">52+ Week Waiters — Trend</div>
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
    </>
  );
};

export default OutcomesTab;
