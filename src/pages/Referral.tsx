import React, { useState } from 'react';
import { CheckCircle, FileText, User, Phone, Mail, MapPin } from 'lucide-react';

const Referral: React.FC = () => {
  const [formData, setFormData] = useState({
    participantName: '',
    ndisNumber: '',
    dateOfBirth: '',
    phone: '',
    email: '',
    address: '',
    emergencyContact: '',
    emergencyPhone: '',
    services: [] as string[],
    currentSupports: '',
    goals: '',
    additionalNotes: '',
    referrerName: '',
    referrerOrganisation: '',
    referrerPhone: '',
    referrerEmail: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    'Personal Care',
    'Community Participation',
    'Supported Independent Living',
    'Household Tasks',
    'Transport Support',
    'Employment Support',
    'Life Skills Development',
    'Meal Preparation',
    'Respite Care'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        services: [...formData.services, service]
      });
    } else {
      setFormData({
        ...formData,
        services: formData.services.filter(s => s !== service)
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Referral submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Referral Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your referral. Our team will review the information and contact you within 24-48 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-cyan-600">
                <Phone size={16} />
                <span>1300 VIXA CARE</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-cyan-600">
                <Mail size={16} />
                <span>info@vixacare.com.au</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-0 bg-gray-50">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-cyan-600 to-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <FileText className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Referral</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Complete this form to refer someone for our disability support services. All information is confidential and secure.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
            {/* Participant Information */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <User className="h-6 w-6 text-cyan-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Participant Information</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Participant Name *
                  </label>
                  <input
                    type="text"
                    name="participantName"
                    required
                    value={formData.participantName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    NDIS Number *
                  </label>
                  <input
                    type="text"
                    name="ndisNumber"
                    required
                    value={formData.ndisNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    required
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Emergency Contact Name *
                  </label>
                  <input
                    type="text"
                    name="emergencyContact"
                    required
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Emergency Contact Phone *
                  </label>
                  <input
                    type="tel"
                    name="emergencyPhone"
                    required
                    value={formData.emergencyPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />
              </div>
            </div>

            {/* Services Requested */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Services Requested</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {serviceOptions.map((service) => (
                  <label key={service} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      onChange={(e) => handleServiceChange(service, e.target.checked)}
                      className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                    />
                    <span className="text-sm font-medium text-gray-700">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Supports
                  </label>
                  <textarea
                    name="currentSupports"
                    rows={3}
                    value={formData.currentSupports}
                    onChange={handleInputChange}
                    placeholder="Describe any current support services the participant receives"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Goals and Outcomes
                  </label>
                  <textarea
                    name="goals"
                    rows={3}
                    value={formData.goals}
                    onChange={handleInputChange}
                    placeholder="What would the participant like to achieve with our support?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    rows={3}
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    placeholder="Any additional information that would help us provide the best support"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>
              </div>
            </div>

            {/* Referrer Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Referrer Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Referrer Name *
                  </label>
                  <input
                    type="text"
                    name="referrerName"
                    required
                    value={formData.referrerName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Organisation
                  </label>
                  <input
                    type="text"
                    name="referrerOrganisation"
                    value={formData.referrerOrganisation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="referrerPhone"
                    required
                    value={formData.referrerPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="referrerEmail"
                    required
                    value={formData.referrerEmail}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-lg"
              >
                Submit Referral
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Referral;