import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
let logo1 = require("../assets/portfolio/square_infosoft.jpg");
let logo2 = require("../assets/portfolio/logwintech.jpg");

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const experiences = [
    {
      id: 1,
      role: "Backend Developer",
      company: "Square Infosoft",
      date: "Jun 2025 – Present",
      location: "Surat, Gujarat",
      description: "• Worked extensively on designing and building scalable backend systems using NestJS, Node.js, Prisma ORM, and MySQL. Implemented robust REST APIs with UUID-based data models, optimized schemas, and clean service-layer abstractions.\n• Built complex business logic including streak tracking systems, settlement and debt calculations, subscription lifecycle management, and reminder/notification workflows.\n• Integrated multiple third-party services such as Firebase Cloud Messaging (real-time and conditional notifications), Redis (Bull queues for background processing), Cloudflare Stream (video lifecycle via webhooks), RevenueCat (in-app subscriptions), Juspay UPI Intent & AutoPay flows, and SMS gateways. Designed secure webhook handlers, signature verification, and idempotent transaction processing.\n• Developed data scraping and ETL pipelines, applying whitelist-based filtering, topic/article grouping, and transferring structured data from MongoDB to MySQL via Azure Functions. Focused on data accuracy, performance, and storage optimization.\n• Hands-on experience with cron jobs, time-window–based logic, offline/online user handling, and real-time system behavior, with strong emphasis on production readiness, fault tolerance, and clean architecture.",
      img: logo1
    },
    {
      id: 2,
      role: "Software Engineer Intern",
      company: "LogWinTech Pvt. Lmt",
      date: "Feb 2025 – May 2025",
      location: "Surat, Gujarat",
      description: "• Database Architecture: I designed and optimized the MySQL database schemas specifically for e-commerce data, ensuring the system remained scalable and the data stayed organized.\n• Backend API Development: I built the application's RESTful APIs using Node.js, where I developed custom middleware to handle essential tasks like user authentication and request validation.\n• Frontend State Management: Using React and Redux, I built the interactive parts of the site, focusing on managing the state for the shopping cart and favorites functionality to keep the user experience seamless.\n• Payment Integration: I worked on the end-to-end integration of the Razorpay payment gateway, focusing on creating a secure and reliable checkout process for customers.\n• Feature Ownership: I took charge of the \"Cart\" and \"Wishlist\" modules, handling everything from the initial logic to the final UI updates to make the features feel responsive and easy to use.",
      img: logo2
    }
  ];

  return (
    <div
      name="experience"
      className="w-full text-white py-16 md:py-20 px-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-2 mb-6 text-center flex items-center justify-center gap-3" data-aos="fade-up">
          <span className="text-3xl">💼</span>
          <p className="text-4xl font-bold inline">
            Experience
          </p>
        </div>

        <div className="mt-8 space-y-6" data-aos="fade-up">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="flex gap-5 p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl transition-all duration-400 hover:bg-white/8 hover:border-white/20 hover:translate-y-[-4px] hover:shadow-xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Company Logo */}
              <div className="w-14 h-14 rounded-2xl bg-white/8 backdrop-blur border border-white/15 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-md">
                {experience.img ? (
                  <img 
                    src={experience.img} 
                    alt={`${experience.company} logo`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {experience.company.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Experience Content */}
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-cyan-400">
                  {experience.role}
                </h3>
                <div className="text-lg md:text-xl font-medium text-white/90">
                  {experience.company}
                </div>
                
                {/* Date and Location */}
                <div className="flex gap-4 md:gap-6 my-2">
                  <span className="text-sm text-gray-300 flex items-center gap-1">
                    <span className="text-xs">📅</span>
                    {experience.date}
                  </span>
                  <span className="text-sm text-gray-300 flex items-center gap-1">
                    <span className="text-xs">📍</span>
                    {experience.location}
                  </span>
                </div>

                <div className="text-base text-gray-200 leading-relaxed space-y-2">
                  {experience.description.split('\n').map((point, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{point.replace('• ', '')}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
