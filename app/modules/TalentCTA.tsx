'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function TalentCTA() {
    return (
        <section className='w-full relative overflow-hidden bg-gradient-to-b from-[#CF0000]/90 to-[#030303] py-24 px-4'>
            {/* Decorative circles/rings overlay */}
            <div className='absolute inset-0 opacity-100 pointer-events-none z-0'>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/5 bg-white/[0.02] rounded-full'></div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/5 bg-white/[0.01] rounded-full'></div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] border border-white/5 bg-white/[0.01] rounded-full'></div>
            </div>

            {/* Background Radial Gradient to match the image style */}
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#CF0000] via-[#a81b25] to-[#030303] opacity-90 z-10'></div>

            <div className='max-w-4xl mx-auto text-center relative z-10'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-2 font-['Outfit'] tracking-tight leading-tight"
                >
                    Engineering talent.
                </motion.h2>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-8 font-['Outfit'] tracking-tight leading-tight"
                >
                    Delivered with precision.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-white/70 text-lg md:text-xl font-['Manrope'] mb-12 max-w-2xl mx-auto text-nowrap"
                >
                    From sourcing to deployment — Qural powers BIM careers and global AEC teams.
                </motion.p>

                <div className='inline-flex flex-col items-center mx-auto max-w-full'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className='flex flex-col sm:flex-row items-center justify-center gap-6 mb-4 w-full'
                    >
                        {/* Primary Button */}
                        <button className="px-8 py-4 bg-[#d92936] hover:bg-[#c4212d] text-white font-bold rounded-xl shadow-[inset_0_4px_20px_rgba(255,255,255,0.5),_0_4px_14px_0_rgba(0,0,0,0.39)] hover:shadow-[inset_0_4px_20px_rgba(255,255,255,0.5),_0_6px_20px_rgba(0,0,0,0.23)] hover:-translate-y-0.5 transition-all duration-200 min-w-[200px] ring-2 ring-white/20 border border-white text-xl font-['Outfit']">
                            Hire BIM Talent
                        </button>

                        {/* Secondary Button */}
                        <button className="px-8 py-4 bg-white hover:bg-gray-50 text-[#ed3543] font-bold rounded-xl shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all duration-200 min-w-[200px] text-xl font-['Outfit']">
                            Start Your Career Journey
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 mt-2 text-white/60 font-['Inter'] text-sm md:text-base w-full px-1"
                    >
                        <span className='text-nowrap'>
                            Trusted across <span className='font-bold text-white'>9+ markets</span>
                        </span>
                        <span className='hidden sm:block h-4 w-px bg-white/30 mx-auto'></span>
                        <span className='text-nowrap text-right'>
                            <span className='font-bold text-white'>2,800+</span> professionals deployed
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
