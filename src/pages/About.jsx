import React from "react";
import { Link } from "react-router-dom";
import about from "../assets/about.jpg";
import person from "../assets/person.jpg";
import "../Styles/About.css";


function About() {
  return (
    <div>
      {/* Header Section */}
      <div id="header">
        <div className="container">

          {/* MAIN ABOUT SECTION */}
          <section className="about top">
            <div className="container flex">
              <div className="left">
                <div className="heading">
                  <h1>WELCOME</h1>
                  <h2>Artie Museum 😊</h2>
                </div>

                <p>
                  Artie is more than a museum, it’s a canvas of ideas. A place where
                  artists feel at home, share their stories, and inspire the world
                  through colors, textures, and emotions.<br />
                  We bring together artists, dreamers, and admirers to celebrate
                  imagination, expression, and the beauty of art in every form.
                </p>

                <a href="#aboutus-section" className="primary-btn">ABOUT US ℹ️</a>
              </div>

              <div className="right">
                <img src={about} alt="about" />
              </div>
            </div>
          </section>

          {/* COUNTER SECTION */}
          <section className="counter top">
            <div className="container flex">
              <div className="box">
                <h1>2500</h1>
                <hr />
                <span>Artworks Displayed</span>
              </div>

              <div className="box">
                <h1>1250</h1>
                <hr />
                <span>Happy Visitors</span>
              </div>

              <div className="box">
                <h1>250</h1>
                <hr />
                <span>Artists & Curators</span>
              </div>
            </div>
          </section>

          {/* ABOUT US TEAM SECTION */}
          <section className="aboutus" id="aboutus-section">
            <div id="about">
              <div className="container">
                <div className="heading">
                  <h1>ABOUT US</h1>
                  <h2>What We Do?</h2>
                </div>

                <div className="work-list">

                  {/* Person 1 */}
                  <div className="work">
                    <img src={person} alt="Areeba" />
                    <div className="layer">
                      <h3>Areeba Akmal</h3>
                      <p>Visionary Artist, blending colors with imagination.</p>
                      <Link to="/more_info"><i className="fa fa-external-link" /></Link>
                    </div>
                  </div>

                  {/* Person 2 */}
                  <div className="work">
                    <img src={person} alt="Ayesha" />
                    <div className="layer">
                      <h3>Ayesha Noor</h3>
                      <p>The Curator, giving shape and meaning to masterpieces.</p>
                      <Link to="/more_info"><i className="fa fa-external-link" /></Link>
                    </div>
                  </div>

                  {/* Person 3 */}
                  <div className="work">
                    <img src={person} alt="Zuha" />
                    <div className="layer">
                      <h3>Zuha Qayyum</h3>
                      <p>The Creator, crafting digital canvases for modern art.</p>
                      <Link to="/more_info"><i className="fa fa-external-link" /></Link>
                    </div>
                  </div>

                </div>

                <Link to="/more_info" className="btn">See More 👀</Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* FOOTER */}
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

export default About;
