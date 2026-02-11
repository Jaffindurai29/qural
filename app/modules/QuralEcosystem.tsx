
"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Placeholder Assets
const imgAvatar1 = "https://i.pravatar.cc/100?img=1";
const imgAvatar2 = "https://i.pravatar.cc/100?img=2";
const imgAvatar3 = "https://i.pravatar.cc/100?img=3";
const imgAvatar4 = "https://i.pravatar.cc/100?img=4";
const imgAvatar5 = "https://i.pravatar.cc/100?img=5";
const imgAvatar6 = "https://i.pravatar.cc/100?img=6";
const imgAvatar7 = "https://i.pravatar.cc/100?img=8";

const voices = [
    { id: 1, name: "Arjun R", role: "Placed at L&T", image: imgAvatar1, x: "20%", y: "20%" },
    { id: 2, name: "Priya S", role: "BIM Engineer", image: imgAvatar2, x: "70%", y: "15%" },
    { id: 3, name: "Rahul M", role: "Design Lead", image: imgAvatar3, x: "85%", y: "50%" },
    { id: 4, name: "Sneha K", role: "Structure Eng", image: imgAvatar4, x: "25%", y: "75%" },
    { id: 5, name: "Vikram S", role: "Project Mgr", image: imgAvatar5, x: "60%", y: "80%" },
    { id: 6, name: "Anjali D", role: "Architect", image: imgAvatar6, x: "10%", y: "50%" },
    { id: 7, name: "Karthik", role: "MEP Coord", image: imgAvatar7, x: "50%", y: "10%" },
];

export default function QuralEcosystem() {
    const [stars, setStars] = useState<{ left: string; top: string; duration: number; delay: number }[]>([]);
    const [voiceDelays, setVoiceDelays] = useState<{ duration: number; delay: number }[]>([]);

    useEffect(() => {
        setStars([...Array(5)].map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: 2 + Math.random(),
            delay: Math.random() * 2
        })));

        setVoiceDelays(voices.map(() => ({
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2
        })));
    }, []);

    return (
        <section className="w-full bg-black py-32 relative overflow-hidden h-[800px] flex items-center justify-center border-t border-gray-900" data-section="qural-ecosystem">

            {/* Background Hex Pattern */}
            <div className="absolute top-0 left-0 p-10 opacity-20">
                <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.5">
                    <path d="M25 0 L75 0 L100 43 L75 86 L25 86 L0 43 Z" />
                </svg>
                {/* Repeating generic hex grid via CSS could be added here */}
            </div>
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* Central Text */}
            <div className="relative z-20 text-center">
                <p className="text-white/60 text-xl md:text-2xl font-['DM_Sans'] mb-2">Voices from the</p>
                <h2 className="text-5xl md:text-7xl font-bold text-white font-['Outfit'] tracking-tight">
                    <span className="text-[#ed3543]">Qural</span> Ecosystem
                </h2>
                {/* Subtle glow behind text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ed3543] rounded-full filter blur-[100px] opacity-20 -z-10"></div>
            </div>

            {/* Orbits */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="w-[600px] h-[600px] border border-white/10 rounded-full absolute animate-[spin_60s_linear_infinite]"></div>
                <div className="w-[900px] h-[900px] border border-white/5 rounded-full absolute animate-[spin_80s_linear_infinite_reverse]"></div>
                <div className="w-[1200px] h-[1200px] border border-white/5 rounded-full absolute"></div>
            </div>

            {/* Floating Avatars */}
            <div className="absolute inset-0 max-w-7xl mx-auto">
                {voices.map((voice, index) => (
                    <motion.div
                        key={voice.id}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="absolute hidden md:flex items-center gap-3 bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-md border border-white/10 rounded-full pl-1 pr-6 py-1 hover:border-[#ed3543] transition-colors duration-300 group cursor-pointer"
                        style={{
                            left: voice.x,
                            top: voice.y,
                            transform: 'translate(-50%, -50%)'
                        }}
                        animate={{
                            y: [0, -10, 0],
                        }}
                        // @ts-ignore
                        transition={{
                            duration: voiceDelays[index]?.duration || 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: voiceDelays[index]?.delay || 0
                        }}
                    >
                        <div className="relative">
                            <img src={voice.image} alt={voice.name} className="w-12 h-12 rounded-full border-2 border-white/20 group-hover:border-[#ed3543] transition-colors" />
                            {/* Twinkle effect */}
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full blur-[2px] animate-pulse"></div>
                        </div>
                        <div className="text-left">
                            <h4 className="text-white font-bold text-sm font-['Outfit']">{voice.name}</h4>
                            <p className="text-white/60 text-xs font-['DM_Sans']">{voice.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Star Sparkles */}
            {stars.map((star, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
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
