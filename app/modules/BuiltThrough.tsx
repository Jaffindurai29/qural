'use client';

import React from 'react';

export default function BuiltThrough() {
    return (
        <div className="relative w-full max-w-[1600px] min-h-screen mx-auto flex flex-col lg:block items-center justify-center overflow-hidden">
            {/* 1. Honeycomb Pattern Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                {/* Decorative Polygons - Scattered for background texture */}
                <img src="/Polygon.svg" className="absolute left-[-20px] top-[15%]" style={{ width: '120px' }} alt="" />
                <img src="/Polygon.svg" className="absolute left-[80px] top-[10%]" style={{ width: '100px' }} alt="" />
                <img src="/Polygon.svg" className="absolute left-[30px] top-[40%]" style={{ width: '140px' }} alt="" />
                <img src="/Polygon.svg" className="absolute left-[150px] top-[30%]" style={{ width: '80px' }} alt="" />
                <img src="/Polygon.svg" className="absolute left-[10px] top-[60%]" style={{ width: '110px' }} alt="" />
                <img src="/Polygon.svg" className="absolute left-[120px] top-[75%]" style={{ width: '90px' }} alt="" />
                {/* Added more polygons */}
                <img src="/Polygon.svg" className="absolute left-[40%] top-[5%]" style={{ width: '60px' }} alt="" />
                <img src="/Polygon.svg" className="absolute left-[35%] top-[85%]" style={{ width: '75px' }} alt="" />
                <img src="/Polygon.svg" className="absolute left-[55%] top-[20%]" style={{ width: '50px' }} alt="" />
                <img src="/Polygon.svg" className="absolute right-[25%] top-[15%]" style={{ width: '80px' }} alt="" />
                <img src="/Polygon.svg" className="absolute right-[30%] top-[60%]" style={{ width: '100px' }} alt="" />
                <img src="/Polygon.svg" className="absolute right-[10%] top-[80%]" style={{ width: '70px' }} alt="" />
            </div>

            {/* 2. Vertical 'Qural' Text - Right aligned */}
            <div className="absolute right-[-20px] lg:right-0 top-1/2 -translate-y-1/2 flex flex-col items-center select-none z-10 w-[90px] md:w-[140px] lg:w-[160px] gap-2 opacity-50 lg:opacity-100">
                <img src="/qural/Q.svg" alt="Q" className="w-full relative z-10" />
                <img src="/qural/U.svg" alt="U" className="w-[75%] relative z-10" />
                <img src="/qural/R.svg" alt="R" className="w-[75%] relative z-10" />
                <img src="/qural/A.svg" alt="A" className="w-[85%] relative z-10" />
                <img src="/qural/L.svg" alt="L" className="w-[70%] relative z-10" />
            </div>

            {/* 3. Bee Image - Overlapping the text elements */}
            <div className="absolute left-[-20px] lg:left-[15%] top-[5%] lg:top-[35%] z-20 w-[150px] md:w-[280px] lg:w-[360px] pointer-events-none opacity-80 lg:opacity-100">
                <img src="/bee.png" alt="Bee" className="w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500" />
            </div>

            {/* 4. Content Area (Right Side) */}
            <div className="relative lg:absolute right-auto lg:right-[15%] top-auto lg:top-1/2 translate-y-0 lg:-translate-y-1/2 w-full lg:w-[45%] flex flex-col gap-10 z-30 px-6 lg:px-0 pt-32 lg:pt-0 pb-10 lg:pb-0">
                {/* Title */}
                <h1 className="font-['Outfit:SemiBold',sans-serif] text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
                    Built through <span className="bg-white px-3 py-1 rounded-full inline-flex items-center gap-2 transform -rotate-1 shadow-sm whitespace-nowrap">outcomes <span className="text-2xl">🔥</span></span>,
                    <br />not promises.
                </h1>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 w-full relative">
                    {/* Background blob for connection effect behind cards if needed, else clear */}

                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform duration-300 border border-gray-100">
                        <p className="font-['Outfit:Bold',sans-serif] text-[#b71f38] text-5xl md:text-6xl lg:text-7xl">40k</p>
                        <p className="font-['Outfit:Regular',sans-serif] text-[#606060] text-sm md:text-base mt-2">Talent Resumes & Profiles</p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform duration-300 border border-gray-100">
                        <p className="font-['Outfit:Bold',sans-serif] text-[#ed3543] text-5xl md:text-6xl lg:text-7xl">9+</p>
                        <p className="font-['Outfit:Regular',sans-serif] text-[#606060] text-sm md:text-base mt-2">Markets Operated</p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform duration-300 border border-gray-100">
                        <p className="font-['Outfit:Bold',sans-serif] text-[#f05b4f] text-4xl md:text-5xl lg:text-6xl">2,800+</p>
                        <p className="font-['Outfit:Regular',sans-serif] text-[#606060] text-sm md:text-base mt-2">BIM Professionals Deployed</p>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-white rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform duration-300 border border-gray-100">
                        <p className="font-['Outfit:Bold',sans-serif] text-[#b71f38] text-4xl md:text-5xl lg:text-6xl">4,900+</p>
                        <p className="font-['Outfit:Regular',sans-serif] text-[#606060] text-sm md:text-base mt-2">Happy Learners</p>
                    </div>
                </div>

                {/* CTC Stat - Clean Gradient Card */}
                <div className="relative overflow-hidden bg-gradient-to-r from-red-50 to-white rounded-xl p-2 pr-6 flex items-center gap-4 border border-red-100 shadow-xl w-fit">
                    <div className="bg-[#b71f38] text-white px-4 py-3 rounded-lg shadow-sm">
                        <span className="font-['Outfit:Bold',sans-serif] text-2xl md:text-3xl font-bold block whitespace-nowrap">₹170+ Crore</span>
                    </div>
                    <span className="font-['Outfit:Medium',sans-serif] text-gray-800 text-lg md:text-xl leading-tight">CTC Created<br />for Industry</span>
                </div>
            </div>

            {/* Social Icons (Floating left bottom) - Keeping placeholder spots relative to the Qural text */}
            <div className="relative lg:absolute left-auto lg:left-[13%] bottom-auto lg:bottom-10 flex lg:flex-col flex-row gap-4 z-40 mb-10 lg:mb-0 justify-center w-full lg:w-auto">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
                    {/* LinkedIn Icon SVG equivalent */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
                    {/* Instagram Icon SVG equivalent */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.602.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
                    {/* Bē Icon SVG equivalent (Behance-ish or similar from original) */}
                    <span className="font-bold text-lg">Bē</span>
                </div>
            </div>
        </div>
    );
}
