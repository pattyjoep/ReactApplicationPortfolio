import React from 'react';

function Content() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Patrick J. Petro</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#"></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"></a>
                </li>
                </ul>
            </div>
        </nav>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src="img/PJPHeadshot.jpg" className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">About Me</h5>
                            <p className="card-text">I have always been fascinated with the different possibilities programming has to offer. Starting with simple HTML and CSS, I found a passion for web development and am currently in a full stack program to learn more server side code. My goal is to use my knowledge to develop applications and websites to improve efficiency in our everyday lives.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Contact Info</h5>
                            <p className="card-text"><a href="860-690-6852">+1 (860) 690-6852</a></p>
                            <p><a href="mailto:patrickjpetro@icloud.com">patrickjpetro@icloud.com</a></p>
                            <p><a href="https://www.linkedin.com/in/patrick-j-petro/" target="_blank" class="mx-2 prof-social-media">Linkedin</a> <a href="https://github.com/pjpetro" target="_blank" class="mx-2 prof-social-media">Github</a> <a href="documents/PatrickJPetroResume.pdf" target="_blank" class="mx-2 prof-social-media">Resume</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h2>Application Portfolio</h2>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                    <a href="https://pjpetro.github.io/DayPlanner/" target="_blank"><img src="img/DayPlannerScreenshot.png" className="card-img-top" alt="..." /></a>
                           
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Day Planner</h5>
                            <p className="card-text">Plan your workday with this application, which uses local storage to save tasks and removes them from local storage when complete.</p>
                <a href="https://github.com/pjpetro/DayPlanner" target="_blank" class="mx-2 prof-social-media">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                    <a href="https://pjp-notetaker.herokuapp.com/" target="_blank"><img src="img/NoteTakerScreenshot.png" className="card-img-top" alt="..." /></a>
                           
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Note Taker</h5>
                            <p className="card-text">Whether its something to add to your shopping list or just a reminder for later, add it to this note taking site deployed using Heroku.</p>
                            <a href="https://github.com/pjpetro/NoteTaker" target="_blank" class="mx-2 prof-social-media">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                    <a href="https://pjpetro.github.io/PasswordGenerator/" target="_blank"><img src="img/PasswordGeneratorScreenshot.png" className="card-img-top" alt="..." /></a>
                           
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Password Generator</h5>
                            <p className="card-text">Need a password, but can't think of anything to use? Generate a random one with the click of a button!</p>
                <a href="https://github.com/pjpetro/PasswordGenerator" target="_blank" class="mx-2 prof-social-media">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                    <a href="https://pjpetro.github.io/WeatherDash/" target="_blank"><img src="img/WeatherDashScreenShot.png" className="card-img-top" alt="..." /></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Weather Dashboard</h5>
                            <p className="card-text">Easily look up the weather of a specific city with this weather dashboard.</p>
                            <a href="https://github.com/pjpetro/WeatherDash " target="_blank" class="mx-2 prof-social-media">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Content;
