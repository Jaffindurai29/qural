'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const imgFrame1321314585 = "https://www.figma.com/api/mcp/asset/8fb099de-3579-46e3-9ec7-9c3631f2af2e";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/7ad97e0b-b0d4-4d95-b410-1b2f393129d6";
const imgEllipse3 = "https://www.figma.com/api/mcp/asset/0c4f921c-37bd-4b16-92ea-ef392ac2b058";
const imgEllipse2 = "https://www.figma.com/api/mcp/asset/d39d3a58-49bf-48e8-913a-491e9ad355c8";
const imgGroup357 = "https://www.figma.com/api/mcp/asset/b95d2656-1eec-4b2c-aeb8-e6e8fb5cdd31";
const imgGroup358 = "https://www.figma.com/api/mcp/asset/bd80fbc3-edad-43a7-aa05-53efba8ea201";
const imgEllipse7 = "https://www.figma.com/api/mcp/asset/5d9b1024-3ff9-47fb-9958-eeaa1cd963cd";
const imgEllipse8 = "https://www.figma.com/api/mcp/asset/4b1ccbdb-0547-455a-8e22-e19db7392d94";
const imgVector = "https://www.figma.com/api/mcp/asset/d97d5497-7a91-4de4-8c2e-1e7c1a3816a2";

// Testimonial Data
const testimonials = [
    {
        id: 1,
        text: "We design, deploy, and scale high-performance Talent Acquisition & EPC talent for global AEC firms.",
        avatar: imgEllipse1,
        position: "lg:top-[400px] lg:right-[20px] relative lg:absolute",
        color: "bg-[#8338ec]",
        textColor: "text-white",
        delay: 0
    },
    {
        id: 2,
        text: "Qural Connects Talent, Industry and academia into one engineered ecosystem.",
        avatar: imgEllipse1,
        position: "lg:top-[550px] lg:right-[140px] relative lg:absolute",
        color: "bg-[#fee440]",
        textColor: "text-black",
        delay: 0.5
    },
    {
        id: 3,
        text: "Designing tomorrow’s infrastructure today.",
        avatar: imgEllipse3,
        position: "lg:top-[440px] lg:right-[240px] relative lg:absolute",
        color: "bg-[#06d6a0]",
        textColor: "text-black",
        delay: 0.2
    },
    {
        id: 4,
        text: "Building the future of AEC innovation.",
        avatar: imgEllipse3,
        position: "lg:top-[620px] lg:right-[40px] relative lg:absolute",
        color: "bg-[#ef476f]",
        textColor: "text-white",
        delay: 0.4
    },
    {
        id: 5,
        text: "",
        avatar: "/Qural Fab.svg",
        position: "lg:top-[500px] lg:right-[30px] relative lg:absolute",
        color: "",
        textColor: "text-[#343a40]",
        delay: 0.6
    }
];

// Add props interface
interface TestimonialBubbleProps {
    data: typeof testimonials[0];
    isActive: boolean;
    onInteract: (active: boolean) => void;
    isMobile: boolean;
}

