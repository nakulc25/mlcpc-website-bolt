import React from 'react';
import { Scale, MapPin, Phone, Mail, Fan as Fax } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pr-4">
          {/* Logo and Tagline */}
          <div className="lg:col-span-1 lg:pl-4">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/Logo_Assets/logo_64x64.png" 
                alt={`${siteConfig.firm.shortName} Logo`}
                className="w-12 h-12 bg-white rounded-lg p-1"
                onError={(e) => {
                  // Fallback to icon if logo not found
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden items-center justify-center w-12 h-12 bg-white rounded-lg">
                <Scale className="w-7 h-7 text-emerald-700" />
              </div>
              <div className="text-4xl font-bold">{siteConfig.firm.shortName}</div>
            </div>
          </div>

          {/* Address Information */}
          <div className="lg:pl-4">
            <h4 className="text-xl font-semibold mb-4">
              Mall & Chhibbar Legal Professional Corporation
            </h4>
            <div className="space-y-2 text-emerald-200 text-base">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Address:</p>
                  <p className="text-base">{siteConfig.firm.address.street}, {siteConfig.firm.address.suite}</p>
                  <p className="text-base">{siteConfig.firm.address.city}, {siteConfig.firm.address.province} {siteConfig.firm.address.postalCode}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:pr-8">
            <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-emerald-200 text-base">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Fax className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p>Fax: {siteConfig.contact.fax}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-emerald-200 text-base">
          <p>
            © 2025 Mall & Chhibbar Legal Professional Corporation. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            This website is for informational purposes only and does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;