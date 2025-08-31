import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'About Us', href: '/about', type: 'route' },
    { name: 'Practice Areas', href: '#services', type: 'anchor' },
    { name: 'Contact Us', href: '#contact', type: 'anchor' },
    { name: 'Resources/FAQs', href: '#resources', type: 'anchor' },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setIsMenuOpen(false);
    
    if (item.type === 'anchor' && location.pathname !== '/') {
      // If we're not on home page and clicking an anchor link, go to home first
      window.location.href = '/' + item.href;
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img 
              src="/Logo_Assets/logo_64x64.png" 
              alt={`${siteConfig.firm.shortName} Logo`}
              className="w-12 h-12 rounded-lg"
              onError={(e) => {
                // Fallback to icon if logo not found
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.type === 'route' ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium text-lg transition-colors duration-200 ${
                    location.pathname === item.href 
                      ? 'text-emerald-700 border-b-2 border-emerald-700' 
                      : 'text-gray-700 hover:text-emerald-700'
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-emerald-700 font-medium text-lg transition-colors duration-200"
                  onClick={() => handleNavClick(item)}
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-emerald-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.type === 'route' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium transition-colors duration-200 px-2 py-1 ${
                      location.pathname === item.href 
                        ? 'text-emerald-700 bg-emerald-50 rounded' 
                        : 'text-gray-700 hover:text-emerald-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-emerald-700 font-medium transition-colors duration-200 px-2 py-1"
                    onClick={() => handleNavClick(item)}
                  >
                    {item.name}
                  </a>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;