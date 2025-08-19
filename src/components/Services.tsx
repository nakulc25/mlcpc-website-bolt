import React from 'react';
import { Link } from 'react-router-dom';
import { Users, FileText, Gavel, Home, Building, Briefcase, Plane, Shield } from 'lucide-react';
import { practiceAreas } from '../config/practiceAreas';

const Services = () => {
  const serviceIcons = [
    Users, FileText, Gavel, Home, Building, Briefcase, Plane, Shield
  ];
  
  const services = practiceAreas.map((practiceArea, index) => ({
    id: practiceArea.id,
    name: practiceArea.name,
    slug: practiceArea.slug,
    shortDescription: practiceArea.shortDescription,
    icon: serviceIcons[index] || Users,
    color: 'bg-emerald-700 hover:bg-emerald-800'
  }));

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Serving Toronto and the GTA in matters related to
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.name}
                to={`/practice-areas/${service.slug}`}
                className={`${service.color} text-white p-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex flex-col items-center space-y-3 group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <IconComponent className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-center">{service.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;