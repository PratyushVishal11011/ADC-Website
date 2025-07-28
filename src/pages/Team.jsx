import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, ArrowLeft } from 'lucide-react'

export default function TeamPage() {
  const [activeTeam, setActiveTeam] = useState('team1')
  const navigate = useNavigate()

  // Team 1 members
  const team1Members = [
    {
      id: 1,
      name: 'Shravan S Nair',
      role: 'Chairperson',
      image: 'src/images/current tenure/SHRAVAN copy.jpg',
      bio: 'Shravan leads the Anti Drug Club with dedication and works to organize awareness campaigns and educational initiatives across campus.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'Jai Darira B',
      role: 'Vice-Chairperson',
      image: 'src/images/current tenure/JAI DARIRA.jpg',
      bio: 'Jai supports the chairperson in planning club activities and coordinates with faculty to ensure successful implementation of programs.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 3,
      name: 'Jonathan Jacob',
      role: 'Secretary',
      image: 'src/images/current tenure/JACOB.jpg',
      bio: 'Jonathan manages club documentation, maintains meeting records, and handles official correspondence with college administration.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 4,
      name: 'Nida N Basheer',
      role: 'Co-Secretary',
      image: 'src/images/current tenure/NIDA.jpg',
      bio: 'Nida assists with administrative tasks and helps coordinate communication between club members and external organizations.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 5,
      name: 'Parth Batra',
      role: 'Finance Head',
      image: 'src/images/current tenure/PARTH BATRA.jpg',
      bio: 'Parth manages the club budget, handles funding requests, and maintains financial records for all club activities and events.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 6,
      name: 'Gokhul Chandar T K',
      role: 'Outreach Head',
      image: 'src/images/current tenure/Gokhul chandar T K.jpg',
      bio: 'Gokhul connects with other student organizations and community groups to expand the club\'s impact and collaboration opportunities.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 7,
      name: 'Om Nayak',
      role: 'Management Head',
      image: 'src/images/current tenure/OM NAYAK.jpg',
      bio: 'Om manages our internal operations and ensures our team functions smoothly.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 8,
      name: 'Nishkala',
      role: 'Design Head',
      image: 'src/images/current tenure/NISHKALA.jpg',
      bio: 'Nishkala organizes our workshops, seminars, and awareness events to engage the campus community.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 9,
      name: 'Pratyush Vishal',
      role: 'Technical Head',
      image: 'src/images/current tenure/VISHAL.jpg',
      bio: 'Pratyush organizes our workshops, seminars, and awareness events to engage the campus community.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 10,
      name: 'Harini Iyappan',
      role: 'Events Head',
      image: 'src/images/current tenure/HARINI IYYAPAN.jpg',
      bio: 'Harini organizes our workshops, seminars, and awareness events to engage the campus community.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    }
  ]

const team2Members = [
  {
    id: 1,
    name: 'K.Shanti Priya',
    role: 'Chairperson',
    image: 'src/images/previous tenure/3.jpg',
    bio: 'Shanti Priya is a dedicated student leader who spearheaded multiple anti-drug awareness campaigns during her tenure, inspiring fellow students to make healthy life choices.',
    social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#'
    }
  },
  {
    id: 2,
    name: 'Shoumili Pathak',
    role: 'Vice-Chairperson',
    image: 'src/images/previous tenure/4.jpg',
    bio: 'Shoumili is a passionate student advocate who coordinated with faculty and administration to implement effective substance abuse prevention programs across campus.',
    social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#'
    }
  },
  {
    id: 3,
    name: 'Nidhi Gupta',
    role: 'Secretary',
    image: 'src/images/previous tenure/5.jpg',
    bio: 'Nidhi managed club documentation and communication as a student leader, ensuring smooth coordination between team members and successful event planning.',
    social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#'
    }
  },
  {
    id: 4,
    name: 'Jai Darira B',
    role: 'Co-Secretary',
    image: 'src/images/previous tenure/6.jpg',
    bio: 'Jai supported administrative activities and helped bridge communication between the club and other student organizations during his academic years.',
    social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#'
    }
  },
  {
    id: 5,
    name: 'Prabal Dubey',
    role: 'Finance Head',
    image: 'src/images/previous tenure/14.jpg',
    bio: 'Prabal efficiently managed the club budget and funding for events while balancing his academic responsibilities as a dedicated student member.',
    social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#'
    }
  },
  {
    id: 6,
    name: 'Jonathan Jacob',
    role: 'Outreach Head',
    image: 'src/images/previous tenure/7.jpg',
    bio: 'Jonathan connected with peer student groups and community organizations to expand awareness programs and build meaningful collaborations.',
    social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#'
    }
  },
  {
    id: 7,
    name: 'Abhranil Sarkar',
    role: 'Management Head',
    image: 'src/images/previous tenure/9.jpg',
    bio: 'Abhranil coordinated team activities and managed internal operations while maintaining his academic excellence as a committed student leader.',
    social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#'
    }
  },
  {
    id: 8,
    name: 'Anuja Sajeev',
    role: 'Design Head',
    image: 'src/images/previous tenure/12.jpg',
    bio: 'Anuja created compelling visual content and promotional materials for awareness campaigns, combining her creative skills with her academic pursuits.',
    social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#'
    }
  },
  {
    id: 9,
    name: 'Aman Chauhan',
    role: 'Technical Head',
    image: 'src/images/previous tenure/15.jpg',
    bio: 'Aman managed the club\'s digital presence and technical infrastructure, utilizing his programming skills to support awareness initiatives.',
    social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#'
    }
  },
  {
    id: 10,
    name: 'Lokeswaran Kameswaran',
    role: 'Events Head',
    image: 'src/images/previous tenure/18.jpg',
    bio: 'Lokeswaran organized engaging workshops and awareness events for students, successfully balancing event planning with his academic commitments.',
    social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#'
    }
  },
  {
    id: 11,
    name: 'Jigyasa Verma',
    role: 'Events Head',
    image: 'src/images/previous tenure/11.jpg',
    bio: 'Jigyasa planned and executed impactful campus events and seminars, bringing together students for meaningful discussions on health and wellness.',
    social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#'
    }
  },
  {
    id: 12,
    name: 'Vihan Shukla',
    role: 'R&D Head',
    image: 'src/images/previous tenure/17.jpg',
    bio: 'Vihan researched effective prevention strategies and developed innovative approaches to student engagement while pursuing his academic goals.',
    social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#'
    }
  },
  {
    id: 13,
    name: 'Shravan S Nair',
    role: 'HR Head',
    image: 'src/images/previous tenure/8.jpg',
    bio: 'Shravan managed team recruitment and member development, fostering a supportive environment for student volunteers and club participants.',
    social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#'
    }
  },
  {
    id: 14,
    name: 'Kushagra Chaudhary',
    role: 'Publicity Head',
    image: 'src/images/previous tenure/13.jpg',
    bio: 'Kushagra promoted club activities across campus through social media and student networks, effectively reaching diverse student communities.',
    social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#'
    }
  },
  {
    id: 15,
    name: 'Juliette Lucy George',
    role: 'Editorial Head',
    image: 'src/images/previous tenure/20.jpg',
    bio: 'Juliette created educational content and managed publications, using her writing skills to spread awareness among the student community.',
    social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#'
    }
  }
  ]

  const currentTeam = activeTeam === 'team1' ? team1Members : team2Members

  return (
    <div className="min-h-screen bg-[#f5f5dc]">
      {/* Header */}
      <header className="bg-[#f5f5dc] shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center text-gray-800 hover:text-gray-600 mr-6"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </button>
            <div className="flex items-center">
              <img src="/adclogo.png" alt="ADC Logo" className="h-10 w-10 mr-2" />
              <span className="text-2xl font-bold text-black">ADC</span>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-6xl font-bold text-black mb-6">Meet Our Team</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          Our dedicated team of students work together to create a safe and supportive environment for all students.
        </p>

        {/* Team Switcher */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTeam('team1')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTeam === 'team1'
                  ? 'bg-green-600 text-white shadow-md transform scale-105'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              Current Tenure
            </button>
            <button
              onClick={() => setActiveTeam('team2')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTeam === 'team2'
                  ? 'bg-green-600 text-white shadow-md transform scale-105'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              Previous Tenure
            </button>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTeam.map((member, index) => (
            <div 
              key={member.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Member Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>

                {/* Social Links */}
                <div className="flex space-x-3 justify-center pt-4 border-t border-gray-100">
                  <a 
                    href={member.social.linkedin} 
                    className="bg-[#f5f5dc] p-2 rounded-full hover:bg-green-100 transition-colors duration-300 group"
                  >
                    <Linkedin className="h-5 w-5 text-gray-600 group-hover:text-green-600" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center mb-6">
            <img src="/adc.png" alt="ADC Logo" className="h-12 w-12 mr-3" />
            <span className="text-2xl font-bold">Anti Drug Club - Vellore Institute of Technology</span>
          </div>
          <p className="text-gray-400 mb-4">
            Empowering students to make healthy choices and lead fulfilling lives.
          </p>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Anti Drug Club - VIT. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
