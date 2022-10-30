import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
  </React.StrictMode>
);


function Navbar() {
  return (
    <nav className="navbar navbar-expand-md fixed-top navbar">
      <div className="container-fluid">
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

}

