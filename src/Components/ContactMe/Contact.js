import React from "react";
import './Contact.css'
import contact_img from "../Resources/images/contact_img.jpg";
import Footer from "../Footer/Footer";
const Contact = () => {
  return (
    <>
      <div className="contact_container" id="contact">
        <div className="about_layout">
          <div className="heading_section">
            <h2 className="about_title">Contact Me</h2>
            <p className="about_sub_title">lets keep in touch</p>
            <div className="scroller"></div>
          </div>
          <div className="contact_section">
            <div className="contact_left">
              <h1>get in touch</h1>
              <h5>send your email here!</h5>
              <img src={contact_img} alt="contact me"></img>
            </div>
            <div className="contact_right">
              <form>
                <p>Name</p>
                <input type="text" name="name" />
                <p>Email</p>
                <input type="email" name="email"/>
                <p>Message</p>
                <textarea name="message"/>
              </form>
              <div className="btns">
                <button className="btn_send">send <i class="fa fa-paper-plane" aria-hidden="true"></i></button>
              </div>
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

export default Contact;
