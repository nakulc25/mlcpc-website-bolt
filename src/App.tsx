import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Resources from './pages/Resources';
import FAQs from './pages/FAQs';
import NotFound from './pages/NotFound';
import PracticeAreaTemplate from './components/PracticeAreaTemplate';
import Footer from './components/Footer';
import EmailSetup from './components/EmailSetup';
import ErrorBoundary from './components/ErrorBoundary';
import { siteConfig } from './config/siteConfig';
import { analyticsConfig, initializeGTM } from './config/analytics';

function App() {
  // Initialize Google Tag Manager
  React.useEffect(() => {
    if (analyticsConfig.gtm.enabled && analyticsConfig.gtm.id !== 'GTM-XXXXXXX') {
      initializeGTM(analyticsConfig.gtm.id);
    }
  }, []);

  // Show setup notice if EmailJS is not configured
  const isEmailConfigured = siteConfig.email.serviceId !== 'YOUR_EMAILJS_SERVICE_ID';

  return (
    <div className="min-h-screen">
      {!isEmailConfigured && <EmailSetup />}
      <ErrorBoundary>
        <Header />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/practice-areas/:slug" element={<PracticeAreaTemplate />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;