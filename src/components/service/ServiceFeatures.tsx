import React from 'react';
import { Check } from 'lucide-react';

interface ServiceFeaturesProps {
  title?: string;
  features: string[];
  accentColor?: string;
}

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({
  title = "What We Offer",
  features,
  accentColor = "text-green-500"
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Check className={`h-5 w-5 ${accentColor} mt-1 flex-shrink-0`} />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFeatures;