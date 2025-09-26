import React from 'react';
import { Check } from 'lucide-react';

interface ServiceBenefitsProps {
  title?: string;
  benefits: string[];
  accentColor?: string;
  backgroundColor?: string;
}

const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({
  title = "Key Benefits",
  benefits,
  accentColor = "text-cyan-600",
  backgroundColor = "bg-cyan-50"
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
      <div className="grid grid-cols-1 gap-4">
        {benefits.map((benefit, index) => (
          <div key={index} className={`flex items-start space-x-3 p-4 ${backgroundColor} rounded-lg`}>
            <Check className={`h-5 w-5 ${accentColor} mt-1 flex-shrink-0`} />
            <span className="text-gray-700 font-medium">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBenefits;