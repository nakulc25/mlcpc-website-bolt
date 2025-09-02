import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail, Clock, HelpCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const faqs: FAQ[] = [
    {
      id: 'consultation-cost',
      question: 'How much does an initial consultation cost?',
      answer: 'We offer a free 30-minute initial consultation to discuss your legal matter and determine how we can best assist you. This allows us to understand your needs and provide you with an overview of our services without any financial commitment.',
      category: 'general'
    },
    {
      id: 'response-time',
      question: 'How quickly will you respond to my inquiry?',
      answer: 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our office directly or mark your message as urgent, and we will prioritize your case accordingly.',
      category: 'general'
    },
    {
      id: 'payment-methods',
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including cash, certified cheques, bank drafts, and e-transfers. Payment arrangements can be discussed during your consultation, and we offer flexible payment plans for certain types of cases.',
      category: 'general'
    },
    {
      id: 'divorce-timeline',
      question: 'How long does a divorce take in Ontario?',
      answer: 'An uncontested divorce typically takes 4-6 months from filing to final order. Contested divorces can take 12-24 months or longer, depending on the complexity of issues such as property division, child custody, and support arrangements.',
      category: 'family-law'
    },
    {
      id: 'child-custody',
      question: 'What factors determine child custody decisions?',
      answer: 'Ontario courts prioritize the best interests of the child, considering factors such as the child\'s physical and emotional needs, existing relationships, stability of each parent\'s home environment, and the child\'s preferences (depending on age and maturity).',
      category: 'family-law'
    },
    {
      id: 'real-estate-closing',
      question: 'What happens on closing day for a real estate transaction?',
      answer: 'On closing day, we ensure all legal documents are properly executed, funds are transferred, keys are exchanged, and the property title is transferred to the new owner. We coordinate with all parties to ensure a smooth transaction.',
      category: 'real-estate'
    },
    {
      id: 'will-update',
      question: 'How often should I update my will?',
      answer: 'You should review and potentially update your will every 3-5 years or after major life events such as marriage, divorce, birth of children, significant changes in assets, or death of beneficiaries or executors.',
      category: 'wills-estates'
    },
    {
      id: 'immigration-processing',
      question: 'How long do immigration applications take to process?',
      answer: 'Processing times vary significantly depending on the type of application. Express Entry applications typically take 6-8 months, while family sponsorship can take 12-24 months. We provide regular updates on your application status.',
      category: 'immigration'
    },
    {
      id: 'criminal-charges',
      question: 'What should I do if I\'m charged with a criminal offense?',
      answer: 'Contact a criminal defense lawyer immediately. Do not speak to police without legal representation present. Exercise your right to remain silent and your right to counsel. Time is critical in criminal matters.',
      category: 'criminal-law'
    },
    {
      id: 'employment-termination',
      question: 'What are my rights if I\'m terminated from employment?',
      answer: 'You may be entitled to notice or pay in lieu of notice, severance pay, and continuation of benefits. The amount depends on factors such as length of service, age, position, and circumstances of termination. We can review your situation and advise on your rights.',
      category: 'employment-law'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'general', name: 'General' },
    { id: 'family-law', name: 'Family Law' },
    { id: 'real-estate', name: 'Real Estate' },
    { id: 'wills-estates', name: 'Wills & Estates' },
    { id: 'immigration', name: 'Immigration' },
    { id: 'criminal-law', name: 'Criminal Law' },
    { id: 'employment-law', name: 'Employment Law' }
  ];

  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            Find answers to common legal questions and learn more about our services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Category:</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-emerald-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === faq.id && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No FAQs Found</h3>
              <p className="text-gray-600">
                No frequently asked questions found for the selected category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Can't find the answer you're looking for? Our legal team is here to help with personalized advice.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-emerald-700 rounded-lg p-6">
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-emerald-100">{siteConfig.contact.phone}</p>
            </div>
            
            <div className="bg-emerald-700 rounded-lg p-6">
              <Mail className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-emerald-100">{siteConfig.contact.email}</p>
            </div>
            
            <div className="bg-emerald-700 rounded-lg p-6">
              <Clock className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Free Consultation</h3>
              <p className="text-emerald-100">30 minutes</p>
            </div>
          </div>

          <a
            href="/#contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQs;