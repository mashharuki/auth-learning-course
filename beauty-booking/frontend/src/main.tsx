import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Callback from './pages/Callback';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="callback" element={<Callback />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
