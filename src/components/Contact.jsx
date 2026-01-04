import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div name="contact" className="w-full text-white min-h-screen py-10 px-4">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl">📬</span>
            <p
              className="text-4xl font-bold inline"
              data-aos="fade-up"
            >
              Contact
            </p>
          </div>
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
            className="flex flex-col w-full md:w-2/3 lg:w-1/2 p-6 transition-all duration-400"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              padding: '24px',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(0px)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
            }}
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
