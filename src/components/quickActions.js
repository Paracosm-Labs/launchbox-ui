import React from 'react';

function QuickActions({ options }) {

  function handleActionClick(action) {
    // Send a message with the action's text
    alert(action);
  }

  return (
    <nav className="container text-center m-2">
      <div className="mb-3">
        <h6>Quick Actions</h6><hr/> 
        <div>
          {options.map((option, index) => (
            <button key={index} onClick={() => handleActionClick(option)} className="btn btn-outline-secondary w-100 mt-3">
              {option}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}


export default QuickActions;
