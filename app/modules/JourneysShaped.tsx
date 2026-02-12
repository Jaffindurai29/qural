"use client";
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import LeadModal from '../components/LeadModal';

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
    const [containerWidth, setContainerWidth] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalOption, setModalOption] = useState('');
    const containerRef = React.useRef<HTMLDivElement>(null);

    const openModal = (option: string) => {
        setModalOption(option);
        setIsModalOpen(true);
    };

    React.useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
        }
        const handleResize = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const cardWidth = typeof window !== 'undefined' && window.innerWidth < 768 ? window.innerWidth * 0.85 : 400;
    const gap = 24;

    // Offset to align to start
    const xOffset = -(currentIndex * (cardWidth + gap));

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % profileData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + profileData.length) % profileData.length);
    };

    const handleDragEnd = (event: any, info: any) => {
        const threshold = 50;
        if (info.offset.x < -threshold) {
            nextSlide();
        } else if (info.offset.x > threshold) {
            prevSlide();
        }
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
                <div className="w-full overflow-visible pb-5" ref={containerRef}>
                    <div className="relative w-full overflow-visible">
                        <motion.div
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={handleDragEnd}
                            animate={{ x: xOffset }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="flex gap-6 cursor-grab active:cursor-grabbing"
                            style={{ width: 'max-content' }}
                        >
                            {profileData.map((profile, i) => (
                                <motion.div
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`shrink-0 ${currentIndex !== i ? 'cursor-pointer' : ''}`}
                                    animate={{
                                        scale: 1,
                                        opacity: 1
                                    }}
                                >
                                    <ProfileCard
                                        name={profile.name}
                                        beforeRole={profile.before}
                                        afterRole={profile.after}
                                        profileImage={profile.profileImg}
                                        companyLogo={profile.logo}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Action Row: Nav and CTA Buttons */}
                <div className="w-full flex flex-col items-center gap-10">
                    {/* Navigation Circles */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/20 active:scale-95 transition-all z-30"
                        >
                            <span className="text-xl">‹</span>
                        </button>
                        <div className="flex gap-2">
                            {profileData.map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full transition-all ${currentIndex === i ? 'bg-white w-6' : 'bg-white/30'}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/20 active:scale-95 transition-all z-30"
                        >
                            <span className="text-xl">›</span>
                        </button>
                    </div>

                    {/* Main CTA Pair */}
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <button
                            onClick={() => openModal('Interested in Course')}
                            className="relative border border-solid border-white content-stretch flex items-center justify-center px-8 py-4 rounded-[10px] cursor-pointer hover:brightness-95 transition-all z-20 overflow-hidden"
                        >
                            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
                                <div className="absolute bg-gradient-to-b from-[#ed3543] inset-0 rounded-[10px] to-[#bb1f36]" />
                            </div>
                            <p className="font-['Outfit'] font-bold leading-[normal] relative shrink-0 text-lg text-white z-10">
                                Find Your Industry-Ready Path
                            </p>
                            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_18px_0px_#ffd9e8,inset_0px_1px_4px_0px_#ffd9e8]" />
                        </button>

                        <button
                            onClick={() => openModal('Looking for a Job')}
                            className="relative bg-[#f4f4f4] px-8 py-4 rounded-[10px] cursor-pointer hover:brightness-95 transition-all outline-none"
                        >
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
            <LeadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                defaultOption={modalOption}
            />
        </div>
    );
}
