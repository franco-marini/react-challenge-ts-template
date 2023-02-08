import './app.css';
import React from 'react';

import logo from './rocket-white.png';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-logo-container">
          <img src={logo} className="app-logo" alt="logo" />
        </div>
        <h1>
          <strong>Radium</strong> Rocket
        </h1>
        <p>
          Ready for the <code>challenge name</code>.
        </p>
        <p>Remember to always use the best practices for coding and folder structure.</p>
      </header>
    </div>
  );
}

export default App;
