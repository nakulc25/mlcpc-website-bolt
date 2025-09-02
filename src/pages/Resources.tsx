import React from 'react';
import { FileText, Download, ExternalLink, BookOpen, AlertCircle, Clock, Phone, Mail } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Resources = () => {
  const legalResources = [
    {
      id: 'legal-aid-ontario',
      title: 'Legal Aid Ontario',
      description: 'Free legal services for low-income individuals and families',
      url: 'https://www.legalaid.on.ca/',
      type: 'external'
    },
    {
      id: 'ontario-courts',
      title: 'Ontario Court Services',
      description: 'Court forms, procedures, and self-help resources',
      url: 'https://www.ontariocourts.ca/',
      type: 'external'
    },
    {
      id: 'law-society-ontario',
      title: 'Law Society of Ontario',
      description: 'Find a lawyer directory and legal resources',
      url: 'https://lso.ca/',
      type: 'external'
    },
    {
      id: 'family-law-info',
      title: 'Family Law Information Centre',
      description: 'Self-help resources for family law matters',
      url: 'https://www.attorneygeneral.jus.gov.on.ca/english/family/',
      type: 'external'
    }
  ];

  const downloadableResources = [
    {
      id: 'divorce-checklist',
      title: 'Divorce Process Checklist',
      description: 'Step-by-step guide for divorce proceedings in Ontario',
      fileType: 'PDF',
      size: '2.1 MB'
    },
    {
      id: 'estate-planning-guide',
      title: 'Estate Planning Guide',
      description: 'Comprehensive guide to wills and estate planning',
      fileType: 'PDF',
      size: '1.8 MB'
    },
    {
      id: 'business-incorporation',
      title: 'Business Incorporation Guide',
      description: 'Everything you need to know about incorporating in Ontario',
      fileType: 'PDF',
      size: '1.5 MB'
    }
  ];

  const emergencyContacts = [
    {
      service: 'Police Emergency',
      number: '911',
      description: 'Life-threatening emergencies'
    },
    {
      service: 'Assaulted Women\'s Helpline',
      number: '1-866-863-0511',
      description: '24/7 crisis support'
    },
    {
      service: 'Legal Aid Ontario',
      number: '1-800-668-8258',
      description: 'Free legal advice hotline'
    },
    {
      service: 'Victim Services',
      number: '1-888-579-2888',
      description: 'Support for crime victims'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Resources</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            Helpful resources, guides, and emergency contacts for your legal needs
          </p>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-12 bg-red-50 border-b-4 border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-red-800 mb-2">Emergency Legal Contacts</h2>
            <p className="text-red-700">If you're in immediate danger or need urgent legal assistance</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-red-500">
                <h3 className="font-bold text-gray-900 mb-2">{contact.service}</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">{contact.number}</p>
                <p className="text-sm text-gray-600">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Legal Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Online Legal Resources</h2>
            <p className="text-lg text-gray-600">
              Helpful links to government and legal aid resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {legalResources.map((resource, index) => (
              <div key={resource.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <ExternalLink className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-emerald-700 hover:text-emerald-800 font-semibold"
                    >
                      <span>Visit Resource</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Downloadable Guides</h2>
            <p className="text-lg text-gray-600">
              Free legal guides and checklists to help you understand your rights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {downloadableResources.map((resource, index) => (
              <div key={resource.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-emerald-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-6">
                    <span>{resource.fileType}</span>
                    <span>•</span>
                    <span>{resource.size}</span>
                  </div>
                  <button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download Guide</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-12 bg-yellow-50 border-t-4 border-yellow-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertCircle className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-yellow-800 mb-4">Important Legal Disclaimer</h3>
          <p className="text-yellow-700 leading-relaxed">
            The information provided on this page is for general informational purposes only and does not constitute legal advice. 
            Every legal situation is unique, and you should consult with a qualified lawyer before making any legal decisions. 
            The resources linked here are provided as a public service and do not represent an endorsement by our firm.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Personalized Legal Advice?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            While these resources are helpful, nothing replaces personalized legal counsel. Contact our team for advice specific to your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call {siteConfig.contact.phone}</span>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="bg-white hover:bg-gray-100 text-emerald-800 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;