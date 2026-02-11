
"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Placeholder Assets
const imgBee = "/bee.png";
const imgCourseThumb = "/block.jpg";

const courses = [
    {
        id: 1,
        title: "Advanced Architecture BIM Professional",
        subtitle: "From design intent to construction-ready models.",
        image: imgCourseThumb,
        stats: { likes: "31.2K", comments: "13.4K" },
        details: {
            duration: "7 Months, Offline",
            deadline: "3rd March",
            rating: 4.8,
            enrolled: "6000+"
        }
    },
    {
        id: 2,
        title: "Advanced Structural BIM Professional",
        subtitle: "From design intent to construction-ready models.",
        image: imgCourseThumb,
        stats: { likes: "31.2K", comments: "13.4K" },
        details: {
            duration: "7 Months, Offline",
            deadline: "3rd March",
            rating: 4.8,
            enrolled: "6000+"
        }
    },
    {
        id: 3,
        title: "Advanced HVAC BIM Professional",
        subtitle: "From design intent to construction-ready models.",
        image: imgCourseThumb,
        stats: { likes: "31.2K", comments: "13.4K" },
        details: {
            duration: "7 Months, Offline",
            deadline: "3rd March",
            rating: 4.8,
            enrolled: "6000+"
        }
    }
];

const RatingStars = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
        <span className="text-xs text-[#ed3543] font-bold ml-1">{rating}</span>
    </div>
);

export default function PathToIndustryReady() {
    return (
        <section id="career-paths" className="w-full bg-[#ed3543] py-24 relative overflow-hidden" data-section="path-to-industry-ready">

            {/* Background Decor (Waves/Mesh) */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/20 to-transparent"></div>
                {/* Add customizable SVG wave/hex pattern here if needed */}
            </div>

            {/* Header Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-white font-['Outfit'] mb-4">
                    Paths to <br className="md:hidden" /> Industry-Ready Roles
                </h2>
                <p className="text-white/80 text-lg md:text-xl font-['Outfit'] max-w-2xl mx-auto">
                    We transform engineering graduates into BIM-ready professionals across Architecture, Structure, and MEP Construction.
                </p>

                {/* Floating Bee Illustration */}
                <div className="absolute -right-4 top-0 md:-top-10 md:right-10 w-32 md:w-48 hidden sm:block animate-bounce-slow">
                    <img src={imgBee} alt="Bee" className="w-full h-auto object-contain transform rotate-12" />
                </div>
            </div>

            {/* Cards Grid */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <motion.div
                            key={course.id}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-3xl p-4 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Card Image Area */}
                            <div className="relative h-48 rounded-2xl overflow-hidden mb-6 group">
                                <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                                {/* Floating stats badges */}
                                <div className="absolute bottom-3 left-3 flex gap-2">
                                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                                        <span className="text-red-500 text-xs">♥</span>
                                        <span className="text-[10px] font-bold text-gray-700">{course.stats.likes}</span>
                                    </div>
                                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                                        <span className="text-green-500 text-xs">💬</span>
                                        <span className="text-[10px] font-bold text-gray-700">{course.stats.comments}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="px-2 pb-2">
                                <h3 className="text-[#ed3543] font-['Outfit'] font-bold text-xl mb-2 line-clamp-2 min-h-[56px]">
                                    {course.title}
                                </h3>
                                <p className="text-gray-500 font-['Outfit'] text-sm mb-6">
                                    {course.subtitle}
                                </p>

                                {/* Details Grid */}
                                <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6 border-b border-gray-100 pb-6">
                                    <div>
                                        <p className="text-xs text-gray-400 font-medium mb-1">Program Duration</p>
                                        <p className="text-sm font-bold text-gray-800">{course.details.duration}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 font-medium mb-1">Application Deadline</p>
                                        <p className="text-sm font-bold text-gray-800">{course.details.deadline}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 font-medium mb-1">Program Rating</p>
                                        <RatingStars rating={course.details.rating} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 font-medium mb-1">Learners Enrolled</p>
                                        <p className="text-sm font-bold text-gray-800">{course.details.enrolled}</p>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button className="w-full bg-gradient-to-r from-[#ed3543] to-[#C41C30] text-white py-3 rounded-xl font-['Outfit'] font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                                    Explore this path
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
