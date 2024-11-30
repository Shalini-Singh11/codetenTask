import React, { useEffect, useState } from "react";
import "./Style.css"

const SkyComponent = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const numParticles = 500; 
      const newParticles = [];

      for (let i = 0; i < numParticles; i++) {
        const size = Math.random() * 3 + 2; 
        const xPos = Math.random() * 100; 
        const yPos = Math.random() * 100; 
        const delay = Math.random() * 10; 
        const duration = Math.random() * 6 + 6; 

        newParticles.push({
          size,
          xPos,
          yPos,
          delay,
          duration,
        });
      }

      setParticles(newParticles);
    };

    generateParticles(); 
  }, []);

  return (
    <div className="sky">
      <div className="particles">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.xPos}%`,
              top: `${particle.yPos}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SkyComponent;
