// src/pages/Home.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('get-started-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      {/* Hero Section - Full viewport height with background image */}
      <section 
        className="min-h-screen flex items-center justify-center px-4 relative bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/Screenshot 2024-01-05 144616.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#000000',
          paddingTop: '80px', // Account for navbar height
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

      {/* Get Started Section */}
      <section id="get-started-section" className="px-4 py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Get Started
          </h2>
          
          {/* Responsive Grid with Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Link to="/about" className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition-all duration-300 transform hover:scale-105 block">
              <h3 className="text-xl font-semibold mb-3 text-white">About MUN</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Learn about our Model United Nations conference and its objectives.
              </p>
            </Link>
            
            <Link to="/committees" className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition-all duration-300 transform hover:scale-105 block">
              <h3 className="text-xl font-semibold mb-3 text-white">Committees</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Explore the various committees and their agendas.
              </p>
            </Link>
            
            <Link to="/register" className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition-all duration-300 transform hover:scale-105 block">
              <h3 className="text-xl font-semibold mb-3 text-white">Register</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Sign up to participate in CMRCET MUN.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 p-8 md:p-12 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Ready to Join?
            </h2>
            <p className="text-gray-300 mb-6 text-sm md:text-base">
              Don't miss out on this incredible opportunity to enhance your diplomatic skills.
            </p>
            <button 
              onClick={() => navigate('/register')}
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
            >
              Register Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;