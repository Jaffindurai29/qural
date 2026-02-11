"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Crown, User } from 'lucide-react';

const talentSlides = [
    {
        id: 1,
        title: "Electrical BIM Modeler – Dubai",
        experience: "2 Years",
        skills: "Revit | Navisworks",
        image: "/h1.png",
        location: "Dubai, UAE"
    },
    {
        id: 2,
        title: "Mechanical BIM Modeler – UK (London)",
        experience: "4 Years",
        skills: "HVAC | Clash Detection | BIM 360",
        image: "/h2.png",
        location: "London, UK"
    },
    {
        id: 3,
        title: "Structural BIM Modeler – India (Trichy)",
        experience: "4 Years",
        skills: "Tekla | Structural Detailing | Coordination",
        image: "/h1.png",
        location: "Trichy, India"
    },
    {
        id: 4,
        title: "BIM Coordinator – USA (Texas)",
        experience: "6 Years",
        skills: "Digital Delivery | Model Audits",
        image: "/h2.png",
        location: "Texas, USA"
    },
    {
        id: 5,
        title: "BIM Engineer – Qatar (Doha)",
        experience: "3 Years",
        skills: "LOD 400 | Construction BIM",
        image: "/h1.png",
        location: "Doha, Qatar"
    },
    {
        id: 6,
        title: "BIM Specialist – Saudi Arabia (Riyadh)",
        experience: "5 Years",
        skills: "Mega Projects | 4D BIM",
        image: "/h2.png",
        location: "Riyadh, KSA"
    },
    {
        id: 7,
        title: "BIM Modeler – Bahrain (Manama)",
        experience: "2+ Years",
        skills: "MEP & Architecture",
        image: "/h1.png",
        location: "Manama, Bahrain"
    },
    {
        id: 8,
        title: "BIM Modeler – India (Bangalore)",
        experience: "2 Years",
        skills: "Revit | BIM Coordination",
        image: "/h2.png",
        location: "Bangalore, India"
    },
    {
        id: 9,
        title: "BIM Modeler – India (Chennai)",
        experience: "3 Years",
        skills: "MEP & Clash Review",
        image: "/h1.png",
        location: "Chennai, India"
    }
];

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '50%' : '-50%',
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? '50%' : '-50%',
        opacity: 0,
    }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

