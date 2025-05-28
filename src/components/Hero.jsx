import React, { useEffect } from "react";
import { MdOutlineArrowCircleUp } from "react-icons/md";
import { Typewriter, Cursor } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import profile from "../assets/portfolio/profile.png";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div name="home" className="h-screen w-full my-[3.5rem] md:mt-0  ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-3 md:flex-row gap-10">
        <div className="md:w-[40%]  ">
          <img
            src={profile}
            alt="my profile"
            className="rounded-full border-2 border-white mx-auto my-auto w-2/3 md:w-full"
          />
        </div>
        <div className="flex flex-col justify-center h-full w-[100%] gap-3">
          <h1 className="name text-5xl font-bold md:text-7xl">Hello,</h1>
          <h2 className="text-2xl sm:text-6xl font-bold text-[#ee4949]">
            I’m Yash{" "}
          </h2>
          <div className="text-2xl sm:text-6xl font-bold">
            <span style={{ fontWeight: "bold", color: "pink" }}>
              <Typewriter
                words={["Full Stack Developer", "Poblem Solver"]}
                loop={100}
                typeSpeed={145}
                deleteSpeed={90}
                delaySpeed={1000}
              />
            </span>
            <span style={{ color: "red" }}>
              <Cursor />
            </span>
          </div>
          <p className="text-gray-200 py-4 max-w-md">
            Hey there, I'm Yash, a Computer Science grad student at LDRP
            Institure of Technology & Research, Gandhinagar. My journey spans
            full-stack engineering in agile settings. I thrive on challenges,
            adapt fast, and I'm geared up to innovate and learn. Welcome to my
            portfolio.
          </p>

          <div>
            <a
              href="/Yash_Resume.pdf"
              download="true"
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer"
            >
              Resume
              <span className="group-hover:rotate-180 duration-500">
                <MdOutlineArrowCircleUp size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
