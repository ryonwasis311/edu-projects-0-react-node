import React from "react";
import Sliderbackboard from "./Slider_backboard";

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">PRODUCT MANAGEMENT</h1>
          <p className="lead pb-5">
            Create a product, Update product, Product list, Product information
          </p>
          <Sliderbackboard />
        </div>
        
        
      </div>
    </section>
  );
};

export default Landing;
