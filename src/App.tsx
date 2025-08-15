import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
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
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;