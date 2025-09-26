import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { companyInfo } from '../config';

interface FindUsProps {
  showMap?: boolean;
  showForm?: boolean;
  showQuickActions?: boolean;
}

const FindUs: React.FC<FindUsProps> = ({ showMap = false, showForm = true, showQuickActions = true }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      return; // Basic validation
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  // Get icons dynamically from Lucide
  const icons = {
    Phone, Mail, MapPin, Clock, Send, CheckCircle
  };

  const contactInfo = [
    {
      icon: icons[companyInfo.contact.phone.iconName as keyof typeof icons],
      title: 'Phone',
      details: [companyInfo.contact.phone.display, `(${companyInfo.contact.phone.number})`],
      action: companyInfo.contact.phone.action
    },
    {
      icon: Mail,
      title: 'Email',
      details: [companyInfo.contact.email.primary, companyInfo.contact.email.referrals],
      action: companyInfo.contact.email.action
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        companyInfo.contact.address.street,
        `${companyInfo.contact.address.city} ${companyInfo.contact.address.state} ${companyInfo.contact.address.postcode}`
      ],
      action: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        `Mon - Fri: ${companyInfo.contact.hours.weekday}`,
        `Sat: ${companyInfo.contact.hours.saturday}`,
        `Sun: ${companyInfo.contact.hours.sunday}`
      ],
      action: null
    }
  ];

  // Helper function to find contact info by title
  const getContactInfo = (title: string) => {
    return contactInfo.find(info => info.title === title);
  };

  const phoneInfo = getContactInfo('Phone');
  const emailInfo = getContactInfo('Email');
  const addressInfo = getContactInfo('Address');

  // Add error handling for contact info
  if (!phoneInfo || !emailInfo || !addressInfo) {
    return <div className="min-h-screen pt-0 flex items-center justify-center">
      <p>Loading contact information...</p>
    </div>;
  }

  // Add error handling for map
  const handleMapError = (e: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
    console.error('Map failed to load:', e);
  };

  return (
    <div className="min-h-screen pt-0">
      {/* Quick Actions */}
      {showQuickActions && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Need Help Right Away?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Make a Referral</h3>
                <p className="mb-6">Ready to access our services? Complete our simple referral form.</p>
                <a
                  href="/referral"
                  className="inline-block bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-200"
                >
                  Start Referral
                </a>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-500 to-sky-500 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Call Us Now</h3>
                <p className="mb-6">Speak directly with our friendly team for immediate assistance.</p>
                {phoneInfo && phoneInfo.action && (
                  <a href={phoneInfo.action}
                    className="inline-block bg-white text-cyan-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-200"
                  >
                    {phoneInfo.details[0]}
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Map Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{showMap ? 'Find Us' : 'Contact Us'}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {showMap 
                ? "Located in the heart of Adelaide's CBD, we're easily accessible by public transport and car."
                : "Get in touch with us today and let us know how we can help you."
              }
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Office Location</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-cyan-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Kindora Connect</p>
                      {addressInfo && addressInfo.details.map((detail, index) => (
                        <p key={index} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-cyan-600" />
                    {phoneInfo && (
                      <span className="text-gray-700">
                        {phoneInfo.details.join(' ')}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-cyan-600" />
                    {emailInfo && (
                      <span className="text-gray-700">{emailInfo.details[0]}</span>
                    )}
                  </div>
                </div>

                <div className="p-4 bg-cyan-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Parking & Transport</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Street parking available (2-hour limit)</li>
                    <li>• Wilson Parking - Currie Street (5 min walk)</li>
                    <li>• Adelaide Metro - King William Street stops</li>
                    <li>• Wheelchair accessible building</li>
                  </ul>
                </div>
              </div>
              
              <div className="h-full lg:h-auto">
                {showMap && (
                  <div className="h-96">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.3623!2d138.5999!3d-34.92573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ced9b6b4e3b7%3A0x5033654628ec640!2sKing%20William%20St%2C%20Adelaide%20SA!5e0!3m2!1sen!2sau!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Vixa Care Office Location"
                      onError={handleMapError}
                    />
                  </div>
                )}
                {showForm && (
                  <div className="p-8 bg-gradient-to-br from-white to-cyan-50 h-full rounded-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
                    <p className="text-gray-600 mb-6">We'll get back to you as soon as possible.</p>
                    
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                            required
                            placeholder="Enter your full name"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                            required
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                          placeholder="Enter your phone number (optional)"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-white/50 backdrop-blur-sm resize-none"
                          required
                          placeholder="How can we help you?"
                        />
                      </div>

                      <div>
                        {isSubmitted ? (
                          <div className="flex items-center justify-center space-x-2 bg-green-100 text-green-700 p-4 rounded-lg">
                            <CheckCircle className="h-5 w-5" />
                            <span>Thank you! Your message has been sent successfully.</span>
                          </div>
                        ) : (
                          <button
                            type="button"
                            disabled={isSubmitting}
                            onClick={handleSubmit}
                            className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-sky-700 transition-all duration-200 ${
                              isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                            }`}
                          >
                            {isSubmitting ? (
                              <>
                                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>Sending...</span>
                              </>
                            ) : (
                              <>
                                <Send className="h-5 w-5" />
                                <span>Send Message</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FindUs;