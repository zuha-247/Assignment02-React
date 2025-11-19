import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import "../Styles/About.css";

function More_Info(){
    return(
        <div>
                    {/* Header Section */}
                    <div id="header">
                      <div className="container">
              
                        {/* Main Content */}
                     <center>
    <section class="members" id="members-section">
    <div id="modal-areeba" class="member-modal">
        <h1>⭐ Meet Our Team </h1>
        <div class="member-modal-content">
            <h2>Areeba Akmal - Visionary Artist & Lead Designer 👩🏻‍🎨</h2>
            <p>Areeba paints beyond the canvas—she designs experiences. With her creative vision and leadership, she blends colors, forms, and ideas into captivating masterpieces that inspire both the team and every visitor who steps into our world of art.</p>
        </div>
    </div>

    <div id="modal-ayesha" class="member-modal">
        <div class="member-modal-content">
            <h2>Ayesha Noor - The Curator & Story Weaver 🖼️</h2>
            <p>Ayesha gives meaning to every piece of art. Like a curator shaping a gallery, she arranges ideas, structures concepts, and creates harmony in design. Her thoughtful eye ensures that every creation tells a story worth remembering.</p>
        </div>
    </div>

    <div id="modal-zuha" class="member-modal">
        <div class="member-modal-content">
            <h2>Zuha Qayyum - The Digital Creator 👩🏻‍💻</h2>
            <p>For Zuha, code is art. With a blend of imagination and technology, she transforms digital spaces into interactive galleries. Her creativity bridges tradition and innovation, bringing artworks to life in ways that engage and inspire modern audiences.</p>
        </div>
    </div>
    </section>

     <section class="see-more" id="see-more-section">
    <div id="aboutModal" class="modal">
        <div class="modal-content">
            <h1>About Artie</h1>
            <p><strong>Artie</strong> is a creative haven where imagination meets expression. We provide artists and visitors with a vibrant space to explore, create, and celebrate the beauty of art in all its forms.</p>
            <div class="h2-content">
            <h2>⭐ Visitor Experience at ARTIE</h2>
            <p>Rated 4.9/5 by art lovers who admire the atmosphere, exhibitions, and inspiring community spirit that Artie brings to life.</p>
            <h2>⭐ ARTIE Curators & Staff</h2>
            <p>Our dedicated curators, guides, and coordinators work tirelessly to ensure every detail is seamless. From exhibitions to events, they craft meaningful experiences with passion and professionalism—making every visit unforgettable 🎨.</p>
            </div>
        </div>
    </div>
    </section>
</center>
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

export default More_Info;