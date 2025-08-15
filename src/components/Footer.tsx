import React from 'react';
import { Scale, MapPin, Phone, Mail, Fan as Fax } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg">
                <Scale className="w-7 h-7 text-emerald-700" />
              </div>
              <div className="text-3xl font-bold">M&C</div>
            </div>
            <p className="text-emerald-200 italic text-lg mb-6">
              - Protecting What Matters -
            </p>
            <div className="space-y-2 text-emerald-200">
              <h3 className="text-xl font-semibold text-white mb-3">Mall & Chhibbar Legal Professional Corp.</h3>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Address:</p>
                  <p className="text-sm">123 Bay Street, Suite 1500</p>
                  <p className="text-sm">Toronto, ON M5H 2Y4</p>
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
                <span>(416) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@mclaw.ca</span>
              </div>
              <div className="flex items-center space-x-3">
                <Fax className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p>Fax Number:</p>
                  <p className="text-sm">(416) 123-4568</p>
                </div>
              </div>
            </div>
          </div>

          {/* LSO Registration */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Professional Registration</h4>
            <div className="text-emerald-200">
              <p className="font-medium">LSO Registration #</p>
              <p className="text-sm mt-1">12345P</p>
              <p className="text-sm mt-4">Licensed by the Law Society of Ontario</p>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-emerald-200">
          <p className="text-sm">
            © 2024 Mall & Chhibbar Legal Professional Corp. All rights reserved.
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