import React, { useState, useEffect } from "react";
import mainImg from "../assets/index-main-img1.jpg";
import "../Styles/Home.css";

export default function Home() {
  // Step 4: Weather API
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const apiKey = "1793369780963dc464a62086247bd81c";
    const city = "Islamabad"; 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.error("Error fetching weather:", err));
  }, []);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAskAI = async (e) => {
    e.preventDefault();
    if (!question) return;

    try {
      const response = await fetch("http://localhost:5000/ask-ai", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ prompt: question })
});
      const data = await response.json();
      setAnswer(data.response || "No response received.");
    } catch (err) {
      console.error(err);
      setAnswer("Failed to get response.");
    }
  };

  return (
    <div>
      {/* Header Section */}
      <div id="header">
        <div className="container">
          {/* Main Content */}
          <div className="content">
            <div className="left">
              <img src={mainImg} alt="Main" />
            </div>
            <div className="right">
              <div className="header-text">
                <h1>
                  Art Museum <br />
                  An Art Gallery store!! <span>For you</span>
                </h1>
              </div>
            </div>

            {/* Step 9: Video */}
            <div className="video-container">
              <h2>Watch Our Art Gallery Video</h2>
              <iframe
                width="100%"
                height="480"
                src="https://www.youtube.com/embed/BTQlleLNrVA"
                title="Art Gallery Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="weather-box">
              <h2>Current Weather</h2>

              {!weather ? (
                <p>Loading weather...</p>
              ) : weather.cod !== 200 ? (
                <p>Error fetching weather: {weather.message}</p>
              ) : (
                <div>
                  <p>City: {weather.name}</p>
                  <p>Temperature: {weather.main.temp}°C</p>
                  <p>Condition: {weather.weather[0].description}</p>
                </div>
              )}
            </div>


            {/* Step 15: Ask AI Chat */}
            <div className="ask-ai-container">
              <h2>Ask AI about Art</h2>
              <form onSubmit={handleAskAI}>
                <input
                  type="text"
                  placeholder="Ask anything about art..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
                <button type="submit" className="btn">Send</button>
              </form>
              {answer && <div className="ai-answer">{answer}</div>}
            </div>
          </div>
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
