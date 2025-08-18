import React from 'react';
import { Scale, MapPin, Phone, Mail, Fan as Fax } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div className="lg:col-span-1">
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
              <div className="text-3xl font-bold">{siteConfig.firm.shortName}</div>
            </div>
          </div>

          {/* Address Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{siteConfig.firm.name}</h4>
            <div className="space-y-2 text-emerald-200">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Address:</p>
                  <p className="text-sm">{siteConfig.contact.address.street}, {siteConfig.contact.address.suite}</p>
                  <p className="text-sm">{siteConfig.contact.address.city}, {siteConfig.contact.address.province} {siteConfig.contact.address.postalCode}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-emerald-200">
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
                  <p>Fax Number:</p>
                  <p className="text-sm">{siteConfig.contact.fax}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-emerald-200">
          <p className="text-sm">
            © 2025 {siteConfig.firm.name} All rights reserved.
          </p>
          <p className="text-xs mt-2">
            This website is for informational purposes only and does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;