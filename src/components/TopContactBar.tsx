import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const TopContactBar: React.FC = () => {
  return (
    <div className="hidden md:flex fixed top-0 left-0 w-full z-[1000] bg-cyan/90 backdrop-blur-md shadow-sm h-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-full text-gray-800">
        <div className="flex gap-6 text-sm md:text-base">
          <a href="tel:+61123456789" className="flex items-center gap-1 hover:text-cyan-600">
            <Phone size={16} /> +61 123 456 789
          </a>
          <a href="mailto:info@example.com" className="flex items-center gap-1 hover:text-cyan-600">
            <Mail size={16} /> info@example.com
          </a>
          <a href="https://maps.google.com/?q=Adelaide+SA+Australia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-600">
            <MapPin size={16} /> Adelaide, SA
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopContactBar;