import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="container-fluid text-center">
      <Link to="/" className="btn btn-outline-info m-2"><i className="fa-solid fa-wallet mx-2"></i>Play</Link>
      <Link to="/workspace" className="btn btn-outline-info m-2"><i className="fa-solid fa-wallet mx-2"></i>Workspace</Link>
      <Link to="/staking" className="btn btn-outline-info m-2"><i className="fa-solid fa-wallet mx-2"></i>Staking</Link>
    </nav>
  );
}

export default Navbar;
