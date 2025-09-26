import React from 'react';
import { Home, Clock, CheckCircle } from 'lucide-react';
import ServiceHero from '../../components/service/ServiceHero';
import ServiceFeatures from '../../components/service/ServiceFeatures';
import ServiceBenefits from '../../components/service/ServiceBenefits';
import ServiceSidebar from '../../components/service/ServiceSidebar';
import ServiceRelated from '../../components/service/ServiceRelated';
import ServiceInfoBox from '../../components/service/ServiceInfoBox';

const HouseholdTasks: React.FC = () => {
  const features = [
    'General house cleaning and tidying',
    'Laundry and ironing services',
    'Grocery shopping and meal planning',
    'Kitchen cleaning and maintenance',
    'Bathroom cleaning and sanitizing',
    'Bed making and linen changes',
    'Organizing and decluttering',
    'Light maintenance and repairs'
  ];

  const benefits = [
    'Maintain a clean and safe living environment',
    'Reduce stress and improve wellbeing',
    'More time for activities you enjoy',
    'Professional cleaning standards',
    'Flexible scheduling options',
    'Affordable NDIS-funded support'
  ];

  const cleaningSchedule = [
    { task: 'Kitchen & Dining', frequency: 'Daily', duration: '30-45 mins' },
    { task: 'Bathroom', frequency: 'Daily', duration: '20-30 mins' },
    { task: 'Living Areas', frequency: '2-3 times/week', duration: '45-60 mins' },
    { task: 'Bedrooms', frequency: 'Weekly', duration: '30-45 mins' },
    { task: 'Laundry', frequency: '2-3 times/week', duration: '60-90 mins' }
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
      id: 'meal-preparation',
      title: 'Meal Preparation',
      description: 'Nutrition support, meal planning, and cooking assistance',
      image: 'https://images.pexels.com/photos/6195643/pexels-photo-6195643.jpeg',
      gradientFrom: 'from-lime-500',
      gradientTo: 'to-green-500'
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
    <div className="bg-orange-50 rounded-2xl p-6 mb-8">
      <div className="flex items-center mb-4">
        <Clock className="h-6 w-6 text-orange-600 mr-3" />
        <h3 className="text-lg font-bold text-gray-900">Cleaning Schedule</h3>
      </div>
      <div className="space-y-4">
        {cleaningSchedule.map((item, index) => (
          <div key={index} className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-semibold text-gray-900">{item.task}</h4>
            <p className="text-sm text-gray-600">{item.frequency} • {item.duration}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-orange-100 rounded-lg">
        <p className="text-sm text-orange-800">
          <strong>Flexible Scheduling</strong><br />
          We can adjust cleaning schedules to match your preferences and needs.
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-0">
      <ServiceHero
        title="Household Tasks"
        subtitle="Professional support with cleaning, laundry, and maintaining a safe and comfortable living environment"
        backgroundImage="https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg"
        gradientFrom="from-orange-600"
        gradientTo="to-red-600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Household Tasks Support</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our household tasks support helps you maintain a clean, safe, and comfortable living environment. We understand that keeping up with household chores can be challenging, and we're here to provide the assistance you need to live independently in a space that feels like home. Our trained support workers can help with everything from daily cleaning to weekly deep cleans.
              </p>

              <ServiceInfoBox
                icon={Home}
                title="Our Approach"
                backgroundColor="bg-orange-50"
                iconColor="text-orange-600"
                content={
                  <p>
                    We believe that everyone deserves to live in a clean and comfortable environment. Our household support is tailored to your specific needs and preferences, ensuring that your home is maintained to your standards. We work with you to develop a cleaning routine that fits your lifestyle and budget, providing consistent, reliable support you can count on.
                  </p>
                }
              />

              <ServiceFeatures features={features} />

              <ServiceBenefits 
                benefits={benefits}
                backgroundColor="bg-orange-50"
                accentColor="text-orange-600"
              />

              <ServiceInfoBox
                icon={CheckCircle}
                title="Quality Standards"
                backgroundColor="bg-blue-50"
                iconColor="text-blue-600"
                content={
                  <div>
                    <p className="mb-4">
                      We maintain high standards in all our household support services, ensuring your home is not just clean, but also safe and hygienic.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Use of eco-friendly cleaning products</li>
                      <li>Infection control and hygiene protocols</li>
                      <li>Regular quality checks and reviews</li>
                      <li>Trained and experienced support workers</li>
                      <li>Flexible service delivery options</li>
                    </ul>
                  </div>
                }
              />
            </div>
          </div>

          <ServiceSidebar 
            serviceName="Household Tasks"
            customContent={sidebarContent}
          />
        </div>
      </div>

      <ServiceRelated relatedServices={relatedServices} />
    </div>
  );
};

export default HouseholdTasks;