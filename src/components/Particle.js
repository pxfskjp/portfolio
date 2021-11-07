import React from "react";
import Particles from "react-particles-js";

function Particle() {
  return (
      <Particles
        params={{
          "particles": {
              "number": {
                  "value": 55
              },
              "size": {
                  "value": 3
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
                  }
              }
          }
        }} 
      />
  );
}

export default Particle;
