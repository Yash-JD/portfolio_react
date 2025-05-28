import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div name="contact" className="w-full h-screen p-4  text-white mt-[6.5rem]">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4 border-gray-500"
            data-aos="fade-up"
          >
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const email = e.target.email.value;
              const message = e.target.message.value;
              window.location.href = `mailto:yjdobariya@gmail.com?subject=Contact from ${encodeURIComponent(
                name
              )}&body=Name: ${encodeURIComponent(
                name
              )}%0AEmail: ${encodeURIComponent(
                email
              )}%0AMessage: ${encodeURIComponent(message)}`;
            }}
            className="flex flex-col w-full md:w-2/3 lg:w-1/2 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20"
            data-aos="fade-up"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 mb-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-3 mb-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="7"
              className="p-3 mb-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
              required
            ></textarea>
            <div className="flex justify-center">
              <button
                className="group relative overflow-hidden text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-lg shadow-lg font-semibold transition-all duration-300 hover:from-blue-500 hover:to-cyan-500 hover:scale-105"
                type="submit"
              >
                <span className="relative z-10">Let's talk</span>
                <span className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
