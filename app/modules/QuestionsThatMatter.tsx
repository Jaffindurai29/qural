
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Placeholder Asset
const imgBeeSmall = "/bee.png";

const questions = [
    {
        id: 1,
        question: "How do you ensure candidate quality?",
        answer: "We do not forward profiles. Each candidate undergoes a tailored technical pre-screening aligned to your project scope, BIM standards, and software stack. An exclusive SPOC validates technical depth, coordination ability, and project readiness before submission."
    },
    {
        id: 2,
        question: "Do you customize screening for each project?",
        answer: "Yes. Every requirement is assessed against specific deliverables, LOD expectations, regional standards, and coordination workflows. Screening is project-driven, not generic."
    },
    {
        id: 3,
        question: "How large is your talent pool?",
        answer: "We maintain a global, continuously mapped BIM database across Electrical, Mechanical, Structural, Architectural, and BIM Coordination roles. Quantity is scalable. Quality remains controlled."
    },
    {
        id: 4,
        question: "How fast can you close a position?",
        answer: "Shortlists & Closures are delivered within 24 - 48 hours. Our structured pipeline ensures best-in-class turnaround time."
    },
    {
        id: 5,
        question: "Can you support bulk or fast-track hiring?",
        answer: "Yes. We build coordination-ready BIM teams for fast-track and mega projects without compromising technical standards."
    },
    {
        id: 6,
        question: "What makes Qural different from traditional recruiters?",
        answer: "We combine domain-specific technical expertise with specialized HR intelligence. We understand talent needs with a deep understanding of project requirements, making our hiring precise and delivery-focused."
    },
    {
        id: 7,
        question: "How do you ensure long-term reliability?",
        answer: "We assess beyond software skills—including coordination mindset, documentation discipline, and communication clarity. We hire for project continuity, not just placement."
    },
    {
        id: 8,
        question: "Are you only an HR agency?",
        answer: "No. Qural integrates Talent Acquisition and Talent Development, building an ecosystem where talent is trained, hired, and deployed—giving us deeper control over skill quality."
    },
    {
        id: 9,
        question: "What is Qural’s College Connect model?",
        answer: "We bridge academia and industry by aligning curriculum with real-world engineering delivery. This creates placement-ready, industry-oriented graduates."
    },
    {
        id: 10,
        question: "How does Qural support students?",
        answer: "As an Autodesk authorised training centre, we provide industry-driven training, live project exposure, mentorship, and structured skill assessment. We transform engineering graduates into job-ready professionals who are deployable—not just certified."
    }
];

export default function QuestionsThatMatter() {
    const [openId, setOpenId] = useState<number | null>(1);

    const toggleQuestion = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="w-full py-24 relative overflow-hidden" data-section="questions-that-matter"
            style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #ffeef0 50%, #ffd6da 100%)'
            }}
        >
            {/* Background Hex Pattern (Optional) */}
            <div className="absolute inset-0 opacity-30 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#ed3543 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 font-['Outfit'] mb-16">
                    Questions that Matter
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    {/* Left Column (items 0, 2, 4...) */}
                    <div className="flex flex-col gap-6">
                        {questions.filter((_, i) => i % 2 === 0).map((q) => (
                            <QuestionCard key={q.id} item={q} isOpen={openId === q.id} onToggle={() => toggleQuestion(q.id)} />
                        ))}
                    </div>

                    {/* Right Column (items 1, 3, 5...) */}
                    <div className="flex flex-col gap-6">
                        {questions.filter((_, i) => i % 2 !== 0).map((q) => (
                            <QuestionCard key={q.id} item={q} isOpen={openId === q.id} onToggle={() => toggleQuestion(q.id)} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const QuestionCard = ({ item, isOpen, onToggle }: { item: any, isOpen: boolean, onToggle: () => void }) => {
    return (
        <motion.div
            layout
            onClick={onToggle}
            className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer border border-transparent ${isOpen ? 'ring-1 ring-red-100' : ''}`}
        >
            <div className="flex items-start gap-4">
                {/* Icon Area */}
                <div className="flex-shrink-0 mt-1">
                    {isOpen ? (
                        <motion.img
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            src={imgBeeSmall} alt="Bee" className="w-8 h-8 object-contain"
                        />
                    ) : (
                        <div className="w-8 h-8 flex items-center justify-center">
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </div>
                    )}
                </div>

                {/* Content Area */}
                <div className="flex-1">
                    <h3 className={`text-lg font-['Outfit'] font-semibold mb-2 ${isOpen ? 'text-[#ed3543]' : 'text-gray-700'}`}>
                        {item.question}
                    </h3>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <p className="text-gray-600 font-['Outfit'] text-sm leading-relaxed mt-2">
                                    {item.answer}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};
