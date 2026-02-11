'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Placeholder Assets
const imgAvatar1 = 'https://i.pravatar.cc/150?img=11';
const imgAvatar2 = 'https://i.pravatar.cc/150?img=12';
const imgAvatar3 = 'https://i.pravatar.cc/150?img=32';
const imgAvatar4 = 'https://i.pravatar.cc/150?img=44';
const imgAvatar5 = 'https://i.pravatar.cc/150?img=47';
const imgAvatar6 = 'https://i.pravatar.cc/150?img=56';
const imgAvatar7 = 'https://i.pravatar.cc/150?img=59';
const imgAvatar8 = 'https://i.pravatar.cc/150?img=60';

const voices = [
    // Inner Circle
    {
        id: 1,
        name: 'HR Head',
        role: 'XYZ Engineering Ltd',
        title: 'Corporate HR',
        quote: 'Qural helped us build a reliable BIM team within weeks. Their talent quality is exceptional.',
        image: imgAvatar1,
        x: '40%',
        y: '82%',
    },
    {
        id: 2,
        name: 'Electrical BIM Modeler',
        role: 'Dubai',
        title: 'Placed Candidate',
        quote: 'Qural transformed my career from site work to BIM. Today I work on international projects.',
        image: imgAvatar2,
        x: '62%',
        y: '42%',
    },

    // Middle Circle
    {
        id: 3,
        name: 'Dean',
        role: 'ABC College of Engineering',
        title: 'College Connect',
        quote: 'Qural’s industry collaboration bridges the gap between academics and real-world engineering.',
        image: imgAvatar3,
        x: '65%',
        y: '20%',
    },
    {
        id: 4,
        name: 'Project Director',
        role: 'Middle East EPC Firm',
        title: 'International Client ',
        quote: 'Qural understands BIM delivery standards across regions. Their professionals integrate seamlessly into our global projects.',
        image: imgAvatar4,
        x: '0%',
        y: '42%',
    },
    {
        id: 5,
        name: 'BIM Coordinator',
        role: 'UK',
        title: 'Senior BIM Coordinator ',
        quote: 'The technical screening process at Qural is serious. They don’t forward resumes — they forward capability.',
        image: imgAvatar5,
        x: '72%',
        y: '68%',
    },

    // Outer Circle
    {
        id: 7,
        name: 'Placement Director',
        role: 'Engineering College',
        title: 'Campus Placement Officer ',
        quote: 'Qural brings industry exposure that universities cannot replicate alone. Our students are placement-ready because of their intervention.',
        image: imgAvatar6,
        x: '15%',
        y: '78%',
    },
    {
        id: 9,
        name: 'Talent Acquisition Lead',
        role: 'AEC Firm',
        title: 'Enterprise Talent Acquisition Lead',
        quote: 'Hiring BIM talent used to take months. With Qural, it takes weeks — without compromising quality.',
        image: imgAvatar7,
        x: '15%',
        y: '22%',
    },
    {
        id: 11,
        name: 'Engineering Manager',
        role: 'Saudi Arabia',
        title: 'Mega Project Contractor ',
        quote: 'We needed coordination-ready engineers for a fast-track project. Qural delivered professionals who could start from day one.',
        image: imgAvatar8,
        x: '85%',
        y: '50%',
    },
];

