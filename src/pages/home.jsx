// src/pages/Home.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Users, UserPlus } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('get-started-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const getStartedCards = [
    {
      title: 'About MUN',
      description: 'Learn about our Model United Nations conference and its objectives.',
      path: '/about',
      icon: BookOpen,
      accent: 'blue'
    },
    {
      title: 'Committees',
      description: 'Explore the various committees and their agendas.',
      path: '/committees',
      icon: Users,
      accent: 'purple'
    },
    {
      title: 'Register',
      description: 'Sign up to participate in CMRCET MUN.',
      path: '/register',
      icon: UserPlus,
      accent: 'green'
    }
  ];

  return (
    <main>
      {/* Hero Section - Full viewport height with background image */}
      <section 
        className="min-h-screen flex items-center justify-center px-4 relative bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2)), url('/images/bg1.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#000000',
          paddingTop: '55px', // Account for navbar height
        }}
      >
        <div className="text-center relative z-10 mt-[-80px]"> {/* Compensate for padding */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Welcome to <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">CMRCET MUN</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for an enriching Model United Nations experience
          </p>
        </div>
        
        {/* Scroll Indicator - Now Interactive */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-[70px] left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-white transition-colors duration-300"
          aria-label="Scroll to next section"
        >
          <svg 
            className="w-6 h-6 text-gray-400 hover:text-white"
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </section>

      {/* Get Started Section - Redesigned */}
      <section id="get-started-section" className="px-4 py-20 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-thin tracking-tight mb-4 text-white">
              Get Started
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mb-6" />
            <p className="text-lg text-gray-400 font-light">
              Explore what CMRCET MUN has to offer
            </p>
          </div>
          
          {/* Redesigned Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {getStartedCards.map((card, index) => (
              <Link
                key={card.path}
                to={card.path}
                className="group relative cursor-pointer transform transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 overflow-hidden">
                  {/* Subtle gradient overlay on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${
                    card.accent === 'blue' ? 'from-blue-500/5 to-transparent' : 
                    card.accent === 'purple' ? 'from-purple-500/5 to-transparent' : 
                    'from-green-500/5 to-transparent'
                  }`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <card.icon className="w-10 h-10 text-gray-600 group-hover:text-gray-400 transition-colors duration-300" />
                      <ArrowUpRight className="w-5 h-5 text-gray-700 group-hover:text-gray-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    
                    <h3 className="text-xl font-light mb-3 text-white group-hover:text-white transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="px-4 py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative overflow-hidden rounded-2xl">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950" />
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.05) 0%, transparent 50%),
                               radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)`
            }} />
            
            <div className="relative z-10 p-12 md:p-16">
              <h2 className="text-3xl md:text-5xl font-thin mb-6 text-white">
                Ready to Join?
              </h2>
              <p className="text-gray-400 mb-8 text-base md:text-lg font-light max-w-2xl mx-auto">
                Don't miss out on this incredible opportunity to enhance your diplomatic skills.
              </p>
              <button 
                onClick={() => navigate('/register')}
                className="group relative inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-medium transition-all duration-300 hover:bg-gray-100 transform hover:scale-105"
              >
                <span>Register Now</span>
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;