import React from 'react';

const ResourcesPage = () => {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto">
            Helpful links and documents to assist you.
          </p>
        </div>
      </section>

      {/* Resources Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Legal Resources</h2>
            {/* TODO: Add resources and helpful links here */}
            <p className="text-gray-600">
              Content for the Resources page will be added here. This section will contain helpful links, downloadable forms, and other useful information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;