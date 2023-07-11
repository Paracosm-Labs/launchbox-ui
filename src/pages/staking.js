import React from 'react';
import Sidenav from '../components/sidenav';

function Staking() {
  return (
    <div className="mt-3">
      	


      <div className="container-fluid mt-3">
        <div className="row text-center text-white">
          <div className="col-md-2 d-none d-md-block d-sm-none">
            <Sidenav />
          </div>
          <div className="col-md-8 main-content">
	        <h1>Staking</h1>
          </div>
          <div className="col-md-2 d-none d-md-block d-sm-none">
            Quick Actions
          </div>
        </div>
      </div>




    </div>
  );
}

export default Staking;