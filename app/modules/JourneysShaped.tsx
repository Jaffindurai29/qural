"use client";
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import ProfileCard from '../components/ProfileCard';

const profileData = [
    { name: "Rahul K", before: "Graduate", after: "Electrical BIM Professional", profileImg: "/person/p1.png", logo: "/company/c1.png" },
    { name: "Majharulla R", before: "Job Seeker", after: "Electrical BIM Professional", profileImg: "/person/p2.png", logo: "/company/c2.png" },
    { name: "Noorul Ameen A", before: "Site Engineer", after: "Electrical BIM Professional", profileImg: "/person/p3.png", logo: "/company/c3.png" },
    { name: "Kasthuri", before: "Job Seeker", after: "Electrical BIM Coordinator", profileImg: "/person/p4.png", logo: "/company/c4.png" },
    { name: "Suresh", before: "Site Engineer", after: "Mechanical BIM Professional", profileImg: "/person/p5.png", logo: "/company/c5.png" },
    { name: "Shanmugan", before: "Job Seeker", after: "Mechanical BIM Professional", profileImg: "/person/p6.png", logo: "/company/c6.png" },
    { name: "Meyyarasan", before: "Graduate", after: "Electrical BIM Professional", profileImg: "/person/p7.png", logo: "/company/c7.png" }
];

export default function JourneysShaped() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % profileData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + profileData.length) % profileData.length);
    };

    return (
        <div id="journey" className="relative w-full min-h-screen flex items-center justify-center bg-[#ed3543] py-20 px-4 isolate overflow-hidden">
            {/* 1. Background Decoration - Spanning Ring Image (Bottom Half) */}
            <div className="absolute top-0 left-[65%] -translate-x-1/2 w-[1200px] pointer-events-none overflow-visible">
                <img
                    src="/Ellipse 2.png"
                    alt="Ring"
                    className="w-full h-auto -translate-y-1/2 opacity-80 shrink-0"
                />
            </div>

            <div className="relative w-full max-w-[1400px] flex flex-col items-center gap-10">

                {/* Title Section */}
                <div className="flex flex-col items-center gap-4">
                    <h1 className="font-['Outfit'] font-bold text-4xl md:text-6xl text-white text-center leading-tight">
                        Journeys shaped at Qural
                    </h1>
                    {/* Handwritten Underline */}
                    <div className="w-[200px] md:w-[350px] h-[15px] relative">
                        <svg viewBox="0 0 371 30" fill="none" className="w-full h-full">
                            <path d="M5 25C100 15 250 15 365 10" stroke="#FFBC11" strokeWidth="6" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>


                {/* Profile Cards Grid Area */}
                <div className="w-full overflow-hidden pb-5 px-6">
                    <div className="relative w-full overflow-visible">
                        <motion.div
                            animate={{ x: `-${currentIndex * (400 + 24)}px` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="flex gap-6 mx-auto"
                        >
                            {profileData.map((profile, i) => (
                                <div key={i} className="shrink-0">
                                    <ProfileCard
                                        name={profile.name}
                                        beforeRole={profile.before}
                                        afterRole={profile.after}
                                        profileImage={profile.profileImg}
                                        companyLogo={profile.logo}
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Action Row: Nav and CTA Buttons */}
                <div className="w-full flex flex-col items-center gap-10 -mt-8">
                    {/* Navigation Circles */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/20 active:scale-95 transition-all z-30"
                        >
                            <span className="text-xl">‹</span>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/20 active:scale-95 transition-all z-30"
                        >
                            <span className="text-xl">›</span>
                        </button>
                    </div>

                    {/* Main CTA Pair */}
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <button className="relative border border-solid border-white content-stretch flex items-center justify-center px-8 py-4 rounded-[10px] cursor-pointer hover:brightness-95 transition-all z-20 overflow-hidden">
                            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
                                <div className="absolute bg-gradient-to-b from-[#ed3543] inset-0 rounded-[10px] to-[#bb1f36]" />
                            </div>
                            <p className="font-['Outfit'] font-bold leading-[normal] relative shrink-0 text-lg text-white z-10">
                                Find Your Industry-Ready Path
                            </p>
                            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_18px_0px_#ffd9e8,inset_0px_1px_4px_0px_#ffd9e8]" />
                        </button>

                        <button className="relative bg-[#f4f4f4] px-8 py-4 rounded-[10px] cursor-pointer hover:brightness-95 transition-all outline-none">
                            <span className="font-['Outfit'] font-bold text-[#ed3543] text-lg relative z-10">
                                Get Career Guidance
                            </span>
                            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0.701px_0.701px_0.701px_0px_white,inset_-0.701px_-0.701px_0.701px_0px_rgba(0,0,0,0.15)]" />
                        </button>
                    </div>

                    <p className="text-white/80 font-['Outfit'] text-center">
                        From learning to readiness — guided every step of the way.
                    </p>
                </div>
            </div>
        </div>
    );
}
