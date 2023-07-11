import React from 'react';
import { Link } from 'react-router-dom';

function Game() {
  return (
    <div>
      
    	<h1>Welcome!!!!</h1>
    	<Link to="/workspace" className="btn btn-primary m-2"><i className="fa-solid fa-wallet"></i><br/>Workspace</Link>
    	<Link to="/staking" className="btn btn-primary m-2"><i className="fa-solid fa-wallet"></i><br/>Staking</Link>
      {/* Handle the Game functionality here */}
    </div>
  );
}

export default Game;