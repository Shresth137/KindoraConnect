import React from 'react';
import { Users, Calendar } from 'lucide-react';
import ServiceHero from '../../components/service/ServiceHero';
import ServiceFeatures from '../../components/service/ServiceFeatures';
import ServiceBenefits from '../../components/service/ServiceBenefits';
import ServiceSidebar from '../../components/service/ServiceSidebar';
import ServiceRelated from '../../components/service/ServiceRelated';
import ServiceInfoBox from '../../components/service/ServiceInfoBox';

const CommunityParticipation: React.FC = () => {
  const features = [
    'Social group activities and outings',
    'Skill development workshops',
    'Recreational and leisure activities',
    'Volunteer work opportunities',
    'Educational programs and courses',
    'Cultural and arts activities',
    'Sports and fitness programs',
    'Peer support groups'
  ];

  const benefits = [
    'Build lasting friendships and connections',
    'Develop new skills and interests',
    'Increase confidence and self-esteem',
    'Access community resources and facilities',
    'Improve physical and mental wellbeing',
    'Create meaningful life experiences'
  ];

  const activities = [
    { name: 'Art & Craft Workshops', day: 'Tuesdays', time: '10:00 AM - 12:00 PM' },
    { name: 'Community Garden', day: 'Wednesdays', time: '9:00 AM - 11:00 AM' },
    { name: 'Cooking Classes', day: 'Thursdays', time: '2:00 PM - 4:00 PM' },
    { name: 'Social Outings', day: 'Fridays', time: '10:00 AM - 3:00 PM' },
    { name: 'Fitness Group', day: 'Saturdays', time: '9:00 AM - 10:30 AM' }
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
      id: 'employment-support',
      title: 'Employment Support',
      description: 'Job coaching and workplace training to achieve employment goals',
      image: 'https://images.pexels.com/photos/7551668/pexels-photo-7551668.jpeg',
      gradientFrom: 'from-teal-500',
      gradientTo: 'to-cyan-500'
    },
    {
      id: 'life-skills-development',
      title: 'Life Skills Development',
      description: 'Building practical skills for daily living and personal development',
      image: 'https://images.pexels.com/photos/7551609/pexels-photo-7551609.jpeg',
      gradientFrom: 'from-yellow-500',
      gradientTo: 'to-orange-500'
    }
  ];

  const sidebarContent = (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex items-center mb-4">
        <Calendar className="h-6 w-6 text-cyan-600 mr-3" />
        <h3 className="text-xl font-bold text-gray-900">Weekly Activities</h3>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="border-l-4 border-cyan-500 pl-4">
            <h4 className="font-semibold text-gray-900">{activity.name}</h4>
            <p className="text-sm text-gray-600">{activity.day} • {activity.time}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-cyan-50 rounded-lg">
        <p className="text-sm text-cyan-800">
          <strong>Custom Activities Available</strong><br />
          We can arrange activities based on your specific interests and goals.
        </p>
      </div>
    </div>
  );

  const howItWorksSteps = [
    {
      number: 1,
      title: 'Initial Assessment',
      description: 'We meet with you to understand your interests, goals, and support needs.'
    },
    {
      number: 2,
      title: 'Activity Planning',
      description: 'Together, we develop a personalized activity plan that matches your interests and goals.'
    },
    {
      number: 3,
      title: 'Participation & Support',
      description: 'Our support workers accompany you to activities, providing assistance as needed.'
    },
    {
      number: 4,
      title: 'Review & Growth',
      description: 'We regularly review your progress and explore new opportunities for growth and participation.'
    }
  ];

  return (
    <div className="min-h-screen pt-0">
      <ServiceHero
        title="Community Participation"
        subtitle="Engaging activities to build social connections, develop skills, and participate meaningfully in community life"
        backgroundImage="https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg"
        gradientFrom="from-cyan-600"
        gradientTo="to-blue-600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Community Participation</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Community participation services help individuals build social connections, develop new skills, and engage meaningfully with their local community. Our programs are designed to promote inclusion, independence, and personal growth while having fun and making lasting friendships. We believe that everyone deserves to be an active and valued member of their community.
              </p>

              <ServiceInfoBox
                icon={Users}
                title="Our Philosophy"
                backgroundColor="bg-cyan-50"
                iconColor="text-cyan-600"
                content={
                  <p>
                    We believe that community participation is about more than just activities – it's about belonging, contributing, and growing as an individual. Our approach focuses on your interests, goals, and aspirations, ensuring that every activity is meaningful and enjoyable. We support you to try new things, build confidence, and develop skills that will benefit you in all areas of life.
                  </p>
                }
              />

              <ServiceFeatures features={features} />

              <ServiceBenefits benefits={benefits} />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
              <div className="space-y-6 mb-8">
                {howItWorksSteps.map((step) => (
                  <div key={step.number} className="flex items-start space-x-4">
                    <div className="bg-cyan-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-cyan-600 font-bold">{step.number}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ServiceSidebar 
            serviceName="Community Participation"
            customContent={sidebarContent}
          />
        </div>
      </div>

      <ServiceRelated relatedServices={relatedServices} />
    </div>
  );
};

export default CommunityParticipation;