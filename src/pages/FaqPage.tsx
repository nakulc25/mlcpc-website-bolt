import React from 'react';

const FaqPage = () => {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto">
            Find answers to common questions about our legal services.
          </p>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our FAQs</h2>
            {/* TODO: Add FAQ content here using an accordion or list format */}
            <p className="text-gray-600">
              Content for the FAQ page will be added here. This section will contain a list of questions and answers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;