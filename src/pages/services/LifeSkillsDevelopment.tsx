import React from 'react';
import { Brain, BookOpen, Star } from 'lucide-react';
import ServiceHero from '../../components/service/ServiceHero';
import ServiceFeatures from '../../components/service/ServiceFeatures';
import ServiceBenefits from '../../components/service/ServiceBenefits';
import ServiceSidebar from '../../components/service/ServiceSidebar';
import ServiceRelated from '../../components/service/ServiceRelated';
import ServiceInfoBox from '../../components/service/ServiceInfoBox';

const LifeSkillsDevelopment: React.FC = () => {
  const features = [
    'Communication and social skills training',
    'Money management and budgeting',
    'Cooking and meal preparation',
    'Personal hygiene and self-care',
    'Time management and organization',
    'Problem-solving and decision making',
    'Technology and digital literacy',
    'Independent living preparation'
  ];

  const benefits = [
    'Increase independence and confidence',
    'Develop practical daily living skills',
    'Improve communication abilities',
    'Build problem-solving capabilities',
    'Enhance social interactions',
    'Prepare for greater independence'
  ];

  const skillAreas = [
    { area: 'Communication', description: 'Verbal, non-verbal, and social communication' },
    { area: 'Daily Living', description: 'Personal care, cooking, cleaning, organization' },
    { area: 'Financial', description: 'Budgeting, banking, shopping, money management' },
    { area: 'Social', description: 'Relationship building, community interaction' },
    { area: 'Technology', description: 'Digital devices, internet safety, apps' },
    { area: 'Independence', description: 'Decision making, problem solving, self-advocacy' }
  ];

  const relatedServices = [
    {
      id: 'employment-support',
      title: 'Employment Support',
      description: 'Job coaching and workplace training to achieve employment goals',
      image: 'https://images.pexels.com/photos/7551668/pexels-photo-7551668.jpeg',
      gradientFrom: 'from-teal-500',
      gradientTo: 'to-cyan-500'
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
    <div className="bg-yellow-50 rounded-2xl p-6 mb-8">
      <div className="flex items-center mb-4">
        <BookOpen className="h-6 w-6 text-yellow-600 mr-3" />
        <h3 className="text-lg font-bold text-gray-900">Skill Areas</h3>
      </div>
      <div className="space-y-4">
        {skillAreas.map((item, index) => (
          <div key={index} className="border-l-4 border-yellow-500 pl-4">
            <h4 className="font-semibold text-gray-900">{item.area}</h4>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Personalized Learning</strong><br />
          Skills training is tailored to your individual goals and learning style.
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-0">
      <ServiceHero
        title="Life Skills Development"
        subtitle="Building practical skills for daily living, communication, and personal development"
        backgroundImage="https://images.pexels.com/photos/7551609/pexels-photo-7551609.jpeg"
        gradientFrom="from-yellow-600"
        gradientTo="to-orange-600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Life Skills Development</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our life skills development programs help you build the practical skills needed for daily living, communication, and personal growth. Through personalized training and support, we help you develop confidence and independence in all areas of life, from basic daily tasks to complex problem-solving skills.
              </p>

              <ServiceInfoBox
                icon={Brain}
                title="Our Method"
                backgroundColor="bg-yellow-50"
                iconColor="text-yellow-600"
                content={
                  <p>
                    We use evidence-based teaching methods and hands-on learning approaches to help you develop skills at your own pace. Our experienced trainers work with you to identify your learning style and create a personalized program that builds on your strengths and addresses your specific goals.
                  </p>
                }
              />

              <ServiceFeatures features={features} />

              <ServiceBenefits 
                benefits={benefits}
                backgroundColor="bg-yellow-50"
                accentColor="text-yellow-600"
              />

              <ServiceInfoBox
                icon={Star}
                title="Skill Building Process"
                backgroundColor="bg-blue-50"
                iconColor="text-blue-600"
                content={
                  <div>
                    <p className="mb-4">
                      Our structured approach ensures you develop skills progressively and confidently.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Initial skills assessment and goal setting</li>
                      <li>Personalized learning plan development</li>
                      <li>Hands-on practice with support</li>
                      <li>Regular progress reviews and adjustments</li>
                      <li>Celebration of achievements and milestones</li>
                    </ul>
                  </div>
                }
              />
            </div>
          </div>

          <ServiceSidebar 
            serviceName="Life Skills Development"
            customContent={sidebarContent}
          />
        </div>
      </div>

      <ServiceRelated relatedServices={relatedServices} />
    </div>
  );
};

export default LifeSkillsDevelopment;