export default function BIMShowcase() {
    const [[currentIndex, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection: number) => {
        const nextIndex = (currentIndex + newDirection + talentSlides.length) % talentSlides.length;
        setPage([nextIndex, newDirection]);
    };

    const jumpTo = (index: number) => {
        const newDirection = index > currentIndex ? 1 : -1;
        setPage([index, newDirection]);
    };

    return (
        <section id="talent-pipeline" className="w-full bg-white py-24 px-4 overflow-hidden mt-[-100px]" data-section="bim-showcase">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Header Text */}
                <div className="text-center mb-16">
                    <h2 className="text-[#0a0a0a] text-3xl md:text-5xl font-bold font-['Outfit'] mb-4 tracking-tight">
                        Build your BIM-ready talent pipeline
                    </h2>
                    <p className="text-[#0a0a0a]/60 text-lg md:text-xl font-['Outfit']">
                        Pre-trained engineers, ready to integrate into live projects.
                    </p>
                </div>

                {/* Main Slider Container */}
                <div className="relative w-full max-w-11xl group">
                    <div className="relative h-[600px] md:h-[450px] w-full bg-black rounded-[32px] overflow-hidden flex flex-col md:flex-row items-center shadow-2xl">

                        {/* Textured Background */}
                        <div className="absolute inset-0 z-0">
                            <div
                                className="absolute inset-0 opacity-10 mix-blend-overlay"
                                style={{
                                    backgroundImage: 'url(/texture-bg.png)',
                                    backgroundSize: '300px',
                                    backgroundRepeat: 'repeat'
                                }}
                            />
                        </div>

                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);

                                    if (swipe < -swipeConfidenceThreshold) {
                                        paginate(1);
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        paginate(-1);
                                    }
                                }}
                                className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-6 md:p-10"
                            >
                                {/* Left Side: Wireframe Visual */}
                                <div className="absolute left-0 top-0 bottom-0 w-full md:w-[60%] overflow-hidden pointer-events-none">
                                    <div className="relative w-full h-full transform scale-110 md:scale-125 md:translate-x-[0%]">
                                        {/* Unified Wireframe Visual (Layered for depth) */}
                                        <img
                                            src="/h.png"
                                            alt="House Structure Base"
                                            className="absolute inset-0 w-full h-full object-contain object-right scale-100 translate-x-12 -translate-y-2 opacity-30"
                                            style={{
                                                filter: 'brightness(0) invert(1)',
                                                mixBlendMode: 'screen'
                                            }}
                                        />
                                    </div>

                                    {/* Vignette to fade wireframe edges */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/80 z-10" />
                                </div>

                                {/* Right Side: Job Card */}
                                <div className="relative z-20 w-full md:w-[650px] md:ml-auto">
                                    {/* Connection Line (Dotted Blue) */}
                                    <div className="hidden md:block absolute top-[80px] -left-[180px] w-[180px] h-px z-0">
                                        <svg width="100%" height="20" className="overflow-visible">
                                            <path
                                                d="M 0 10 L 180 10"
                                                stroke="#3b82f6"
                                                strokeWidth="1.5"
                                                strokeDasharray="4 4"
                                                fill="none"
                                                opacity="0.6"
                                            />
                                            <circle cx="0" cy="10" r="3" fill="#3b82f6" />
                                            <circle cx="180" cy="10" r="3" fill="#3b82f6" />
                                        </svg>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 }}
                                        className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl relative z-10"
                                    >
                                        <div className="flex justify-between items-start mb-6">
                                            <span className="text-[#0a0a0a]/60 text-xs font-medium font-['Outfit'] mt-1">
                                                Pre-screened by Qural
                                            </span>
                                            <div className="flex items-center gap-1.5 bg-[#eff6ff] px-3 py-1.5 rounded-full">
                                                <div className="w-4 h-4 rounded-full bg-[#bfdbfe] flex items-center justify-center">
                                                    <Crown className="w-2.5 h-2.5 text-[#1d4ed8]" />
                                                </div>
                                                <span className="text-[#1d4ed8] text-[11px] font-bold uppercase tracking-tight font-['Outfit']">Premium Job</span>
                                            </div>
                                        </div>

                                        <h3 className="text-[#0a0a0a] text-xl md:text-2xl font-bold font-['Outfit'] mb-6 leading-tight">
                                            {talentSlides[currentIndex].title}
                                        </h3>

                                        <div className="space-y-4 mb-8">
                                            <div className="flex items-baseline gap-2 pb-3 border-b border-gray-100">
                                                <span className="text-[#0a0a0a]/50 text-sm font-['Outfit'] w-24 shrink-0">Experience :</span>
                                                <span className="text-[#0a0a0a] text-sm font-semibold font-['Outfit']">{talentSlides[currentIndex].experience}</span>
                                            </div>
                                            <div className="flex items-baseline gap-2 pb-3 border-b border-gray-100">
                                                <span className="text-[#0a0a0a]/50 text-sm font-['Outfit'] w-24 shrink-0">Skills :</span>
                                                <span className="text-[#0a0a0a] text-sm font-semibold font-['Outfit']">{talentSlides[currentIndex].skills}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="flex-1 h-12 px-4 border border-[#e5e7eb] rounded-lg flex items-center gap-3 cursor-text hover:border-[#ed3543] transition-colors bg-white">
                                                <div className="w-5 h-6 border-[1.5px] border-[#ef4444] rounded-[3px] flex items-center justify-center relative opacity-70">
                                                    <div className="absolute -top-1 right-[-4px] bg-white px-[1px]">
                                                        <div className="w-1 h-1 bg-[#ef4444] rounded-full" />
                                                    </div>
                                                    <div className="w-2 h-0.5 bg-[#ef4444]" />
                                                </div>
                                                <span className="text-gray-400 text-sm font-['Outfit']">Attach Resume</span>
                                            </div>
                                            <button className="relative border border-solid border-white content-stretch flex items-center justify-center h-12 px-8 rounded-[10px] cursor-pointer hover:brightness-95 transition-all z-20 overflow-hidden">
                                                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
                                                    <div className="absolute bg-gradient-to-b from-[#ed3543] inset-0 rounded-[10px] to-[#bb1f36]" />
                                                </div>
                                                <p className="font-['Outfit'] font-bold leading-[normal] relative shrink-0 text-sm text-white z-10">
                                                    Submit
                                                </p>
                                                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_18px_0px_#ffd9e8,inset_0px_1px_4px_0px_#ffd9e8]" />
                                            </button>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <div className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                            </div>
                                            <span className="text-red-500 text-xs font-medium font-['Outfit']">
                                                We'll connect you with the right BIM talent.
                                            </span>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="mt-8 flex justify-center items-center gap-6">
                        <button
                            onClick={() => paginate(-1)}
                            className="w-12 h-12 rounded-full border border-[#e5e7eb] bg-white flex items-center justify-center text-[#9ca3af] hover:text-[#ed3543] hover:border-[#ed3543] hover:shadow-lg transition-all"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <div className="flex gap-2">
                            {talentSlides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => jumpTo(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                        ? 'bg-[#ed3543] w-6'
                                        : 'bg-[#e5e7eb] w-2 hover:bg-[#d1d5db]'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => paginate(1)}
                            className="w-12 h-12 rounded-full border border-[#e5e7eb] bg-white flex items-center justify-center text-[#9ca3af] hover:text-[#ed3543] hover:border-[#ed3543] hover:shadow-lg transition-all"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
