'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Globe, Award, Users } from 'lucide-react';
import LeadModal from '../components/LeadModal';

const imgFrame1321314585 = 'https://www.figma.com/api/mcp/asset/8fb099de-3579-46e3-9ec7-9c3631f2af2e';

const features = [
    {
        id: '01',
        title: 'Best Turnaround Time',
        description: 'Profiles delivered in days, not weeks.',
        icon: <Clock className='w-6 h-6' />,
    },
    {
        id: '02',
        title: 'Global Talent Acquisition Network',
        description: 'Active & passive talent across India, Middle East, UK, and APAC.',
        icon: <Globe className='w-6 h-6' />,
    },
    {
        id: '03',
        title: 'AEC Industry Experts as HR Leaders',
        description: 'Hiring led by professionals who’ve worked on real AEC projects.',
        icon: <Award className='w-6 h-6' />,
    },
    {
        id: '04',
        title: 'Dedicated Talent Pipeline Team',
        description: 'Always-on screening, validation, and deployment team.',
        icon: <Users className='w-6 h-6' />,
    },
];

export default function SpecializedPartner() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalOption, setModalOption] = useState('');

    const openModal = (option: string) => {
        setModalOption(option);
        setIsModalOpen(true);
    };

    return (
        <section className='w-full bg-[#030303] py-16 md:py-24 px-4 relative overflow-hidden'>
            {/* Decorative Background Elements for Differentiation */}
            <div className='absolute inset-0 opacity-40 pointer-events-none z-0'>
                {/* Glass rings similar to TalentCTA but shifted */}
                <div className='absolute -top-[10%] -left-[10%] w-[800px] h-[800px] border border-white/5 bg-white/1 rounded-full'></div>
                <div className='absolute -top-[15%] -left-[15%] w-[1000px] h-[1000px] border border-white/5 bg-white/0.5 rounded-full'></div>

                {/* Top-Right Red Glow */}
                <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(237,53,67,0.15),transparent_70%)] blur-3xl'></div>
            </div>

            <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center relative z-10'>
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className='space-y-8'
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white font-['Outfit'] leading-[1.1]">
                        <span className='text-[#ed3543]'>QURAL</span>, Your Specialized{' '}
                        <span className='text-white'>Talent Acquisition Partner</span>
                    </h2>

                    <div className="space-y-6 text-white/70 text-lg md:text-xl font-['Manrope'] leading-relaxed">
                        <p>
                            Led by professionals with{' '}
                            <span className='text-white font-bold'>10+ years of industry experience</span>, we
                            understand real project demands, technical expectations, and hiring risks.
                        </p>
                        <p>
                            Qural serves as your <span className='text-white font-bold'>single point of contact</span>{' '}
                            for fast, reliable, and seamless talent acquisition. Our domain experts conduct rigorous
                            technical pre-screening to ensure you receive project-ready professionals — reducing hiring
                            time and operational risk.
                        </p>
                    </div>

                    <div className="text-xl md:text-2xl font-bold font-['Outfit']">
                        <span className='text-white'>Fastest turnaround. </span>
                        <span className='text-[#ed3543]'>Uncompromised talent quality.</span>
                    </div>

                    <button
                        onClick={() => openModal('Finding a Talent')}
                        className='relative border border-solid border-white content-stretch flex h-auto min-h-[60px] items-center justify-center px-6 sm:px-10 py-4 rounded-[10px] shadow-[0px_24.721px_32.257px_0px_rgba(229,0,92,0.19),0px_3.714px_4.846px_0px_rgba(229,0,92,0.15),0px_0px_0px_0px_#f8eaf0,0px_0px_0px_0px_white] cursor-pointer hover:brightness-95 transition-all z-20 group w-full sm:w-auto'
                    >
                        <div aria-hidden='true' className='absolute inset-0 pointer-events-none rounded-[10px]'>
                            <div className='absolute bg-linear-to-b from-[#ed3543] inset-0 rounded-[10px] to-[#bb1f36]' />
                            <div
                                className='absolute bg-size-[307.20001220703125px_307.20001220703125px] bg-top-left inset-0 mix-blend-plus-lighter opacity-40 rounded-[10px]'
                                style={{ backgroundImage: `url('${imgFrame1321314585}')` }}
                            />
                        </div>
                        <p className="font-['Outfit'] font-bold leading-[tight] relative shrink-0 text-lg md:text-xl text-white text-center">
                            Speak to a Specialized Partner
                        </p>
                        <div className='absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_18px_0px_#ffd9e8,inset_0px_1px_4px_0px_#ffd9e8]' />
                    </button>
                </motion.div>

                {/* Right Content - Features */}
                <div className='space-y-6'>
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, x: 10 }}
                            className='bg-white/5 backdrop-blur-sm border border-white/10 p-5 md:p-6 rounded-2xl flex items-start sm:items-center gap-4 sm:gap-6 relative group overflow-hidden cursor-pointer hover:border-[#ed3543]/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
                        >
                            {/* Ghost Number */}
                            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-5xl sm:text-7xl font-bold text-white/5 font-['Outfit'] select-none">
                                {feature.id}
                            </span>
                            <div className='w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#ed3543]/10 border border-[#ed3543]/20 flex items-center justify-center text-[#ed3543] shrink-0 relative z-10 group-hover:bg-[#ed3543] group-hover:text-white transition-colors duration-300'>
                                {feature.icon}
                            </div>
                            <div className='relative z-10'>
                                <h3 className="text-lg md:text-xl font-bold text-white mb-1 font-['Outfit']">{feature.title}</h3>
                                <p className="text-white/50 font-['Manrope'] text-xs md:text-sm">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <LeadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                defaultOption={modalOption}
                title="Speak to a Specialized Partner"
            />
        </section>
    );
}
