import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div name="about" className="w-full text-white py-16 md:py-20 px-4">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-2 mb-6 text-center flex items-center justify-center gap-3" data-aos="fade-up">
          <span className="text-3xl">🧑‍💻</span>
          <p className="text-4xl font-bold inline">
            About
          </p>
        </div>

        <div className="space-y-6" data-aos="fade-up">
          <p className="text-xl md:text-lg leading-relaxed">
            Hi, I'm <span className="text-cyan-400 font-semibold">Yash Dobariya</span>, a Computer Science graduate student at LDRP Institute of Technology & Research, Gandhinagar, with a minors degree in AI&ML. I'm passionate about solving complex problems and creating innovative solutions that enhance user experiences.
          </p>

          <p className="text-xl md:text-lg leading-relaxed">
            I'm <span className="text-pink-400 font-semibold">highly enthusiastic about exploring new ideas</span>, solving real-world problems, and transforming concepts into reliable, production-ready solutions. With hands-on experience in full-stack engineering, system integrations, and data-driven applications, I actively seek opportunities that challenge me to grow technically and contribute meaningful value.
          </p>

          <p className="text-xl md:text-lg leading-relaxed">
            <span className="text-purple-400 font-semibold">Passionate about learning new skills and technologies</span>, with a strong focus on continuously upgrading my knowledge in software development. I'm driven to build a deep, practical understanding of modern backend systems and scalable architectures, having worked extensively with JavaScript for both client-side and server-side development.
          </p>

          <p className="text-xl md:text-lg leading-relaxed">
            I believe in <span className="text-green-400 font-semibold">continuous improvement, clean architecture, and learning through building</span>—constantly pushing myself to become a more effective and well-rounded software engineer. When I'm not coding, I enjoy playing basketball and going to the gym, which helps me stay creative and focused.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
