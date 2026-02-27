import React from 'react';

const TopNav: React.FC = () => {
  return (
    <nav className="topnav">
      <div className="topnav-logo">NHS England</div>
      <div className="topnav-sep"></div>
      <div className="topnav-title">Virtual Programme Office</div>
      <div className="topnav-badge">BETA</div>
      <div className="topnav-user">
        <div className="avatar">IH</div>
        Izabela Holdsworth
      </div>
    </nav>
  );
};

export default TopNav;
