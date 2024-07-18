import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import WebDesigning from './components/WebDesigning';
import WebDevelopment from './components/WebDevelopment'; // Add this line

const App: React.FC = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/webdesigning" element={<WebDesigning />} />
            <Route path="/webdevelopment" element={<WebDevelopment />} /> {/* Add this line */}
 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
