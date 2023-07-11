import React from 'react';
import { Link } from 'react-router-dom';

function Sidenav() {
  return (
    <nav className="container text-start m-3">
      <Link to="/" className="nav-link">Game</Link><br/>
      <Link to="/workspace" className="nav-link">Workspaces</Link><br/>
      <Link to="/staking" className="nav-link">Inventory</Link>
    </nav>
  );
}

export default Sidenav;
