import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import painting1 from "../assets/painting1.jpg";
import painting2 from "../assets/painting2.jpg";
import painting3 from "../assets/painting3.jpg";
import painting4 from "../assets/painting4.jpg";
import painting5 from "../assets/painting5.jpg";
import painting6 from "../assets/painting6.jpg";
import painting7 from "../assets/painting7.jpg";
import painting8 from "../assets/painting8.jpg";
import painting9 from "../assets/painting9.jpg";
import "../Styles/Paintings.css";
import paintingsData from "../data/paintings.json";



function Paintings() {
  const navigate = useNavigate();

 const [paintingsList, setPaintingsList] = useState([]);

useEffect(() => {
  // Map img names to actual imported images
  const imagesMap = {
    painting1,
    painting2,
    painting3,
    painting4,
    painting5,
    painting6,
    painting7,
    painting8,
    painting9
  };

  const paintingsWithImages = paintingsData.map((p) => ({
    ...p,
    img: imagesMap[p.img]
  }));

  setPaintingsList(paintingsWithImages);
}, []);


  const handleBuyNow = (painting) => {
    localStorage.setItem("selectedPainting", JSON.stringify(painting));
    navigate("/fees", { state: { painting } });
  };

  return (
    <div>
      {/* Header */}
      <div id="header">
        <div className="container">

          {/* Painting Grid */}
          <main className="paintings-container">
            <h2>Explore Our Collection</h2>

            <div className="paintings-grid">
              {paintingsList.map((painting, index) => (
            <div className="card" key={index}>
              <img src={painting.img} alt={painting.title} />
              <h4>{painting.title}</h4>
              <p className="price">${painting.price}</p>
              <p>Medium: {painting.medium}</p>
              <button className="btn" onClick={() => handleBuyNow(painting)}>Buy Now</button>
            </div>
              ))}
            </div>
          </main>
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

export default Paintings;
