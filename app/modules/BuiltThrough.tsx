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
        <div className="relative w-full max-w-full min-h-screen flex flex-col items-center justify-start lg:justify-center overflow-hidden bg-[#ed3543]">
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

            <div className="relative w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 py-12 lg:py-20 z-10">

                {/* 2. Left Side: Massive Vertical Branding & Socials */}
                <div className="relative flex flex-row items-start gap-6 md:gap-12 mb-12 lg:mb-0">
                    {/* Vertical QURAL Text */}
                    <div className="flex flex-col items-start md:items-center gap-3 md:gap-4 opacity-100">
                        <img src="/qural/Q.svg" alt="Q" className="w-[80px] sm:w-[120px] md:w-[180px] brightness-0 invert" />
                        <img src="/qural/U.svg" alt="U" className="w-[60px] sm:w-[90px] md:w-[130px] brightness-0 invert" />
                        <img src="/qural/R.svg" alt="R" className="w-[60px] sm:w-[90px] md:w-[130px] brightness-0 invert" />
                        <img src="/qural/A.svg" alt="A" className="w-[70px] sm:w-[100px] md:w-[150px] brightness-0 invert" />
                        <img src="/qural/L.svg" alt="L" className="w-[55px] sm:w-[85px] md:w-[120px] brightness-0 invert" />
                    </div>

                    {/* The Bee - Positioned to overlap U and R */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -20 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute left-[60px] sm:left-[100px] md:left-[150px] lg:left-[180px] top-[100px] sm:top-[150px] md:top-[180px] lg:top-[220px] z-20 w-[180px] sm:w-[220px] md:w-[240px] lg:w-[320px] pointer-events-none"
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
                    <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 lg:p-10 rounded-[30px] sm:rounded-[40px] border border-white/20 shadow-2xl">
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-8">
                            {/* Card 1 */}
                            <div className="bg-white rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center text-center shadow-lg hover:scale-[1.02] transition-transform">
                                <h2 className="font-['Outfit'] font-black text-[#b71f38] text-2xl sm:text-4xl lg:text-7xl">
                                    <Counter value={40} suffix="k" />
                                </h2>
                                <p className="font-['Outfit'] text-gray-500 text-[8px] sm:text-[10px] lg:text-xs font-semibold mt-2 uppercase tracking-wide">Talent Resumes & Profiles</p>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center text-center shadow-lg hover:scale-[1.02] transition-transform">
                                <h2 className="font-['Outfit'] font-black text-[#ed3543] text-2xl sm:text-4xl lg:text-5xl">
                                    ₹<Counter value={170} suffix="+ Crore" />
                                </h2>
                                <p className="font-['Outfit'] text-gray-500 text-[8px] sm:text-[10px] lg:text-xs font-semibold mt-2 uppercase tracking-wide">CTC Created for Industry</p>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-white rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center text-center shadow-lg hover:scale-[1.02] transition-transform">
                                <h2 className="font-['Outfit'] font-black text-[#f05b4f] text-2xl sm:text-4xl lg:text-6xl">
                                    <Counter value={2800} suffix="+" />
                                </h2>
                                <p className="font-['Outfit'] text-gray-500 text-[8px] sm:text-[10px] lg:text-xs font-semibold mt-2 uppercase tracking-wide">BIM Professionals Deployed</p>
                            </div>
                            {/* Card 4 */}
                            <div className="bg-white rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center text-center shadow-lg hover:scale-[1.02] transition-transform">
                                <h2 className="font-['Outfit'] font-black text-[#b71f38] text-2xl sm:text-4xl lg:text-6xl">
                                    <Counter value={4900} suffix="+" />
                                </h2>
                                <p className="font-['Outfit'] text-gray-500 text-[8px] sm:text-[10px] lg:text-xs font-semibold mt-2 uppercase tracking-wide">Happy Learners</p>
                            </div>

                            {/* CTC Stat - Horizontal Pill Inside Card */}
                            {/* <div className="col-span-2 mt-2 sm:mt-4 bg-white rounded-full p-1.5 sm:p-2 flex items-center justify-between shadow-lg border border-white/30 overflow-hidden">
                                <div className="bg-[#b71f38] text-white px-4 sm:px-8 py-2 sm:py-4 rounded-full shadow-lg">
                                    <span className="font-['Outfit'] text-base sm:text-xl lg:text-3xl font-black whitespace-nowrap">₹170+ Crore</span>
                                </div>
                                <span className="font-['Outfit'] text-gray-800 text-[10px] sm:text-sm lg:text-lg font-bold pr-4 sm:pr-8 lg:pr-12 text-right">Global Presence</span>
                            </div> */}
                        </div>
                    </div>

                    <p className="text-white/90 font-['Outfit'] text-sm lg:text-base max-w-2xl leading-relaxed text-left lg:text-left opacity-90">
                        Qural is your trusted <span className="text-white font-bold italic">Talent Acquisition</span> and <span className="text-white font-bold italic">Talent Development partner</span>.
                    </p>
                </div>
            </div>
        </div>
    );
}