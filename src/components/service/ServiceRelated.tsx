import React from 'react';
import { Link } from 'react-router-dom';

interface RelatedService {
  id: string;
  title: string;
  description: string;
  image: string;
  gradientFrom: string;
  gradientTo: string;
}

interface ServiceRelatedProps {
  relatedServices: RelatedService[];
  title?: string;
}

const ServiceRelated: React.FC<ServiceRelatedProps> = ({
  relatedServices,
  title = "Explore Our Other Services"
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedServices.map((service) => (
            <Link key={service.id} to={`/services/${service.id}`} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo}`}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceRelated;