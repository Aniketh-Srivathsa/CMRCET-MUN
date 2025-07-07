// src/pages/Schedule.jsx
import React, { useState } from 'react';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleDayChange = (day) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveDay(day);
      setIsTransitioning(false);
    }, 300);
  };

  const scheduleData = {
    1: {
      date: 'March 15, 2024',
      dayTitle: 'Day 1 - Opening Ceremony & Committee Sessions',
      events: [
        {
          time: '8:00 AM - 9:00 AM',
          title: 'Registration & Welcome Coffee',
          location: 'Main Lobby',
          description: 'Check-in, receive delegate kits, and network with fellow delegates'
        },
        {
          time: '9:00 AM - 10:30 AM',
          title: 'Opening Ceremony',
          location: 'Grand Auditorium',
          description: 'Welcome addresses, keynote speakers, and official opening of the conference'
        },
        {
          time: '10:30 AM - 11:00 AM',
          title: 'Tea Break',
          location: 'Delegates Lounge',
          description: 'Refreshments and informal discussions'
        },
        {
          time: '11:00 AM - 1:00 PM',
          title: 'Committee Session I',
          location: 'Various Committee Rooms',
          description: 'Roll call, setting agenda, and opening speeches'
        },
        {
          time: '1:00 PM - 2:00 PM',
          title: 'Lunch Break',
          location: 'Dining Hall',
          description: 'Buffet lunch for all delegates'
        },
        {
          time: '2:00 PM - 4:00 PM',
          title: 'Committee Session II',
          location: 'Various Committee Rooms',
          description: 'General speakers list and moderated caucus'
        },
        {
          time: '4:00 PM - 4:30 PM',
          title: 'High Tea',
          location: 'Delegates Lounge',
          description: 'Refreshments and networking'
        },
        {
          time: '4:30 PM - 6:00 PM',
          title: 'Committee Session III',
          location: 'Various Committee Rooms',
          description: 'Unmoderated caucus and working paper drafting'
        }
      ]
    },
    2: {
      date: 'March 16, 2024',
      dayTitle: 'Day 2 - Intensive Debates & Social Night',
      events: [
        {
          time: '9:00 AM - 11:00 AM',
          title: 'Committee Session IV',
          location: 'Various Committee Rooms',
          description: 'Presentation of working papers and formal debate'
        },
        {
          time: '11:00 AM - 11:30 AM',
          title: 'Tea Break',
          location: 'Delegates Lounge',
          description: 'Refreshments and informal discussions'
        },
        {
          time: '11:30 AM - 1:30 PM',
          title: 'Committee Session V',
          location: 'Various Committee Rooms',
          description: 'Draft resolution writing and amendments'
        },
        {
          time: '1:30 PM - 2:30 PM',
          title: 'Lunch Break',
          location: 'Dining Hall',
          description: 'Buffet lunch for all delegates'
        },
        {
          time: '2:30 PM - 4:30 PM',
          title: 'Committee Session VI',
          location: 'Various Committee Rooms',
          description: 'Resolution debate and voting procedure'
        },
        {
          time: '4:30 PM - 5:00 PM',
          title: 'High Tea',
          location: 'Delegates Lounge',
          description: 'Refreshments and networking'
        },
        {
          time: '7:00 PM - 10:00 PM',
          title: 'Social Night',
          location: 'Grand Ballroom',
          description: 'Cultural performances, DJ night, and social activities'
        }
      ]
    },
    3: {
      date: 'March 17, 2024',
      dayTitle: 'Day 3 - Crisis & Closing Ceremony',
      events: [
        {
          time: '9:00 AM - 11:00 AM',
          title: 'Crisis Committee Session',
          location: 'Various Committee Rooms',
          description: 'Crisis simulation and emergency response'
        },
        {
          time: '11:00 AM - 11:30 AM',
          title: 'Tea Break',
          location: 'Delegates Lounge',
          description: 'Refreshments and preparation for closing'
        },
        {
          time: '11:30 AM - 1:00 PM',
          title: 'Final Committee Session',
          location: 'Various Committee Rooms',
          description: 'Final voting and committee wrap-up'
        },
        {
          time: '1:00 PM - 2:00 PM',
          title: 'Lunch Break',
          location: 'Dining Hall',
          description: 'Farewell lunch'
        },
        {
          time: '2:30 PM - 4:30 PM',
          title: 'Closing Ceremony',
          location: 'Grand Auditorium',
          description: 'Award distribution, closing speeches, and vote of thanks'
        },
        {
          time: '4:30 PM - 5:00 PM',
          title: 'Farewell & Photo Session',
          location: 'Main Lobby',
          description: 'Group photos and goodbyes'
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Conference Schedule
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Three days of diplomatic discourse, cultural exchange, and global leadership
          </p>
        </div>

        {/* Additional Information - MOVED TO TOP */}
        <div className="mb-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 border border-purple-800/30">
            <h3 className="text-xl font-semibold text-white mb-2">Dress Code</h3>
            <p className="text-gray-300">
              Western Business Formals for all sessions. Traditional attire encouraged for Social Night.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-lg p-6 text-center hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 border border-cyan-800/30">
            <h3 className="text-xl font-semibold text-white mb-2">Important Note</h3>
            <p className="text-gray-300">
              All delegates must carry their ID cards and delegate kits at all times.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-sm rounded-lg p-6 text-center hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 border border-pink-800/30">
            <h3 className="text-xl font-semibold text-white mb-2">Contact</h3>
            <p className="text-gray-300">
              For schedule queries, contact the organizing committee at schedule@mun.org
            </p>
          </div>
        </div>

        {/* Enhanced Day Selector */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            {/* Background indicator */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-full blur-xl"></div>
            <div className="absolute inset-0 bg-gray-900/50 rounded-full backdrop-blur-sm"></div>
            
            {/* Progress bar */}
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-full transition-all duration-500"
              style={{ width: `${(activeDay / 3) * 100}%` }}
            ></div>
            
            {/* Buttons container */}
            <div className="relative flex items-center p-1">
              {[1, 2, 3].map((day, index) => (
                <div key={day} className="flex items-center">
                  <button
                    onClick={() => handleDayChange(day)}
                    className={`relative px-6 py-3 font-semibold transition-all duration-500 rounded-full
                      ${activeDay === day 
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/50 scale-105' 
                        : 'bg-transparent text-gray-400 hover:text-white'
                      }`}
                  >
                    <span className="relative z-10">Day {day}</span>
                    {activeDay === day && (
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full animate-pulse"></div>
                    )}
                  </button>
                  
                  {/* Connector line */}
                  {index < 2 && (
                    <div className={`w-12 h-0.5 transition-all duration-500 ${
                      day < activeDay ? 'bg-gradient-to-r from-purple-600 to-cyan-600' : 'bg-gray-700'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule Content with Animation */}
        <div className="max-w-4xl mx-auto">
          <div className={`bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl transition-all duration-300 transform border border-gray-800
            ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            
            {/* Day Header with Badge */}
            <div className="mb-8 relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
                <span className="text-2xl font-bold text-white">{activeDay}</span>
              </div>
              
              <div className="pl-16">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {scheduleData[activeDay].dayTitle}
                </h2>
                <div className="flex items-center text-gray-300">
                  <span className="mr-2">📅</span>
                  <span>{scheduleData[activeDay].date}</span>
                </div>
              </div>
            </div>

            {/* Timeline with reduced spacing */}
            <div className="space-y-3">
              {scheduleData[activeDay].events.map((event, index) => (
                <div
                  key={`${activeDay}-${index}`}
                  className="relative pl-8 pb-3 border-l-2 border-purple-700/30 last:border-0 last:pb-0
                    animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Animated Timeline Dot */}
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full
                    animate-ping"></div>
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full shadow-lg shadow-purple-500/50"></div>
                  
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 hover:bg-gray-700/50 transition-all duration-300
                    hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02] transform border border-gray-700/50">
                    <div className="flex flex-wrap items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white mb-1 sm:mb-0">
                        {event.title}
                      </h3>
                      <div className="flex items-center text-cyan-400 text-sm">
                        <span className="mr-1">🕐</span>
                        <span>{event.time}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-purple-300 mb-2 text-sm">
                                            <span className="mr-1">📍</span>
                      <span>{event.location}</span>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8">
            <button
              onClick={() => activeDay > 1 && handleDayChange(activeDay - 1)}
              disabled={activeDay === 1}
              className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300
                ${activeDay === 1 
                  ? 'text-gray-600 cursor-not-allowed' 
                  : 'text-purple-400 hover:text-white hover:bg-purple-900/30'
                }`}
            >
              <span className="mr-2">←</span>
              Previous Day
            </button>
            
            <div className="flex space-x-2">
              {[1, 2, 3].map((day) => (
                <button
                  key={day}
                  onClick={() => handleDayChange(day)}
                  className={`w-2 h-2 rounded-full transition-all duration-300
                    ${activeDay === day 
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 w-8' 
                      : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => activeDay < 3 && handleDayChange(activeDay + 1)}
              disabled={activeDay === 3}
              className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300
                ${activeDay === 3 
                  ? 'text-gray-600 cursor-not-allowed' 
                  : 'text-cyan-400 hover:text-white hover:bg-cyan-900/30'
                }`}
            >
              Next Day
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Schedule;