import React from 'react';
import { AlertTriangle, ExternalLink } from 'lucide-react';

const EmailSetup = () => {
  return (
    <div className="fixed top-4 right-4 max-w-md bg-yellow-50 border border-yellow-200 rounded-lg p-4 shadow-lg z-50">
      <div className="flex items-start space-x-3">
        <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm">
          <h4 className="font-semibold text-yellow-800 mb-2">Email Setup Required</h4>
          <p className="text-yellow-700 mb-3">
            To enable contact form functionality, please set up EmailJS:
          </p>
          <ol className="text-yellow-700 text-xs space-y-1 mb-3">
            <li>1. Create account at <a href="https://emailjs.com" target="_blank" rel="noopener noreferrer" className="underline">emailjs.com</a></li>
            <li>2. Create email service & template</li>
            <li>3. Update config in <code className="bg-yellow-100 px-1 rounded">src/config/siteConfig.ts</code></li>
          </ol>
          <a 
            href="https://www.emailjs.com/docs/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-yellow-800 hover:text-yellow-900 underline text-xs"
          >
            <span>View Setup Guide</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmailSetup;