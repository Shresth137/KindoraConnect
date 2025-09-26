import React from 'react';
import { Link } from 'react-router-dom';
import {Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { companyInfo } from '../config';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4 bg-white/100 p-2 rounded-lg h-auto w-fit">
              <img src={companyInfo.logo} alt={companyInfo.name} className="h-[10rem] w-auto sm:h-auto sm:w-auto" />
              {/* <span className="text-2xl font-bold">Kindora connect</span> */}
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering lives and supporting independence through personalised disability support services across Adelaide & South Australia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-cyan-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-cyan-500 transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-500 transition-colors">About Us</Link></li>
              <li><Link to="/referral" className="text-gray-300 hover:text-cyan-500 transition-colors">Make a Referral</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-cyan-500" />
                <span className="text-gray-300">1300 VIXA CARE</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-cyan-500" />
                <span className="text-gray-300">info@vixacare.com.au</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-cyan-500 mt-1" />
                <span className="text-gray-300">Adelaide, South Australia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 Vixa Care. All rights reserved. NDIS Registered Provider.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;