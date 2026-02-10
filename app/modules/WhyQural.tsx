
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Assets (Using placeholders where specific assets are missing)
const imgBee = "/bee.png"; // Placeholder for the bee illustration
// If user provides the actual asset later, we swap this out.

const sections = [
    {
        id: 'students',
        title: 'Students (Industry - Academia Gap)',
        leftText: 'Industry - Academia gap in industry-ready skills.',
        content: {
            tag: 'From Campus to Career',
            heading: 'Learning ends before readiness begins.',
            description: 'Most engineering graduates leave college without hands-on exposure to real-world tools, workflows, and industry expectations — creating a gap between education and employability.',
            ctaPrimary: 'Explore the Approach',
            ctaSecondary: 'Get Career Clarity',
            footer: 'Trusted by 4,000+ engineering learners'
        },
        isOpen: true // Default open state as per design
    },
    {
        id: 'corporates',
        title: 'Corporates (Talent Deployment)',
        leftText: 'Companies struggle to find the right talent for projects',
        content: {
            // Placeholder content for closed sections until expanded instructions
            tag: 'Rapid Deployment',
            heading: 'Deploy talent that is ready from Day 1.',
            description: 'Skip the training period. Our talent is vetted and trained on live projects.',
            ctaPrimary: 'Hire Talent',
            ctaSecondary: 'Partner with Us',
            footer: 'Trusted by top AEC firms'
        },
        isOpen: false
    },
    {
        id: 'colleges',
        title: 'Colleges (Curriculum / Placements / Skills)',
        leftText: 'Curriculum misaligned with skills and placement outcomes.',
        content: {
            // Placeholder content
            tag: 'Bridge the Gap',
            heading: 'Upskill students for better placements.',
            description: 'Align your curriculum with industry demands to improve placement records.',
            ctaPrimary: 'Institutional Partnership',
            ctaSecondary: 'Syllabus Review',
            footer: 'Partnered with 50+ institutions'
        },
        isOpen: false
    }
];

export default function WhyQural() {
    const [activeSection, setActiveSection] = useState<string | null>('students');

    const toggleSection = (id: string) => {
        setActiveSection(activeSection === id ? null : id);
    };

    return (
        <section className="w-full bg-white py-24 flex flex-col items-center overflow-hidden" data-section="why-qural">

            {/* Header */}
            <div className="text-center mb-16 px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Outfit']">
                    Why <span className="text-[#ed3543]">QURAL</span> exists?
                </h2>
                <p className="text-xl text-gray-600 font-['DM_Sans']">
                    The gap isn't a lack of talent. It's readiness.
                </p>
            </div>

            {/* Accordion Container */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
                {sections.map((section) => {
                    const isActive = activeSection === section.id;

                    return (
                        <div key={section.id}
                            className={`border-b border-gray-100 last:border-0 py-6 transition-all duration-300 ${isActive ? '' : 'hover:bg-gray-50/50 cursor-pointer'}`}
                            onClick={() => !isActive && toggleSection(section.id)}
                        >
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12 relative">

                                {/* Left Side Text (Context) */}
                                <div className="w-full md:w-1/4 text-gray-500 font-['DM_Sans'] text-sm md:text-base leading-relaxed pl-2 border-l-2 border-transparent md:border-l-0 md:pl-0">
                                    {section.leftText}
                                    {/* Mobile visual cue for active state */}
                                    {isActive && <div className="md:hidden h-full w-1 bg-[#ed3543] absolute left-0 top-0 rounded-full" />}
                                </div>


                                {/* Main Content Area */}
                                <div className="w-full md:w-3/4">

                                    {/* Header Row (Always Visible) */}
                                    <div className="flex justify-between items-center w-full mb-4">
                                        <h3 className={`text-2xl md:text-3xl font-['Outfit'] transition-colors duration-300 ${isActive ? 'font-bold text-gray-900' : 'font-normal text-gray-400'}`}>
                                            {section.title}
                                        </h3>

                                        {/* Arrow Icon */}
                                        <div className={`transform transition-transform duration-300 ${isActive ? 'rotate-90' : 'rotate-0'}`}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 5V19M19 12H5" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className={`${isActive ? 'hidden' : 'block'}`} /> {/* Plus icon when closed? Or arrow? User showed arrow. */}
                                                {/* Arrow Right */}
                                                <path d="M9 18L15 12L9 6" stroke={isActive ? "#ed3543" : "#9CA3AF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Expandable Content */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-4 pb-8 flex flex-col md:flex-row gap-8 items-center">

                                                    {/* Illustration (Bee) - only appears for students section specifically in design, but maybe others have images? 
                                        Design shows bee on the left of the card. */}
                                                    {section.id === 'students' && (
                                                        <motion.div
                                                            initial={{ x: -20, opacity: 0 }}
                                                            animate={{ x: 0, opacity: 1 }}
                                                            transition={{ delay: 0.2 }}
                                                            className="w-full md:w-1/3 flex justify-center md:justify-end"
                                                        >
                                                            <img src={imgBee} alt="Ready Bee" className="w-48 md:w-64 h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500" />
                                                        </motion.div>
                                                    )}

                                                    {/* Content Card (Red Gradient) */}
                                                    <div className={`relative rounded-3xl p-8 md:p-10 shadow-2xl text-white overflow-hidden w-full ${section.id === 'students' ? 'md:w-2/3' : 'md:w-full'}`}
                                                        style={{
                                                            background: 'linear-gradient(135deg, #FF6B6B 0%, #ed3543 50%, #C41C30 100%)',
                                                            boxShadow: '0 20px 40px -10px rgba(237, 53, 67, 0.4)'
                                                        }}
                                                    >
                                                        {/* Decorative Background Noise/Pattern */}
                                                        <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>

                                                        <div className="relative z-10 flex flex-col items-start gap-4">
                                                            {/* Top Tag */}
                                                            <div className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30 text-sm font-['Outfit'] font-medium mb-2 inline-flex items-center gap-2">
                                                                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                                                                {section.content.tag}
                                                            </div>

                                                            {/* Heading */}
                                                            <h4 className="text-3xl md:text-4xl font-bold font-['Outfit'] leading-tight mb-2">
                                                                {section.content.heading}
                                                            </h4>

                                                            {/* Description */}
                                                            <p className="text-lg text-white/90 font-['DM_Sans'] leading-relaxed mb-8 max-w-2xl">
                                                                {section.content.description}
                                                            </p>

                                                            {/* CTAs */}
                                                            <div className="flex flex-wrap gap-4 w-full">
                                                                <button className="bg-white text-[#ed3543] px-8 py-3 rounded-xl font-bold font-['Outfit'] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                                                                    {section.content.ctaPrimary}
                                                                </button>
                                                                <button className="bg-white/10 backdrop-blur-sm text-white border border-white/40 px-8 py-3 rounded-xl font-bold font-['Outfit'] hover:bg-white/20 transition-all duration-300">
                                                                    {section.content.ctaSecondary}
                                                                </button>
                                                            </div>

                                                            {/* Footer */}
                                                            <div className="mt-8 pt-6 border-t border-white/20 w-full text-white/70 text-sm font-['DM_Sans'] flex items-center gap-2">
                                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                                                {section.content.footer}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
