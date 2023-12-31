import React from 'react';
import { Link } from 'react-router-dom';

function Sidenav() {
  return (
    <nav className="container text-start m-2">
    <div className="mb-5">
      <h4>LaunchBox</h4><hr/>
    </div>
      <Link to="/" className="nav-link"><i className="fa-solid fa-play mx-2"></i>Learn</Link><br/>
      <Link to="/workspace" className="nav-link"><i className="fa-solid fa-message mx-2"></i>Workspace</Link><br/>
      <Link to="/staking" className="nav-link"><i className="fa-solid fa-atom mx-2"></i>Upgrades</Link>
    </nav>
  );
}

export default Sidenav;
