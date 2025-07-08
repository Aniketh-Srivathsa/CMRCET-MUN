// src/pages/About.jsx
import React from 'react';

function About() {
  return (
    <main className="pt-20 px-4 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About CMRCET MUN
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering young minds to become global leaders through diplomacy and debate
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto mt-8"></div>
        </section>

        {/* What is MUN Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">
                What is Model United Nations?
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Model United Nations is an academic simulation of the United Nations where students 
                play the role of delegates from different countries and attempt to solve real-world 
                issues with the policies and perspectives of their assigned country.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Through MUN, participants develop crucial skills including public speaking, debating, 
                writing, critical thinking, teamwork, and leadership - all while learning about 
                current world issues and international relations.
              </p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl shadow-2xl shadow-black/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-800 rounded-full -mr-16 -mt-16 opacity-50"></div>
              <h3 className="text-2xl font-semibold mb-6 relative z-10">Skills You'll Develop</h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start group">
                  <span className="text-green-500 mr-3 text-xl transition-transform group-hover:scale-110">✓</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors">Public Speaking & Communication</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-green-500 mr-3 text-xl transition-transform group-hover:scale-110">✓</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors">Research & Critical Analysis</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-green-500 mr-3 text-xl transition-transform group-hover:scale-110">✓</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors">Negotiation & Diplomacy</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-green-500 mr-3 text-xl transition-transform group-hover:scale-110">✓</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors">Leadership & Teamwork</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-green-500 mr-3 text-xl transition-transform group-hover:scale-110">✓</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors">Global Awareness</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-10 rounded-2xl relative overflow-hidden group hover:shadow-2xl hover:shadow-black/50 transition-shadow duration-300">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full"></div>
              <h3 className="text-3xl font-bold mb-6 relative z-10">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed relative z-10">
                To provide a platform for young leaders to engage in meaningful dialogue about 
                global issues, fostering diplomatic skills and international understanding while 
                building lasting connections with peers from diverse backgrounds.
              </p>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-10 rounded-2xl relative overflow-hidden group hover:shadow-2xl hover:shadow-black/50 transition-shadow duration-300">
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/5 rounded-full"></div>
              <h3 className="text-3xl font-bold mb-6 relative z-10">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed relative z-10">
                To inspire and empower the next generation of global citizens who will lead 
                with empathy, think critically about world affairs, and work collaboratively 
                to create positive change in their communities and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Organizing Team */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16">Meet the Secretariat</h2>
          
          {/* Secretary General */}
          <div className="flex justify-center mb-16">
            <div className="text-center group">
              <div className="relative inline-block">
                <img 
                  src="/images/secretary-general.jpg" 
                  alt="Secretary General"
                  className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-zinc-700 group-hover:border-zinc-600 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-semibold mb-1">Secretary General</h3>
              <p className="text-gray-400 text-lg">Akhil Chidugu</p>
            </div>
          </div>
          
          {/* Other Members */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl">
              <div className="text-center group">
                <div className="relative inline-block">
                  <img 
                    src="/images/director-general.jpg" 
                    alt="Director General"
                    className="w-36 h-36 rounded-full mx-auto mb-5 object-cover border-3 border-zinc-700 group-hover:border-zinc-600 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold mb-1">Director General</h3>
                <p className="text-gray-400">Jane Smith</p>
              </div>
              <div className="text-center group">
                <div className="relative inline-block">
                  <img 
                    src="/images/deputy-secretary-general.jpg" 
                    alt="Deputy Secretary General"
                    className="w-36 h-36 rounded-full mx-auto mb-5 object-cover border-3 border-zinc-700 group-hover:border-zinc-600 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold mb-1">Deputy Secretary General</h3>
                <p className="text-gray-400">V Aniketh Srivathsa</p>
              </div>
              <div className="text-center group">
                <div className="relative inline-block">
                  <img 
                    src="/images/oc-head.jpg" 
                    alt="OC Head"
                    className="w-36 h-36 rounded-full mx-auto mb-5 object-cover border-3 border-zinc-700 group-hover:border-zinc-600 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold mb-1">OC Head</h3>
                <p className="text-gray-400">Sarah Williams</p>
              </div>
            </div>
          </div>
        </section>

        {/* Secretariat Council Image */}
        <section className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-transparent"></div>
          <div className="relative bg-zinc-900/80 py-16 rounded-3xl">
            <div className="flex justify-center">
              <div className="max-w-6xl w-full px-6">
                <h3 className="text-2xl font-semibold text-center mb-8 text-gray-300">The Complete Secretariat Council</h3>
                <img 
                  src="/images/Secretariat-council.jpg" 
                  alt="Secretariat Council Members" 
                  className="w-full h-auto rounded-2xl shadow-2xl shadow-black/50"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;