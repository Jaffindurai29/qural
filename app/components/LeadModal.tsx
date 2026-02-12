'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import LeadForm from './LeadForm';

interface LeadModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultOption?: string;
    title?: string;
}

export default function LeadModal({ isOpen, onClose, defaultOption, title = "Get Started with Qural" }: LeadModalProps) {
    // Prevent scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-xl bg-white rounded-[32px] shadow-2xl overflow-hidden"
                    >
                        {/* Decorative header gradient */}
                        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#ed3543] via-[#bb1f36] to-[#ed3543]" />

                        <div className="p-8 md:p-10">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-['Outfit'] tracking-tight">
                                        {title}
                                    </h2>
                                    <p className="text-gray-500 font-['Manrope'] mt-1">
                                        Fill in the details below and we'll reach out.
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <LeadForm
                                defaultOption={defaultOption}
                                onSuccess={() => {
                                    // Let the success state show for a bit
                                    setTimeout(onClose, 2500);
                                }}
                            />
                        </div>

                        {/* Branding corner */}
                        <div className="absolute bottom-0 right-0 p-4 opacity-10 pointer-events-none">
                            <img src="/logo.svg" alt="Qural" className="w-16 grayscale" />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
