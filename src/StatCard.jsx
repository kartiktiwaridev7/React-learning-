import React from 'react';

function StatCard({ date, users, revenue }) {
  return (
    <div className="stat-card">
      <h3>{date}</h3>
      <div className="metric">Users: {users}</div>
      <div className="metric">Revenue: ${revenue}</div>
    </div>
  );
}

export default StatCard;