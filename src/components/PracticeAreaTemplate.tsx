import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Star, Phone, Mail } from 'lucide-react';
import { getPracticeAreaBySlug } from '../config/practiceAreas';
import { siteConfig } from '../config/siteConfig';
import { isValidExternalUrl } from '../utils/security';

const PracticeAreaTemplate = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!slug) {
    return <Navigate to="/" replace />;
  }

  const practiceArea = getPracticeAreaBySlug(slug);
  
  if (!practiceArea) {
    return <Navigate to="/404" replace />;
  }

  const handleScheduleClick = () => {
    if (siteConfig.booking.enabled && 
        siteConfig.booking.calendlyUrl && 
        isValidExternalUrl(siteConfig.booking.calendlyUrl)) {
      window.open(siteConfig.booking.calendlyUrl, '_blank');
    } else {
      window.location.href = '/#contact';
    }
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="pt-20">
      {/* SEO Meta Tags - These would be handled by React Helmet in a real app */}
      <title>{practiceArea.seo.title}</title>
      
      {/* Banner Section */}
      <section 
        className="relative h-96 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${practiceArea.bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-emerald-900 bg-opacity-75"></div>
        
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="absolute top-6 left-6 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Banner Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {practiceArea.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            {practiceArea.shortDescription}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            
            {/* Overview Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {practiceArea.content.overview}
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {practiceArea.content.sections.map((section, index) => (
                <div key={index} className="border-l-4 border-emerald-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Key Services */}
            <div className="mt-16 bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Services Include</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {practiceArea.content.keyServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            
            {/* Contact Card */}
            <div className="bg-emerald-700 text-white rounded-xl p-8 mb-8 sticky top-24">
              <h3 className="text-xl font-bold mb-6">Need Legal Assistance?</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>{siteConfig.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>{siteConfig.contact.email}</span>
                </div>
              </div>

              <button
                onClick={handleScheduleClick}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
              </button>

              <p className="text-sm text-emerald-100 mt-4 text-center">
                Free {siteConfig.consultation.freeMinutes}-minute Consultation
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Us</h3>
              <div className="space-y-4">
                {practiceArea.content.whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      {/*
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact our experienced {practiceArea.name.toLowerCase()} team today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleScheduleClick}
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Free 30-minute Consultation
            </button>
            <a
              href="/#contact"
              className="bg-white hover:bg-gray-50 text-emerald-700 border-2 border-emerald-700 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      */}
    </div>
  );
};

export default PracticeAreaTemplate;