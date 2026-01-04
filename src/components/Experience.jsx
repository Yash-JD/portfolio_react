import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      name="experience"
      className="w-full text-white py-16 md:py-20 px-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-2 mb-6 text-center flex items-center justify-center gap-3" data-aos="fade-up">
          <span className="text-3xl">💼</span>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>

        <div className="mt-8 space-y-6" data-aos="fade-up">
          {/* Experience 1 */}
          <div className="bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg">
            <h4 className="text-2xl font-bold text-cyan-400 mb-1">
              Backend Developer - Square Infosoft
            </h4>
            <span className="block text-gray-300 mb-2">
              Jun 2025 – Present - Surat, Gujarat
            </span>
            <p className="text-base text-gray-200">
              Built RESTful APIs with Node.js and Express, integrated MongoDB
              for data storage, and implemented authentication and
              authorization. Improved API performance and reliability through
              code optimization and testing.
            </p>
          </div>
          {/* Experience 2 */}
          <div className="bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg">
            <h4 className="text-2xl font-bold text-cyan-400 mb-1">
              Software Engineer Intern - LogWinTech Pvt. Lmt
            </h4>
            <span className="block text-gray-300 mb-2">
              Feb 2025 – May 2025 - Surat, Gujarat
            </span>
            <p className="text-base text-gray-200">
              Learned and applied{" "}
              <span className="text-cyan-300 font-semibold">
                CSS, JavaScript, React, Node.js, Express, MySQL
              </span>{" "}
              by building a complete e-commerce website. Gained hands-on
              experience in both frontend and backend development, database
              design, and full-stack project deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
