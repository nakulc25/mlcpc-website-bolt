import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone, Mail, MapPin, Search, Scale } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const NotFound = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Simple search - redirect to home with query parameter
      window.location.href = `/?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const quickLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About Us', path: '/about', icon: Scale },
    { name: 'Family Law', path: '/practice-areas/family-law', icon: Scale },
    { name: 'Real Estate', path: '/practice-areas/real-estate', icon: Scale },
    { name: 'Civil Litigation', path: '/practice-areas/civil-litigation', icon: Scale },
    { name: 'Business Law', path: '/practice-areas/business-law', icon: Scale },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img 
              src="/Logo_Assets/logo_64x64.png" 
              alt={`${siteConfig.firm.shortName} Logo`}
              className="w-12 h-12 rounded-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden items-center justify-center w-12 h-12 bg-emerald-700 rounded-lg">
              <Scale className="w-7 h-7 text-white" />
            </div>
            <div className="text-2xl font-bold text-emerald-700">{siteConfig.firm.shortName}</div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* 404 Error */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-emerald-700 mb-4">404</h1>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We apologize, but the page you're looking for doesn't exist or may have been moved. 
              Our legal team is here to help you find what you need.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-12">
            <form onSubmit={handleSearch} className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search our services..."
                  className="w-full px-4 py-3 pl-12 border-2 border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-1.5 rounded-md transition-colors duration-200"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Quick Navigation */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Navigation</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {quickLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="bg-white hover:bg-emerald-50 border-2 border-emerald-200 hover:border-emerald-300 rounded-lg p-4 transition-all duration-300 transform hover:scale-105 flex flex-col items-center space-y-2"
                  >
                    <IconComponent className="w-6 h-6 text-emerald-700" />
                    <span className="font-medium text-gray-900">{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Need Immediate Legal Assistance?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              
              {/* Phone */}
              <div className="flex items-start space-x-3">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-emerald-700 font-medium">{siteConfig.contact.phone}</p>
                  <p className="text-sm text-gray-600">Available for urgent matters</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-emerald-700 font-medium">{siteConfig.contact.email}</p>
                  <p className="text-sm text-gray-600">We respond within 24 hours</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Visit Us</h4>
                  <p className="text-gray-700 text-sm">
                    {siteConfig.contact.address.street}<br />
                    {siteConfig.contact.address.city}, {siteConfig.contact.address.province} {siteConfig.contact.address.postalCode}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Return Home</span>
            </Link>
            <Link
              to="/#contact"
              className="bg-white hover:bg-gray-50 text-emerald-700 border-2 border-emerald-700 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/Logo_Assets/logo_64x64.png" 
              alt={`${siteConfig.firm.shortName} Logo`}
              className="w-8 h-8 bg-white rounded p-1"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden items-center justify-center w-8 h-8 bg-white rounded">
              <Scale className="w-5 h-5 text-emerald-700" />
            </div>
            <div className="text-xl font-bold">{siteConfig.firm.shortName}</div>
          </div>
          <p className="text-sm text-emerald-200">
            © 2025 {siteConfig.firm.name}. All rights reserved.
          </p>
          <p className="text-xs text-emerald-300 mt-2">
            This website is for informational purposes only and does not constitute legal advice.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;