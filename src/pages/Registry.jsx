import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import tree from "../assets/tree.jpg";
import scenery from "../assets/scenery.jpg";
import flower from "../assets/flower.jpg";
import abstractpainting from "../assets/abstractpainting.jpg";
import mountain from "../assets/mountain.jpg";
import cat from "../assets/cat.jpg";
import "../Styles/Registry.css";


function Registry() {
  return (
    <div>
      {/* Header Section */}
      <div id="header">
        <div className="container">

          {/* Main Content */}
          <section className="services">
            <div id="Services">
              <div className="container">
                <div className="heading">
                  <h1>SERVICES</h1>
                  <h2>What we Offer?</h2>
                </div>

                <div className="content flex_space">
                  <div className="left flex2">

                    <div className="box">
                      <div className="text">
                        <i className="fa-solid fa-palette"></i>
                        <h3>Art Exhibitions</h3>
                        <p style={{ color: "purple" }}>
                          Showcasing paintings, sculptures, and digital masterpieces from talented artists worldwide.
                        </p>
                      </div>
                    </div>

                    <div className="box">
                      <div className="text">
                        <i className="fa-solid fa-chalkboard-user"></i>
                        <h3>Workshops & Classes</h3>
                        <p style={{ color: "purple" }}>
                          Hands-on learning experiences for painting, sketching, photography, and more.
                        </p>
                      </div>
                    </div>

                    <div className="box">
                      <div className="text">
                        <i className="fa-solid fa-person-walking"></i>
                        <h3>Guided Tours</h3>
                        <p style={{ color: "purple" }}>
                          Curator-led tours that bring stories behind the art to life for every visitor.
                        </p>
                      </div>
                    </div>

                    <div className="box">
                      <div className="text">
                        <i className="fa-solid fa-vr-cardboard"></i>
                        <h3>Digital Art & VR</h3>
                        <p style={{ color: "purple" }}>
                          Immersive virtual reality galleries and digital art experiences for modern audiences.
                        </p>
                      </div>
                    </div>

                    <div className="box">
                      <div className="text">
                        <i className="fa-solid fa-masks-theater"></i>
                        <h3>Cultural Events</h3>
                        <p style={{ color: "purple" }}>
                          Live performances, art fairs, and creative festivals hosted throughout the year.
                        </p>
                      </div>
                    </div>

                    <div className="box">
                      <div className="text">
                        <i className="fa-solid fa-ellipsis-h"></i>
                        <h3>Other Service</h3>
                        <p style={{ color: "purple" }}>
                          Art café, souvenir shop, private exhibitions, and community art programs.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className="gallery">
            <div id="Gallery">
              <div className="container top">
                <div className="heading">
                  <h1>PHOTOS</h1>
                  <h2>OUR PAINTINGS</h2>
                </div>
              </div>

              <div className="gallery-grid">
                <div className="items">
                  <div className="img">
                    <img src={tree} alt="" />
                  </div>
                  <div className="overlay">
                    <h3> An abstract scenery.</h3>
                  </div>
                </div>

                <div className="items">
                  <div className="img">
                    <img src={scenery} alt="" />
                  </div>
                  <div className="overlay">
                    <h3> Landscapes that tell stories beyond the horizon.</h3>
                  </div>
                </div>

                <div className="items">
                  <div className="img">
                    <img src={flower} alt="" />
                  </div>
                  <div className="overlay">
                    <h3> Vase holding colorful flowers.</h3>
                  </div>
                </div>

                <div className="items">
                  <div className="img">
                    <img src={abstractpainting} alt="" />
                  </div>
                  <div className="overlay">
                    <h3> Abstract masterpieces that spark curiosity.</h3>
                  </div>
                </div>

                <div className="items">
                  <div className="img">
                    <img src={mountain} alt="" />
                  </div>
                  <div className="overlay">
                    <h3> Majestic mountain art celebrating strength.</h3>
                  </div>
                </div>

                <div className="items">
                  <div className="img">
                    <img src={cat} alt="" />
                  </div>
                  <div className="overlay">
                    <h3> Whimsical portraits capturing character and charm.</h3>
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

export default Registry;
