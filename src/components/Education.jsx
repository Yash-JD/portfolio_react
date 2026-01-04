import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
let image = require('../assets/portfolio/ldrp.jpg')

const Education = () => {
  const [expandedEducation, setExpandedEducation] = useState({});

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const toggleExpanded = (id) => {
    setExpandedEducation(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const education = [
    {
      id: 1,
      degree: "Bachelor of Engineering in Computer Science",
      school: "LDRP Institute of Technology & Research",
      location: "Gandhinagar, Gujarat",
      date: "2021 – 2025",
      gpa: "8.5/10",
      grade: 'First class with distinction',
      //   description: "• Pursued B.E. degree in Computer Science with a minor in AI & Machine Learning.\n• Gained comprehensive knowledge in data structures, algorithms, software engineering, and computer networks.\n• Worked on various projects including full-stack applications, machine learning models, and system design.\n• Active participant in coding competitions and technical workshops.\n• Developed strong problem-solving skills and collaborative teamwork abilities.",
      img: image
    }
  ];

  return (
    <div
      name="education"
      className="w-full text-white py-16 md:py-20 px-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-2 mb-6 text-center flex items-center justify-center gap-3" data-aos="fade-up">
          <span className="text-3xl">🎓</span>
          <p className="text-4xl font-bold inline">
            Education
          </p>
        </div>

        <div className="mt-8 space-y-6" data-aos="fade-up">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="flex gap-5 p-6 transition-all duration-400"
              style={{
                display: 'flex',
                gap: '20px',
                padding: '24px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* School Logo */}
              <div className="w-14 h-14 rounded-2xl bg-white/8 backdrop-blur border border-white/15 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-md">
                {edu.img ? (
                  <img
                    src={edu.img}
                    alt={`${edu.school} logo`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {edu.school.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Education Content */}
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-purple-400">
                  {edu.degree}
                </h3>
                <div className="text-lg md:text-xl font-medium text-white/90">
                  {edu.school}
                </div>

                {/* Date and Location */}
                <div className="flex gap-4 md:gap-6 my-2">
                  <span className="text-sm text-gray-300 flex items-center gap-1">
                    <span className="text-xs">📅</span>
                    {edu.date}
                  </span>
                  <span className="text-sm text-gray-300 flex items-center gap-1">
                    <span className="text-xs">📍</span>
                    {edu.location}
                  </span>
                </div>
                <div className="flex gap-4 md:gap-6">
                  <span className="text-sm text-gray-300 flex items-center gap-1">
                    <span className="text-xs">📊</span>
                    GPA: {edu.gpa}
                  </span>
                  <span className="text-sm text-gray-300 flex items-center gap-1">
                    <span className="text-xs">🏆</span>
                    {edu.grade}
                  </span>
                </div>

                {/* Description Section - Commented out for now */}
                {/* <div className="text-base text-gray-200 leading-relaxed">
                  {(() => {
                    const lines = edu.description.split('\n');
                    const isExpanded = expandedEducation[edu.id];
                    const displayLines = isExpanded ? lines : lines.slice(0, 1);
                    
                    return (
                      <>
                        {displayLines.map((point, index) => (
                          <div key={index} className="flex items-start gap-2 mb-2">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>{point.replace('• ', '')}</span>
                          </div>
                        ))}
                        
                        {lines.length > 1 && (
                          <button
                            onClick={() => toggleExpanded(edu.id)}
                            className="text-purple-400 hover:text-purple-300 font-medium text-sm mt-2 transition-colors duration-200"
                          >
                            {isExpanded ? 'Show less' : '...more'}
                          </button>
                        )}
                      </>
                    );
                  })()}
                </div> */}

                {/* Skills Section */}
                {edu.skills && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm">💡</span>
                      <span className="text-sm font-semibold text-white/80">Skills:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.split(' · ').map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-purple-400/20 text-purple-300 text-xs rounded-full border border-purple-400/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
