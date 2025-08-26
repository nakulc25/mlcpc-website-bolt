import React from 'react';
import { Scale, Briefcase, Quote, Linkedin, X, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { isValidExternalUrl } from '../utils/security';

const AboutUs = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const handleScheduleClick = () => {
    if (siteConfig.booking.enabled && 
        siteConfig.booking.calendlyUrl && 
        isValidExternalUrl(siteConfig.booking.calendlyUrl)) {
      window.open(siteConfig.booking.calendlyUrl, '_blank');
    } else {
      // Fallback to contact section
      window.location.href = '/#contact';
    }
  };

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleLinkedInClick = (linkedinUrl: string, lawyerName: string) => {
    if (isValidExternalUrl(linkedinUrl)) {
      window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
    } else {
      console.warn('Invalid LinkedIn URL:', linkedinUrl);
      alert('LinkedIn profile is not available at this time.');
    }
  };

  return (
    <div className="pt-20 relative">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">About Our Firm</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            We pride ourselves on building lasting relationships with our clients based on trust, transparency, and results
          </p>
        </div>
      </section>

      {/*
      Firm Overview
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {siteConfig.firm.name}
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {siteConfig.firm.description}. Our team combines decades of legal expertise with a 
              client-centered approach, ensuring that every case receives the attention and dedication it deserves. 
              We pride ourselves on building lasting relationships with our clients based on trust, transparency, and results.
            </p>
          </div>
        </div>
      </section>
      */}


      {/* Lawyers Profiles */}
<section className="py-6 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Legal Team</h2>
      <p className="text-base text-gray-600">
        Experienced professionals committed to excellence in legal representation.
      </p>
      <p className="text-base text-gray-600">
        Serving clients across Toronto and the GTA
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {siteConfig.lawyers.map((lawyer, index) => (
        <div
          key={lawyer.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 p-8 text-white text-center">
            <div
              className="w-52 h-52 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => handleImageClick(lawyer.image)}
            >
              <img
                src={lawyer.image}
                alt={`${lawyer.name} - ${lawyer.title}`}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">{lawyer.name}</h3>
            <p className="text-emerald-100 text-lg">{lawyer.title}</p>
          </div>

          {/* Profile Content */}
          <div className="p-8 flex flex-col flex-grow">
            {/* Background */}
            <div className="mb-8 flex-grow">
              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-emerald-600" />
                Professional Background
              </h4>
              <div className="text-gray-600 leading-relaxed space-y-4">
                {lawyer.background.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* LinkedIn Button */}
            <div className="mt-auto pt-6 border-t border-gray-200">
              <button
                onClick={() => handleLinkedInClick(lawyer.linkedinUrl, lawyer.name)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Linkedin className="w-5 h-5" />
                <span>View LinkedIn Profile</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      
      {/* Lawyers Profiles 
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Legal Team</h2>
            <p className="text-base text-gray-600">
              Experienced professionals committed to excellence in legal representation.
            </p>
            <p className="text-base text-gray-600">
              Serving clients across Toronto and the GTA
            </p>            
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {siteConfig.lawyers.map((lawyer, index) => (
              <div 
                key={lawyer.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Profile Header */}
                <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 p-8 text-white text-center">
                  <div 
                    className="w-52 h-52 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => handleImageClick(lawyer.image)}
                  >
                    <img 
                      src={lawyer.image} 
                      alt={`${lawyer.name} - ${lawyer.title}`}
                      className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{lawyer.name}</h3>
                  <p className="text-emerald-100 text-lg">{lawyer.title}</p>
                </div>

                {/* Profile Content */}
                <div className="p-8">
                  {/* Background */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-emerald-600" />
                      Professional Background
                    </h4>
                    <div className="text-gray-600 leading-relaxed space-y-4">
                      {lawyer.background.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  {/* LinkedIn Button */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button
                      onClick={() => handleLinkedInClick(lawyer.linkedinUrl, lawyer.name)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>View LinkedIn Profile</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Trusted by clients across Toronto and the GTA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-emerald-600" />
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    <span className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                      Verified Client
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.title}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Our Team?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Contact us today to schedule a consultation and discover how our experienced legal team can help you.
          </p>
          <button 
            onClick={handleScheduleClick}
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Free 30-minute Consultation
          </button>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged profile"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;