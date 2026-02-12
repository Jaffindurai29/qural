
"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HexagonNumber from '../components/HexagonNumber';

const sections = [
    {
        id: 'corporates',
        number: '1',
        title: 'Corporates',
        subtitle: 'Talent Acquisition',
        image: '/bee.png',
        leftText: 'Businesses face\npersistent talent gaps\nrequiring end-to-end\nrecruitment.',
        content: {
            tag: 'Rapid Deployment',
            heading: 'Deploy talent that is ready from Day 1.',
            description: 'We deliver carefully curated engineering talent with niche domain capability for seamless project integration.',
            ctaPrimary: 'Hire Talent',
            ctaSecondary: 'Partner with Us',
            footer: 'Trusted by top AEC firms'
        }
    },
    {
        id: 'students',
        number: '2',
        title: 'Students',
        subtitle: 'Industry - Academia Gap',
        image: '/bee.png',
        leftText: 'Industry -\nAcademia gap\nin industry-ready skills.',
        content: {
            tag: 'From Campus to Career',
            heading: 'Trusted by Leading Colleges for Industry-Ready Outcomes.',
            description: 'Qural Academy equips engineering graduates with job-ready skills and a clear pathway into engineering careers',
            ctaPrimary: 'Explore the Approach',
            ctaSecondary: 'Get Career Clarity',
            footer: 'Trusted by 4,000+ engineering learners'
        }
    },
    {
        id: 'colleges',
        number: '3',
        title: 'Colleges',
        subtitle: 'Upskilling & Placements',
        image: '/bee.png',
        leftText: 'Curriculum\nmisaligned with\nskills and\nplacement outcomes.',
        content: {
            tag: 'Bridge the Gap',
            heading: 'Build your College on Industry-Aligned Curriculum.',
            description: 'Collaborate with Qural to co-create industry-aligned programs and jointly deliver workplace-ready graduates with stronger placements.',
            ctaPrimary: 'Institutional Partnership',
            ctaSecondary: 'Syllabus Review',
            footer: 'Partnered with 50+ institutions'
        }
    }
];

