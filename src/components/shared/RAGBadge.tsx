import React from 'react';

export type RAGStatus = 'red' | 'amber' | 'green' | 'complete';

interface RAGBadgeProps {
  status: RAGStatus;
  label?: string;
  showDot?: boolean;
}

const RAGBadge: React.FC<RAGBadgeProps> = ({ status, label, showDot = true }) => {
  const getLabel = () => {
    if (label) return label;
    
    switch (status) {
      case 'red':
        return 'Red';
      case 'amber':
        return 'Amber';
      case 'green':
        return 'Green';
      case 'complete':
        return 'Complete';
      default:
        return status;
    }
  };

  return (
    <span className={`rag-badge ${status}`}>
      {showDot && '● '}
      {getLabel()}
    </span>
  );
};

export default RAGBadge;
