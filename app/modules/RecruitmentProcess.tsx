'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const steps = [
    {
        id: '01',
        title: 'Talent Sourcing & Screening',
        description: 'Identifying active and passive BIM professionals through our global talent network.',
    },
    {
        id: '02',
        title: 'Technical Evaluation & Shortlisting',
        description: 'Rigorous domain-level assessment by BIM industry experts.',
    },
    {
        id: '03',
        title: 'Client Selection & Engagement',
        description: 'Matching project requirements with precision-screened candidates.',
    },
    {
        id: '04',
        title: 'Onboarding & Continuous Support',
        description: 'Smooth deployment with post-placement performance monitoring.',
    },
];

export default function RecruitmentProcess() {
    return (
        <section className='w-full bg-[#030303] py-24 px-4 relative overflow-hidden'>
            {/* Background Radial Glow */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ed3543]/10 rounded-full blur-[120px] pointer-events-none z-0'></div>

            <div className='max-w-7xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-20 relative'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='relative z-10 flex flex-col items-center'
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Outfit']">
                            Know Our <span className='text-[#ed3543]'>Recruitment Process</span>
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl font-['Manrope'] mb-8 max-w-none whitespace-nowrap">
                            A seamless, data-driven process that converts potential into deployable performance.
                        </p>
                    </motion.div>
                </div>

                {/* Steps Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10'>
                    {/* Connecting Line (Desktop) - Positioned behind cards */}
                    <div className='hidden lg:block absolute top-14 left-[12.5%] w-[75%] h-px bg-linear-to-r from-transparent via-[#ed3543]/40 to-transparent z-0'>
                        {/* Traveling Bubble Animation - Circle shape */}
                        <motion.div
                            animate={{
                                x: ['0%', '100%'],
                                left: ['0%', '100%'],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                            style={{ x: '-50%' }}
                            className='absolute top-0 w-2.5 h-2.5 bg-[#ed3543] rounded-full shadow-[0_0_15px_#ed3543] -translate-y-1/2 z-0'
                        />
                    </div>

                    {/* Bottom Connecting Line (Desktop) */}

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, zIndex: 20 }}
                            className='relative group flex flex-col items-center h-full cursor-pointer z-10'
                        >
                            {/* Card */}
                            <div className='bg-[#050511] border border-white/5 rounded-2xl p-8 w-full hover:border-[#ed3543]/30 transition-colors duration-300 relative flex-1 min-h-[280px] flex flex-col justify-start'>
                                <div className='w-12 h-12 rounded-full bg-[#ed3543]/10 border border-[#ed3543]/20 flex items-center justify-center mb-6 text-[#ed3543] font-bold relative z-20'>
                                    <span className="font-['Outfit']">{step.id}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 font-['Outfit'] min-h-14 flex items-end">
                                    {step.title}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed font-['Manrope']">
                                    {step.description}
                                </p>
                            </div>

                            {/* Vertical Line Connector */}
                            <div className='hidden lg:block w-px h-12 bg-linear-to-b from-[#ed3543]/10 to-[#ed3543]/60 relative z-0'></div>

                            {/* Bottom Circle Connector - Refined Double Ring Design with Hover Effect */}
                            <div className='hidden lg:flex w-8 h-8 rounded-full bg-[#030303] border-2 border-[#ed3543]/80 z-20 items-center justify-center absolute top-[calc(100%-1rem)] shadow-[0_0_15px_rgba(237,53,67,0.4)]'>
                                <div className='w-2 h-2 rounded-full bg-[#ed3543] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(237,53,67,0.8)]'></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
