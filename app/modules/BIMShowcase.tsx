"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

const talentSlides = [
    {
        id: 1,
        title: "Electrical BIM Modeler - Dubai",
        experience: "2+ Years",
        skills: "Revit | Navisworks | BIM Coordination",
        image: "/h1.png",
        location: "Dubai, UAE"
    },
    {
        id: 2,
        title: "Structural BIM Engineer",
        experience: "4+ Years",
        skills: "Tekla | Revit | Robot Structural",
        image: "/h2.png",
        location: "Riyadh, KSA"
    }
];

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? '100%' : '-100%',
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
                <div className="relative w-full max-w-5xl group">
                    <div className="relative h-[600px] md:h-auto md:aspect-[25/8] w-full bg-[#f8f8f8] rounded-2xl md:rounded-3xl border border-black/5 overflow-hidden flex flex-col md:flex-row items-center shadow-2xl">

                        {/* Global Texture Background */}
                        <div
                            className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none"
                            style={{
                                backgroundImage: 'url(/texture-bg.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        />

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
                                className="absolute inset-0 flex flex-col md:flex-row items-end md:items-center justify-end md:justify-normal pb-6 md:pb-0"
                            >
                                {/* Left Side: Building Structure Visual */}
                                <div className="absolute left-0 top-0 md:bottom-0 h-[45%] md:h-full w-full md:w-[60%] overflow-hidden bg-black">
                                    <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-black/40 to-black z-10" />

                                    {/* Combined Building Images */}
                                    <div className="relative w-full h-full filter contrast-125 brightness-110">
                                        <img
                                            src="/h1.png"
                                            alt="House Structure 1"
                                            className="absolute inset-0 w-full h-full object-contain object-left scale-95 -translate-x-4 translate-y-6 opacity-40"
                                        />
                                        <img
                                            src="/h2.png"
                                            alt="House Structure 2"
                                            className="absolute inset-0 w-full h-full object-contain object-left scale-100 translate-x-2 -translate-y-2 opacity-80"
                                        />
                                    </div>

                                    {/* Red Wireframe Effect Overlay */}
                                    <div className="absolute inset-0 bg-[#ed3543]/20 mix-blend-screen opacity-70 z-20 pointer-events-none" />
                                </div>

                                {/* Right Side: Talent Info Card */}
                                <div className="relative z-20 md:ml-auto w-full max-w-lg px-4 md:px-0">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="bg-white rounded-xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/5"
                                    >
                                        <div className="flex justify-between items-start mb-6">
                                            <span className="text-black/40 text-[10px] uppercase font-bold tracking-widest font-mono">
                                                Pre-screened by Qural
                                            </span>
                                            <div className="flex items-center gap-1.5 bg-blue-50 px-2.5 py-1 rounded-full">
                                                <User className="w-3 h-3 text-blue-600" />
                                                <span className="text-blue-600 text-[10px] font-bold uppercase tracking-tight">Verified Unit</span>
                                            </div>
                                        </div>

                                        <h3 className="text-black text-2xl font-bold font-['Outfit'] mb-4 leading-tight">
                                            {talentSlides[currentIndex].title}
                                        </h3>

                                        <div className="space-y-3 mb-8">
                                            <div>
                                                <span className="text-black/40 text-xs font-['Outfit'] block">Experience</span>
                                                <span className="text-black text-sm font-semibold font-['Outfit']">{talentSlides[currentIndex].experience}</span>
                                            </div>
                                            <div>
                                                <span className="text-black/40 text-xs font-['Outfit'] block">Skills</span>
                                                <span className="text-black text-sm font-semibold font-['Outfit']">{talentSlides[currentIndex].skills}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="flex-1 px-4 py-3 border border-gray-200 rounded-lg flex items-center gap-2 group/input hover:border-black/20 transition-colors">
                                                <div className="w-4 h-4 rounded-sm border border-gray-300 flex items-center justify-center text-[10px] text-gray-400">#</div>
                                                <span className="text-gray-400 text-sm font-['Outfit']">Attach Queries</span>
                                            </div>
                                            <button className="bg-[#ed3543] text-white px-8 py-3 rounded-lg font-bold font-['Outfit'] text-sm hover:bg-[#d02534] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-red-500/10">
                                                Submit
                                            </button>
                                        </div>

                                        <div className="mt-4 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                            <span className="text-green-600 text-[10px] font-medium font-['Outfit'] uppercase tracking-wide">
                                                Available for immediate deployment
                                            </span>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="mt-8 flex justify-center gap-4">
                        <button
                            onClick={() => paginate(-1)}
                            className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black/40 hover:text-black hover:border-black/30 transition-all"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <div className="flex gap-2 items-center">
                            {talentSlides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => jumpTo(idx)}
                                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#ed3543] w-4' : 'bg-black/10'}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={() => paginate(1)}
                            className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black/40 hover:text-black hover:border-black/30 transition-all"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
