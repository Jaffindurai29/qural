
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Globe, Briefcase, Users, ArrowRight } from 'lucide-react';
import HexagonNumber from '../components/HexagonNumber';

const features = [
    {
        id: "01",
        title: "Best Turnaround Time",
        desc: "Profiles delivered in days, not weeks.",
        icon: Clock
    },
    {
        id: "02",
        title: "Global Talent Acquisition Network",
        desc: "Active & passive talent across India, Middle East, UK, and APAC.",
        icon: Globe
    },
    {
        id: "03",
        title: "AEC Industry Experts as Hiring Leaders",
        desc: "Hiring led by professionals who've worked on real AEC projects.",
        icon: Briefcase,
        highlight: true
    },
    {
        id: "04",
        title: "Dedicated Talent Pipeline Team",
        desc: "Always-on screening, validation, and deployment team.",
        icon: Users
    }
];

export default function BIMHRPartner() {
    return (
        <section id="hr-partner" className="w-full bg-[#030303] py-24 relative overflow-hidden" data-section="bim-hr-partner">

            {/* Background Pattern (Matching Home aesthetic but dark) */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.15]"
                style={{
                    backgroundImage: 'url(/Group-polygon.svg)',
                    backgroundSize: '300px',
                    backgroundRepeat: 'repeat',
                    filter: 'invert(1)'
                }}
            />

            {/* Ambient Red Glows for Depth */}
            <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] bg-[#ed3543] rounded-full filter blur-[180px] opacity-[0.05] pointer-events-none"></div>
            <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[#ed3543] rounded-full filter blur-[180px] opacity-[0.03] pointer-events-none"></div>

            {/* Background Decoration Accents */}
            <div className="absolute top-20 right-[-5%] opacity-10 pointer-events-none select-none filter invert(1)">
                <img src="/Group-polygon.svg" alt="" className="w-[500px]" />
            </div>
            <div className="absolute bottom-20 left-[-5%] opacity-10 pointer-events-none select-none rotate-180 filter invert(1)">
                <img src="/Group-polygon.svg" alt="" className="w-[500px]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* Centered Header (Matching Home structural rhythm) */}
                <div className="text-center mb-20 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Outfit'] tracking-tight"
                    >
                        Your Specialized <span className="text-[#ed3543]">Talent Acquisition</span> Partner
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="inline-block"
                    >
                        <p className="text-xl md:text-2xl text-white/80 font-['Outfit'] bg-white/[0.03] px-6 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                            Fastest turnaround. <span className="text-[#ed3543] font-bold">Uncompromised talent quality.</span>
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Left side: Detailed Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7"
                    >
                        <div className="space-y-8 text-white/70 font-['Outfit'] text-lg md:text-xl leading-relaxed">
                            <div className="p-8 bg-white/[0.03] rounded-[32px] border border-white/10 backdrop-blur-md relative overflow-hidden group shadow-2xl">
                                <div className="absolute top-0 left-0 w-2 h-full bg-[#ed3543] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <p className="relative z-10 italic text-white/90">
                                    "Led by professionals with <span className="text-white font-bold">10+ years of industry experience</span>, we understand real project demands, technical expectations, and hiring risks."
                                </p>
                            </div>

                            <div className="px-4">
                                <p className="mb-6">
                                    Qural serves as your <span className="text-white font-bold underline decoration-red-500/50 underline-offset-4">single point of contact</span> for fast, reliable, and seamless talent acquisition.
                                </p>
                                <p>
                                    Our domain experts conduct rigorous technical pre-screening to ensure you receive project-ready professionals — reducing hiring time and operational risk.
                                </p>
                            </div>

                            <div className="pt-6">
                                <button className="relative border border-solid border-white content-stretch flex items-center justify-center px-10 py-5 rounded-[12px] cursor-pointer hover:brightness-95 transition-all z-20 overflow-hidden group">
                                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
                                        <div className="absolute bg-gradient-to-b from-[#ed3543] inset-0 rounded-[12px] to-[#bb1f36]" />
                                    </div>
                                    <div className="font-['Outfit'] font-bold leading-[normal] relative shrink-0 text-white z-10 flex items-center">
                                        Speak to a Talent Acquisition Expert
                                        <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
                                    </div>
                                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_18px_0px_#ffd9e8,inset_0px_1px_4px_0px_#ffd9e8]" />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side: Cards (Glassmorphism) */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 20, x: 20 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className={`group relative bg-white/[0.02] border ${feature.highlight ? 'border-[#ed3543]/50 shadow-[0_15px_40px_-15px_rgba(237,53,67,0.3)]' : 'border-white/10 shadow-sm'} rounded-3xl p-6 hover:shadow-2xl hover:border-[#ed3543]/40 transition-all duration-500 overflow-visible backdrop-blur-sm`}
                            >
                                {/* Bee Illustration on Card 01 */}
                                {feature.id === "01" && (
                                    <div className="absolute -top-12 -right-8 w-24 h-24 z-20 pointer-events-none animate-float-slow">
                                        <img src="/bee.png" alt="Bee" className="w-full h-full object-contain transform rotate-12" />
                                    </div>
                                )}

                                <div className="flex items-start gap-5">
                                    <div className="shrink-0 pt-1">
                                        {/* HexagonNumber adjusts internally, but we'll ensure it has enough contrast */}
                                        <HexagonNumber number={feature.id} className="scale-90 origin-top" />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-1">
                                            <feature.icon className={`w-5 h-5 ${feature.highlight ? 'text-[#ed3543]' : 'text-white/40 group-hover:text-white/60 transition-colors'}`} />
                                            <h4 className="text-xl font-bold text-white font-['Outfit'] group-hover:text-[#ed3543] transition-colors">
                                                {feature.title}
                                            </h4>
                                        </div>
                                        <p className="text-white/40 text-sm font-['Outfit'] leading-relaxed group-hover:text-white/60 transition-colors">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Subtle bottom light line */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-0 bg-gradient-to-r from-transparent via-[#ed3543]/50 to-transparent transition-all duration-500 group-hover:w-full"></div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
