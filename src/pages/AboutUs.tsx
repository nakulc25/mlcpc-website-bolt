import React from 'react';
import { Scale, Briefcase, Quote, Linkedin, X, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { isValidExternalUrl } from '../utils/security';

const AboutUs = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const testimonials = siteConfig.testimonials.items;
  const SHOW_CAROUSEL_THRESHOLD = 3;
  const isCarousel = testimonials.length > SHOW_CAROUSEL_THRESHOLD;

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(3);

  React.useEffect(() => {
    if (!isCarousel) return;

    const calculateItemsPerPage = () => {
      if (window.innerWidth < 768) { // sm
        return 1;
      }
      if (window.innerWidth < 1024) { // md
        return 2;
      }
      return 3; // lg and up
    };

    const handleResize = () => {
      setItemsPerPage(calculateItemsPerPage());
      setCurrentSlide(0); // Reset slide on resize
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isCarousel]);

  const totalSlides = isCarousel ? Math.max(0, testimonials.length - itemsPerPage + 1) : 0;

  const nextSlide = React.useCallback(() => {
    if (!isCarousel || totalSlides <= 1) return;
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [isCarousel, totalSlides]);

  const prevSlide = () => {
    if (!isCarousel || totalSlides <= 1) return;
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  React.useEffect(() => {
    if (!isCarousel || !siteConfig.testimonials.carousel.enabled || totalSlides <= 1) return;
    const timer = setTimeout(nextSlide, siteConfig.testimonials.carousel.delay);
    return () => clearTimeout(timer);
  }, [currentSlide, nextSlide, isCarousel, totalSlides]);

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
      

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Views and Reviews</h2>
          </div>

          {isCarousel ? (
            <div className="max-w-6xl mx-auto relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * (100 / itemsPerPage)}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="flex-shrink-0 px-2" style={{ width: `${100 / itemsPerPage}%` }}>
                      <div className="bg-gray-50 rounded-xl p-8 shadow-md h-full flex flex-col min-h-[320px] sm:min-h-[280px]">
                        <div className="flex items-center justify-between mb-4">
                          <Quote className="w-8 h-8 text-emerald-600" />
                          <div className="flex items-center space-x-2">
                            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                            <span className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                              Verified Client
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-6 leading-relaxed italic flex-grow">
                          "{testimonial.content}"
                        </p>
                        <div className="border-t border-gray-200 pt-4 mt-auto">
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-600">
                            {testimonial.title}
                            {testimonial.company && `, ${testimonial.company}`}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {totalSlides > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute top-1/2 -left-4 md:-left-10 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-lg transition z-10"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-6 h-6 text-emerald-800" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute top-1/2 -right-4 md:-right-10 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-lg transition z-10"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-6 h-6 text-emerald-800" />
                  </button>
                </>
              )}

              {totalSlides > 1 && (
                <div className="flex justify-center mt-6 space-x-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        currentSlide === index ? 'bg-emerald-600' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial page ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-50 rounded-xl p-8 shadow-md h-full flex flex-col min-h-[320px] sm:min-h-[280px]">
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-8 h-8 text-emerald-600" />
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                      <span className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                        Verified Client
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic flex-grow">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-gray-200 pt-4 mt-auto">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">
                      {testimonial.title}
                      {testimonial.company && `, ${testimonial.company}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
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