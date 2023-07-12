import React from 'react';
import Sidenav from '../components/sidenav';
// import Navbar from '../components/navbar';
import CourseContent from '../components/courseContent';
import CourseOverview from '../components/courseOverview';
import CourseQuiz from '../components/courseQuiz';
import ChatWindow from '../components/chat';
import QuickActions from '../components/quickActions';

function Workspace({ course }) {
  return (

    <div className="mt-3">
      	


      <div className="container-fluid mt-3">
        <div className="row text-center text-white">
          <div className="col-md-2 d-none d-md-block d-sm-none">
            <Sidenav />
          </div>
          <div className="col-md-8 main-content">
	        <h1>Workspace</h1>
	        <ChatWindow />
          </div>
          <div className="col-md-2 d-none d-md-block d-sm-none">
            <QuickActions />
          </div>
        </div>
      </div>

      {/* <CourseOverview overview={course.overview} />
      <CourseContent content={course.content} />
      <CourseQuiz quiz={course.quiz} /> */}


    </div>



    
  );
}

export default Workspace;
