// src/pages/Committees.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Committees() {
  const committees = [
    {
      name: "United Nations Security Council",
      shortName: "UNSC",
      agenda: "Addressing the Crisis in the Middle East",
      level: "Advanced",
      size: "15 Delegates",
      description: "The UN's most powerful body, responsible for maintaining international peace and security through diplomatic means and enforcement actions.",
      color: "from-red-900 to-red-800"
    },
    {
      name: "Disarmament and International Security Committee",
      shortName: "DISEC",
      agenda: "Regulating Autonomous Weapons Systems and AI in Warfare",
      level: "Beginner-Intermediate",
      size: "50 Delegates",
      description: "The First Committee of the UN General Assembly dealing with disarmament, global challenges and threats to peace that affect the international community.",
      color: "from-blue-900 to-blue-800"
    },
    {
      name: "United Nations Human Rights Council",
      shortName: "UNHRC",
      agenda: "Protection of Digital Privacy Rights in the Age of Surveillance",
      level: "Intermediate",
      size: "47 Delegates",
      description: "An inter-governmental body responsible for promoting and protecting human rights around the world, addressing violations and making recommendations.",
      color: "from-purple-900 to-purple-800"
    },
    {
      name: "All India Political Parties Meet",
      shortName: "AIPPM",
      agenda: "Uniform Civil Code: Balancing Unity and Diversity in India",
      level: "Intermediate-Advanced",
      size: "40 Delegates",
      description: "A simulation of Indian parliamentary proceedings where delegates represent various political parties to debate and discuss national issues.",
      color: "from-orange-900 to-orange-800"
    },
    {
      name: "International Press",
      shortName: "IP",
      agenda: "Covering Global Diplomatic Events and Creating Conference Chronicles",
      level: "All Levels",
      size: "20 Journalists",
      description: "Report on committee proceedings, conduct interviews, write articles, and create the official conference newsletter while experiencing journalism in action.",
      color: "from-green-900 to-green-800"
    }
  ];

  return (
    <main className="pt-20 px-4 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Committees</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your battlefield of diplomacy. Each committee offers unique challenges and opportunities to showcase your diplomatic prowess.
          </p>
        </section>

        {/* Committee Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-zinc-900 p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-blue-500">{committees.length}</h3>
            <p className="text-sm text-gray-400">Committees</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-green-500">172+</h3>
            <p className="text-sm text-gray-400">Total Delegates</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-orange-500">3</h3>
            <p className="text-sm text-gray-400">Days of Debate</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-red-500">1</h3>
            <p className="text-sm text-gray-400">Unforgettable Experience</p>
          </div>
        </div>

        {/* Committees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {committees.map((committee, index) => (
            <div 
              key={index} 
              className="bg-zinc-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className={`bg-gradient-to-r ${committee.color} p-6 relative overflow-hidden`}>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">{committee.shortName}</h3>
                  <p className="text-sm opacity-90">{committee.name}</p>
                </div>
                {/* Decorative element */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2 text-gray-200">Agenda</h4>
                  <p className="text-gray-400">{committee.agenda}</p>
                </div>
                <div className="mb-6">
                  <p className="text-gray-500 text-sm">{committee.description}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {committee.level}
                    </span>
                    <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {committee.size}
                    </span>
                  </div>
                  <Link 
                    to={`/committees/${committee.shortName.toLowerCase()}`}
                    className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group-hover:translate-x-1 transition-transform"
                  >
                    Learn More 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <section className="mt-16 bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">How to Choose Your Committee?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Consider Your Experience</h3>
              <p className="text-gray-400 text-sm">
                Choose committees that match your MUN experience level for the best learning opportunity.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Research the Agenda</h3>
              <p className="text-gray-400 text-sm">
                Pick topics you're passionate about - your interest will fuel better performance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Challenge Yourself</h3>
              <p className="text-gray-400 text-sm">
                Don't be afraid to step out of your comfort zone - growth happens at the edge.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Committees;