// src/pages/Register.jsx
import React from 'react';
import { Users, User, ExternalLink, ArrowUpRight, HelpCircle, Mail, Phone, Clock } from 'lucide-react';

const Register = () => {
  const registrationTypes = [
    {
      id: 'individual',
      title: 'External Delegate',
      description: 'Register as an individual participant from outside institutions',
      icon: User,
      link: 'https://docs.google.com/forms/d/1Q8meH13DhGdDfHQcdxMZktZXK32HLAUveeqjOL9gZlc/edit',
      accent: 'blue',
      isExternal: true
    },
    {
      id: 'delegation',
      title: 'CMRGI Delegation',
      description: 'Exclusive registration for CMRGI students',
      icon: Users,
      link: 'https://docs.google.com/forms/d/1jSkF9ikIqlysqOrtpvptfLzl-fEnwSV16_7v_stJEzg/edit',
      accent: 'purple',
      isExternal: true
    },
  ];

  const handleRegistrationClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with subtle pattern */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-black" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)`
        }} />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-thin tracking-tight mb-4">
            Registration
          </h1>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mb-6" />
          <p className="text-lg text-gray-400 font-light">
            Select your registration type to begin your journey
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        {/* Important Information Section */}
        <div className="mb-16 bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
          <h3 className="text-lg font-light text-gray-300 mb-6 flex items-center">
            <span className="w-12 h-px bg-gray-700 mr-4" />
            Important Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {[
              'All registrations are processed through Google Forms',
              'You will receive a confirmation email within 48 hours',
              'Committee allotments are done on a first-come, first-served basis',
              'Accommodation details will be shared separately for External delegates'
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 text-gray-400">
                <span className="w-1 h-1 bg-gray-600 rounded-full mt-2 flex-shrink-0" />
                <span className="font-light text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {registrationTypes.map((type) => (
            <div
              key={type.id}
              onClick={() => handleRegistrationClick(type.link)}
              className="group relative cursor-pointer transform transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 lg:p-10 border border-gray-800 hover:border-gray-700 overflow-hidden">
                {/* Subtle gradient overlay on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${
                  type.accent === 'blue' ? 'from-blue-500/5 to-transparent' : 'from-purple-500/5 to-transparent'
                }`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <type.icon className="w-12 h-12 text-gray-600 group-hover:text-gray-400 transition-colors duration-300" />
                    <ArrowUpRight className="w-5 h-5 text-gray-700 group-hover:text-gray-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  
                  <h2 className="text-2xl font-light mb-3 group-hover:text-white transition-colors">
                    {type.title}
                  </h2>
                  <p className="text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed mb-6">
                    {type.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-500 transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span>Google Forms</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-lg font-light text-gray-400 inline-flex items-center">
              <span className="w-12 h-px bg-gray-800 mr-4" />
              Need Help?
              <span className="w-12 h-px bg-gray-800 ml-4" />
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a href="mailto:registration@yourmun.com" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group">
              <Mail className="w-4 h-4 text-gray-600 group-hover:text-gray-400" />
              <span className="font-light">registration@yourmun.com</span>
            </a>
            <div className="flex items-center space-x-3 text-gray-400">
              <Phone className="w-4 h-4 text-gray-600" />
              <span className="font-light">+91 XXXXXXXXXX</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <Clock className="w-4 h-4 text-gray-600" />
              <span className="font-light">10:00 AM - 6:00 PM (Mon-Fri)</span>
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="pb-12 flex justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Register;