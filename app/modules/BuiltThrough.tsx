'use client';
import { motion, useSpring, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Counter = ({ value, suffix = "", duration = 2 }: { value: number, suffix?: string, duration?: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const springValue = useSpring(0, { duration: duration * 1000, bounce: 0 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (inView) {
            springValue.set(value);
        }
    }, [inView, value, springValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            setDisplayValue(Math.round(latest));
        });
    }, [springValue]);

    return <span ref={ref}>{displayValue.toLocaleString()}{suffix}</span>;
};

export default function BuiltThrough() {
    return (
        <div className="relative w-full max-w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#ed3543]">
            {/* 1. Background Decoration - Spanning Ring Image (Top 1/4) */}
            <div className="absolute bottom-[-900px] left-[65%] -translate-x-1/2 w-[1200px] h-auto pointer-events-none overflow-visible">
                <img
                    src="/Ellipse 2.png"
                    alt="Ring"
                    className="w-full h-auto opacity-100 shrink-0"
                />
            </div>

            <div className="absolute inset-0 pointer-events-none">
                {/* Honeycomb Pattern remains subtle */}
                <div className="absolute inset-x-0 bottom-0 top-0 opacity-[0.03]" style={{ backgroundImage: 'url(/Polygon.svg)', backgroundSize: '100px', backgroundRepeat: 'repeat' }} />
            </div>

            <div className="relative w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-20 z-10">

                {/* 2. Left Side: Massive Vertical Branding & Socials */}
                <div className="relative flex flex-row items-start gap-12 mb-16 lg:mb-0">
                    {/* Social Icons Stack - Deep Left */}
                    <div className="flex flex-col gap-4 pt-20">
                        <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
                            <span className="text-xs font-bold">in</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FFDC80] via-[#FD5949] to-[#D6249F] flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.602.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[#1da1f2] flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
                            <span className="font-bold text-lg">Bē</span>
                        </div>
                    </div>

                    {/* Vertical QURAL Text */}
                    <div className="flex flex-col items-center gap-4 opacity-100">
                        <img src="/qural/Q.svg" alt="Q" className="w-[120px] md:w-[180px] brightness-0 invert" />
                        <img src="/qural/U.svg" alt="U" className="w-[90px] md:w-[130px] brightness-0 invert" />
                        <img src="/qural/R.svg" alt="R" className="w-[90px] md:w-[130px] brightness-0 invert" />
                        <img src="/qural/A.svg" alt="A" className="w-[100px] md:w-[150px] brightness-0 invert" />
                        <img src="/qural/L.svg" alt="L" className="w-[85px] md:w-[120px] brightness-0 invert" />
                    </div>

                    {/* The Bee - Positioned to overlap U and R */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -20 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute left-[120px] md:left-[150px] lg:left-[180px] top-[150px] md:top-[180px] lg:top-[220px] z-20 w-[180px] md:w-[240px] lg:w-[320px] pointer-events-none"
                    >
                        <img src="/bee.png" alt="Bee" className="w-full h-auto drop-shadow-3xl transform hover:rotate-2 transition-transform" />
                    </motion.div>
                </div>

                {/* 3. Right Side: Content & Stats */}
                <div className="w-full lg:w-[55%] flex flex-col gap-10">
                    {/* Title Section */}
                    <div className="space-y-4">
                        <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl text-black font-bold leading-tight">
                            Built through <span className="bg-white px-5 py-1.5 rounded-full inline-flex items-center gap-3 transform -rotate-1 shadow-xl text-black text-3xl md:text-5xl lowercase">outcomes <span className="mb-1">🔥</span></span>,
                            <br />not promises.
                        </h1>
                    </div>

                    {/* Unified Stats Container - CARD LAYOUT */}
                    <div className="bg-white/10 backdrop-blur-md p-6 lg:p-10 rounded-[40px] border border-white/20 shadow-2xl">
                        <div className="grid grid-cols-2 gap-4 lg:gap-8">
                            {/* Card 1 */}
                            <div className="bg-white rounded-[24px] p-6 lg:p-8 flex flex-col items-center justify-center text-center shadow-lg hover:scale-[1.02] transition-transform">
                                <h2 className="font-['Outfit'] font-black text-[#b71f38] text-4xl lg:text-7xl">
                                    <Counter value={40} suffix="k" />
                                </h2>
                                <p className="font-['Outfit'] text-gray-500 text-[10px] lg:text-xs font-semibold mt-2 uppercase tracking-wide">Talent Resumes & Profiles</p>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white rounded-[24px] p-6 lg:p-8 flex flex-col items-center justify-center text-center shadow-lg hover:scale-[1.02] transition-transform">
                                <h2 className="font-['Outfit'] font-black text-[#ed3543] text-4xl lg:text-7xl">
                                    <Counter value={9} suffix="+" />
                                </h2>
                                <p className="font-['Outfit'] text-gray-500 text-[10px] lg:text-xs font-semibold mt-2 uppercase tracking-wide">Markets Operated</p>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-white rounded-[24px] p-6 lg:p-8 flex flex-col items-center justify-center text-center shadow-lg hover:scale-[1.02] transition-transform">
                                <h2 className="font-['Outfit'] font-black text-[#f05b4f] text-4xl lg:text-6xl">
                                    <Counter value={2800} suffix="+" />
                                </h2>
                                <p className="font-['Outfit'] text-gray-500 text-[10px] lg:text-xs font-semibold mt-2 uppercase tracking-wide">BIM Professionals Deployed</p>
                            </div>
                            {/* Card 4 */}
                            <div className="bg-white rounded-[24px] p-6 lg:p-8 flex flex-col items-center justify-center text-center shadow-lg hover:scale-[1.02] transition-transform">
                                <h2 className="font-['Outfit'] font-black text-[#b71f38] text-4xl lg:text-6xl">
                                    <Counter value={4900} suffix="+" />
                                </h2>
                                <p className="font-['Outfit'] text-gray-500 text-[10px] lg:text-xs font-semibold mt-2 uppercase tracking-wide">Happy Learners</p>
                            </div>

                            {/* CTC Stat - Horizontal Pill Inside Card */}
                            <div className="col-span-2 mt-4 bg-white rounded-full p-2 flex items-center justify-between shadow-lg border border-white/30 overflow-hidden">
                                <div className="bg-[#b71f38] text-white px-8 py-4 rounded-full shadow-lg">
                                    <span className="font-['Outfit'] text-xl lg:text-3xl font-black whitespace-nowrap">₹170+ Crore</span>
                                </div>
                                <span className="font-['Outfit'] text-gray-800 text-sm lg:text-lg font-bold pr-8 lg:pr-12 text-right">CTC Created for Industry</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-white/90 font-['Outfit'] text-sm lg:text-base max-w-2xl leading-relaxed text-center lg:text-left opacity-90">
                        Qural is reshaping how engineering talent should be <span className="text-white font-bold italic">Trained, Hired, Built, Deployed</span>, and valued across the global AEC industry.
                    </p>
                </div>
            </div>
        </div>
    );
}