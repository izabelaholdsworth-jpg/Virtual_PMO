import React from 'react';

interface AgentBannerProps {
  agentName: string;
  description: string;
  lastAction?: string;
  onConfigure?: () => void;
}

const AgentBanner: React.FC<AgentBannerProps> = ({
  agentName,
  description,
  lastAction,
  onConfigure
}) => {
  return (
    <div className="ai-banner">
      <div className="ai-icon">
        ✨
      </div>
      <div className="ai-banner-content">
        <span className="agent-name">{agentName} active</span>
        <span className="agent-description">{description}</span>
      </div>
      {lastAction && (
        <div className="ai-banner-proof">
          {lastAction}
        </div>
      )}
      {onConfigure && (
        <button className="agent-configure" onClick={onConfigure}>
          Configure
        </button>
      )}
    </div>
  );
};

export default AgentBanner;
