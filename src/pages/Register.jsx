// src/pages/Register.jsx
import React from 'react';
import { Users, User, Camera, ExternalLink } from 'lucide-react';

const Register = () => {
  const registrationTypes = [
    {
      id: 'individual',
      title: 'External Delegate',
      description: 'Register as an individual participant from outside institutions',
      icon: User,
      link: 'https://docs.google.com/forms/d/1Q8meH13DhGdDfHQcdxMZktZXK32HLAUveeqjOL9gZlc/edit',
      color: 'from-blue-600 to-blue-800',
      isExternal: true
    },
    {
      id: 'delegation',
      title: 'CMRGI Delegation',
      description: 'Exclusive registration for CMRGI students',
      icon: Users,
      link: 'https://docs.google.com/forms/d/1jSkF9ikIqlysqOrtpvptfLzl-fEnwSV16_7v_stJEzg/edit',
      color: 'from-purple-600 to-purple-800',
      isExternal: true
    },
  ];

  const handleRegistrationClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Registration</h1>
          <p className="text-xl text-gray-300">Choose your registration type to get started</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {registrationTypes.map((type) => (
            <div
              key={type.id}
              onClick={() => handleRegistrationClick(type.link)}
              className="group relative overflow-hidden rounded-lg border border-gray-800 hover:border-gray-600 transition-all duration-300 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <div className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <type.icon className="w-16 h-16 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                
                <h2 className="text-2xl font-bold mb-3">{type.title}</h2>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors mb-4">
                  {type.description}
                </p>
                
                <div className="mt-6 flex items-center justify-center space-x-2">
                  <span className="inline-flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300">
                    Register via Google Forms
                  </span>
                  <ExternalLink className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-6">
          {/* Registration Fee Section */}
          

          {/* Important Information */}
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Important Information</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• All registrations are processed through Google Forms</li>
              <li>• You will receive a confirmation email within 48 hours</li>
              <li>• Committee allotments are done on a first-come, first-served basis</li>
              <li>• Accommodation details will be shared separately for External delegates</li>
            </ul>
          </div>

          {/* Contact for Queries */}
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
            <p className="text-gray-300 mb-4">
              For any registration related queries, please contact:
            </p>
            <div className="space-y-2 text-gray-300">
              <p>📧 Email: registration@yourmun.com</p>
              <p>📱 Phone: +91 XXXXXXXXXX</p>
              <p>⏰ Support Hours: 10:00 AM - 6:00 PM (Mon-Fri)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;