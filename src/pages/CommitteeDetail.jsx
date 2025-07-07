// src/pages/CommitteeDetail.jsx
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function CommitteeDetail() {
  const { committeeId } = useParams();
  const navigate = useNavigate();
  
  // Committee data
  const committeeData = {
    unsc: {
      name: "United Nations Security Council",
      shortName: "UNSC",
      agenda: "Addressing the Crisis in the Middle East",
      level: "Advanced",
      size: "15 Delegates",
      description: "The UN's most powerful body, responsible for maintaining international peace and security.",
      fullDescription: "The United Nations Security Council is charged with maintaining international peace and security. Its powers include establishing peacekeeping operations, enacting international sanctions, and authorizing military action. The UNSC is the only UN body with the authority to issue binding resolutions on member states.",
      backgroundGuide: "/guides/unsc-background.pdf",
      countries: [
        "United States", "United Kingdom", "France", "Russia", "China",
        "Germany", "Japan", "Brazil", "India", "South Africa",
        "UAE", "Albania", "Ghana", "Gabon", "Kenya"
      ],
      chairs: [
        { 
          name: "John Doe", 
          role: "Chairperson", 
          email: "john.doe@cmrcetmun.org",
          photo: "/images/john-doe.jpg",
          bio: "John is a final-year International Relations student with 3+ years of MUN experience."
        },
        { 
          name: "Jane Smith", 
          role: "Vice-Chairperson", 
          email: "jane.smith@cmrcetmun.org",
          photo: "/images/jane-smith.jpg",
          bio: "Jane specializes in international security and has chaired multiple crisis committees."
        }
      ],
      requirements: [
        "Strong understanding of international relations",
        "Experience in crisis management",
        "Ability to think on your feet",
        "Prior MUN experience recommended"
      ],
      preparation: [
        "Read the UN Charter, especially Chapter V",
        "Study your country's foreign policy",
        "Research recent Security Council resolutions",
        "Understand the P5 veto power dynamics"
      ]
    },
    disec: {
      name: "Disarmament and International Security Committee",
      shortName: "DISEC",
      agenda: "Regulating Autonomous Weapons Systems and AI in Warfare",
      level: "Beginner-Intermediate",
      size: "50 Delegates",
      description: "The First Committee of the UN General Assembly dealing with disarmament.",
      fullDescription: "DISEC deals with disarmament, global challenges and threats to peace that affect the international community. It seeks out solutions to the challenges in the international security regime. Unlike the Security Council, DISEC allows all UN member states to have equal representation.",
      backgroundGuide: "/guides/disec-background.pdf",
      countries: ["All UN Member States eligible"],
      chairs: [
        { 
          name: "Alex Johnson", 
          role: "Chairperson", 
          email: "alex.j@cmrcetmun.org",
          photo: "/images/alex-johnson.jpg",
          bio: "Alex is passionate about disarmament and technology policy with extensive debate experience."
        },
        { 
          name: "Sarah Williams", 
          role: "Vice-Chairperson", 
          email: "sarah.w@cmrcetmun.org",
          photo: "/images/sarah-williams.jpg",
          bio: "Sarah has a background in cybersecurity and international law."
        }
      ],
      requirements: [
        "Basic understanding of UN procedures",
        "Interest in security and technology",
        "Good research skills",
        "Beginners welcome!"
      ],
      preparation: [
        "Understand basics of autonomous weapons",
        "Research your country's stance on AI in warfare",
        "Read about the Geneva Conventions",
        "Study DISEC procedure and voting"
      ]
    },
    unhrc: {
      name: "United Nations Human Rights Council",
      shortName: "UNHRC",
      agenda: "Protection of Digital Privacy Rights in the Age of Surveillance",
      level: "Intermediate",
      size: "47 Delegates",
      description: "An inter-governmental body responsible for promoting and protecting human rights.",
      fullDescription: "The UNHRC is responsible for strengthening the promotion and protection of human rights around the globe and for addressing situations of human rights violations and making recommendations on them.",
      backgroundGuide: "/guides/unhrc-background.pdf",
      countries: ["47 Member States elected by the UN General Assembly"],
      chairs: [
        { 
          name: "Michael Chen", 
          role: "Chairperson", 
          email: "michael.c@cmrcetmun.org",
          photo: "/images/michael-chen.jpg",
          bio: "Michael is a human rights advocate with a focus on digital privacy and civil liberties."
        },
        { 
          name: "Priya Sharma", 
          role: "Vice-Chairperson", 
          email: "priya.s@cmrcetmun.org",
          photo: "/images/priya-sharma.jpg",
          bio: "Priya specializes in international human rights law and data protection policies."
        }
      ],
      requirements: [
        "Understanding of human rights frameworks",
        "Research skills on privacy laws",
        "Ability to balance security and privacy concerns",
        "Intermediate MUN experience helpful"
      ],
      preparation: [
        "Study the Universal Declaration of Human Rights",
        "Research digital privacy laws in different countries",
        "Understand surveillance technologies",
        "Review past UNHRC resolutions"
      ]
    },
    aippm: {
      name: "All India Political Parties Meet",
      shortName: "AIPPM",
      agenda: "Uniform Civil Code: Balancing Unity and Diversity in India",
      level: "Intermediate-Advanced",
      size: "40 Delegates",
      description: "A simulation of Indian parliamentary proceedings.",
      fullDescription: "AIPPM simulates the Indian political landscape where delegates represent various political parties to debate and discuss pressing national issues, following Indian parliamentary procedures.",
      backgroundGuide: "/guides/aippm-background.pdf",
      countries: ["BJP", "INC", "AAP", "TMC", "DMK", "TDP", "JDU", "SP", "BSP", "CPI(M)", "Others"],
      chairs: [
        { 
          name: "Rahul Verma", 
          role: "Speaker", 
          email: "rahul.v@cmrcetmun.org",
          photo: "/images/rahul-verma.jpg",
          bio: "Rahul is a political science student with deep knowledge of Indian parliamentary procedures."
        },
        { 
          name: "Anjali Patel", 
          role: "Deputy Speaker", 
          email: "anjali.p@cmrcetmun.org",
          photo: "/images/anjali-patel.jpg",
          bio: "Anjali has extensive experience in Indian politics and constitutional law."
        }
      ],
      requirements: [
        "Strong knowledge of Indian politics",
        "Understanding of parliamentary procedures",
        "Ability to represent party ideologies",
        "Public speaking skills essential"
      ],
      preparation: [
        "Study your assigned party's manifesto",
        "Research the Uniform Civil Code debate",
        "Understand Indian parliamentary procedures",
        "Review recent political developments"
      ]
    },
    ip: {
      name: "International Press",
      shortName: "IP",
      agenda: "Covering Global Diplomatic Events and Creating Conference Chronicles",
      level: "All Levels",
      size: "20 Journalists",
      description: "Report on committee proceedings and create conference content.",
      fullDescription: "The International Press corps serves as the media body of the conference, responsible for reporting on all committee proceedings, conducting interviews, writing articles, and creating the official conference newsletter.",
      backgroundGuide: "/guides/ip-background.pdf",
      countries: ["Reuters", "BBC", "CNN", "Al Jazeera", "The Hindu", "NYT", "Guardian", "Others"],
      chairs: [
        { 
          name: "Emily Rodriguez", 
          role: "Editor-in-Chief", 
          email: "emily.r@cmrcetmun.org",
          photo: "/images/emily-rodriguez.jpg",
          bio: "Emily is a journalism student with experience in international reporting and digital media."
        },
        { 
          name: "Arjun Mehta", 
          role: "Deputy Editor", 
          email: "arjun.m@cmrcetmun.org",
          photo: "/images/arjun-mehta.jpg",
          bio: "Arjun specializes in political journalism and multimedia content creation."
        }
      ],
      requirements: [
        "Strong writing skills",
        "Photography/design skills (bonus)",
        "Ability to work under deadlines",
        "No prior MUN experience required"
      ],
      preparation: [
        "Study journalism ethics",
        "Practice different writing styles",
        "Learn basic photography/design",
        "Research all committee agendas"
      ]
    }
  };

  const committee = committeeData[committeeId];

  // Function to handle registration with pre-selected committee
  const handleRegisterClick = () => {
    navigate('/register', { 
      state: { 
        selectedCommittee: committeeId.toUpperCase() 
      } 
    });
  };

  if (!committee) {
    return (
      <div className="pt-20 px-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Committee Not Found</h1>
          <Link to="/committees" className="text-blue-400 hover:text-blue-300">
            Back to Committees
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-20 px-4 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-12">
          <Link to="/committees" className="text-blue-400 hover:text-blue-300 flex items-center mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Committees
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{committee.shortName}</h1>
          <p className="text-xl text-gray-300">{committee.name}</p>
        </section>

        {/* Key Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-zinc-900 p-6 rounded-lg">
            <h3 className="text-sm text-gray-400 mb-2">Committee Size</h3>
            <p className="text-2xl font-bold">{committee.size}</p>
          </div>
          
          <div className="bg-zinc-900 p-6 rounded-lg">
            <h3 className="text-sm text-gray-400 mb-2">Sessions</h3>
            <p className="text-2xl font-bold">6 Sessions</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-lg">
            <h3 className="text-sm text-gray-400 mb-2">Document</h3>
            <a href={committee.backgroundGuide} className="text-blue-400 hover:text-blue-300">
              Background Guide →
            </a>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="md:col-span-2 space-y-8">
            {/* Agenda */}
            <section className="bg-zinc-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Agenda</h2>
              <p className="text-xl text-gray-300 mb-4">{committee.agenda}</p>
              <p className="text-gray-400">{committee.fullDescription}</p>
            </section>

            {/* Executive Board - MOVED HERE */}
            <section className="bg-zinc-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Executive Board</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {committee.chairs.map((chair, index) => (
                  <div key={index} className="bg-zinc-800 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      {/* Profile Photo */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mr-4 overflow-hidden">
                        <img 
                          src={chair.photo} 
                          alt={chair.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to initials if image fails to load
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback initials */}
                        <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg" style={{display: 'none'}}>
                          {chair.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-white">{chair.name}</h3>
                        <p className="text-blue-400 text-sm font-medium">{chair.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">{chair.bio}</p>
                    
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a 
                        href={`mailto:${chair.email}`} 
                        className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                      >
                        {chair.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Countries/Positions */}
            <section className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Available Positions</h3>
              <div className="max-h-64 overflow-y-auto">
                {committee.countries.length === 1 ? (
                  <p className="text-gray-400">{committee.countries[0]}</p>
                ) : (
                  <ul className="space-y-2">
                    {committee.countries.map((country, index) => (
                      <li key={index} className="text-gray-300 text-sm">
                        • {country}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>

            {/* Quick Actions */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Ready to Join?</h3>
              <button 
                onClick={handleRegisterClick}
                className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Register Now
              </button>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CommitteeDetail;