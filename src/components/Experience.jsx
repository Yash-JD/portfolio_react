import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

let logo1 = require("../assets/portfolio/square_infosoft.jpg");
let logo2 = require("../assets/portfolio/logwintech.jpg");

const Experience = () => {
    const [expandedExperiences, setExpandedExperiences] = useState({});

    useEffect(() => {
        AOS.init({ duration: 2000, once: true });
    }, []);

    const toggleExpanded = (id) => {
        setExpandedExperiences((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const experiences = [
        {
            id: 1,
            role: "Backend Developer",
            company: "Square Infosoft",
            date: "Jun 2025 – Present",
            location: "Surat, Gujarat",
            description: "• Worked extensively on designing and building scalable backend systems using NestJS, Node.js, Prisma ORM, and MySQL.\n• Built complex business logic including streak tracking systems, settlement and debt calculations.\n• Integrated Firebase Cloud Messaging, Redis queues, Cloudflare Stream, RevenueCat, Juspay.\n• Developed data scraping and ETL pipelines using Azure Functions.\n• Focused on production readiness, fault tolerance, and clean architecture.",
            skills: "TypeScript · NestJS · Node.js · Prisma ORM · REST APIs · Redis · Bullmq · MySQL · MongoDB · Azure Functions · Git · DigitalOcean · Cloudflare Stream · Firebase",
            img: logo1
        }, {
            id: 2,
            role: "Software Engineer Intern",
            company: "LogWinTech Pvt. Ltd",
            date: "Feb 2025 – May 2025",
            location: "Surat, Gujarat",
            description: "• Designed scalable MySQL database schemas for e-commerce.\n• Built REST APIs using Node.js and Express.\n• Developed cart & wishlist features using React and Redux.\n• Integrated Razorpay payment gateway.\n• Owned Cart and Wishlist modules end-to-end.",
            skills: "JavaScript · Node.js · Express.js · MySQL · React.js · Redux · Tailwind CSS",
            img: logo2
        },
    ];

    return (
        <div name="experience" className="w-full text-white py-16 px-4">
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full">

                {/* Section Header */}
                <div className="pb-2 mb-8 text-center flex items-center justify-center gap-3" data-aos="fade-up">
                    <span className="text-3xl">💼</span>
                    <h2 className="text-4xl font-bold">Experience</h2>
                </div>

                {/* Experience Cards */}
                <div className="space-y-6">
                    {
                        experiences.map((experience, index) => {
                            const lines = experience.description.split("\n");
                            const isExpanded = expandedExperiences[experience.id];
                            const displayLines = isExpanded ? lines : lines.slice(0, 1);

                            return (
                                <div
                                    key={experience.id}
                                    className="flex gap-5 p-6 transition-all duration-400"
                                    style={{
                                        display: 'flex',
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
                                    data-aos-delay={index * 100}
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-white/8 border border-white/15 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-md">
                                        {
                                            experience.img ? (
                                                <img src={
                                                    experience.img
                                                }
                                                    alt={
                                                        `${experience.company
                                                        } logo`
                                                    }
                                                    className="w-full h-full object-contain" />
                                            ) : (
                                                <span className="font-bold text-cyan-400">
                                                    {
                                                        experience.company.charAt(0)
                                                    } </span>
                                            )
                                        } </div>

                                    {/* Content */}
                                    <div className="flex-1 flex flex-col gap-2">
                                        <h3 className="text-xl md:text-2xl font-bold text-cyan-400">
                                            {
                                                experience.role
                                            } </h3>

                                        <div className="text-lg font-medium text-white/90">
                                            {
                                                experience.company
                                            } </div>

                                        {/* Date & Location */}
                                        <div className="flex gap-6 my-2 text-sm text-gray-300">
                                            <span className="flex items-center gap-1">
                                                <span className="text-xs">📅</span>
                                                {
                                                    experience.date
                                                } </span>
                                            <span className="flex items-center gap-1">
                                                <span className="text-xs">📍</span>
                                                {
                                                    experience.location
                                                } </span>
                                        </div>

                                        {/* Description */}
                                        <div className="text-gray-200 leading-relaxed">
                                            {
                                                displayLines.map((point, i) => (
                                                    <div key={i}
                                                        className="flex gap-2 mb-2">
                                                        <span className="text-cyan-400">•</span>
                                                        <span>{
                                                            point.replace("• ", "")
                                                        }</span>
                                                    </div>
                                                ))
                                            }

                                            {
                                                lines.length > 1 && (
                                                    <button onClick={
                                                        () => toggleExpanded(experience.id)
                                                    }
                                                        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-2">
                                                        {
                                                            isExpanded ? "Show less" : "...more"
                                                        } </button>
                                                )
                                            } </div>

                                        {/* Skills */}
                                        <div className="mt-4 pt-4 border-t border-white/10">
                                            <div className="flex flex-wrap gap-2">
                                                <span className="text-sm">💡</span>
                                                {
                                                    experience.skills.split(" · ").map((skill, i) => (
                                                        <span key={i}
                                                            className="px-2 py-1 text-xs rounded-full
                                                            bg-cyan-400/20 text-cyan-300
                                                            border border-cyan-400/30
                                                            transition-all duration-200
                                                            hover:bg-cyan-400/30
                                                            hover:text-cyan-200
                                                            hover:border-cyan-400/50
                                                            hover:scale-105
                                                            cursor-pointer">
                                                            {skill} </span>
                                                    ))
                                                } </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    } </div>
            </div>
        </div>
    );
};

export default Experience;
