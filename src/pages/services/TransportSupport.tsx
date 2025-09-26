import React from 'react';
import { Car, MapPin, Clock } from 'lucide-react';
import ServiceHero from '../../components/service/ServiceHero';
import ServiceFeatures from '../../components/service/ServiceFeatures';
import ServiceBenefits from '../../components/service/ServiceBenefits';
import ServiceSidebar from '../../components/service/ServiceSidebar';
import ServiceRelated from '../../components/service/ServiceRelated';
import ServiceInfoBox from '../../components/service/ServiceInfoBox';

const TransportSupport: React.FC = () => {
  const features = [
    'Door-to-door transport service',
    'Medical and therapy appointments',
    'Social and recreational outings',
    'Shopping and errands assistance',
    'Community event transportation',
    'Wheelchair accessible vehicles',
    'Trained and experienced drivers',
    'Flexible scheduling options'
  ];

  const benefits = [
    'Maintain independence and mobility',
    'Access essential services and appointments',
    'Participate in community activities',
    'Safe and reliable transportation',
    'Professional support workers as drivers',
    'Cost-effective NDIS-funded transport'
  ];

  const serviceAreas = [
    { area: 'Adelaide CBD', radius: '15km radius' },
    { area: 'Northern Suburbs', radius: '20km radius' },
    { area: 'Southern Suburbs', radius: '20km radius' },
    { area: 'Eastern Suburbs', radius: '25km radius' },
    { area: 'Western Suburbs', radius: '18km radius' }
  ];

  const relatedServices = [
    {
      id: 'community-participation',
      title: 'Community Participation',
      description: 'Engaging activities to build social connections and skills',
      image: 'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg',
      gradientFrom: 'from-cyan-500',
      gradientTo: 'to-blue-500'
    },
    {
      id: 'personal-care',
      title: 'Personal Care',
      description: 'Compassionate support with daily activities and personal hygiene',
      image: 'https://images.pexels.com/photos/6303591/pexels-photo-6303591.jpeg',
      gradientFrom: 'from-pink-500',
      gradientTo: 'to-rose-500'
    },
    {
      id: 'household-tasks',
      title: 'Household Tasks',
      description: 'Support with cleaning, laundry, and maintaining your home',
      image: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg',
      gradientFrom: 'from-orange-500',
      gradientTo: 'to-red-500'
    }
  ];

  const sidebarContent = (
    <div className="bg-purple-50 rounded-2xl p-6 mb-8">
      <div className="flex items-center mb-4">
        <MapPin className="h-6 w-6 text-purple-600 mr-3" />
        <h3 className="text-lg font-bold text-gray-900">Service Areas</h3>
      </div>
      <div className="space-y-4">
        {serviceAreas.map((item, index) => (
          <div key={index} className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-gray-900">{item.area}</h4>
            <p className="text-sm text-gray-600">{item.radius}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-purple-100 rounded-lg">
        <p className="text-sm text-purple-800">
          <strong>Extended Areas Available</strong><br />
          We can arrange transport to areas outside our standard zones.
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-0">
      <ServiceHero
        title="Transport Support"
        subtitle="Safe and reliable transportation to appointments, activities, and community events"
        backgroundImage="https://images.pexels.com/photos/7551516/pexels-photo-7551516.jpeg"
        gradientFrom="from-purple-600"
        gradientTo="to-indigo-600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Transport Support</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our transport support services help you maintain independence and access your community safely and reliably. Whether you need to get to medical appointments, social activities, or daily errands, our trained drivers and accessible vehicles ensure you can travel with confidence and dignity.
              </p>

              <ServiceInfoBox
                icon={Car}
                title="Our Fleet"
                backgroundColor="bg-purple-50"
                iconColor="text-purple-600"
                content={
                  <p>
                    Our modern fleet includes wheelchair accessible vehicles and standard cars, all maintained to the highest safety standards. Every vehicle is equipped with safety features and our drivers are trained in disability support and safe driving practices.
                  </p>
                }
              />

              <ServiceFeatures features={features} />

              <ServiceBenefits 
                benefits={benefits}
                backgroundColor="bg-purple-50"
                accentColor="text-purple-600"
              />

              <ServiceInfoBox
                icon={Clock}
                title="Booking & Scheduling"
                backgroundColor="bg-blue-50"
                iconColor="text-blue-600"
                content={
                  <div>
                    <p className="mb-4">
                      We offer flexible booking options to suit your needs, from regular scheduled trips to one-off journeys.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>24-hour advance booking preferred</li>
                      <li>Regular weekly/monthly schedules available</li>
                      <li>Emergency transport when possible</li>
                      <li>Online booking system coming soon</li>
                    </ul>
                  </div>
                }
              />
            </div>
          </div>

          <ServiceSidebar 
            serviceName="Transport Support"
            customContent={sidebarContent}
          />
        </div>
      </div>

      <ServiceRelated relatedServices={relatedServices} />
    </div>
  );
};

export default TransportSupport;