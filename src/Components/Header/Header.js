import React from "react";
import logo from "../Resources/images/myLogo.png";
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <div className="nav">
        <div>
          <a href="#profile">
            <img src={logo} alt="logo"></img>
          </a>
        </div>
        <div className="menu">
          <a><Link to="/">home</Link></a>
          <a href="/#about">about</a>
          <a><Link to="/projects">projects</Link></a>
          <a><Link to="/contact">contact</Link></a>
        </div>
      </div>
    </>
  );
}
