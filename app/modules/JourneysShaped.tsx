"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileCard from '../components/ProfileCard';

const imgCompanyLogo = "/company.png";
const imgLearnerProfile = "/profile.jpg";

const categories = [
    { id: 'upskilling', label: 'Upskilling' },
    { id: 'hiring', label: 'Talent Hiring' },
    { id: 'academy', label: 'Academy' }
];

const profileData = {
    upskilling: [
        { name: "Rahul K", before: "Site Engineer", after: "Electrical BIM Modeler - Dubai", logo: "/company.png" },
        { name: "Priya S", before: "Junior BIM Modeler", after: "BIM Engineer - UK", logo: "/company.png" },
        { name: "Padmini Kadhirvel", before: "Mechanical Graduate", after: "BIM Professional - Global Project", logo: "/company.png" }
    ],
    hiring: [
        { name: "Arun M", before: "Unemployed", after: "Structural Modeler", logo: "/company.png" },
        { name: "Sneha R", before: "Graduate Trainee", after: "BIM Coordinator", logo: "/company.png" },
        { name: "Karthik P", before: "Quantity Surveyor", after: "BIM Manager", logo: "/company.png" }
    ],
    academy: [
        { name: "Leaners 1", before: "Student", after: "BIM Certified", logo: "/company.png" },
        { name: "Leaners 2", before: "Architect Student", after: "Revit Master", logo: "/company.png" },
        { name: "Leaners 3", before: "Civil Student", after: "BIM Specialist", logo: "/company.png" }
    ]
};

export default function JourneysShaped() {
    const [activeTab, setActiveTab] = useState('upskilling');

    return (
        <div id="journey" className="relative w-full min-h-screen flex items-center justify-center bg-[#ed3543] py-20 px-4 isolate overflow-hidden">
            {/* 1. Background Decoration - Spanning Ring Image (Bottom Half) */}
            <div className="absolute top-0 left-[65%] -translate-x-1/2 w-[1200px] pointer-events-none overflow-visible">
                <img
                    src="/Ellipse 2.png"
                    alt="Ring"
                    className="w-full h-auto -translate-y-1/2 opacity-80 shrink-0"
                />
            </div>

            <div className="relative w-full max-w-[1400px] flex flex-col items-center gap-10">

                {/* Title Section */}
                <div className="flex flex-col items-center gap-4">
                    <h1 className="font-['Outfit'] font-bold text-4xl md:text-6xl text-white text-center leading-tight">
                        Journeys shaped at Qural
                    </h1>
                    {/* Handwritten Underline */}
                    <div className="w-[200px] md:w-[350px] h-[15px] relative">
                        <svg viewBox="0 0 371 30" fill="none" className="w-full h-full">
                            <path d="M5 25C100 15 250 15 365 10" stroke="#FFBC11" strokeWidth="6" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 bg-white rounded-2xl p-2 shadow-2xl">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`flex items-center gap-3 px-6 py-3 rounded-xl font-['Outfit'] font-bold transition-all ${activeTab === cat.id
                                ? 'bg-[#ffebed] text-[#ed3543] shadow-md scale-105'
                                : 'text-gray-500 hover:bg-gray-50'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Profile Cards Grid */}
                <div className="w-full overflow-x-auto pb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={activeTab}
                        className="flex justify-center flex-wrap lg:flex-nowrap gap-6 min-w-max px-6 mx-auto"
                    >
                        {profileData[activeTab as keyof typeof profileData].map((profile, i) => (
                            <ProfileCard
                                key={i}
                                name={profile.name}
                                beforeRole={profile.before}
                                afterRole={profile.after}
                                profileImage={imgLearnerProfile}
                                companyLogo={profile.logo}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Action Row: Nav and CTA Buttons */}
                <div className="w-full flex flex-col items-center gap-10 mt-4">
                    {/* Navigation Circles */}
                    <div className="flex items-center gap-4">
                        <button className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                            <span className="text-xl">‹</span>
                        </button>
                        <button className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                            <span className="text-xl">›</span>
                        </button>
                    </div>

                    {/* Main CTA Pair */}
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <button className="relative bg-[#ed3543] border border-white/30 px-8 py-4 rounded-xl shadow-2xl hover:brightness-110 transition-all text-white font-['Outfit'] font-bold text-lg">
                            Find Your Industry-Ready Path
                        </button>
                        <button className="bg-white px-8 py-4 rounded-xl shadow-2xl hover:bg-gray-50 transition-all text-[#ed3543] font-['Outfit'] font-bold text-lg">
                            Get Career Guidance
                        </button>
                    </div>

                    <p className="text-white/80 font-['Outfit'] text-center">
                        From learning to readiness — guided every step of the way.
                    </p>
                </div>
            </div>
        </div>
    );
}
