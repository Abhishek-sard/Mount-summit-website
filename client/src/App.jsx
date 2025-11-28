import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Intro from "./components/Home/intro.jsx";
import Count from "./components/Home/Count.jsx";
import Image from "./components/Home/Image.jsx";
import WhyChooseUs from "./components/Home/WhyChooseUs.jsx";
import Achievements from "./components/Home/Achievements.jsx";
import Testimonials from "./components/Home/Testimonials.jsx";

function Home(){
  return(
    <>
    <Intro/>
    <Count/>
    <Image/>
    <WhyChooseUs/>
    <Achievements/>
    <Testimonials/>
    </>
  )
}
function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
