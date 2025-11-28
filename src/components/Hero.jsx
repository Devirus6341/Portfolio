import { useState } from "react";

function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="hero-container">
      <div className="hero">
        {/* Intro Text */}
        <div className="intro">
          <h1>Web Developer for Gyms & Fitness Coaches</h1>
          <p>BUILD. OPTIMIZE.</p>
          <p className="dominate">DOMINATE YOUR FITNESS BRAND.</p>
        </div>

        {/* Hero Image */}
        <div
          className="hero-image"
          style={{ position: "relative", width: "400px", height: "400px" }}
        >
          {/* Placeholder while image loads */}
          {!loaded && (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#eee",
                borderRadius: "10px",
              }}
            />
          )}

          {/* Actual Image */}
          <img
            src="/images/Gemini_Generated_Image_9cul4f9cul4f9cul.png"
            alt="Fitness Web Developer Illustration"
            style={{
              objectFit: "cover",
              display: loaded ? "block" : "none",
              clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
              transition: "opacity 0.5s ease-in",
              opacity: loaded ? 1 : 0,
            }}
            onLoad={() => setLoaded(true)}
            loading="eager" // ensures it loads immediately
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
