import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CookieProvider } from './CookieContext';
import CookieConsent from './CookieConsent';
import Home from './Home';
import About from './AboutUs';
import Services from './Services';
import Contact from './Contact';
import UnderConstruction from './underConstruction'
import Nav from './Nav';

const App = () => {

  useEffect(()=>{
    if (!sessionStorage.getItem("sessionId")) {
      sessionStorage.setItem("sessionId", crypto.randomUUID());
      sessionStorage.setItem("sessionStart", Date.now().toString());
    }
  },[]);

  return (
    <CookieProvider>
      <Router>
        <CookieConsent />
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/SiteUnderConstruction" element={<UnderConstruction/>} />
        </Routes>
      </Router>
    </CookieProvider>
  );
};

export default App;
