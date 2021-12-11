import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_box">
        <div className="footer_contents">
          <div className="footer_content">
            <h4>Get in touch</h4>
            <ul>
              <li>sanketainchwar27@gmail.com</li>
              <li>ainchwar.sanket@gmail.com</li>
            </ul>
          </div>
          <div className="footer_content">
            <h4>Connect</h4>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/sanket-ainchwar-935467205"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sanketainchwar/"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/sanket.ainchwar/"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  Tweeter
                </a>
              </li>
            </ul>
          </div>
          <div className="footer_content">
            <h4>Meet us</h4>
            <ul>
              <li>Near B.O.M,</li>
              <li>442705 Aheri,</li>
              <li>Maharashtra, India</li>
            </ul>
          </div>
        </div>
        <div className="copyrights_box">
          <div className="copyrights">
            <h4>Concocted by Sanket</h4>
            <h5>
              &copy; 2021 <span>Data Privacy</span>
              <span>Imprint</span>
            </h5>
          </div>
          <div className="nav_menu">
            <div className="menus">
              <a className="dark_menu">
                <Link to="/">home</Link>
              </a>
              <a href="/#about">about</a>
              <a>
                <Link to="/projects">projects</Link>
              </a>
              <a>
                <Link to="/contact">contact</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
