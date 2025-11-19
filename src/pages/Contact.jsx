import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import "../Styles/Contact.css";

function Contact() {
  return (
    <div>
      {/* Header Section */}
      <div id="header">
        <div className="container">

          {/* Main Content */}
          <section className="Contactus" id="Contactus-section">
            <div id="Contact">
              <div className="container">
                <div className="row">
                  <div className="contact-left">
                    <h1 className="sub-title">Contact Us</h1>
                    <p><i className="fa fa-send"></i> ArtGallery@gmail.com</p>
                    <p><i className="fa fa-phone"></i> 0311654321</p>

                    <div className="social-icons">
                      <a href="#"><i className="fa fa-facebook-square"></i></a>
                      <a href="#"><i className="fa fa-twitter-square"></i></a>
                      <a href="#"><i className="fa fa-instagram"></i></a>
                      <a href="#"><i className="fa fa-linkedin-square"></i></a>
                    </div>
                  </div>

                  <div className="contact-right">
                    <form id="contact-form">
                      <input type="text" name="Name" placeholder="Your Name" required />
                      <input type="email" name="email" placeholder="Your Email Address" required />
                      <input type="tel" name="phone" placeholder="Your Phone Number" required />
                      <textarea name="Message" rows="6" placeholder="Your Message/Complaint"></textarea>
                      <button type="submit" className="btn btn2">Send ⌯⌲</button>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer>
      <div className="copyright">
        <p>
          Copyright © Art-Gallery. Made with{" "}
          <i className="fa fa-heart" style={{ color: "#bf00bf" }}></i> by Ayesha,
          Zuha and Areeba
        </p>
      </div>
      </footer>
    </div>
  );
}

export default Contact;
