import React from 'react';
import Course from '../components/course';
import Sidenav from '../components/sidenav';
import QuickActions from '../components/quickActions';

function Game() {
  return (
    <div className="mt-3">
      	


      <div className="container-fluid mt-3">
        <div className="row text-center text-white">
          <div className="col-md-2 d-none d-md-block d-sm-none">
            <Sidenav />
          </div>
          <div className="col-md-8 main-content pt-5">
	    	
	        <h1>Welcome to LaunchBox</h1>
	        <h4>Choose Your Experience</h4>
	        <Course />
          </div>
          <div className="col-md-2 d-none d-md-block d-sm-none">
            <QuickActions />
          </div>
        </div>
      </div>




    </div>
  );
}

export default Game;