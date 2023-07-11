import React from 'react';

function Course({}) {
  return (<>
      
    <div className="row mt-5">


      <div className="col-3 mb-4">
        <div className="card course-card">
          <img src="https://media.discordapp.net/attachments/1061348902252597368/1127958996192600116/wescosmic_ui_card_content_display_for_game_choice_of_a_caribbea_f413581f-ceed-4983-affb-03e49631cefb.png?width=662&height=662" className="img-fluid card-img-top" alt="..." />
          <div className="card-body text-dark">
            <h5 className="card-title">360 Photography</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Start Now</a>
          </div>
        </div>
      </div>

      <div className="col-3 mb-4">
        <div className="card course-card">
        <img src="https://media.discordapp.net/attachments/1061348902252597368/1127958995131437146/wescosmic_ui_card_content_display_for_game_choice_of_a_caribbea_f413581f-ceed-4983-affb-03e49631cefb.png?width=662&height=662" className="img-fluid card-img-top" alt="..." />
          <div className="card-body text-dark">
            <h5 className="card-title">3D Printing</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Start Now</a>
          </div>
        </div>
      </div>

      <div className="col-3 mb-4">
        <div className="card course-card">
        <img src="https://media.discordapp.net/attachments/1061348902252597368/1127958995131437146/wescosmic_ui_card_content_display_for_game_choice_of_a_caribbea_f413581f-ceed-4983-affb-03e49631cefb.png?width=662&height=662" className="img-fluid card-img-top" alt="..." />
          <div className="card-body text-dark">
            <h5 className="card-title">Drone Photography</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Start Now</a>
          </div>
        </div>
      </div>

      <div className="col-3 mb-4">
        <div className="card course-card">

          <div className="card-body text-dark mt-5">
            <h5 className="card-title">Custom</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-outline-primary">Create Your Own</a>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}

export default Course;

