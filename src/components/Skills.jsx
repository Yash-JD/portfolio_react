import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import mongodb from "../assets/mongo.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/node.png";
import sql from "../assets/sql.png";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nodejs,
      title: "Node JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: sql,
      title: "SQL",
      style: "shadow-blue-400",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div name="skills" className="w-full py-16 md:py-20">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div className="text-center">
          <p
            className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline"
            data-aos="fade-up"
          >
            Skills & Tools
          </p>
          <p className="py-4" data-aos="fade-up">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-6 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              data-aos="fade-up"
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
