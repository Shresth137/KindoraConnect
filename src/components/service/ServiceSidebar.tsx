import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

interface ServiceSidebarProps {
  serviceName: string;
  customContent?: React.ReactNode;
}

const ServiceSidebar: React.FC<ServiceSidebarProps> = ({
  serviceName,
  customContent
}) => {
  return (
    <div className="lg:col-span-1">
      <div className="sticky top-24">
        {/* Referral Card */}
        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white mb-8">
          <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="mb-6">Make a referral today and take the first step towards accessing {serviceName.toLowerCase()} support.</p>
          <Link
            to="/referral"
            className="block w-full bg-white text-orange-600 px-6 py-3 rounded-full font-semibold text-center hover:bg-gray-50 transition-colors duration-200"
          >
            Refer Now
          </Link>
        </div>

        {/* Custom Content */}
        {customContent}

        {/* Contact Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Have Questions?</h3>
          <p className="text-gray-600 mb-6">Our team is here to help you understand how {serviceName.toLowerCase()} services can support your needs.</p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-cyan-600" />
              <span className="text-gray-700">1300 VIXA CARE</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-cyan-600" />
              <span className="text-gray-700">info@vixacare.com.au</span>
            </div>
          </div>

          <Link
            to="/contact"
            className="block w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full font-semibold text-center transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar;