import React from 'react';

interface FeatureBadgeProps {
  icon?: string;
  label: string;
  tooltip?: string;
}

const FeatureBadge: React.FC<FeatureBadgeProps> = ({ icon, label, tooltip }) => {
  return (
    <span className="feature-badge" title={tooltip}>
      {icon && <span>{icon}</span>}
      {label}
    </span>
  );
};

export default FeatureBadge;
