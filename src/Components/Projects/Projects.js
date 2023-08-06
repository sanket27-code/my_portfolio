import React from "react";
import "./Projects.css";
import chat from "../Resources/images/chatApp_ss.PNG";
import thefoodieyatra from "../Resources/images/thefoodieyatra_ss.PNG";
import covid from "../Resources/images/covidApp_ss.PNG";
import dictionary from "../Resources/images/dictionaryApp_ss.PNG";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Projects = () => {
  return (
    <>
      <div className="projects_container">
      <>
        <Header />
      </>
        <div className="projects_box">
          <div className="project_title">
            <h3>projects</h3>
          </div>
          <div className="projects">
            <div className="project">
              <img src={chat} alt="chatApp"></img>
              <button>
                <a href="http://buzzy-chat.herokuapp.com/" target="_blank">
                  visit here
                </a>
              </button>
            </div>
            <div className="project">
              <img src={thefoodieyatra} alt="thefoodieyatra.in"></img>
              <button>
                <a href="https://thefoodieyatra.in/" target="_blank">
                  visit here
                </a>
              </button>
            </div>
            <div className="project">
              <img src={covid} alt="covidApp"></img>
              <button>
                <a href="https://covid-upd.herokuapp.com/" target="_blank">
                  visit here
                </a>
              </button>
            </div>
            <div className="project">
              <img src={dictionary} alt="dictionaryApp"></img>
              <button>
                <a href="https://ur-dictionary.herokuapp.com/" target="_blank">
                  visit here
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <>
        <Footer />
      </>
    </>
  );
};

export default Projects;
