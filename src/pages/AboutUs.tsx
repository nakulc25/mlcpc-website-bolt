import React from 'react';
import { Scale, GraduationCap, Award, Briefcase } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const AboutUs = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/Logo_Assets/logo_128x128.png" 
              alt={`${siteConfig.firm.shortName} Logo`}
              className="w-16 h-16"
              onError={(e) => {
                // Fallback to icon if logo not found
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <Scale className="hidden w-16 h-16 text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Our Firm</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            Meet the experienced legal professionals dedicated to protecting what matters most to you
          </p>
        </div>
      </section>

      {/* Firm Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {siteConfig.firm.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {siteConfig.firm.description}. Our team combines decades of legal expertise with a 
              client-centered approach, ensuring that every case receives the attention and dedication it deserves. 
              We pride ourselves on building lasting relationships with our clients based on trust, transparency, and results.
            </p>
          </div>
        </div>
      </section>

      {/* Lawyers Profiles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Legal Team</h2>
            <p className="text-lg text-gray-600">
              Experienced professionals committed to excellence in legal representation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {siteConfig.lawyers.map((lawyer, index) => (
              <div 
                key={lawyer.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Profile Header */}
                <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 p-8 text-white text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={lawyer.image} 
                      alt={`${lawyer.name} - ${lawyer.title}`}
                      className="w-full h-full object-cover"
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
                    <p className="text-gray-600 leading-relaxed">{lawyer.background}</p>
                    <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
                      <p className="text-emerald-800 font-medium">{lawyer.experience}</p>
                    </div>
                  </div>

                  {/* Areas of Expertise */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Scale className="w-5 h-5 mr-2 text-emerald-600" />
                      Areas of Expertise
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {lawyer.expertise.map((area, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2 text-emerald-600" />
                      Education
                    </h4>
                    <div className="space-y-2">
                      {lawyer.education.map((edu, idx) => (
                        <div key={idx} className="text-gray-600 pl-4 border-l-2 border-emerald-200">
                          {edu}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-emerald-600" />
                      Certifications & Memberships
                    </h4>
                    <div className="space-y-2">
                      {lawyer.certifications.map((cert, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span>{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
          <a 
            href="/#contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Schedule Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;