import React from 'react';
import Navbar from '../components/navbar';
import Sidenav from '../components/sidenav';

function Game() {
  return (
    <div className="mt-3">
      	


      <div className="container-fluid mt-3">
        <div className="row text-center text-white">
          <div className="col-md-2 d-none d-md-block d-sm-none">
            <Sidenav />
          </div>
          <div className="col-md-8 main-content">
	    	<Navbar />
	        <h1>Welcome to LaunchBox</h1>
          </div>
          <div className="col-md-2 d-none d-md-block d-sm-none">
            Team and Actions
          </div>
        </div>
      </div>




    </div>
  );
}

export default Game;