function TestimonialBubble({ data, isActive, onInteract, isMobile }: TestimonialBubbleProps) {
    // Generate a stable random duration for the float animation to avoid sync
    const [floatDuration] = useState(() => Math.random() * 2 + 4); // 4-6s
    const [floatDelay] = useState(() => Math.random() * 2);

    const hasText = data.text.length > 0;
    const isLogo = !hasText;

    return (
        <motion.div
            layout
            onHoverStart={() => !isMobile && hasText && onInteract(true)}
            onHoverEnd={() => !isMobile && hasText && onInteract(false)}
            onClick={() => isMobile && hasText && onInteract(!isActive)}
            initial={{ borderRadius: 30, width: isLogo ? 70 : 50, height: isLogo ? 70 : 50, zIndex: 10, y: 0 }}
            animate={{
                borderRadius: isActive ? 20 : 30,
                width: isActive && hasText ? "auto" : (isLogo ? 70 : 50),
                height: isActive && hasText ? "auto" : (isLogo ? 70 : 50),
                y: isActive ? 0 : [0, -15, 0], // Smooth sine wave float
                zIndex: isActive ? 50 : 10,
                scale: isActive ? 1.05 : 1
            }}
            transition={{
                layout: { duration: 0.4, type: "spring", stiffness: 300, damping: 30 },
                width: { duration: 0.4, type: "spring", stiffness: 300, damping: 30 },
                height: { duration: 0.4, type: "spring", stiffness: 300, damping: 30 },
                y: {
                    duration: isActive ? 0.4 : floatDuration,
                    repeat: isActive ? 0 : Infinity,
                    ease: "easeInOut",
                    delay: isActive ? 0 : floatDelay
                },
                zIndex: { delay: isActive ? 0 : 0.4 },
                scale: { duration: 0.2 }
            }}
            className={`${isMobile ? '' : data.position} ${data.color} ${isLogo ? '' : 'border-2 border-white/40 shadow-xl hover:shadow-2xl backdrop-blur-sm hover:border-white/80'} flex items-center justify-center cursor-pointer transition-shadow overflow-visible shrink-0 ${isActive && isMobile ? 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max max-w-[85vw] !zIndex-50' : ''}`}
        >
            <motion.div
                layout
                className={`flex items-center gap-3 ${hasText ? 'p-1.5 pl-3' : 'p-0'}`}
            >
                {hasText && (
                    <div
                        className={`overflow-hidden ${data.textColor} font-outfit text-xs leading-relaxed whitespace-nowrap`}
                    >
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: isActive ? 180 : 0, opacity: isActive ? 1 : 0 }}
                            transition={{
                                width: { duration: 0.4, type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.3, delay: isActive ? 0.2 : 0 }
                            }}
                            className="overflow-hidden"
                        >
                            <p className="whitespace-normal w-[180px]">
                                {data.text}
                            </p>
                        </motion.div>
                    </div>
                )}
                <div className={`relative shrink-0 ${isLogo ? 'size-[60px]' : 'size-[36px]'}`}>
                    <img
                        src={data.avatar}
                        className={`${isLogo ? 'size-full object-contain' : 'rounded-full size-full object-cover border-2 border-white/20 p-0.5'}`}
                        alt="Avatar"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Hero() {
    const [activeId, setActiveId] = useState<number | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isManual, setIsManual] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const nextIndexRef = useRef(0); // Track sequence

    // Handle Resize/Mobile detection
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Centralized Auto-Hover Logic
    useEffect(() => {
        if (isManual) return; // Don't schedule if user is interacting

        const interval = setInterval(() => {
            if (!isManual) {
                // Pick next bubble in sequence
                const nextId = testimonials[nextIndexRef.current].id;
                setActiveId(nextId);

                // Advance sequence for next time
                nextIndexRef.current = (nextIndexRef.current + 1) % testimonials.length;

                // Close after 3s (faster cycle)
                setTimeout(() => {
                    setActiveId((prev) => prev === nextId ? null : prev);
                }, 3000);
            }
        }, 4000); // Check every 4s

        return () => clearInterval(interval);
    }, [isManual]);

    return (
        <div className="bg-black relative w-full lg:size-full font-outfit min-h-[95vh] lg:min-h-screen overflow-hidden group flex flex-col items-center lg:block" data-name="Pexio" data-node-id="163:3">
            {/* Logo */}
            <Link href="/" className="absolute left-4 top-4 lg:left-[70px] lg:-top-[10px] z-50">
                <Image
                    src="/logo.svg"
                    alt="Qural Logo"
                    width={166}
                    height={110}
                    className="w-[120px] lg:w-[166px] h-auto"
                    priority
                />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden absolute top-6 right-4 z-50 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Figma Absolute Background Ellipses - Scaled/Hidden on mobile */}
            <div className="absolute flex h-[460px] lg:h-[935.705px] items-center justify-center left-[-100px] lg:left-[-146px] top-[-80px] lg:top-[-161px] w-[450px] lg:w-[896.198px] opacity-60 lg:opacity-100 pointer-events-none">
                <div className="flex-none rotate-[46.53deg]">
                    <div className="h-[124.867px] relative w-[1170.946px]" data-node-id="163:4">
                        <div className="absolute inset-[-152.16%_-16.23%]">
                            <img alt="" className="block max-w-none size-full" src={imgEllipse2} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute flex h-[460px] lg:h-[935.705px] items-center justify-center left-[-120px] lg:left-[-176px] top-[-250px] lg:top-[-543px] w-[450px] lg:w-[896.198px] opacity-60 lg:opacity-100 pointer-events-none">
                <div className="flex-none rotate-[46.53deg]">
                    <div className="h-[124.867px] relative w-[1170.946px]" data-node-id="163:5">
                        <div className="absolute inset-[-152.16%_-16.23%]">
                            <img alt="" className="block max-w-none size-full" src={imgEllipse2} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute flex h-[460px] lg:h-[935.705px] items-center justify-center left-[-300px] lg:left-[-594px] top-[-140px] lg:top-[-276px] w-[450px] lg:w-[896.198px] opacity-60 lg:opacity-100 pointer-events-none">
                <div className="flex-none rotate-[46.53deg]">
                    <div className="h-[124.867px] relative w-[1170.946px]" data-node-id="163:6">
                        <div className="absolute inset-[-152.16%_-16.23%]">
                            <img alt="" className="block max-w-none size-full" src={imgEllipse2} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Bar - Hidden on Mobile */}
            <div className="hidden lg:flex -translate-x-1/2 absolute content-stretch font-outfit font-normal gap-[70px] items-center leading-[normal] left-[calc(50%-0.5px)] text-[14px] top-[45px] z-50" data-node-id="163:7">
                <Link href="#why-qural" className="relative shrink-0 text-white hover:text-white transition-colors" data-node-id="163:8">Why Qural</Link>
                <Link href="#talent-pipeline" className="relative shrink-0 text-[rgba(255,255,255,0.8)] hover:text-white transition-colors" data-node-id="163:11">Career Paths</Link>
                <Link href="#journey" className="relative shrink-0 text-[rgba(255,255,255,0.8)] hover:text-white transition-colors" data-node-id="163:12">Journeys</Link>
                <Link href="#our-program" className="relative shrink-0 text-[rgba(255,255,255,0.8)] hover:text-white transition-colors" data-node-id="163:13">Our Program</Link>
            </div>

            {/* Right Button - Hidden on Mobile */}
            <button className="hidden lg:flex absolute bg-[#f4f4f4] content-stretch h-[38px] items-center justify-center left-[calc(81.25%-17px)] px-[22.448px] py-[6px] rounded-[8.418px] shadow-[0.312px_0.312px_0.441px_0px_rgba(0,0,0,0.26),0.849px_0.849px_1.201px_0px_rgba(0,0,0,0.25),1.865px_1.865px_2.637px_0px_rgba(0,0,0,0.23),4.139px_4.139px_5.854px_0px_rgba(0,0,0,0.19),7.015px_7.015px_14.881px_0px_rgba(0,0,0,0.05),-0.351px_-0.351px_0px_0px_rgba(0,0,0,0.05)] top-[37px] cursor-pointer hover:brightness-95 transition-all z-50" data-name="Button" data-node-id="169:746">
                <p className="font-outfit font-semibold leading-[normal] relative shrink-0 text-[#ed3543] text-[12px]" data-node-id="169:747">Want to Upskill ? </p>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0.701px_0.701px_0.701px_0px_white,inset_-0.701px_-0.701px_0.701px_0px_rgba(0,0,0,0.15)]" />
            </button>

            {/* Mobile Content Container */}
            <div className="flex flex-col items-center justify-center w-full z-20 mt-32 lg:mt-0 lg:block lg:static">

                {/* Tagline Pill and Decorative Lines */}
                <div className="relative flex items-center justify-center gap-[15px] lg:gap-[32px] lg:absolute lg:-translate-x-1/2 lg:left-1/2 lg:top-[150px] w-auto lg:w-auto mb-6 lg:mb-0" data-node-id="163:17">
                    <div className="h-[18px] w-[100px] lg:h-[24px] lg:w-[220px] hidden sm:block" data-node-id="163:23">
                        <img alt="" className="block max-w-none size-full" src={imgGroup358} />
                    </div>
                    <div className="bg-[rgba(233,12,12,0.1)] content-stretch flex items-center justify-center px-[20px] lg:px-[30px] py-[6px] lg:py-[8px] rounded-[30px]" data-node-id="163:18">
                        <p className="font-outfit font-normal leading-[normal] relative shrink-0 text-[12px] lg:text-[14px] text-white" data-node-id="163:19">Where careers are engineered</p>
                    </div>
                    <div className="h-[18px] w-[100px] lg:h-[24px] lg:w-[220px] hidden sm:block" data-node-id="163:20">
                        <img alt="" className="block max-w-none size-full" src={imgGroup357} />
                    </div>
                </div>

                {/* Headline */}
                <div className="flex flex-col items-center text-center lg:block lg:text-left relative">
                    <p className="lg:absolute font-outfit font-semibold leading-[1.2] lg:leading-[normal] lg:left-1/2 lg:-translate-x-1/2 whitespace-normal lg:whitespace-nowrap text-[32px] lg:text-[40px] text-white lg:top-[200px] px-4" data-node-id="163:26">
                        Engineering careers aren’t accidental.
                    </p>
                    <p className="mt-2 lg:mt-0 lg:absolute font-outfit font-semibold leading-[normal] lg:left-1/2 lg:-translate-x-1/2 whitespace-normal lg:whitespace-nowrap text-[32px] lg:text-[40px] text-white lg:top-[250px] px-4" data-node-id="163:27">
                        <span className="leading-[normal]">They’re </span>
                        <span className="leading-[normal] text-[#ee3042]">ENGINEERED</span>
                        <span className="leading-[normal]">.</span>
                    </p>
                    <p className="mt-4 lg:mt-0 lg:absolute font-outfit font-normal leading-[normal] lg:left-1/2 lg:-translate-x-1/2 whitespace-normal lg:whitespace-nowrap text-[16px] lg:text-[18px] text-white lg:top-[330px] px-8 text-center" data-node-id="163:28">
                        Your extended HR talent partner for end-to-end talent acquisition & development.
                    </p>
                </div>

                {/* Main CTA Button */}
                <button className="relative mt-8 lg:mt-0 lg:-translate-x-1/2 lg:absolute border border-solid border-white content-stretch flex h-[56px] items-center justify-center lg:left-[calc(50%+0.5px)] p-[8px] rounded-[10px] shadow-[0px_24.721px_32.257px_0px_rgba(229,0,92,0.19),0px_3.714px_4.846px_0px_rgba(229,0,92,0.15),0px_0px_0px_0px_#f8eaf0,0px_0px_0px_0px_white] lg:top-[385px] w-[280px] lg:w-[300px] cursor-pointer hover:brightness-95 transition-all z-20" data-node-id="169:743">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
                        <div className="absolute bg-gradient-to-b from-[#ed3543] inset-0 rounded-[10px] to-[#bb1f36]" />
                        <div className="absolute bg-size-[307.20001220703125px_307.20001220703125px] bg-top-left inset-0 mix-blend-plus-lighter opacity-40 rounded-[10px]" style={{ backgroundImage: `url('${imgFrame1321314585}')` }} />
                    </div>
                    <p className="font-outfit font-semibold leading-[normal] relative shrink-0 text-[16px] text-white" data-node-id="169:744">Looking for a Talent ?</p>
                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_18px_0px_#ffd9e8,inset_0px_1px_4px_0px_#ffd9e8]" />
                </button>
            </div>

            {/* Testimonials - Static Grid with slots for stability */}
            <div className="relative w-full flex flex-wrap justify-center gap-6 mt-16 px-6 pb-20 lg:pb-0 lg:mt-0 lg:block lg:static z-20">
                {testimonials.map((t) => (
                    <div key={t.id} className="relative lg:contents shrink-0" style={{ width: t.text ? 50 : 70, height: t.text ? 50 : 70 }}>
                        <TestimonialBubble
                            data={t}
                            isActive={activeId === t.id}
                            isMobile={isMobile}
                            onInteract={(active) => {
                                setIsManual(active);
                                setActiveId(active ? t.id : null);
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Decorative Images and Vectors */}
            {/* <div className="-translate-x-1/2 absolute left-1/2 w-[120%] h-[300px] -bottom-10 lg:w-auto lg:h-auto lg:size-[1556px] lg:top-[664px] lg:bottom-auto opacity-50 lg:opacity-100 pointer-events-none" data-node-id="163:29">
                <img alt="" className="block size-full object-cover lg:object-fill" src={imgEllipse7} />
            </div>
            <div className="hidden lg:block absolute lg:left-[31px] lg:size-[1389px] lg:top-[947px] lg:opacity-100 pointer-events-none" data-node-id="163:30">
                <img alt="" className="block size-full object-contain lg:object-fill" src={imgEllipse8} />
            </div> */}
            <div className="absolute bg-black blur-[75px] h-[318px] left-0 top-[889px] w-full lg:w-[1440px] pointer-events-none" data-node-id="163:31" />
            <div className="-translate-x-1/2 absolute bottom-[-10px] lg:bottom-[-10px] flex h-[200px] lg:h-[474px] items-center justify-center left-1/2 lg:left-[calc(53.13%-30.5px)] w-full lg:w-[1527px] pointer-events-none">
                <div className="-scale-y-100 flex-none rotate-180 w-full lg:w-auto h-full">
                    <div className="h-full relative w-full lg:w-[1527px]" data-name="Vector" data-node-id="170:767">
                        <img alt="" className="block size-full object-cover lg:object-fill" src={imgVector} />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 lg:hidden"
                    >
                        <nav className="flex flex-col items-center gap-6 text-2xl font-outfit font-semibold">
                            {[
                                { name: 'Why Qural', href: '#why-qural' },
                                { name: 'Career Paths', href: '#talent-pipeline' },
                                { name: 'Journeys', href: '#journey' },
                                { name: 'Our Program', href: '#our-program' }
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-white/80 hover:text-[#ed3543] transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-8">
                            <button className="bg-[#f4f4f4] relative content-stretch h-[48px] items-center justify-center flex px-8 rounded-[12px] shadow-[0.312px_0.312px_0.441px_0px_rgba(0,0,0,0.26),0.849px_0.849px_1.201px_0px_rgba(0,0,0,0.25),1.865px_1.865px_2.637px_0px_rgba(0,0,0,0.23),4.139px_4.139px_5.854px_0px_rgba(0,0,0,0.19),7.015px_7.015px_14.881px_0px_rgba(0,0,0,0.05),-0.351px_-0.351px_0px_0px_rgba(0,0,0,0.05)] cursor-pointer hover:brightness-95 transition-all z-50">
                                <p className="font-outfit font-semibold leading-[normal] relative shrink-0 text-[#ed3543] text-lg">Want to Upskill ? </p>
                                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0.701px_0.701px_0.701px_0px_white,inset_-0.701px_-0.701px_0.701px_0px_rgba(0,0,0,0.15)]" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}

