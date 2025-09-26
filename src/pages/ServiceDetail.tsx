import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Check, Phone, Mail } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams();

  const serviceDetails: { [key: string]: any } = { 
    'personal-care': {
      title: 'Personal Care',
      subtitle: 'Compassionate support with daily activities',
      image: 'https://images.pexels.com/photos/6303591/pexels-photo-6303591.jpeg',
      description: 'Our personal care services are designed to support individuals with their daily activities while maintaining dignity, choice, and independence. Our qualified support workers provide compassionate assistance tailored to each person\'s unique needs and preferences.',
      features: [
        'Assistance with showering and bathing',
        'Help with dressing and grooming',
        'Medication reminders and support',
        'Personal hygiene assistance',
        'Mobility and transfer support',
        'Continence management',
        'Skin care and wound management',
        'Support with eating and drinking'
      ],
      benefits: [
        'Maintain independence and dignity',
        'Professional, trained support workers',
        'Flexible scheduling to suit your needs',
        'Person-centred approach to care',
        'Support with NDIS plan management',
        'Regular progress reviews and updates'
      ]
    },
    'community-participation': {
      title: 'Community Participation',
      subtitle: 'Engaging activities to build connections and skills',
      image: 'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg',
      description: 'Community participation services help individuals build social connections, develop new skills, and engage meaningfully with their local community. Our programs are designed to promote inclusion, independence, and personal growth.',
      features: [
        'Social group activities and outings',
        'Skill development workshops',
        'Recreational and leisure activities',
        'Volunteer work opportunities',
        'Educational programs and courses',
        'Cultural and arts activities',
        'Sports and fitness programs',
        'Peer support groups'
      ],
      benefits: [
        'Build lasting friendships and connections',
        'Develop new skills and interests',
        'Increase confidence and self-esteem',
        'Access community resources and facilities',
        'Improve physical and mental wellbeing',
        'Create meaningful life experiences'
      ]
    },
    'supported-independent-living': {
      title: 'Supported Independent Living (SIL)',
      subtitle: 'Empowering independence with the right level of support',
      image: 'https://images.pexels.com/photos/6303686/pexels-photo-6303686.jpeg',
      description: 'Supported Independent Living services provide 24/7 support to help participants live independently in their own homes. Our approach focuses on building life skills, promoting choice and control, and creating a safe and supportive living environment.',
      features: [
        '24/7 on-site support when needed',
        'Assistance with daily living skills',
        'Support with household management',
        'Help with budgeting and finances',
        'Medication management and health support',
        'Emergency response and safety',
        'Social and recreational activities',
        'Connection to community services'
      ],
      benefits: [
        'Live independently in your own home',
        'Develop essential life skills',
        'Access support when you need it',
        'Maintain relationships and connections',
        'Have choice and control over your life',
        'Build confidence and independence'
      ]
    }
  };

  // Default service if not found
  const defaultService = {
    title: 'Our Services',
    subtitle: 'Comprehensive disability support',
    image: 'https://images.pexels.com/photos/7551439/pexels-photo-7551439.jpeg',
    description: 'We provide comprehensive disability support services designed to empower independence and enhance quality of life. Our person-centred approach ensures that each individual receives the support they need to achieve their goals.',
    features: [
      'Person-centred approach',
      'Qualified and experienced staff',
      'Flexible service delivery',
      'NDIS registered provider',
      'Quality and safety focused',
      'Regular progress monitoring'
    ],
    benefits: [
      'Improved quality of life',
      'Greater independence',
      'Enhanced community participation',
      'Skill development and growth',
      'Peace of mind for families',
      'Professional support when needed'
    ]
  };

  const service = serviceDetails[serviceId || ''] || defaultService;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-gradient-to-br from-cyan-600 to-sky-600"
        style={{
          backgroundImage: `linear-gradient(rgba(8, 145, 178, 0.8), rgba(14, 165, 233, 0.8)), url(${service.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl md:text-2xl leading-relaxed">{service.subtitle}</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Service</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {service.description}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {service.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
              <div className="grid grid-cols-1 gap-4 mb-8">
                {service.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-cyan-50 rounded-lg">
                    <Check className="h-5 w-5 text-cyan-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Referral Card */}
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white mb-8">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6">Make a referral today and take the first step towards greater independence.</p>
                <Link
                  to="/referral"
                  className="block w-full bg-white text-orange-600 px-6 py-3 rounded-full font-semibold text-center hover:bg-gray-50 transition-colors duration-200"
                >
                  Refer Now
                </Link>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Have Questions?</h3>
                <p className="text-gray-600 mb-6">Our team is here to help you understand how this service can support your needs.</p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-cyan-600" />
                    <span className="text-gray-700">1300 VIXA CARE</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-cyan-600" />
                    <span className="text-gray-700">info@vixacare.com.au</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="block w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full font-semibold text-center transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Explore Our Other Services</h2>
          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-lg"
            >
              View All Services
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;