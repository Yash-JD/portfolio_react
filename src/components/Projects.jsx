import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ecommerce from "../assets/portfolio/ecommerce.png";
import yelpCamp from "../assets/portfolio/YelpCamp.png";
import studyNotion from "../assets/portfolio/studyNotion.png";
import chatty from "../assets/portfolio/chatty.png";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const [modal, setModal] = useState({ open: false, project: null });

  const portfolios = [
    {
      id: 1,
      name: "Chatty",
      src: chatty,
      demo: "https://chatty-xhmi.onrender.com/",
      code: "https://github.com/Yash-JD/chatty-app",
      description:
        "A real-time chat application with messaging, user authentication, and group chat features. Built with modern web technologies for seamless communication.",
      tech: "React, Redux, Node.js, Express, MySQL, Socket.io, Tailwind CSS",
      features:
        "Real-time messaging, user authentication, group chat, responsive design",
    },
    {
      id: 2,
      name: "YelpCamp",
      src: yelpCamp,
      demo: "https://drive.google.com/file/d/1k6LtNq2acWgLz785-dGborBxi5xSVLjE/preview",
      code: "https://github.com/Yash-JD/Yelp-Camp",
      description:
        "YelpCamp is a web app for sharing and reviewing campgrounds. It allows users to create, edit, and delete campgrounds, as well as leave reviews. Admin can manage users and campgrounds.",
      tech: "Node.js, Express, MongoDB, EJS, Bootstrap",
      features: "User authentication, campground management, review system",
    },
    {
      id: 3,
      name: "Study Notion",
      src: studyNotion,
      demo: "https://college-ed-tech.vercel.app/",
      code: "https://github.com/Yash-JD/collegeEdTech",
      description:
        "A comprehensive educational platform designed to enhance the learning experience for students. It features a wide range of courses and resources to support academic success.",
      tech: "React, Node.js, Express, MongoDB, Tailwind CSS",
      features:
        "Course management, user authentication, progress tracking, responsive design, student & teacher dashboards",
    },
    {
      id: 4,
      name: "E-Shop",
      src: ecommerce,
      demo: "https://github.com/Yash-JD/react-ecommerce-app",
      code: "https://github.com/Yash-JD/react-ecommerce-app",
      description:
        "A modern e-commerce platform with product listings, wishlist, cart, and checkout features. Also includes user authentication and authorization. Integrated with Razorpay for payment processing.",
      tech: "React, Redux, Node.js, Express, MySQL, Razorpay, Tailwind CSS",
      features:
        "Product management, user authentication with JWT, payment integration",
    },

  ];

  return (
    <div name="projects" className="w-full text-white py-16 md:py-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-4 mb-6 text-center flex items-center justify-center gap-3" data-aos="fade-up">
          <span className="text-3xl">💻</span>
          <p className="text-4xl font-bold inline">
            Projects
          </p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-2 gap-8"
          data-aos-anchor-placement="top-center"
        >
          {portfolios.map((project) => (
            <div
              key={project.id}
              className="p-6 bg-white/5 backdrop-blur-lg shadow-md shadow-gray-600 rounded-lg transition-all duration-400 hover:bg-white/15 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
              data-aos="fade-up"
            >
              <h3 className="uppercase font-bold text-lg mb-4 text-center">
                {project.name}
              </h3>
              <img
                src={project.src}
                alt=""
                className="rounded-md duration-200 h-[8rem] w-[18rem] object-contain mx-auto mb-3"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => setModal({ open: true, project })}
                  className="mx-auto m-4 px-4 py-2 bg-white/20 rounded text-white font-semibold border border-white/30 backdrop-blur hover:scale-105 duration-200 hover:bg-gradient-to-r from-indigo-500 to-pink-500 hover:border-none"
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modal.open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
            <div className="bg-gray-900 rounded-2xl p-10 max-w-2xl w-full relative shadow-2xl overflow-y-auto max-h-[90vh]">
              <button
                className="absolute top-2 right-5 text-3xl text-gray-400 hover:text-white"
                onClick={() => setModal({ open: false, project: null })}
                aria-label="Close"
              >
                &times;
              </button>
              <h3 className="uppercase font-bold text-lg mb-4 text-center">
                {modal.project.name}
              </h3>
              <img
                src={modal.project.src}
                alt=""
                className="rounded-md w-full h-64 object-contain mb-6 bg-white"
              />
              <h2 className="text-base font-bold mb-4">Project Details</h2>
              <p className="mb-6 text-base text-gray-200">
                {modal.project.description}
              </p>
              <p className="mb-6 text-base text-gray-300">
                <span className="font-semibold text-white">Tech Stack:</span>{" "}
                {modal.project.tech}
              </p>
              <p className="mb-6 text-base text-gray-300">
                <span className="font-semibold text-white">Features:</span>{" "}
                {modal.project.features}
              </p>
              <div className="flex justify-between gap-6">
                <a
                  href={modal.project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 px-6 py-3 bg-indigo-600 rounded text-white text-center font-semibold text-lg hover:bg-indigo-700 transition"
                >
                  Demo
                </a>
                <a
                  href={modal.project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 px-6 py-3 bg-pink-600 rounded text-white text-center font-semibold text-lg hover:bg-pink-700 transition"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
