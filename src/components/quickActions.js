import React from 'react';

function QuickActions() {
  return (
    <nav className="container text-center m-2">
    <div className="mb-3">
      <h6>Quick Actions</h6><hr/>
    </div>
      <button className="btn btn-outline-secondary w-100 mt-3">Perform Action 1</button><br/>
      <button className="btn btn-outline-secondary w-100 mt-3">Perform Action 2</button><br/>
      <button className="btn btn-outline-secondary w-100 mt-3">Perform Action 3</button><br/>
      <button className="btn btn-outline-secondary w-100 mt-3">Perform Action 4</button>
    </nav>
  );
}

export default QuickActions;
