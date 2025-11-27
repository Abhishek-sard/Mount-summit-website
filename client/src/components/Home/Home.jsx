import React from "react";
import Slider from "./Slider.jsx";
import Count from "./Count.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
import GradeWisePrograms from "./GradeWisePrograms.jsx";
import SocialProof from "./SocialProof.jsx";

const Home = () => {
  return (
    <div>
      <Slider />
      <Count/>
      <WhyChooseUs/>
      <GradeWisePrograms/>
      <SocialProof/>
    </div>
  );
};

export default Home;
