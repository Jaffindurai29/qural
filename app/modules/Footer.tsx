'use client';
import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-[#030303] text-white pt-8 pb-16 px-4 font-['Manrope']">
            {/* Top Divider Line */}
            <div className='w-full max-w-7xl mx-auto border-t border-white/10 mb-12'></div>
            <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8'>
                {/* Left Column: Logo & Description */}
                <div className='lg:col-span-4 space-y-6'>
                    <div className='flex items-center gap-3'>
                        <Image
                            src='/qural-footer-icon.svg'
                            alt='Qural Logo'
                            width={150}
                            height={50}
                            className='w-48 h-auto'
                        />
                    </div>
                    <p className='text-white/60 leading-relaxed text-sm md:text-base max-w-sm'>
                        Qural bridges industry, academia, and talent through structured BIM pathways and specialized
                        talent deployment solutions.
                    </p>
                    <div className='flex gap-4 pt-4'>
                        <a
                            href='#'
                            className='w-10 h-10 rounded-xl bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition-opacity'
                        >
                            <Facebook size={20} className='text-white' />
                        </a>
                        <a
                            href='#'
                            className='w-10 h-10 rounded-xl bg-[#E4405F] flex items-center justify-center hover:opacity-80 transition-opacity'
                        >
                            <Instagram size={20} className='text-white' />
                        </a>
                        <a
                            href='#'
                            className='w-10 h-10 rounded-xl bg-[#0A66C2] flex items-center justify-center hover:opacity-80 transition-opacity'
                        >
                            <Linkedin size={20} className='text-white' />
                        </a>
                    </div>
                </div>

                {/* Right Columns: Links */}
                <div className='lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8'>
                    {/* EXPLORE */}
                    <div className='space-y-6'>
                        <h4 className='text-sm font-bold tracking-wider uppercase text-white/90'>EXPLORE</h4>
                        <ul className='space-y-4 text-sm text-white/60'>
                            <li>
                                <a href='#' className='hover:text-[#ed3543] transition-colors'>
                                    Talent Pipeline
                                </a>
                            </li>
                            <li>
                                <a href='#' className='hover:text-[#ed3543] transition-colors'>
                                    Recruitment Process
                                </a>
                            </li>
                            <li>
                                <a href='#' className='hover:text-[#ed3543] transition-colors'>
                                    Career Journeys
                                </a>
                            </li>
                            <li>
                                <a href='#' className='hover:text-[#ed3543] transition-colors'>
                                    Industry Courses
                                </a>
                            </li>
                            <li>
                                <a href='#' className='hover:text-[#ed3543] transition-colors'>
                                    Voices of Qural
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* ENTERPRISES */}
                    <div className='space-y-6'>
                        <h4 className='text-sm font-bold tracking-wider uppercase text-white/90'>ENTERPRISES</h4>
                        <ul className='space-y-4 text-sm text-white/60'>
                            <li>
                                <a href='#' className='hover:text-[#ed3543] transition-colors'>
                                    Hire BIM Talent
                                </a>
                            </li>
                            <li>
                                <a href='#' className='hover:text-[#ed3543] transition-colors'>
                                    Talent Solutions
                                </a>
                            </li>
                            <li>
                                <a href='#' className='hover:text-[#ed3543] transition-colors'>
                                    Speak to a Hiring Expert
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* ENGINEERS */}
                    <div className='space-y-6'>
                        <h4 className='text-sm font-bold tracking-wider uppercase text-white/90'>ENGINEERS</h4>
                        <ul className='space-y-4 text-sm text-white/60'>
                            <li>
                                <a href='#' className='hover:text-[#ed3543] transition-colors'>
                                    Apply for Opportunities
                                </a>
                            </li>
                            <li>
                                <a href='#' className='hover:text-[#ed3543] transition-colors'>
                                    Upskill with QURAL
                                </a>
                            </li>
                            <li>
                                <a href='#' className='hover:text-[#ed3543] transition-colors'>
                                    Placement Support
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* COMPANY */}
                    <div className='space-y-6'>
                        <h4 className='text-sm font-bold tracking-wider uppercase text-white/90'>COMPANY</h4>
                        <ul className='space-y-4 text-sm text-white/60'>
                            <li>
                                <a href='#' className='hover:text-[#ed3543] transition-colors'>
                                    About QURAL
                                </a>
                            </li>
                            <li>
                                <a href='#' className='hover:text-[#ed3543] transition-colors'>
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href='#' className='hover:text-[#ed3543] transition-colors'>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5'>
                <p className='text-xs text-white/30'>Copyright © 2023 Transparent. All rights reserved.</p>
            </div>
        </footer>
    );
}