export default function WhyQural() {
    const [activeSection, setActiveSection] = useState<string | null>('corporates');

    return (
        <section id="why-qural" className="w-full bg-white py-24 flex flex-col items-center relative overflow-hidden" data-section="why-qural">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03] -z-10"
                style={{
                    backgroundImage: 'url(/Group-polygon.svg)',
                    backgroundSize: '300px',
                    backgroundRepeat: 'repeat',
                }}
            />

            {/* Background Decoration Accents */}
            <div className="absolute top-20 right-[-5%] opacity-10 pointer-events-none select-none -z-10">
                <img src="/Group-polygon.svg" alt="" className="w-[500px]" />
            </div>
            <div className="absolute bottom-20 left-[-5%] opacity-10 pointer-events-none select-none -z-10 rotate-180">
                <img src="/Group-polygon.svg" alt="" className="w-[500px]" />
            </div>

            {/* Header */}
            <div className="text-center mt-[-60px] mb-10 px-4">
                <h2 className="text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-3 font-['Outfit']">
                    The <span className="text-[#ed3543]">QURAL</span> Ecosystem.
                </h2>
                <p className="text-2xl text-gray-800 font-['Outfit']">
                    Our Three Powerful Pillars.
                </p>
            </div>

            {/* Content List */}
            <div className="w-full max-w-[1400px] mx-auto px-6">
                {sections.map((section) => {
                    const isActive = activeSection === section.id;

                    return (
                        <div key={section.id} className="border-t border-gray-200 last:border-b py-0">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start py-6 md:py-10 relative">
                                {/* Left Context Text */}
                                <div className="hidden md:block md:col-span-3 text-gray-500 font-['Outfit'] text-lg leading-snug whitespace-pre-line pt-2">
                                    {section.leftText}
                                </div>

                                {/* Main Title Row */}
                                <div
                                    className="md:col-span-9 flex items-center justify-between cursor-pointer group"
                                    onClick={() => setActiveSection(isActive ? null : section.id)}
                                    onMouseEnter={() => {
                                        if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                                            setActiveSection(section.id);
                                        }
                                    }}
                                >
                                    <div className="flex items-center gap-4 md:gap-6">
                                        <HexagonNumber number={section.number} className="scale-90 md:scale-125 md:translate-y-[-10px]" />
                                        <div className="flex flex-col">
                                            <motion.h3
                                                animate={{ color: isActive ? '#1a1a1a' : '#d1d5db' }}
                                                transition={{ duration: 0.3 }}
                                                className="text-3xl md:text-6xl font-['Roboto'] font-bold"
                                            >
                                                {section.title}
                                            </motion.h3>
                                            <motion.p
                                                animate={{ color: isActive ? '#1a1a1a' : '#9ca3af' }}
                                                transition={{ duration: 0.3 }}
                                                className="text-base md:text-xl font-['Outfit']"
                                            >
                                                {section.subtitle}
                                            </motion.p>
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <motion.div
                                        animate={{ rotate: isActive ? 90 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        <svg width="24" height="24" viewBox="0 0 40 40" className="md:w-10 md:h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 20H30M30 20L20 10M30 20L20 30" stroke={isActive ? "#1a1a1a" : "#d1d1d1"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Expandable Content */}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            height: { type: "spring", stiffness: 300, damping: 30, restDelta: 0.5 },
                                            opacity: { duration: 0.2 }
                                        }}
                                    >
                                        <div className="pb-6 md:pb-16 flex flex-col md:flex-row md:gap-12 items-center">
                                            {/* Vertical line continuation for the grid-like feel */}
                                            <div className="hidden md:block md:col-span-3"></div>

                                            <div className="w-full relative px-4 md:px-0">
                                                <div className="relative flex flex-col md:flex-row items-center">
                                                    {/* Section Image - Floating on the left to match image */}
                                                    <motion.div
                                                        initial={{ x: -20, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        className="md:absolute -left-12 lg:-left-24 z-20 w-48 md:w-64 pointer-events-none md:my-0"
                                                    >
                                                        <img
                                                            src={section.image}
                                                            alt={section.title}
                                                            className="w-full h-auto drop-shadow-2xl animate-float-slow"
                                                            onError={(e) => {
                                                                (e.target as HTMLImageElement).src = "https://cdn-icons-png.flaticon.com/512/3220/3220353.png"; // Fallback
                                                            }}
                                                        />
                                                    </motion.div>

                                                    {/* Content Card */}
                                                    <div
                                                        className="w-full rounded-[40px] px-5 py-6 md:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col items-center text-center"
                                                        style={{
                                                            background: 'linear-gradient(135deg, #FF5F6D 0%, #ed3543 100%)',
                                                            boxShadow: '0 30px 60px -15px rgba(237, 53, 67, 0.4)'
                                                        }}
                                                    >
                                                        {/* Polygon Pattern Overlay */}
                                                        <div
                                                            className="absolute inset-0 pointer-events-none opacity-20"
                                                            style={{
                                                                backgroundImage: 'url(/Group-polygon.svg)',
                                                                backgroundSize: '200px',
                                                                backgroundRepeat: 'repeat',
                                                                mixBlendMode: 'soft-light'
                                                            }}
                                                        />
                                                        {/* Top Badge */}
                                                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30 text-xs font-medium mb-3 md:mb-6">
                                                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                                            {section.content.tag}
                                                        </div>

                                                        <h4 className="text-2xl md:text-4xl font-bold font-['Outfit'] mb-2 md:mb-4 leading-tight max-w-2xl">
                                                            {section.content.heading}
                                                        </h4>

                                                        <p className="text-base md:text-lg text-white/90 font-['Outfit'] mb-4 md:mb-8 max-w-2xl leading-relaxed">
                                                            {section.content.description}
                                                        </p>

                                                        <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-8">
                                                            <button className="relative border border-solid border-white content-stretch flex items-center justify-center px-6 py-3 rounded-[10px] cursor-pointer hover:brightness-95 transition-all z-20 overflow-hidden">
                                                                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
                                                                    <div className="absolute bg-gradient-to-b from-[#ed3543] inset-0 rounded-[10px] to-[#bb1f36]" />
                                                                </div>
                                                                <p className="font-['Outfit'] font-bold leading-[normal] relative shrink-0 text-[16px] text-white z-10">
                                                                    {section.content.ctaSecondary}
                                                                </p>
                                                                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_18px_0px_#ffd9e8,inset_0px_1px_4px_0px_#ffd9e8]" />
                                                            </button>
                                                        </div>

                                                        <div className="pt-4 md:pt-8 border-t border-white/20 flex items-center justify-center gap-3 text-white/70 font-['Outfit'] w-full">
                                                            <span>Powered by a large, global niche talent database.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </section >
    );
}
