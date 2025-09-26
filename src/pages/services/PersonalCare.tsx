import React from 'react';
import { Heart, Shield, Clock } from 'lucide-react';
import ServiceHero from '../../components/service/ServiceHero';
import ServiceFeatures from '../../components/service/ServiceFeatures';
import ServiceBenefits from '../../components/service/ServiceBenefits';
import ServiceSidebar from '../../components/service/ServiceSidebar';
import ServiceRelated from '../../components/service/ServiceRelated';
import ServiceInfoBox from '../../components/service/ServiceInfoBox';

const PersonalCare: React.FC = () => {
  const features = [
    'Assistance with showering and bathing',
    'Help with dressing and grooming',
    'Medication reminders and support',
    'Personal hygiene assistance',
    'Mobility and transfer support',
    'Continence management',
    'Skin care and wound management',
    'Support with eating and drinking'
  ];

  const benefits = [
    'Maintain independence and dignity',
    'Professional, trained support workers',
    'Flexible scheduling to suit your needs',
    'Person-centred approach to care',
    'Support with NDIS plan management',
    'Regular progress reviews and updates'
  ];

  const qualifications = [
    'Certificate III in Individual Support',
    'First Aid and CPR certified',
    'Medication administration training',
    'Manual handling certification',
    'NDIS Worker Screening Check',
    'Ongoing professional development'
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
      id: 'supported-independent-living',
      title: 'Supported Independent Living',
      description: 'Empowering independence with the right level of support',
      image: 'https://images.pexels.com/photos/6303686/pexels-photo-6303686.jpeg',
      gradientFrom: 'from-green-500',
      gradientTo: 'to-emerald-500'
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
    <div className="bg-pink-50 rounded-2xl p-6 mb-8">
      <div className="flex items-center mb-4">
        <Clock className="h-6 w-6 text-pink-600 mr-3" />
        <h3 className="text-lg font-bold text-gray-900">Service Hours</h3>
      </div>
      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Monday - Friday:</span>
          <span>6:00 AM - 10:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span>Saturday:</span>
          <span>7:00 AM - 8:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span>Sunday:</span>
          <span>8:00 AM - 6:00 PM</span>
        </div>
        <div className="mt-4 p-3 bg-pink-100 rounded-lg">
          <p className="text-xs text-pink-800">
            <strong>24/7 Emergency Support Available</strong><br />
            For urgent care needs outside regular hours
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-0">
      <ServiceHero
        title="Personal Care"
        subtitle="Compassionate support with daily activities while maintaining dignity and independence"
        backgroundImage="https://images.pexels.com/photos/6303591/pexels-photo-6303591.jpeg"
        gradientFrom="from-pink-600"
        gradientTo="to-rose-600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Personal Care Services</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our personal care services are designed to support individuals with their daily activities while maintaining dignity, choice, and independence. Our qualified support workers provide compassionate assistance tailored to each person's unique needs and preferences. We understand that personal care is intimate and personal, which is why we focus on building trust and rapport with each participant.
              </p>

              <ServiceInfoBox
                icon={Heart}
                title="Our Approach"
                backgroundColor="bg-pink-50"
                iconColor="text-pink-600"
                content={
                  <p>
                    We believe that personal care should be delivered with respect, dignity, and compassion. Our person-centred approach ensures that you remain in control of your care, making choices about how, when, and where you receive support. We work closely with you to develop a care plan that reflects your preferences, cultural needs, and personal goals.
                  </p>
                }
              />

              <ServiceFeatures features={features} />

              <ServiceBenefits 
                benefits={benefits}
                backgroundColor="bg-pink-50"
                accentColor="text-pink-600"
              />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Qualified Team</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                All our personal care support workers are highly trained and qualified professionals who are passionate about making a positive difference in people's lives.
              </p>
              <ServiceFeatures 
                features={qualifications}
                accentColor="text-blue-500"
              />
            </div>
          </div>

          <ServiceSidebar 
            serviceName="Personal Care"
            customContent={sidebarContent}
          />
        </div>
      </div>

      <ServiceRelated relatedServices={relatedServices} />
    </div>
  );
};

export default PersonalCare;