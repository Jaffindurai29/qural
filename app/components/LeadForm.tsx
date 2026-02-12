'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface LeadFormProps {
    defaultOption?: string;
    onSuccess?: () => void;
}

export default function LeadForm({ defaultOption = '', onSuccess }: LeadFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        interest: defaultOption,
        resume: null as File | null,
    });
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const interests = [
        { label: 'Finding a Talent', value: 'Finding a Talent' },
        { label: 'Looking for a Job', value: 'Looking for a Job' },
        { label: 'Interested in Course', value: 'Interested in Course' },
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
        }
    };


    const sendEmail = async (data: typeof formData) => {
        try {
            const response = await fetch(
                "https://us-central1-mailer-f7899.cloudfunctions.net/sendMail",
                {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                    body: JSON.stringify({
                        to_address: "vivek@quraltalent.com",
                        subject: `New Lead: ${data.interest} - ${data.name} | Qural Talent`,
                        body: `
                            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                                <h2 style="color: #ed3543;">New Lead Received</h2>
                                <p><strong>Name:</strong> ${data.name}</p>
                                <p><strong>Phone/WhatsApp:</strong> ${data.contact}</p>
                                <p><strong>Email:</strong> ${data.email}</p>
                                <p><strong>Interested in:</strong> ${data.interest}</p>
                                ${data.resume ? `<p><strong>Attached Resume:</strong> ${data.resume.name}</p>` : ''}
                                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                                <p style="font-size: 12px; color: #999;">Sent from Qural Talent Website Lead Form</p>
                            </div>
                        `,
                    }),
                }
            );
            return response.ok;
        } catch (error) {
            console.error("Email API error:", error);
            return false;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const success = await sendEmail(formData);

        setIsSubmitting(false);
        if (success) {
            setIsSuccess(true);
            if (onSuccess) {
                setTimeout(onSuccess, 2000);
            }
        } else {
            // Fallback to mailto if API fails
            const body = `
Name: ${formData.name}
Phone/WhatsApp: ${formData.contact}
Email: ${formData.email}
Interested in: ${formData.interest}
Resume: ${formData.resume ? formData.resume.name : 'Not provided'}
            `.trim();
            const mailtoUri = `mailto:vivek@quraltalent.com?subject=New Lead: ${formData.interest} - ${formData.name}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoUri;

            // Still show success as the user has "sent" it via their client
            setIsSuccess(true);
            if (onSuccess) {
                setTimeout(onSuccess, 2000);
            }
        }
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 px-6 text-center"
            >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-['Outfit']">Thank You!</h3>
                <p className="text-gray-600 font-['Manrope'] mb-8">
                    Your request has been sent successfully. We will get back to you shortly.
                </p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="text-[#ed3543] font-bold font-['Outfit'] hover:underline"
                >
                    Submit another response
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 font-['Outfit']">
                    Name *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ed3543]/20 focus:border-[#ed3543] outline-none transition-all font-['Manrope'] text-gray-900 placeholder:text-gray-400"
                />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="contact" className="block text-sm font-semibold text-gray-700 mb-2 font-['Outfit']">
                        Phone / WhatsApp *
                    </label>
                    <input
                        type="tel"
                        id="contact"
                        name="contact"
                        required
                        value={formData.contact}
                        onChange={handleInputChange}
                        placeholder="+1234567890"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ed3543]/20 focus:border-[#ed3543] outline-none transition-all font-['Manrope'] text-gray-900 placeholder:text-gray-400"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 font-['Outfit']">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ed3543]/20 focus:border-[#ed3543] outline-none transition-all font-['Manrope'] text-gray-900 placeholder:text-gray-400"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2 font-['Outfit']">
                    Looking for *
                </label>
                <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ed3543]/20 focus:border-[#ed3543] outline-none transition-all font-['Manrope'] appearance-none bg-no-repeat bg-[right_1rem_center] bg-[length:1.2em_1.2em] text-gray-900 pr-10"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234b5563' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")` }}
                >
                    <option value="" disabled>Select an option</option>
                    {interests.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>

            <AnimatePresence>
                {formData.interest === 'Looking for a Job' && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <label className="block text-sm font-semibold text-gray-700 mb-2 font-['Outfit']">
                            Upload Resume *
                        </label>
                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className="w-full px-4 py-4 border-2 border-dashed border-gray-200 rounded-xl hover:border-[#ed3543] hover:bg-[#ed3543]/5 cursor-pointer transition-all flex flex-col items-center justify-center gap-2 group bg-white"
                        >
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                className="hidden"
                                accept=".pdf,.doc,.docx"
                            />
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#ed3543]/20 transition-colors">
                                <svg className="w-5 h-5 text-gray-500 group-hover:text-[#ed3543]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                            </div>
                            <p className="text-sm font-medium text-gray-700 font-['Manrope']">
                                {formData.resume ? formData.resume.name : 'Click to upload your resume (PDF/DOC)'}
                            </p>
                            <p className="text-xs text-gray-500 font-['Manrope']">Max size: 5MB</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative h-[56px] bg-gradient-to-b from-[#ed3543] to-[#bb1f36] rounded-xl shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition-all disabled:opacity-70 disabled:cursor-not-allowed group overflow-hidden"
            >
                <div className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin text-white" />
                            <span className="text-white font-bold font-['Outfit']">Submitting...</span>
                        </>
                    ) : (
                        <span className="text-white font-bold text-lg font-['Outfit'] tracking-wide">Submit Inquiry</span>
                    )}
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_18px_0px_rgba(255,217,232,0.3)]" />
            </button>
            <p className="text-center text-xs text-gray-500 font-['Manrope']">
                By submitting, you agree to our privacy policy.
            </p>
        </form>
    );
}
