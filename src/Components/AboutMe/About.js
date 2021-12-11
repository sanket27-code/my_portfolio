import React from "react";
import './About.css';
import side_img from "../Resources/images/about_img.jpg";
import resume from "../Resources/SanketAinchwar(RESUME).pdf";

const About = () => {
  const top_des =
    "Full stack web developer with background knowledge of MERN stacks with redux, along with a knack of building applications with almost efficiency!";
  const middle_des = "Here are a few Highlights:";
  const skills = [
    "Full stack web development",
    "Interactive front end as per the design",
    "React developer",
    "Building REST API's",
    "Managing database",
  ];
  return (
    <>
      <div className="about_container" id="about">
        <div className="about_layout">
          <div className="heading_section">
            <h2 className="about_title">About Me</h2>
            <p className="about_sub_title">why choose me?</p>
            <div className="scroller"></div>
          </div>
          <div className="content_section">
            <div className="left">
              <img src={side_img} alt="about me"></img>
            </div>
            <div className="right">
              <div className="top">{top_des}</div>
              <div className="middle">{middle_des}</div>
              <ul className="bottom">
                  {skills.map((skill, ind)=>{
                      return (<li key={ind}><span>&#9673;</span>{skill}</li>)
                  })}
              </ul>
              <div className="btns">
                  <button className="btn about_getResume"><a href={resume} download>get resume</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
