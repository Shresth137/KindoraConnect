import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import * as Icons from 'lucide-react';
import FindUs from '../components/findus';
import { companyInfo, theme } from '../config';

const Home: React.FC = () => {
  const features = companyInfo.features;
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-700 overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(8, 145, 178, 0.8), rgba(14, 165, 233, 0.8)), url(https://images.pexels.com/photos/7551439/pexels-photo-7551439.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-12 leading-tight animate-fade-in-up">
            Empowering Lives.<br />
            <span className="text-orange-300">Supporting Independence.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Personalised disability support services across Adelaide & South Australia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/referral"
              className="bg-primary-medium hover:bg-primary-main text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2 group"
            >
              <span>Make a Referral</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/services"
              className="bg-white/10 backdrop-blur-sm hover:bg-secondary-main text-white border-2 border-secondary-main px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center justify-center mb-3 transform group-hover:scale-110 transition-transform duration-200">
                  <CheckCircle className="h-8 w-8 text-[#9b3544ff] group-hover:text-[#5D1A20] transition-colors duration-200" />
                </div>
                <p className="text-[#2D1B22] font-medium group-hover:text-[#9b3544ff] transition-colors duration-200">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D1B22] mb-6">
              Our Featured Services
            </h2>
            <p className="text-xl text-[#6B5B73] max-w-3xl mx-auto">
              Comprehensive disability support services designed to empower independence and enhance quality of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyInfo.services.featured.map((service, index) => {
              const IconComponent = (Icons as any)[service.iconName];
              return (
                <div key={service.id} className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 animate-fade-in-up ${service.color ? `bg-gradient-to-br ${service.color}` : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="h-48 bg-gradient-to-br relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/40 transition-all duration-300" />
                    <div className="absolute bottom-4 left-4 transform group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2D1B22] mb-3">{service.title}</h3>
                    <p className="text-[#6B5B73] mb-4 line-clamp-3">{service.description}</p>
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center text-[#9b3544ff] hover:text-[#5D1A20] font-semibold transition-all duration-200 group/link"
                    >
                      Learn More
                      <ArrowRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <FindUs showMap={false} showForm={true} showQuickActions={true} />

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-sky-600 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-300/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-sky-300/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Contact us today to discuss how we can support you or your loved one's journey towards greater independence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/referral"
              className="bg-[#3B82F6] hover:bg-[#1E40AF] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Make a Referral
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group"
            >
              <Phone size={20} className="group-hover:rotate-12 transition-transform duration-200" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;