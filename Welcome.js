import React from 'react';
import './App.css';

function Welcome() {
  return (
    <div className="welcome-page">
      <div className="overlay">
        <button className="logout-btn" onClick={() => window.location.reload()}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Welcome;