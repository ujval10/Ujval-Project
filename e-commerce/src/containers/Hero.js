import React from "react";

const Hero = () => {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Images/no.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center top -80px", // Slight upward movement
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "2rem",
        fontWeight: "bold",
        textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
      }}
    >
      Great Summer Sale
    </div>
  );
};

export default Hero;
