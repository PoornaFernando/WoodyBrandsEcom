import React from "react";
import Lottie from "lottie-react";
import animationData from "../../Assests/animations/24151-ecommerce-animation.json";

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Lottie animationData={animationData} autoplay loop />
    </div>
  );
};

export default Loader;
