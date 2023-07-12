import React from 'react';

function Course() {

// Dummy data
const courses = [
  {
    id:1,
    title: '360 Photography',
    img: 'https://media.discordapp.net/attachments/1061348902252597368/1127958996192600116/wescosmic_ui_card_content_display_for_game_choice_of_a_caribbea_f413581f-ceed-4983-affb-03e49631cefb.png',
    description: 'This is course 1',
    link: '#Start1'
  },
  {
    id:2,
    title: 'Drone Photography',
    img: 'https://media.discordapp.net/attachments/1061348902252597368/1128331442968084570/wescosmic_ui_card_content_display_of_a_caribbean_entrepreneur_a_5819d93a-bb0f-496e-af9f-1264a3becce2.png',
    description: 'This is course 2',
    link: '#Start2'
  },
  {
    id:3,
    title: '3D Printing',
    img: 'https://media.discordapp.net/attachments/1061348902252597368/1128333031120306176/wescosmic_ui_card_content_display_for_game_choice_of_a_female_c_c8fbce53-b849-449d-a2a6-94d9401c8dfb.png',
    description: 'This is course 3',
    link: '#Start3'
  },

  // Add more courses as needed
];


  return (<>
      
    <div className="row mt-5">

    {courses.map((course, index) => (
      <div className="col-md-6 col-xl-3 col-sm-12 mb-4">
        <div key={index} className="card course-card">
          <img src={course.img} className="img-fluid card-img-top" alt="..." />
          <div className="card-body text-dar">
            <h5 className="card-title">{course.title}</h5>
            <p className="card-text">{course.description}</p>
            <a href={course.link} className="btn btn-dark mx-2">Start Now</a>
            <button className="btn btn-outline-info mx-2">More Info</button>
          </div>
        </div>
      </div>
    ))}


      <div className="col-md-6 col-xl-3 col-sm-12 mb-4">
        <div className="card course-card">
          <div className="card-body text-dar mt-5">
            <h5 className="card-title">Create Your Own</h5>
            <a href="#" className="btn btn-outline-info mt-5">Start Now</a>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}

export default Course;

