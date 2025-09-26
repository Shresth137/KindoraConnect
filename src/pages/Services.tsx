import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Shield, Home, Car, Briefcase, Brain, Utensils, Clock } from 'lucide-react';
import FindUs from '../components/findus';

const Services: React.FC = () => {
  const services = [
    {
      id: 'personal-care',
      title: 'Personal Care',
      description: 'Compassionate assistance with daily activities including showering, dressing, grooming, and medication support.',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      image: 'https://images.pexels.com/photos/6303591/pexels-photo-6303591.jpeg'
    },
    {
      id: 'community-participation',
      title: 'Community Participation',
      description: 'Engaging social activities, skill development programs, and community integration support.',
      icon: Users,
      color: 'from-cyan-500 to-blue-500',
      image: 'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg'
    },
    {
      id: 'supported-independent-living',
      title: 'Supported Independent Living',
      description: '24/7 support to help participants live independently in their own homes with dignity and choice.',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.pexels.com/photos/6303686/pexels-photo-6303686.jpeg'
    },
    {
      id: 'household-tasks',
      title: 'Household Tasks',
      description: 'Support with cleaning, laundry, shopping, and maintaining a safe and comfortable living environment.',
      icon: Home,
      color: 'from-orange-500 to-red-500',
      image: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg'
    },
    {
      id: 'transport-support',
      title: 'Transport Support',
      description: 'Safe and reliable transportation to appointments, social activities, and community events.',
      icon: Car,
      color: 'from-purple-500 to-indigo-500',
      image: 'https://images.pexels.com/photos/7551516/pexels-photo-7551516.jpeg'
    },
    {
      id: 'employment-support',
      title: 'Employment Support',
      description: 'Job coaching, workplace training, and ongoing support to achieve employment goals.',
      icon: Briefcase,
      color: 'from-teal-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/7551668/pexels-photo-7551668.jpeg'
    },
    {
      id: 'life-skills-development',
      title: 'Life Skills Development',
      description: 'Building practical skills for daily living, communication, and personal development.',
      icon: Brain,
      color: 'from-yellow-500 to-orange-500',
      image: 'https://images.pexels.com/photos/7551609/pexels-photo-7551609.jpeg'
    },
    {
      id: 'meal-preparation',
      title: 'Meal Preparation',
      description: 'Nutrition support, meal planning, cooking assistance, and dietary requirement management.',
      icon: Utensils,
      color: 'from-lime-500 to-green-500',
      image: 'https://images.pexels.com/photos/6195643/pexels-photo-6195643.jpeg'
    },
    {
      id: 'respite-care',
      title: 'Respite Care',
      description: 'Short-term care services providing relief for families and primary caregivers.',
      icon: Clock,
      color: 'from-blue-500 to-purple-500',
      image: 'https://images.pexels.com/photos/7551441/pexels-photo-7551441.jpeg'
    }
  ];

  return (
    <div className="min-h-screen pt-0">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-600 to-sky-600 text-white relative overflow-hidde">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-300/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Comprehensive disability support services tailored to your individual needs and goals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`h-48 bg-gradient-to-br ${service.color} relative overflow-hidden`}>
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
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-200">{service.title}</h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">{service.description}</p>
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 group/link"
                    >
                      Learn More
                      <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We offer flexible, person-centred support that can be tailored to meet your unique needs and goals.
          </p>
          <Link
            to="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.4s' }}
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Contact Form Section */}
      <FindUs showMap={false} showForm={true} />
    </div>
  );
};

export default Services;