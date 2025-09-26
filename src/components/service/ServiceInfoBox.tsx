import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceInfoBoxProps {
  icon: LucideIcon;
  title: string;
  content: React.ReactNode;
  backgroundColor?: string;
  iconColor?: string;
}

const ServiceInfoBox: React.FC<ServiceInfoBoxProps> = ({
  icon: Icon,
  title,
  content,
  backgroundColor = "bg-cyan-50",
  iconColor = "text-cyan-600"
}) => {
  return (
    <div className={`${backgroundColor} rounded-2xl p-8 mb-8`}>
      <div className="flex items-center mb-4">
        <Icon className={`h-8 w-8 ${iconColor} mr-3`} />
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      <div className="text-gray-700 leading-relaxed">
        {content}
      </div>
    </div>
  );
};

export default ServiceInfoBox;