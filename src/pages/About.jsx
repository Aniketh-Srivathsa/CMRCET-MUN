// src/pages/About.jsx
import React from 'react';

function About() {
  return (
    <main className="pt-20 px-4 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About CMRCET MUN</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering young minds to become global leaders through diplomacy and debate
          </p>
        </section>

        {/* What is MUN Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">What is Model United Nations?</h2>
              <p className="text-gray-300 mb-4">
                Model United Nations is an academic simulation of the United Nations where students 
                play the role of delegates from different countries and attempt to solve real-world 
                issues with the policies and perspectives of their assigned country.
              </p>
              <p className="text-gray-300">
                Through MUN, participants develop crucial skills including public speaking, debating, 
                writing, critical thinking, teamwork, and leadership - all while learning about 
                current world issues and international relations.
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Skills You'll Develop</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-300">Public Speaking & Communication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-300">Research & Critical Analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-300">Negotiation & Diplomacy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-300">Leadership & Teamwork</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-300">Global Awareness</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To provide a platform for young leaders to engage in meaningful dialogue about 
                global issues, fostering diplomatic skills and international understanding while 
                building lasting connections with peers from diverse backgrounds.
              </p>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To inspire and empower the next generation of global citizens who will lead 
                with empathy, think critically about world affairs, and work collaboratively 
                to create positive change in their communities and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Organizing Team */}
        <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet the Secretariat</h2>
            <div className="flex justify-center mb-12">
            <div className="text-center">
            <div className="w-32 h-32 bg-zinc-800 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">Secretary General</h3>
            <p className="text-gray-400">Name</p>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <div className="text-center">
                <div className="w-32 h-32 bg-zinc-800 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">Director General</h3>
                <p className="text-gray-400">Name</p>
            </div>
            <div className="text-center">
                <div className="w-32 h-32 bg-zinc-800 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">Deputy Secretary General</h3>
                <p className="text-gray-400">Name</p>
            </div>
            <div className="text-center">
                <div className="w-32 h-32 bg-zinc-800 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">OC Head</h3>
                <p className="text-gray-400">Name</p>
            </div>
            </div>
        </div>
        </section>

        {/* Secretariat Council Image */}
<section className="mb-16 bg-zinc-900 py-12">
  <div className="flex justify-center">
    <div className="max-w-6xl w-full px-4">
      <img 
        src="/images/Screenshot 2023-12-19 202304.png" 
        alt="Secretariat Council Members" 
        className="w-full h-auto rounded-lg border-4 border-zinc-700"
      />
    </div>
  </div>
</section>
      </div>
    </main>
  );
}

export default About;