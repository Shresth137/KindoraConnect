import React from 'react';
import { Shield, Home, Heart } from 'lucide-react';
import ServiceHero from '../../components/service/ServiceHero';
import ServiceFeatures from '../../components/service/ServiceFeatures';
import ServiceBenefits from '../../components/service/ServiceBenefits';
import ServiceSidebar from '../../components/service/ServiceSidebar';
import ServiceRelated from '../../components/service/ServiceRelated';
import ServiceInfoBox from '../../components/service/ServiceInfoBox';

const SupportedIndependentLiving: React.FC = () => {
  const features = [
    '24/7 on-site support when needed',
    'Assistance with daily living skills',
    'Support with household management',
    'Help with budgeting and finances',
    'Medication management and health support',
    'Emergency response and safety',
    'Social and recreational activities',
    'Connection to community services'
  ];

  const benefits = [
    'Live independently in your own home',
    'Develop essential life skills',
    'Access support when you need it',
    'Maintain relationships and connections',
    'Have choice and control over your life',
    'Build confidence and independence'
  ];

  const supportAreas = [
    { title: 'Daily Living Skills', description: 'Personal care, meal preparation, household tasks' },
    { title: 'Health & Wellbeing', description: 'Medication support, health appointments, exercise' },
    { title: 'Social Connections', description: 'Community activities, maintaining relationships' },
    { title: 'Life Skills', description: 'Budgeting, shopping, using public transport' },
    { title: 'Safety & Security', description: '24/7 emergency response, risk management' },
    { title: 'Goal Achievement', description: 'Working towards personal goals and aspirations' }
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
      id: 'household-tasks',
      title: 'Household Tasks',
      description: 'Support with cleaning, laundry, and maintaining your home',
      image: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg',
      gradientFrom: 'from-orange-500',
      gradientTo: 'to-red-500'
    }
  ];

  const sidebarContent = (
    <div className="bg-green-50 rounded-2xl p-6 mb-8">
      <div className="flex items-center mb-4">
        <Home className="h-6 w-6 text-green-600 mr-3" />
        <h3 className="text-lg font-bold text-gray-900">Support Areas</h3>
      </div>
      <div className="space-y-4">
        {supportAreas.map((area, index) => (
          <div key={index} className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-gray-900">{area.title}</h4>
            <p className="text-sm text-gray-600">{area.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-green-100 rounded-lg">
        <p className="text-sm text-green-800">
          <strong>Flexible Support Levels</strong><br />
          Support can be adjusted based on your changing needs and goals.
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-0">
      <ServiceHero
        title="Supported Independent Living"
        subtitle="Empowering independence with 24/7 support to help you live confidently in your own home"
        backgroundImage="https://images.pexels.com/photos/6303686/pexels-photo-6303686.jpeg"
        gradientFrom="from-green-600"
        gradientTo="to-emerald-600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Supported Independent Living</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Supported Independent Living (SIL) services provide 24/7 support to help participants live independently in their own homes. Our approach focuses on building life skills, promoting choice and control, and creating a safe and supportive living environment. We believe that everyone deserves the opportunity to live independently with the right level of support tailored to their individual needs.
              </p>

              <ServiceInfoBox
                icon={Shield}
                title="Our Commitment"
                backgroundColor="bg-green-50"
                iconColor="text-green-600"
                content={
                  <p>
                    We are committed to supporting you to live the life you choose. Our experienced support workers work alongside you to develop the skills and confidence needed for independent living, while ensuring you have access to assistance whenever you need it. Your home, your choices, your independence – we're here to support your journey.
                  </p>
                }
              />

              <ServiceFeatures features={features} />

              <ServiceBenefits 
                benefits={benefits}
                backgroundColor="bg-green-50"
                accentColor="text-green-600"
              />

              <ServiceInfoBox
                icon={Heart}
                title="Person-Centred Approach"
                backgroundColor="bg-blue-50"
                iconColor="text-blue-600"
                content={
                  <div>
                    <p className="mb-4">
                      Every person is unique, and so is their support plan. We work with you to understand your goals, preferences, and aspirations, then develop a support plan that reflects your individual needs.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Flexible support hours based on your needs</li>
                      <li>Choice and control over your daily routine</li>
                      <li>Regular reviews and plan adjustments</li>
                      <li>Cultural and personal preferences respected</li>
                    </ul>
                  </div>
                }
              />
            </div>
          </div>

          <ServiceSidebar 
            serviceName="Supported Independent Living"
            customContent={sidebarContent}
          />
        </div>
      </div>

      <ServiceRelated relatedServices={relatedServices} />
    </div>
  );
};

export default SupportedIndependentLiving;