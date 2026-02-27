import React from 'react';

interface KPICardProps {
  label: string;
  value: string | number;
  subtext?: string;
  subtextVariant?: 'default' | 'warning' | 'danger';
  color?: 'blue' | 'green' | 'amber' | 'red';
}

const KPICard: React.FC<KPICardProps> = ({
  label,
  value,
  subtext,
  subtextVariant = 'default',
  color = 'blue'
}) => {
  return (
    <div className={`stat-tile ${color}`}>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      {subtext && (
        <div className={`stat-sub ${subtextVariant}`}>
          {subtext}
        </div>
      )}
    </div>
  );
};

export default KPICard;
