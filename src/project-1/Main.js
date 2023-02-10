import React from 'react';

function App() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-link">Features</li>
          <li className="nav-link">Company</li>
          <li className="nav-link">Careers</li>
          <li className="nav-link">About</li>
        </ul>
        <ul className="nav-menu nav-right">
          <li className="nav-link">Login</li>
          <li className="nav-link">Register</li>
        </ul>
      </nav>
      <div className="intro">
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
        </p>
        <button className="learn-more">Learn more</button>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  );
}

export default App;