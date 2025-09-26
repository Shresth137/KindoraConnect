import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['1300 VIXA CARE', '(1300 849 222)'],
      action: 'tel:1300849222'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@vixacare.com.au', 'referrals@vixacare.com.au'],
      action: 'mailto:info@vixacare.com.au'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Level 2, 123 King William Street', 'Adelaide SA 5000'],
      action: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM', 'Sun: Closed'],
      action: null
    }
  ];

  const subjectOptions = [
    'General Inquiry',
    'Service Information',
    'Make a Referral',
    'Employment Opportunities',
    'Partnership Inquiry',
    'Feedback or Complaint',
    'Other'
  ];

  return (
    <div className="min-h-screen pt-0">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-600 to-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            We're here to help and answer any questions you may have. Get in touch with us today.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-cyan-100 rounded-lg p-3 flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">
                            {info.action && idx === 0 ? (
                              <a href={info.action} className="hover:text-cyan-600 transition-colors duration-200">
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 p-6 bg-orange-50 rounded-2xl border border-orange-200">
                <h3 className="text-lg font-semibold text-orange-900 mb-2">24/7 Emergency Support</h3>
                <p className="text-orange-800 mb-3">For urgent support needs outside business hours:</p>
                <a 
                  href="tel:1800123456" 
                  className="text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-200"
                >
                  1800 123 456
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {!isSubmitted ? (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200"
                          placeholder="(04) 1234 5678"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200"
                        >
                          <option value="">Select a subject</option>
                          {subjectOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide details about your inquiry or how we can help you..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200 resize-none"
                      />
                    </div>
                    
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg flex items-center justify-center space-x-2"
                      >
                        <Send size={20} />
                        <span>Send Message</span>
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h2>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Thank you for contacting us. We'll get back to you within 24 hours during business days.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center space-x-2 text-cyan-600">
                      <Phone size={16} />
                      <span>Need immediate assistance? Call 1300 VIXA CARE</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-cyan-600">
                      <Mail size={16} />
                      <span>info@vixacare.com.au</span>
                    </div>
                  </div>
                  <button
                    onClick={resetForm}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Adelaide's CBD, we're easily accessible by public transport and car.
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
                      <p className="font-semibold text-gray-900">Vixa Care</p>
                      <p className="text-gray-600">Level 2, 123 King William Street</p>
                      <p className="text-gray-600">Adelaide SA 5000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-cyan-600" />
                    <span className="text-gray-700">1300 VIXA CARE (1300 849 222)</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-cyan-600" />
                    <span className="text-gray-700">info@vixacare.com.au</span>
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
              
              <div className="h-96 lg:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.3623!2d138.5999!3d-34.92573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ced9b6b4e3b7%3A0x5033654628ec640!2sKing%20William%20St%2C%20Adelaide%20SA!5e0!3m2!1sen!2sau!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vixa Care Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;