export default function QuralEcosystem() {
    const [stars, setStars] = useState<{ left: string; top: string; duration: number; delay: number }[]>([]);
    const [voiceDelays, setVoiceDelays] = useState<{ duration: number; delay: number }[]>([]);
    const [hoveredVoiceId, setHoveredVoiceId] = useState<number | null>(null);

    useEffect(() => {
        setStars(
            [...Array(5)].map(() => ({
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                duration: 2 + Math.random(),
                delay: Math.random() * 2,
            })),
        );

        setVoiceDelays(
            voices.map(() => ({
                duration: 2 + Math.random() * 1.5,
                delay: Math.random() * 1,
            })),
        );
    }, []);

    return (
        <section
            className='w-full bg-[#030303] py-32 relative overflow-hidden h-[800px] flex items-center justify-center border-t border-gray-900'
            data-section='qural-ecosystem'
        >
            {/* Honeycomb Background Design - Framed around center text */}
            <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                <div className='relative w-full h-full flex items-center justify-center opacity-[0.06]'>
                    {[
                        { x: 0, y: 0, delay: 0 }, // Center (directly behind title)
                        { x: 0, y: -180, delay: 0.1 }, // Top
                        { x: 156, y: -90, delay: 0.2 }, // Top-Right
                        { x: 156, y: 90, delay: 0.3 }, // Bottom-Right
                        { x: 0, y: 180, delay: 0.4 }, // Bottom
                        { x: -156, y: 90, delay: 0.5 }, // Bottom-Left
                        { x: -156, y: -90, delay: 0.6 }, // Top-Left
                    ].map((pos, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                // Add a subtle breathing effect to the center hexagon
                                scaleX: i === 0 ? [1, 1.02, 1] : 1,
                                scaleY: i === 0 ? [1, 1.02, 1] : 1,
                            }}
                            transition={{
                                opacity: { delay: 1 + pos.delay, duration: 1.5 },
                                scale: { delay: 1 + pos.delay, duration: 1.5 },
                                scaleX: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                                scaleY: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                            }}
                            className='absolute'
                            style={{
                                left: `50%`,
                                top: `50%`,
                                width: '260px',
                                height: '240px',
                                x: `calc(-50% + ${pos.x}px)`,
                                y: `calc(-50% + ${pos.y}px)`,
                            }}
                        >
                            <svg
                                width='100%'
                                height='100%'
                                viewBox='0 0 128 111'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M1.54206 55.347L32.7257 1.33548L95.093 1.33555L126.277 55.3472L95.0931 109.359L32.7253 109.36L1.54206 55.347Z'
                                    stroke='white'
                                    strokeWidth='0.8'
                                    opacity={i === 0 ? 0.8 : 0.4}
                                />
                                {i === 0 && (
                                    <path
                                        d='M1.54206 55.347L32.7257 1.33548L95.093 1.33555L126.277 55.3472L95.0931 109.359L32.7253 109.36L1.54206 55.347Z'
                                        stroke='#ed3543'
                                        strokeWidth='2'
                                        strokeOpacity='0.2'
                                        className='animate-[pulse_4s_ease-in-out_infinite]'
                                    />
                                )}
                            </svg>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Corner Decorative Clusters */}
            <div className='absolute inset-0 pointer-events-none overflow-hidden'>
                {/* Top-Left Cluster */}
                <div className='absolute -top-10 -left-10 opacity-[0.15]'>
                    <div className='relative w-40 h-40'>
                        {[
                            { x: 0, y: 0 },
                            { x: 60, y: 30 },
                            { x: 0, y: 60 },
                        ].map((pos, i) => (
                            <div key={i} className='absolute' style={{ left: pos.x, top: pos.y, width: '80px' }}>
                                <svg viewBox='0 0 128 111' fill='none'>
                                    <path
                                        d='M1.54206 55.347L32.7257 1.33548L95.093 1.33555L126.277 55.3472L95.0931 109.359L32.7253 109.36L1.54206 55.347Z'
                                        stroke='white'
                                        strokeWidth='1.5'
                                    />
                                </svg>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Top-Right Cluster */}
                <div className='absolute -top-10 -right-10 opacity-[0.15]'>
                    <div className='relative w-40 h-40'>
                        {[
                            { x: 0, y: 0 },
                            { x: -60, y: 30 },
                            { x: 0, y: 60 },
                        ].map((pos, i) => (
                            <div key={i} className='absolute' style={{ right: -pos.x, top: pos.y, width: '80px' }}>
                                <svg viewBox='0 0 128 111' fill='none'>
                                    <path
                                        d='M1.54206 55.347L32.7257 1.33548L95.093 1.33555L126.277 55.3472L95.0931 109.359L32.7253 109.36L1.54206 55.347Z'
                                        stroke='white'
                                        strokeWidth='1.5'
                                    />
                                </svg>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Bottom-Left Cluster */}
                <div className='absolute -bottom-10 -left-10 opacity-[0.15]'>
                    <div className='relative w-40 h-40'>
                        {[
                            { x: 0, y: 0 },
                            { x: 60, y: -30 },
                            { x: 0, y: -60 },
                        ].map((pos, i) => (
                            <div key={i} className='absolute' style={{ left: pos.x, bottom: -pos.y, width: '80px' }}>
                                <svg viewBox='0 0 128 111' fill='none'>
                                    <path
                                        d='M1.54206 55.347L32.7257 1.33548L95.093 1.33555L126.277 55.3472L95.0931 109.359L32.7253 109.36L1.54206 55.347Z'
                                        stroke='white'
                                        strokeWidth='1.5'
                                    />
                                </svg>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Bottom-Right Cluster */}
                <div className='absolute -bottom-10 -right-10 opacity-[0.15]'>
                    <div className='relative w-40 h-40'>
                        {[
                            { x: 0, y: 0 },
                            { x: -60, y: -30 },
                            { x: 0, y: -60 },
                        ].map((pos, i) => (
                            <div key={i} className='absolute' style={{ right: -pos.x, bottom: -pos.y, width: '80px' }}>
                                <svg viewBox='0 0 128 111' fill='none'>
                                    <path
                                        d='M1.54206 55.347L32.7257 1.33548L95.093 1.33555L126.277 55.3472L95.0931 109.359L32.7253 109.36L1.54206 55.347Z'
                                        stroke='white'
                                        strokeWidth='1.5'
                                    />
                                </svg>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div
                className='absolute inset-0 opacity-[0.08] pointer-events-none'
                style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            ></div>

            {/* Central Text */}
            <div className='relative z-20 text-center'>
                <p className="text-white/60 text-xl md:text-2xl font-['DM_Sans'] mb-2">Voices from the</p>
                <h2 className="text-5xl md:text-7xl font-bold text-white font-['Outfit'] tracking-tight">
                    <span className='text-[#ed3543]'>Qural</span> Ecosystem
                </h2>
                {/* Subtle glow behind text */}
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ed3543] rounded-full filter blur-[100px] opacity-20 -z-10'></div>
            </div>

            {/* Orbits */}
            <div className='absolute inset-0 pointer-events-none flex items-center justify-center'>
                <div className='w-[600px] h-[600px] border border-white/10 rounded-full absolute animate-[spin_60s_linear_infinite]'></div>
                <div className='w-[900px] h-[900px] border border-white/5 rounded-full absolute animate-[spin_80s_linear_infinite_reverse]'></div>
                <div className='w-[1200px] h-[1200px] border border-white/5 rounded-full absolute'></div>
            </div>

            {/* Floating Avatars */}
            <div className='absolute inset-0 max-w-7xl mx-auto overflow-visible'>
                {voices.map((voice, index) => (
                    <motion.div
                        key={voice.id}
                        initial={{ opacity: 0, scale: 0, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.04, duration: 0.4, ease: 'easeOut' }}
                        className={`absolute hidden md:flex items-center gap-3 transform-gpu backface-hidden ${
                            hoveredVoiceId === voice.id ? 'z-50' : 'z-10'
                        }`}
                        style={{
                            left: voice.x,
                            top: voice.y,
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <motion.div
                            className='flex items-center gap-3 bg-linear-to-r from-gray-900/80 to-black/80 backdrop-blur-md border border-white/10 rounded-full pl-1 pr-6 py-1 hover:border-[#ed3543] transition-colors duration-300 cursor-pointer group transform-gpu backface-hidden'
                            onMouseEnter={() => setHoveredVoiceId(voice.id)}
                            onMouseLeave={() => setHoveredVoiceId(null)}
                            animate={{
                                y: hoveredVoiceId === voice.id ? 0 : [0, -10, 0],
                                scale: hoveredVoiceId === voice.id ? 1.05 : 1,
                            }}
                            // @ts-ignore
                            transition={{
                                y: {
                                    duration: voiceDelays[index]?.duration || 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: voiceDelays[index]?.delay || 0,
                                },
                                scale: { duration: 0.2 },
                            }}
                        >
                            <div className='relative'>
                                <img
                                    src={voice.image}
                                    alt={voice.name}
                                    className='w-12 h-12 rounded-full border-2 border-white/20 group-hover:border-[#ed3543] transition-colors object-cover'
                                />
                                <div className='absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full blur-[2px] animate-pulse'></div>
                            </div>
                            <div className='text-left w-max'>
                                <h4 className="text-white font-bold text-sm font-['Outfit']">{voice.name}</h4>
                                <p className="text-white/60 text-xs font-['DM_Sans']">{voice.role}</p>
                            </div>
                        </motion.div>

                        {/* Testimonial Tooltip */}
                        <AnimatePresence>
                            {hoveredVoiceId === voice.id && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: parseInt(voice.y) < 35 ? -20 : 20,
                                        scale: 0.8,
                                    }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: parseInt(voice.y) < 35 ? -10 : 10, scale: 0.9 }}
                                    className={`absolute left-1/2 -translate-x-1/2 w-80 p-6 bg-black/90 backdrop-blur-lg border border-[#ed3543]/30 rounded-3xl shadow-[0_20px_50px_rgba(237,53,67,0.2)] pointer-events-none transform-gpu backface-hidden will-change-transform ${
                                        parseInt(voice.y) < 35 ? 'top-full mt-6' : 'bottom-full mb-6'
                                    }`}
                                >
                                    <div className='relative antialiased'>
                                        <div className='absolute -top-2 -left-2 text-4xl text-[#ed3543]/20 font-serif'>
                                            “
                                        </div>
                                        <p className='text-[#ed3543] font-bold text-[10px] uppercase tracking-widest mb-2 font-archivo'>
                                            {voice.title}
                                        </p>
                                        <p className='text-white/90 text-sm leading-relaxed font-outfit italic'>
                                            {voice.quote}
                                        </p>
                                    </div>
                                    <div
                                        className={`absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-10 border-l-transparent border-r-10 border-r-transparent border-t-10 ${
                                            parseInt(voice.y) < 35
                                                ? 'bottom-full border-t-transparent border-b-10 border-b-black/90 -mb-px'
                                                : 'top-full border-t-black/90 -mt-px'
                                        }`}
                                    ></div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            {/* Star Sparkles */}
            {stars.map((star, i) => (
                <motion.div
                    key={i}
                    className='absolute w-1 h-1 bg-white rounded-full blur-[1px]'
                    style={{
                        left: star.left,
                        top: star.top,
                    }}
                    animate={{ opacity: [0, 1, 0] }}
                    // @ts-ignore
                    transition={{ duration: star.duration, repeat: Infinity, delay: star.delay }}
                />
            ))}
        </section>
    );
}
