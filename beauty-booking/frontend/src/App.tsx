import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/booking" className="nav-link">Book Appointment</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
