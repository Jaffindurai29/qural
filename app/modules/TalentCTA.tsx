'use client';
import React from 'react';
import { motion } from 'framer-motion';
import LeadModal from '../components/LeadModal';

const imgFrame1321314585 = 'https://www.figma.com/api/mcp/asset/8fb099de-3579-46e3-9ec7-9c3631f2af2e';

export default function TalentCTA() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [modalOption, setModalOption] = React.useState('');

    const openModal = (option: string) => {
        setModalOption(option);
        setIsModalOpen(true);
    };

    return (
        <section className='w-full relative overflow-hidden bg-linear-to-b from-[#CF0000]/90 to-[#030303] py-24 px-4'>
            {/* Decorative circles/rings overlay */}
            <div className='absolute inset-0 opacity-100 pointer-events-none z-0'>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/5 bg-white/[0.02] rounded-full'></div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/5 bg-white/[0.01] rounded-full'></div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] border border-white/5 bg-white/[0.01] rounded-full'></div>
            </div>

            {/* Background Radial Gradient to match the image style */}
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#CF0000] via-[#a81b25] to-[#030303] opacity-90 z-10'></div>

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
                    className="text-white/70 text-lg md:text-xl font-['Manrope'] mb-12 max-w-none mx-auto text-center text-nowrap"
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
                        <button
                            onClick={() => openModal('Finding a Talent')}
                            className='relative border border-solid border-white content-stretch flex h-[60px] items-center justify-center px-5 rounded-[10px] shadow-[0px_24.721px_32.257px_0px_rgba(229,0,92,0.19),0px_3.714px_4.846px_0px_rgba(229,0,92,0.15),0px_0px_0px_0px_#f8eaf0,0px_0px_0px_0px_white] cursor-pointer hover:brightness-95 transition-all z-20 group'
                        >
                            <div aria-hidden='true' className='absolute inset-0 pointer-events-none rounded-[10px]'>
                                <div className='absolute bg-linear-to-b from-[#ed3543] inset-0 rounded-[10px] to-[#bb1f36]' />
                                <div
                                    className='absolute bg-size-[307.20001220703125px_307.20001220703125px] bg-top-left inset-0 mix-blend-plus-lighter opacity-40 rounded-[10px]'
                                    style={{ backgroundImage: `url('${imgFrame1321314585}')` }}
                                />
                            </div>
                            <p className="font-['Outfit'] font-bold leading-[normal] relative shrink-0 text-xl text-white whitespace-nowrap">
                                Hire Talent Acquisition
                            </p>
                            <div className='absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_18px_0px_#ffd9e8,inset_0px_1px_4px_0px_#ffd9e8]' />
                        </button>
                        {/* Secondary Button */}
                        <button
                            onClick={() => openModal('Looking for a Job')}
                            className="px-10 h-[60px] flex items-center justify-center bg-white hover:bg-gray-50 text-[#ed3543] font-bold rounded-xl shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all duration-200 text-xl font-['Outfit'] whitespace-nowrap"
                        >
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

            <LeadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                defaultOption={modalOption}
            />
        </section>
    );
}
