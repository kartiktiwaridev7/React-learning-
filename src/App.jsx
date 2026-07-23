import React from 'react';
import data from './data.json';
import './App.css';
import StatCard from './StatCard'; // 1. Import your new component

function App() {
  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header">
        <h1>My Analytics Dashboard</h1>
        {/* We will implement the TechBadges here next */}
      </header>
      
      <main className="dashboard-grid">
        {data.map((dayData, index) => (
          // 2. Render the component and pass the data as props
          <StatCard 
            key={index} 
            date={dayData.date} 
            users={dayData.users} 
            revenue={dayData.revenue} 
          />
        ))}
      </main>
    </div>
  );
}

export default App;