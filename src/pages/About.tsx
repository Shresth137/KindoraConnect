import React from 'react';
import { Heart, Award, Shield, Users, Target, Eye } from 'lucide-react';
import FindUs from '../components/findus';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every interaction with empathy, kindness, and genuine care for the wellbeing of those we support.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards and build trust through transparency, honesty, and accountability.'
    },
    {
      icon: Users,
      title: 'Inclusion',
      description: 'We celebrate diversity and work to create inclusive environments where everyone feels valued and respected.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are committed to delivering high-quality services and continuously improving our practices and outcomes.'
    }
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/7551669/pexels-photo-7551669.jpeg',
      bio: 'With over 15 years in disability services, Sarah leads Vixa Care with a vision of empowering independence and dignity for all.'
    },
    {
      name: 'David Chen',
      role: 'Director of Operations',
      image: 'https://images.pexels.com/photos/7551668/pexels-photo-7551668.jpeg',
      bio: 'David ensures our services meet the highest standards while maintaining person-centred care approaches across all programs.'
    },
    {
      name: 'Lisa Thompson',
      role: 'Clinical Services Manager',
      image: 'https://images.pexels.com/photos/6303686/pexels-photo-6303686.jpeg',
      bio: 'Lisa oversees our clinical programs and ensures all support workers receive ongoing training and professional development.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Community Engagement Coordinator',
      image: 'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg',
      bio: 'Michael develops partnerships and programs that enhance community participation and social inclusion opportunities.'
    }
  ];

  return (
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-gradient-to-br from-cyan-600 to-sky-600 overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(8, 145, 178, 0.8), rgba(14, 165, 233, 0.8)), url(https://images.pexels.com/photos/7551439/pexels-photo-7551439.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-300/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">About Vixa Care</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Dedicated to empowering lives and supporting independence through quality disability services across South Australia.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center group animate-fade-in-up">
              <div className="bg-cyan-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-cyan-200">
                <Target className="h-10 w-10 text-cyan-600 group-hover:text-cyan-700 transition-colors duration-200" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors duration-200">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide person-centred disability support services that empower individuals to live independently, 
                participate meaningfully in their communities, and achieve their personal goals with dignity and choice.
              </p>
            </div>

            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-sky-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-sky-200">
                <Eye className="h-10 w-10 text-sky-600 group-hover:text-sky-700 transition-colors duration-200" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-sky-600 transition-colors duration-200">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                A community where every person with disability has the opportunity to live their best life, 
                with full access to support, services, and opportunities that enable them to thrive.
              </p>
            </div>

            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-orange-200">
                <Heart className="h-10 w-10 text-orange-600 group-hover:text-orange-700 transition-colors duration-200" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-200">Our Approach</h2>
              <p className="text-gray-600 leading-relaxed">
                We believe in putting the person at the centre of everything we do, 
                respecting individual choices, and providing flexible support that adapts to changing needs and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide every aspect of our work and shape the culture of our organisation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan-100 rounded-lg p-3 group-hover:bg-cyan-200 transition-colors duration-300 group-hover:scale-110 transform transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-cyan-600 group-hover:text-cyan-700 transition-colors duration-200" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-200">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team is committed to delivering exceptional support and creating positive outcomes for the people we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center p-4">
                      <p className="text-sm font-medium">{member.bio}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors duration-200">{member.name}</h3>
                <p className="text-cyan-600 font-semibold mb-3 group-hover:text-cyan-700 transition-colors duration-200">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NDIS Compliance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group">
            <Shield className="h-16 w-16 text-cyan-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-cyan-600 transition-colors duration-200">NDIS Registered Provider</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Vixa Care is a registered NDIS provider committed to meeting the highest standards of quality and safety. 
              We comply with the NDIS Practice Standards and undergo regular audits to ensure we deliver services 
              that meet your needs and expectations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors duration-200 group/item">
                <h4 className="font-semibold text-gray-900 mb-2">Quality Standards</h4>
                <p className="text-sm text-gray-600">Certified compliance with NDIS Practice Standards</p>
              </div>
              <div className="p-4 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors duration-200 group/item">
                <h4 className="font-semibold text-gray-900 mb-2">Safety Focus</h4>
                <p className="text-sm text-gray-600">Comprehensive safety and risk management protocols</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-200 group/item">
                <h4 className="font-semibold text-gray-900 mb-2">Continuous Improvement</h4>
                <p className="text-sm text-gray-600">Regular reviews and updates to service delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <FindUs showMap={false} showForm={true} />
    </div>
  );
};

export default About;