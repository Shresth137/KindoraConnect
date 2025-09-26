import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import TopContactBar from "./TopContactBar";
import { companyInfo } from '../config';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const navbarRef = useRef(null);
  var mobile = "tel:+61123456789";

  // Handle scroll events and update navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 200) {
        setIsScrolled(true); 
      } else {
        setIsScrolled(false); 
      }

      // Auto-close mobile menu when scrolling
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setIsMobileServicesDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  // Handle clicks outside navbar to auto-close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsMobileServicesDropdownOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  // Services data for dropdown
  const services = [
    { id: 'personal-care', name: 'Personal Care', path: '/services/personal-care' },
    { id: 'community-participation', name: 'Community Participation', path: '/services/community-participation' },
    { id: 'supported-independent-living', name: 'Supported Independent Living', path: '/services/supported-independent-living' },
    { id: 'household-tasks', name: 'Household Tasks', path: '/services/household-tasks' },
    { id: 'transport-support', name: 'Transport Support', path: '/services/transport-support' },
    { id: 'employment-support', name: 'Employment Support', path: '/services/employment-support' },
    { id: 'life-skills-development', name: 'Life Skills Development', path: '/services/life-skills-development' },
    { id: 'meal-preparation', name: 'Meal Preparation', path: '/services/meal-preparation' },
    { id: 'respite-care', name: 'Respite Care', path: '/services/respite-care' }
  ];

  // Generate navbar classes based on scroll state
  const getNavbarClasses = () => {
    let classes = `
      fixed top-10 left-4 right-4 z-50
      transition-all duration-500 ease-in-out
      rounded-2xl md:rounded-full
      border border-white/20
      py-0 px-0 md:px-8
    `;
    if (!isScrolled) {
      classes += ' bg-white/60 backdrop-blur-sm shadow-lg';
    } else {
      classes += ' bg-white/0 backdrop-blur-md shadow-xl border-white/50';
    }
    return classes;
  };
  
  // Generate text classes with transitions
  const getTextClasses = () => {
    return 'transition-colors duration-300 text-text-primary';
  };

  // Close all mobile menus when navigation link is clicked
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMobileServicesDropdownOpen(false);
  };

  // Toggle mobile services dropdown
  const toggleMobileServicesDropdown = (e) => {
    e.preventDefault();
    setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen);
  };

  return (
    <>
      <TopContactBar/>
      <nav ref={navbarRef} className={getNavbarClasses()}>
        <div className="max-w-7xl mx-auto px-0 relative">
          <div className="flex justify-between items-center py-2 pt-0 pb-0">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group h-full pl-4 md:pl-0" onClick={handleNavClick}>
              <img 
                src={companyInfo.logo} 
                alt={companyInfo.name}
                className="h-14 md:h-16 w-auto max-w-none transform group-hover:scale-105 transition-transform duration-200" 
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`${getTextClasses()} hover:text-primary-dark transition-all duration-200 font-medium relative group ${
                    location.pathname === item.path ? 'text-primary-main font-semibold' : ''
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-main transition-all duration-300 group-hover:w-full ${
                    location.pathname === item.path ? 'w-full' : ''
                  }`} />
                </Link>
              ))}

              {/* Desktop Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <Link
                  to="/services"
                  className={`${getTextClasses()} hover:text-secondary-dark transition-all duration-200 font-medium relative group flex items-center space-x-1 ${
                    location.pathname === '/services' || location.pathname.startsWith('/services/') ? 'text-secondary-main font-semibold' : ''
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} 
                  />
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary-main transition-all duration-300 group-hover:w-full ${
                    location.pathname === '/services' || location.pathname.startsWith('/services/') ? 'w-full' : ''
                  }`} />
                </Link>

                {/* Desktop Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-md shadow-xl rounded-2xl border border-white/20 transition-all duration-300 ${
                  isServicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  <div className="p-4">
                    <div className="mb-3">
                      <Link
                        to="/services"
                        onClick={handleNavClick}
                        className="block text-secondary-main hover:text-secondary-dark font-semibold text-lg transition-colors duration-200 border-b border-gray-200 pb-2"
                      >
                        All Services
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          to={service.path}
                          onClick={handleNavClick}
                          className="block px-3 py-2 text-text-secondary hover:text-primary-main hover:bg-accent-rose-light/10 rounded-lg transition-all duration-200 text-sm font-medium"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Link - After Services */}
              <Link
                to="/contact"
                onClick={handleNavClick}
                className={`${getTextClasses()} hover:text-accent-teal-dark transition-all duration-200 font-medium relative group ${
                  location.pathname === '/contact' ? 'text-accent-teal-main font-semibold' : ''
                }`}
              >
                Contact
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-teal-main transition-all duration-300 group-hover:w-full ${
                  location.pathname === '/contact' ? 'w-full' : ''
                }`} />
              </Link>

              {/* Desktop CTA Button */}
              <Link
                to="/referral"
                onClick={handleNavClick}
                className="bg-primary-main hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2 group"
              >
                Make a Referral
              </Link>
              <Link
                to={mobile}
                onClick={handleNavClick}
                className="border-2 border-secondary-main hover:bg-secondary-main hover:text-white hover:border-secondary-dark text-secondary-main px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 transform hover:-translate-y-0.5"
              >
                Call Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden ${getTextClasses()} p-2 rounded-lg hover:bg-gray-100/50 transition-all duration-200 hover:scale-110`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} size={24} />
                <X className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} size={24} />
              </div>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-xl mt-2 mb-4 border border-white/20">
              <div className="px-6 pt-1 pb-6 space-y-4">
                {/* Mobile Navigation Links */}
                {navItems.map((item, index) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={handleNavClick}
                    className={`block text-text-primary hover:text-primary-main transition-all duration-200 font-medium p-2 rounded-lg hover:bg-accent-rose-light/10 transform hover:translate-x-2 ${
                      location.pathname === item.path ? 'text-primary-main' : ''
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Services Section */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="relative">
                    {/* Mobile Services Dropdown Button */}
                    <button
                      onClick={toggleMobileServicesDropdown}
                      className="flex items-center justify-between w-full text-secondary-main hover:text-secondary-dark font-semibold text-lg transition-colors duration-200 p-2 rounded-lg hover:bg-secondary-light/10"
                    >
                      <span>Services</span>
                      <ChevronDown 
                        size={20} 
                        className={`transition-transform duration-200 ${isMobileServicesDropdownOpen ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    
                    {/* Mobile Services Dropdown Content */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      isMobileServicesDropdownOpen ? 'max-h-80 opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="ml-4 space-y-1 bg-background-secondary rounded-lg p-2">
                        <Link
                          to="/services"
                          onClick={handleNavClick}
                          className="block text-secondary-main hover:text-secondary-dark font-medium transition-colors duration-200 p-2 rounded-lg hover:bg-secondary-light/20 border-b border-gray-200 mb-2 pb-2"
                        >
                          All Services
                        </Link>
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            to={service.path}
                            onClick={handleNavClick}
                            className="block text-text-secondary hover:text-primary-main transition-all duration-200 text-sm font-medium p-2 rounded-lg hover:bg-accent-rose-light/10"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Contact Link - After Services */}
                <Link
                  to="/contact"
                  onClick={handleNavClick}
                  className={`block text-text-primary hover:text-accent-teal-main transition-all duration-200 font-medium p-2 rounded-lg hover:bg-accent-teal-light/10 transform hover:translate-x-2 ${
                    location.pathname === '/contact' ? 'text-accent-teal-main' : ''
                  }`}
                >
                  Contact
                </Link>
              
                {/* Mobile CTA Buttons */}
                <Link
                  to="/referral"
                  onClick={handleNavClick}
                  className="block w-full bg-primary-main hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold text-center transition-all duration-200 hover:shadow-lg transform hover:scale-105 mt-6"
                >
                  Make a Referral
                </Link>
                <Link
                  to={mobile}
                  onClick={handleNavClick}
                  className="block w-full border-2 border-secondary-main hover:text-white hover:bg-secondary-main hover:border-secondary-dark text-secondary-main px-6 py-3 rounded-full font-semibold text-center transition-all duration-200 hover:shadow-lg hover:scale-105 mt-6"
                >
                  Call Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;