import React from 'react';
import { Clock, Users, Home } from 'lucide-react';
import ServiceHero from '../../components/service/ServiceHero';
import ServiceFeatures from '../../components/service/ServiceFeatures';
import ServiceBenefits from '../../components/service/ServiceBenefits';
import ServiceSidebar from '../../components/service/ServiceSidebar';
import ServiceRelated from '../../components/service/ServiceRelated';
import ServiceInfoBox from '../../components/service/ServiceInfoBox';

const RespiteCare: React.FC = () => {
  const features = [
    'Short-term care and supervision',
    'Planned and emergency respite options',
    'In-home and community-based respite',
    'Overnight and weekend care',
    'Recreational and social activities',
    'Personal care and medication support',
    'Flexible scheduling options',
    'Qualified and experienced carers'
  ];

  const benefits = [
    'Provide relief for primary caregivers',
    'Maintain routine and familiar environment',
    'Access professional care and support',
    'Enjoy social activities and outings',
    'Peace of mind for families',
    'Flexible care arrangements'
  ];

  const respiteOptions = [
    { type: 'In-Home Respite', description: 'Care provided in your own home' },
    { type: 'Community Respite', description: 'Activities and outings in the community' },
    { type: 'Overnight Care', description: 'Extended care for longer breaks' },
    { type: 'Weekend Respite', description: 'Weekend care and activities' },
    { type: 'Emergency Respite', description: 'Short-notice care when needed' },
    { type: 'Holiday Programs', description: 'Special programs during school holidays' }
  ];

  const relatedServices = [
    {
      id: 'personal-care',
      title: 'Personal Care',
      description: 'Compassionate support with daily activities and personal hygiene',
      image: 'https://images.pexels.com/photos/6303591/pexels-photo-6303591.jpeg',
      gradientFrom: 'from-pink-500',
      gradientTo: 'to-rose-500'
    },
    {
      id: 'community-participation',
      title: 'Community Participation',
      description: 'Engaging activities to build social connections and skills',
      image: 'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg',
      gradientFrom: 'from-cyan-500',
      gradientTo: 'to-blue-500'
    },
    {
      id: 'supported-independent-living',
      title: 'Supported Independent Living',
      description: 'Empowering independence with the right level of support',
      image: 'https://images.pexels.com/photos/6303686/pexels-photo-6303686.jpeg',
      gradientFrom: 'from-green-500',
      gradientTo: 'to-emerald-500'
    }
  ];

  const sidebarContent = (
    <div className="bg-blue-50 rounded-2xl p-6 mb-8">
      <div className="flex items-center mb-4">
        <Home className="h-6 w-6 text-blue-600 mr-3" />
        <h3 className="text-lg font-bold text-gray-900">Respite Options</h3>
      </div>
      <div className="space-y-4">
        {respiteOptions.map((item, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-gray-900">{item.type}</h4>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-blue-100 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Flexible Arrangements</strong><br />
          We can arrange respite care to suit your family's specific needs and schedule.
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-0">
      <ServiceHero
        title="Respite Care"
        subtitle="Short-term care services providing relief for families and primary caregivers"
        backgroundImage="https://images.pexels.com/photos/7551441/pexels-photo-7551441.jpeg"
        gradientFrom="from-blue-600"
        gradientTo="to-purple-600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Respite Care</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our respite care services provide temporary relief for primary caregivers while ensuring participants receive quality care and support. Whether you need a few hours, overnight care, or extended respite, our qualified staff provide professional, compassionate care that maintains routines and promotes wellbeing.
              </p>

              <ServiceInfoBox
                icon={Clock}
                title="Our Commitment"
                backgroundColor="bg-blue-50"
                iconColor="text-blue-600"
                content={
                  <p>
                    We understand that caring for a loved one with disability can be both rewarding and demanding. Our respite services are designed to give families the break they need while ensuring participants receive excellent care. We maintain familiar routines and provide engaging activities that promote independence and enjoyment.
                  </p>
                }
              />

              <ServiceFeatures features={features} />

              <ServiceBenefits 
                benefits={benefits}
                backgroundColor="bg-blue-50"
                accentColor="text-blue-600"
              />

              <ServiceInfoBox
                icon={Users}
                title="Family-Centered Approach"
                backgroundColor="bg-purple-50"
                iconColor="text-purple-600"
                content={
                  <div>
                    <p className="mb-4">
                      We work closely with families to understand individual needs, preferences, and routines to ensure continuity of care.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Detailed care plans and handover notes</li>
                      <li>Regular communication with families</li>
                      <li>Maintaining familiar routines and preferences</li>
                      <li>Emergency contact and response procedures</li>
                      <li>Activity reports and feedback</li>
                    </ul>
                  </div>
                }
              />
            </div>
          </div>

          <ServiceSidebar 
            serviceName="Respite Care"
            customContent={sidebarContent}
          />
        </div>
      </div>

      <ServiceRelated relatedServices={relatedServices} />
    </div>
  );
};

export default RespiteCare;