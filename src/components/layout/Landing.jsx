import React from "react";
import Slider_backboard from "./Slider_backboard";

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">PRODUCT MANAGEMENT</h1>
          <p className="lead">
            Create a product, Update product, Product list, Product information
          </p>
          <div className="mt-10">
          <Slider_backboard />
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default Landing;
