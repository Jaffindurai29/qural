
"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HexagonNumber from '../components/HexagonNumber';

const sections = [
    {
        id: 'students',
        number: '1',
        title: 'Students',
        subtitle: 'Industry - Academia Gap',
        image: '/bee.png',
        leftText: 'Industry -\nAcademia gap\nin industry-ready skills.',
        content: {
            tag: 'From Campus to Career',
            heading: 'Learning ends before readiness begins.',
            description: 'Most engineering graduates leave college without hands-on exposure to real-world tools, workflows, and industry expectations — creating a gap between education and employability.',
            ctaPrimary: 'Explore the Approach',
            ctaSecondary: 'Get Career Clarity',
            footer: 'Trusted by 4,000+ engineering learners'
        }
    },
    {
        id: 'corporates',
        number: '2',
        title: 'Corporates',
        subtitle: 'Talent Deployment',
        image: '/bee.png',
        leftText: 'Companies struggle\nto find the\nright talent for projects',
        content: {
            tag: 'Rapid Deployment',
            heading: 'Deploy talent that is ready from Day 1.',
            description: 'Skip the training period. Our talent is vetted and trained on live projects to meet your specific needs immediately.',
            ctaPrimary: 'Hire Talent',
            ctaSecondary: 'Partner with Us',
            footer: 'Trusted by top AEC firms'
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
            heading: 'Upskill students for better placements.',
            description: 'Align your curriculum with industry demands to improve placement records and institutional reputation.',
            ctaPrimary: 'Institutional Partnership',
            ctaSecondary: 'Syllabus Review',
            footer: 'Partnered with 50+ institutions'
        }
    }
];

export default function WhyQural() {
    const [activeSection, setActiveSection] = useState<string | null>('students');

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
                    Why <span className="text-[#ed3543]">QURAL</span> exists?
                </h2>
                <p className="text-2xl text-gray-800 font-['DM_Sans']">
                    The gap isn't a lack of talent. It's readiness.
                </p>
            </div>

            {/* Content List */}
            <div className="w-full max-w-6xl mx-auto px-6">
                {sections.map((section) => {
                    const isActive = activeSection === section.id;

                    return (
                        <div key={section.id} className="border-t border-gray-200 last:border-b py-0">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start py-10 relative">
                                {/* Left Context Text */}
                                <div className="hidden md:block md:col-span-3 text-gray-500 font-['DM_Sans'] text-lg leading-snug whitespace-pre-line pt-2">
                                    {section.leftText}
                                </div>

                                {/* Main Title Row */}
                                <div
                                    className="md:col-span-9 flex items-center justify-between cursor-pointer group"
                                    onClick={() => setActiveSection(isActive ? null : section.id)}
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="flex flex-col">
                                            <div className="flex items-baseline gap-4">
                                                <h3 className={`text-6xl md:text-8xl font-['Patrick_Hand'] transition-colors ${isActive ? 'text-[#1a1a1a]' : 'text-gray-300'}`}>
                                                    {section.title}
                                                </h3>
                                                <HexagonNumber number={section.number} className="scale-125" />
                                            </div>
                                            <p className={`text-xl font-['DM_Sans'] transition-colors ${isActive ? 'text-[#1a1a1a]' : 'text-gray-400'}`}>
                                                {section.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className={`transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`}>
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 20H30M30 20L20 10M30 20L20 30" stroke={isActive ? "#1a1a1a" : "#d1d1d1"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Expandable Content */}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                    >
                                        <div className="pb-16 flex flex-col md:flex-row gap-12 items-center">
                                            {/* Vertical line continuation for the grid-like feel */}
                                            <div className="hidden md:block md:col-span-3"></div>

                                            <div className="w-full relative px-4 md:px-0">
                                                <div className="relative flex flex-col md:flex-row items-center">
                                                    {/* Section Image - Floating on the left to match image */}
                                                    <motion.div
                                                        initial={{ x: -20, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        className="md:absolute -left-12 lg:-left-24 z-20 w-48 md:w-64 pointer-events-none mt-8 md:mt-0"
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
                                                        className="w-full rounded-[40px] p-8 md:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col items-center text-center"
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
                                                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full border border-white/30 text-sm font-medium mb-8">
                                                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                                            {section.content.tag}
                                                        </div>

                                                        <h4 className="text-3xl md:text-5xl font-bold font-['Outfit'] mb-6 leading-tight max-w-2xl">
                                                            {section.content.heading}
                                                        </h4>

                                                        <p className="text-lg md:text-xl text-white/90 font-['DM_Sans'] mb-12 max-w-2xl leading-relaxed">
                                                            {section.content.description}
                                                        </p>

                                                        <div className="flex flex-wrap justify-center gap-5 mb-12">
                                                            <button className="bg-white text-[#ed3543] px-8 py-4 rounded-2xl font-bold font-['Outfit'] text-lg shadow-xl shadow-red-900/20 hover:scale-105 transition-transform">
                                                                {section.content.ctaPrimary}
                                                            </button>
                                                            <button className="bg-white/10 backdrop-blur-sm border border-white/40 text-white px-8 py-4 rounded-2xl font-bold font-['Outfit'] text-lg hover:bg-white/20 transition-all">
                                                                {section.content.ctaSecondary}
                                                            </button>
                                                        </div>

                                                        <div className="pt-8 border-t border-white/20 flex items-center justify-center gap-3 text-white/70 font-['DM_Sans'] w-full">
                                                            <span>Trusted by 4,000+ engineering learners</span>
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
        </section>
    );
}
