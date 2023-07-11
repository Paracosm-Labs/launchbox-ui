import React from 'react';
import CourseContent from '../components/courseContent';
import CourseOverview from '../components/courseOverview';
import CourseQuiz from '../components/courseQuiz';

function Workspace({ course }) {
  return (
    <div>
    	<h1>Workspace!!!!</h1>
      
      {/* <CourseOverview overview={course.overview} />
      <CourseContent content={course.content} />
      <CourseQuiz quiz={course.quiz} /> */}
      
    </div>
  );
}

export default Workspace;
