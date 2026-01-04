import React, { useEffect } from "react";
import { MdOutlineArrowCircleUp } from "react-icons/md";
import { Typewriter, Cursor } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import profile from "../assets/portfolio/profile_2.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div name="home" className="w-full py-16 md:py-20">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-3 md:flex-row gap-8 md:gap-12">
        <div className="md:w-[35%] flex justify-center">
          <img
            src={profile}
            alt="my profile"
            className="rounded-full border-2 border-white w-2/3 md:w-full animate-float"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:w-[65%] gap-2 md:gap-3">
          <h1 className="name text-4xl md:text-6xl font-bold">Hello,</h1>
          <h2 className="text-xl md:text-5xl font-bold text-[#ee4949]">
            I'm Yash Dobariya{" "}
          </h2>
          <div className="text-xl md:text-5xl font-bold">
            <span style={{ fontWeight: "bold", color: "pink" }}>
              <Typewriter
                words={["Backend Developer"]}
                loop={100}
                typeSpeed={145}
                deleteSpeed={90}
                delaySpeed={1000}
              />
            </span>
            <span style={{ color: "red" }}>
              <Cursor className="z-0" />
            </span>
          </div>
          <p className="text-gray-200 py-2 md:py-3 max-w-lg text-sm md:text-base">
            Hey there, I'm Yash, a Computer Science grad student at LDRP
            Institure of Technology & Research, Gandhinagar. My journey spans
            full-stack engineering in agile settings. I thrive on challenges,
            adapt fast, and I'm geared up to innovate and learn. Welcome to my
            portfolio.
          </p>

          <div className="pt-2">
            <a
              href="/Yash_Resume.pdf"
              download="true"
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer"
            >
              Resume
              <span className="group-hover:rotate-180 duration-500 ml-2">
                <MdOutlineArrowCircleUp size={25} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
