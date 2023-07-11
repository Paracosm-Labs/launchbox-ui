import React from 'react';

function Course() {

// Dummy data
const courses = [
  {
    id:1,
    title: '360 Photography',
    img: 'https://media.discordapp.net/attachments/1061348902252597368/1127958996192600116/wescosmic_ui_card_content_display_for_game_choice_of_a_caribbea_f413581f-ceed-4983-affb-03e49631cefb.png?width=662&height=662',
    description: 'This is course 1',
    link: '#Start1'
  },
  {
    id:2,
    title: 'Drone Photography',
    img: 'https://media.discordapp.net/attachments/1061348902252597368/1127958995131437146/wescosmic_ui_card_content_display_for_game_choice_of_a_caribbea_f413581f-ceed-4983-affb-03e49631cefb.png?width=662&height=662',
    description: 'This is course 2',
    link: '#Start2'
  },
  {
    id:3,
    title: '3D Printing',
    img: 'https://media.discordapp.net/attachments/1061348902252597368/1127958995131437146/wescosmic_ui_card_content_display_for_game_choice_of_a_caribbea_f413581f-ceed-4983-affb-03e49631cefb.png?width=662&height=662',
    description: 'This is course 3',
    link: '#Start3'
  },

  // Add more courses as needed
];


  return (<>
      
    <div className="row mt-5">

    {courses.map((course, index) => (
      <div className="col-3 mb-4">
        <div key={index} className="card course-card">
          <img src={course.img} className="img-fluid card-img-top" alt="..." />
          <div className="card-body text-dar">
            <h5 className="card-title">{course.title}</h5>
            <p className="card-text">{course.description}</p>
            <a href={course.link} className="btn btn-primary">Start Now</a>
          </div>
        </div>
      </div>
    ))}


      <div className="col-3 mb-4">
        <div className="card course-card">
          <div className="card-body text-dar mt-5">
            <h5 className="card-title">Launch Your Own</h5>
            <a href="#" className="btn btn-outline-success mt-5">Start Now</a>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}

export default Course;

