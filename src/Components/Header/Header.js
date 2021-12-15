import React, {useState} from "react";
import logo from "../Resources/images/myLogo.png";
import "./Header.css";
import { Link } from "react-router-dom";


export default function Header() {
  const [status, setStatus] = useState(false);
  const statusHandler = () => {
    setStatus(!status);
  }
  return (
    <>
      <div className="nav">
        <div>
          <a href="#profile">
            <img src={logo} alt="logo"></img>
          </a>
        </div>
        <div className="ham" onClick={statusHandler}>
            {status ? <i class="fa fa-times"></i> : <i class="fa fa-bars"></i>}
        </div>
        <div className={status ? "menu active" : "menu"}>
          <a>
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
    </>
  );
}
