import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ecommerce from "../assets/portfolio/ecommerce.png";
import gifGenerator from "../assets/portfolio/gifGenerator.png";
import textTranform from "../assets/portfolio/textTransform.png";
import worldAtlas from "../assets/portfolio/worldAtlas.png";
import yelpCamp from "../assets/portfolio/YelpCamp.png";
import studyNotion from "../assets/portfolio/studyNotion.png";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const [modal, setModal] = useState({ open: false, project: null });

  const portfolios = [
    {
      id: 1,
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
    {
      id: 2,
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
      id: 3,
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
      id: 4,
      name: "World Atlas",
      src: worldAtlas,
      demo: "https://world-atlas-jade.vercel.app/",
      code: "https://github.com/Yash-JD/world-atlas",
      description:
        "WorldAtlas is an interactive SPA to explore countries and their details.",
      tech: "React, REST APIs, CSS",
      features: "Country search, details view",
    },
    {
      id: 5,
      name: "Text Transform Tool",
      src: textTranform,
      demo: "https://text-transformation.vercel.app/",
      code: "https://github.com/Yash-JD/Text-Transformation",
      description: "A text transformation tool with various utilities.",
      tech: "React, Redux Toolkit, CSS",
      features:
        "Text manipulation, case conversion, word count, character count",
    },
    {
      id: 6,
      name: "GIF Generator",
      src: gifGenerator,
      demo: "https://gif-generator-pied.vercel.app/",
      code: "https://github.com/Yash-JD/gif_generator",
      description:
        "A GIF generator that allows users to search custom gifs and also see random gifs.",
      tech: "React, Giphy API, CSS",
      features: "GIF search, random GIF display, responsive design",
    },
  ];

  return (
    <div name="projects" className="w-full text-white min-h-screen py-10">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6 mb-8">
          <p
            className="text-4xl font-bold inline border-b-4 border-gray-500"
            data-aos="fade-up"
          >
            Projects
          </p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-2 gap-10 space-y-8"
          data-aos-anchor-placement="top-center"
        >
          {portfolios.map((project) => (
            <div
              key={project.id}
              className="shadow-md shadow-gray-600 rounded-lg"
              data-aos="fade-up"
            >
              <h3 className="uppercase font-bold text-lg mb-4 text-center">
                {project.name}
              </h3>
              <img
                src={project.src}
                alt=""
                className="rounded-md duration-200 h-[10rem] w-[22rem] hover:scale-105 object-contain mx-auto"
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
