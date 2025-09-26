import React from 'react';
import { Briefcase, Target, Users } from 'lucide-react';
import ServiceHero from '../../components/service/ServiceHero';
import ServiceFeatures from '../../components/service/ServiceFeatures';
import ServiceBenefits from '../../components/service/ServiceBenefits';
import ServiceSidebar from '../../components/service/ServiceSidebar';
import ServiceRelated from '../../components/service/ServiceRelated';
import ServiceInfoBox from '../../components/service/ServiceInfoBox';

const EmploymentSupport: React.FC = () => {
  const features = [
    'Job search and application assistance',
    'Resume writing and interview preparation',
    'Workplace skills training',
    'On-the-job coaching and support',
    'Employer liaison and advocacy',
    'Career planning and development',
    'Workplace modification advice',
    'Ongoing employment maintenance'
  ];

  const benefits = [
    'Achieve your employment goals',
    'Develop workplace confidence',
    'Build professional networks',
    'Increase financial independence',
    'Gain valuable work experience',
    'Access ongoing career support'
  ];

  const supportStages = [
    { stage: 'Job Readiness', description: 'Skills assessment and development' },
    { stage: 'Job Search', description: 'Finding suitable employment opportunities' },
    { stage: 'Application Support', description: 'Resume, cover letters, interviews' },
    { stage: 'Job Coaching', description: 'On-site support in new role' },
    { stage: 'Career Development', description: 'Ongoing professional growth' }
  ];

  const relatedServices = [
    {
      id: 'life-skills-development',
      title: 'Life Skills Development',
      description: 'Building practical skills for daily living and personal development',
      image: 'https://images.pexels.com/photos/7551609/pexels-photo-7551609.jpeg',
      gradientFrom: 'from-yellow-500',
      gradientTo: 'to-orange-500'
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
      id: 'transport-support',
      title: 'Transport Support',
      description: 'Safe and reliable transportation to work and appointments',
      image: 'https://images.pexels.com/photos/7551516/pexels-photo-7551516.jpeg',
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-indigo-500'
    }
  ];

  const sidebarContent = (
    <div className="bg-teal-50 rounded-2xl p-6 mb-8">
      <div className="flex items-center mb-4">
        <Target className="h-6 w-6 text-teal-600 mr-3" />
        <h3 className="text-lg font-bold text-gray-900">Support Stages</h3>
      </div>
      <div className="space-y-4">
        {supportStages.map((item, index) => (
          <div key={index} className="border-l-4 border-teal-500 pl-4">
            <h4 className="font-semibold text-gray-900">{item.stage}</h4>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-teal-100 rounded-lg">
        <p className="text-sm text-teal-800">
          <strong>Individualized Support</strong><br />
          Every employment journey is unique - we tailor our support to your goals.
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-0">
      <ServiceHero
        title="Employment Support"
        subtitle="Job coaching, workplace training, and ongoing support to achieve your employment goals"
        backgroundImage="https://images.pexels.com/photos/7551668/pexels-photo-7551668.jpeg"
        gradientFrom="from-teal-600"
        gradientTo="to-cyan-600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Employment Support</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our employment support services help you achieve your career goals through personalized coaching, skills development, and ongoing workplace support. We work with you to identify your strengths, develop job-ready skills, and find meaningful employment that matches your interests and abilities.
              </p>

              <ServiceInfoBox
                icon={Briefcase}
                title="Our Approach"
                backgroundColor="bg-teal-50"
                iconColor="text-teal-600"
                content={
                  <p>
                    We believe that everyone has the right to meaningful employment. Our person-centered approach focuses on your individual goals, interests, and strengths. We work closely with employers to create inclusive workplaces and provide ongoing support to ensure your success in the workplace.
                  </p>
                }
              />

              <ServiceFeatures features={features} />

              <ServiceBenefits 
                benefits={benefits}
                backgroundColor="bg-teal-50"
                accentColor="text-teal-600"
              />

              <ServiceInfoBox
                icon={Users}
                title="Employer Partnerships"
                backgroundColor="bg-blue-50"
                iconColor="text-blue-600"
                content={
                  <div>
                    <p className="mb-4">
                      We work with a network of inclusive employers who value diversity and are committed to creating accessible workplaces.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Retail and hospitality opportunities</li>
                      <li>Office and administration roles</li>
                      <li>Manufacturing and warehouse positions</li>
                      <li>Community service organizations</li>
                      <li>Supported employment options</li>
                    </ul>
                  </div>
                }
              />
            </div>
          </div>

          <ServiceSidebar 
            serviceName="Employment Support"
            customContent={sidebarContent}
          />
        </div>
      </div>

      <ServiceRelated relatedServices={relatedServices} />
    </div>
  );
};

export default EmploymentSupport;