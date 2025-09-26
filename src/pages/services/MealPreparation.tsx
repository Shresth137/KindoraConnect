import React from 'react';
import { Utensils, Heart, ChefHat } from 'lucide-react';
import ServiceHero from '../../components/service/ServiceHero';
import ServiceFeatures from '../../components/service/ServiceFeatures';
import ServiceBenefits from '../../components/service/ServiceBenefits';
import ServiceSidebar from '../../components/service/ServiceSidebar';
import ServiceRelated from '../../components/service/ServiceRelated';
import ServiceInfoBox from '../../components/service/ServiceInfoBox';

const MealPreparation: React.FC = () => {
  const features = [
    'Meal planning and grocery shopping',
    'Cooking instruction and assistance',
    'Nutritional guidance and education',
    'Special dietary requirement support',
    'Kitchen safety and hygiene training',
    'Food storage and preservation',
    'Budget-friendly meal planning',
    'Cultural and personal food preferences'
  ];

  const benefits = [
    'Maintain a healthy and balanced diet',
    'Develop cooking confidence and skills',
    'Save money with smart meal planning',
    'Enjoy meals that suit your preferences',
    'Learn kitchen safety and hygiene',
    'Increase independence in food preparation'
  ];

  const mealTypes = [
    { type: 'Breakfast', description: 'Nutritious starts to your day' },
    { type: 'Lunch', description: 'Balanced midday meals' },
    { type: 'Dinner', description: 'Satisfying evening meals' },
    { type: 'Snacks', description: 'Healthy options between meals' },
    { type: 'Special Diets', description: 'Diabetic, gluten-free, vegetarian options' },
    { type: 'Cultural Foods', description: 'Traditional and cultural preferences' }
  ];

  const relatedServices = [
    {
      id: 'household-tasks',
      title: 'Household Tasks',
      description: 'Support with cleaning, laundry, and maintaining your home',
      image: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg',
      gradientFrom: 'from-orange-500',
      gradientTo: 'to-red-500'
    },
    {
      id: 'life-skills-development',
      title: 'Life Skills Development',
      description: 'Building practical skills for daily living and personal development',
      image: 'https://images.pexels.com/photos/7551609/pexels-photo-7551609.jpeg',
      gradientFrom: 'from-yellow-500',
      gradientTo: 'to-orange-500'
    },
    {
      id: 'personal-care',
      title: 'Personal Care',
      description: 'Compassionate support with daily activities and personal hygiene',
      image: 'https://images.pexels.com/photos/6303591/pexels-photo-6303591.jpeg',
      gradientFrom: 'from-pink-500',
      gradientTo: 'to-rose-500'
    }
  ];

  const sidebarContent = (
    <div className="bg-lime-50 rounded-2xl p-6 mb-8">
      <div className="flex items-center mb-4">
        <ChefHat className="h-6 w-6 text-lime-600 mr-3" />
        <h3 className="text-lg font-bold text-gray-900">Meal Types</h3>
      </div>
      <div className="space-y-4">
        {mealTypes.map((item, index) => (
          <div key={index} className="border-l-4 border-lime-500 pl-4">
            <h4 className="font-semibold text-gray-900">{item.type}</h4>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-lime-100 rounded-lg">
        <p className="text-sm text-lime-800">
          <strong>Dietary Requirements</strong><br />
          We accommodate all dietary needs and cultural food preferences.
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-0">
      <ServiceHero
        title="Meal Preparation"
        subtitle="Nutrition support, meal planning, cooking assistance, and dietary requirement management"
        backgroundImage="https://images.pexels.com/photos/6195643/pexels-photo-6195643.jpeg"
        gradientFrom="from-lime-600"
        gradientTo="to-green-600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Meal Preparation Support</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our meal preparation services help you maintain a healthy, balanced diet while developing cooking skills and confidence in the kitchen. We provide personalized support with meal planning, grocery shopping, cooking instruction, and nutrition education, all tailored to your dietary needs, preferences, and cultural background.
              </p>

              <ServiceInfoBox
                icon={Utensils}
                title="Our Philosophy"
                backgroundColor="bg-lime-50"
                iconColor="text-lime-600"
                content={
                  <p>
                    We believe that good nutrition is fundamental to health and wellbeing. Our approach focuses on teaching you the skills to prepare nutritious, delicious meals that you enjoy, while respecting your cultural preferences and dietary requirements. We make cooking fun, safe, and accessible for everyone.
                  </p>
                }
              />

              <ServiceFeatures features={features} />

              <ServiceBenefits 
                benefits={benefits}
                backgroundColor="bg-lime-50"
                accentColor="text-lime-600"
              />

              <ServiceInfoBox
                icon={Heart}
                title="Nutrition & Health"
                backgroundColor="bg-blue-50"
                iconColor="text-blue-600"
                content={
                  <div>
                    <p className="mb-4">
                      Our qualified staff can help you understand nutrition and make healthy food choices that support your overall wellbeing.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Understanding nutritional labels and ingredients</li>
                      <li>Managing diabetes, heart conditions, and other health needs</li>
                      <li>Weight management and healthy eating habits</li>
                      <li>Food safety and proper storage techniques</li>
                      <li>Budget-friendly healthy meal options</li>
                    </ul>
                  </div>
                }
              />
            </div>
          </div>

          <ServiceSidebar 
            serviceName="Meal Preparation"
            customContent={sidebarContent}
          />
        </div>
      </div>

      <ServiceRelated relatedServices={relatedServices} />
    </div>
  );
};

export default MealPreparation;