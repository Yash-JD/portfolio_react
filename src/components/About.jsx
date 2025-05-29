import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div name="about" className="w-full text-white min-h-screen py-10 px-4">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2" data-aos="fade-up">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10" data-aos="fade-up">
          Hi, my name is Yash Dobariya and I am a software developer. I have
          pursued B.E. degree in CS along with a minors degree in AI&ML. I have
          a passion for solving complex problems and creating innovative
          solutions that enhance user experiences. Throughout my journey, I have
          gained adequate amount of experience in JavaScript for client side as
          well as server side, and have worked on a variety of projects such as
          Trekking App, E-commerce App.
        </p>

        <br />

        <p className="text-xl" data-aos="fade-up">
          I am a self-motivated individual who is always eager to learn and stay
          up-to-date with the latest trends in software development. Outside of
          bettering my skills and making projects, I enjoy playing basketBall
          and going to the gym, which helps me stay creative and focused.
        </p>
      </div>
    </div>
  );
};

export default About;
