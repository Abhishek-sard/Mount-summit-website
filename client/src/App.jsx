import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Intro from "./components/Home/intro.jsx";
import Count from "./components/Home/Count.jsx";
import WhyChooseUs from "./components/Home/WhyChooseUs.jsx";

function Home(){
  return(
    <>
    <Intro/>
    <Count/>
    <WhyChooseUs/>
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
