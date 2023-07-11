import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/" className="btn btn-primary m-2"><i className="fa-solid fa-wallet"></i><br/>Game</Link>
      <Link to="/workspace" className="btn btn-primary m-2"><i className="fa-solid fa-wallet"></i><br/>Workspace</Link>
      <Link to="/staking" className="btn btn-primary m-2"><i className="fa-solid fa-wallet"></i><br/>Staking</Link>
      {/* Display the navigation links here */}
    </nav>
  );
}

export default Navbar;
