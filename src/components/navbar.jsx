// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Committees', path: '/committees' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Register', path: '/register', isButton: true },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md py-3.5 shadow-lg' 
          : 'bg-black/25 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo with animation */}
          <Link 
            to="/" 
            className="group flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
          >
            {/* Logo Image */}
            <img 
              src="/images/logo1.png"  // 
              alt="CMRCET MUN Logo" 
              className="h-19 w-16 mr-4 rounded-full" 
            />
            
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              CMRCET
            </span>
            <span className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
              MUN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              link.isButton ? (
                <Link
                  key={link.path}
                  to={link.path}
                  className="ml-4 px-6 py-3 text-lg bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onMouseEnter={() => setActiveHover(index)}
                  onMouseLeave={() => setActiveHover(null)}
                  className={`relative px-4 py-3 text-lg font-medium transition-all duration-300 ${
                    location.pathname === link.path 
                      ? 'text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  
                  {/* Animated underline */}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 transform origin-left transition-transform duration-300 ${
                      location.pathname === link.path 
                        ? 'scale-x-100' 
                        : activeHover === index 
                          ? 'scale-x-100' 
                          : 'scale-x-0'
                    }`}
                  />
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button with animation */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center group"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span 
                className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span 
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? 'opacity-0 scale-0' : ''
                }`}
              />
              <span 
                className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation with smooth animation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 transform ${
                  location.pathname === link.path 
                    ? 'bg-white/10 text-white translate-x-2' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5 hover:translate-x-2'
                } ${link.isButton ? 'mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center font-semibold' : ''}`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? 'slideIn 0.3s ease-out forwards' : ''
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Add custom animation keyframes */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;