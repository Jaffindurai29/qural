
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Placeholder Asset
const imgBeeSmall = "/bee.png";

const questions = [
    {
        id: 1,
        question: "Is Qural a training institute or something different?",
        answer: "Qural is not just about learning tools. We focus on industry readiness — how engineers actually work on real projects. Our paths are designed around roles, workflows, and execution standards used in the industry."
    },
    {
        id: 2,
        question: "Who are these career paths meant for?",
        answer: "Our paths are tailored for engineering graduates and professionals who want to specialize in BIM and digital construction roles, looking to bridge the gap between academic knowledge and industry application."
    },
    {
        id: 3,
        question: "Do I need prior experience with AutoCAD or Revit?",
        answer: "While prior experience is helpful, it is not mandatory. Our modules are structured to take you from foundational concepts to advanced industry workflows."
    },
    {
        id: 4,
        question: "Will I work on real projects or only examples?",
        answer: "You will work on simulated real-world projects that mimic actual industry scenarios, ensuring you gain practical experience relevant to job roles."
    },
    {
        id: 5,
        question: "Does Qural guarantee placement?",
        answer: "We provide extensive placement assistance, including portfolio building and interview prep. While we don't guarantee jobs, our industry network actively seeks our ready-to-deploy talent."
    },
    {
        id: 6,
        question: "How are Qural paths different from regular BIM courses?",
        answer: "Regular courses often focus on software commands. Qural focuses on roles and workflows, teaching you 'how to think and work' like a professional, not just 'how to use a tool'."
    },
    {
        id: 7,
        question: "What kind of roles can I expect after completing a path?",
        answer: "Depending on your chosen path, you can aim for roles like BIM Modeler, BIM Coordinator, Structural BIM Engineer, or MEP BIM Specialist in top AEC firms."
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
                                <p className="text-gray-600 font-['DM_Sans'] text-sm leading-relaxed mt-2">
                                    {item.answer.split('industry readiness').map((part: string, i: number, arr: any[]) => (
                                        <React.Fragment key={i}>
                                            {part}
                                            {i < arr.length - 1 && <span className="text-[#ed3543] font-bold">industry readiness</span>}
                                        </React.Fragment>
                                    ))}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};
