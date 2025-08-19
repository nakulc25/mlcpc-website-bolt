import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import PracticeAreaTemplate from './components/PracticeAreaTemplate';
import Footer from './components/Footer';
import EmailSetup from './components/EmailSetup';
import { siteConfig } from './config/siteConfig';

function App() {
  // Show setup notice if EmailJS is not configured
  const isEmailConfigured = siteConfig.email.serviceId !== 'YOUR_EMAILJS_SERVICE_ID';

  return (
    <div className="min-h-screen">
      {!isEmailConfigured && <EmailSetup />}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/practice-areas/:slug" element={<PracticeAreaTemplate />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;