import React from "react";
import "./Profile.css";
import profile_pic from "../Resources/images/profile_pic.png";
import resume from "../Resources/SanketAinchwar(RESUME).pdf";
import { Typewriter } from "react-simple-typewriter";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="profile_container" id="profile">
        <>
          <Header />
        </>
        <div className="profile_layout">
          <div className="profile_content left">
            <div className="social_icons">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
            <div className="profile_text">
              <span className="primary_text">
                Hello, I'M <span className="highlighted_text">Sanket</span>
              </span>
            </div>
            <div className="profile_details_role">
              <span className="primary_text">
                <h1>
                  <Typewriter
                    words={[
                      "Enthusiastic Dev",
                      "MERN Stack Dev",
                      "Productive Dev",
                      "FrontEnd Dev!",
                    ]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
              </span>
            </div>
            <div className="tagLine">
              <p>
                Knack of building applications with front and back end
                operations.
              </p>
            </div>
            <div className="btns">
              <div className="btn hireMe"><a><Link to="/contact">Hire Me</Link></a></div>
              <div className="btn getResume"><a href={resume} download>Get Resume</a></div>
            </div>
          </div>
          <div className="profile_content right">
            <div className="dp">
              <img src={profile_pic} alt="profile_img"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
