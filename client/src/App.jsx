import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "./components/Home/Home.jsx";

function App() {
  return (
    <Router>
      {/* Fixed Navbar */}
      <Navbar />

   
       
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      

      <Footer />
    </Router>
  );
}

export default App;
