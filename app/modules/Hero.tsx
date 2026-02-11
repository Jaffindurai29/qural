'use client';

import { motion } from 'framer-motion';
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
        text: "We design, deploy, and scale high-performance BIM & EPC talent for global AEC firms.",
        avatar: imgEllipse1,
        position: "top-[400px] right-[20px]",
        color: "bg-[#8338ec]",
        textColor: "text-white",
        delay: 0
    },
    {
        id: 2,
        text: "Qural Connects Talent, Industry and academia into one engineered ecosystem.",
        avatar: imgEllipse1,
        position: "top-[550px] right-[140px]",
        color: "bg-[#fee440]",
        textColor: "text-[#343a40]",
        delay: 0.5
    },
    {
        id: 3,
        text: "Designing tomorrow’s infrastructure today.",
        avatar: imgEllipse3,
        position: "top-[440px] right-[240px]",
        color: "bg-[#06d6a0]",
        textColor: "text-[#343a40]",
        delay: 0.2
    },
    {
        id: 4,
        text: "Building the future of AEC innovation.",
        avatar: imgEllipse3,
        position: "top-[620px] right-[40px]",
        color: "bg-[#ef476f]",
        textColor: "text-white",
        delay: 0.4
    }
];

// Add props interface
interface TestimonialBubbleProps {
    data: typeof testimonials[0];
    isActive: boolean;
    onInteract: (active: boolean) => void;
}

function TestimonialBubble({ data, isActive, onInteract }: TestimonialBubbleProps) {
    const [randomY, setRandomY] = useState([0, 0]);
    const [randomX, setRandomX] = useState([0, 0]);
    const [durationY, setDurationY] = useState(10);
    const [durationX, setDurationX] = useState(12);

    useEffect(() => {
        // Generate random paths on mount
        const generatePath = () => Array.from({ length: 6 }, () => Math.floor(Math.random() * 40) - 20);

        setRandomY([0, ...generatePath(), 0]);
        setRandomX([0, ...generatePath(), 0]);
        setDurationY(Math.random() * 5 + 10); // 10-15s
        setDurationX(Math.random() * 5 + 12); // 12-17s
    }, []);

    return (
        <motion.div
            layout
            onHoverStart={() => onInteract(true)}
            onHoverEnd={() => onInteract(false)}
            initial={{ borderRadius: 30, width: 50, height: 50, zIndex: 10 }}
            animate={{
                borderRadius: isActive ? 20 : 30,
                width: isActive ? "auto" : 50,
                height: isActive ? "auto" : 50,
                y: isActive ? 0 : randomY,
                x: isActive ? 0 : randomX,
                zIndex: isActive ? 50 : 10
            }}
            transition={{
                layout: { duration: 0.6, type: "spring", stiffness: 100, damping: 15 },
                width: { duration: 0.6, type: "spring", stiffness: 100, damping: 15 },
                height: { duration: 0.6, type: "spring", stiffness: 100, damping: 15 },
                y: { duration: isActive ? 0.6 : durationY, repeat: isActive ? 0 : Infinity, ease: "easeInOut", delay: isActive ? 0 : data.delay },
                x: { duration: isActive ? 0.6 : durationX, repeat: isActive ? 0 : Infinity, ease: "easeInOut", delay: isActive ? 0 : data.delay * 1.5 },
                zIndex: { delay: isActive ? 0 : 0.6 } // Keep z-index high while animating out
            }}
            className={`absolute ${data.position} ${data.color} border-[1.313px] border-white border-solid flex items-center justify-end cursor-pointer shadow-lg overflow-hidden`}
        >
            <motion.div
                layout
                className="flex items-center gap-3 p-2 pl-3"
            >
                <div
                    className={`overflow-hidden ${data.textColor} font-['Outfit:Regular',sans-serif] text-[10px] leading-[1.2] whitespace-nowrap`}
                >
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: isActive ? 180 : 0, opacity: isActive ? 1 : 0 }}
                        transition={{
                            width: { duration: 0.6, type: "spring", stiffness: 100, damping: 15 },
                            opacity: { duration: 0.4, delay: isActive ? 0.4 : 0 } // Wait for expansion to almost complete
                        }}
                        className="overflow-hidden"
                    >
                        <p className="whitespace-normal w-[180px]">
                            {data.text}
                        </p>
                    </motion.div>
                </div>
                <div className="relative shrink-0 size-[30px]">
                    <img src={data.avatar} className="rounded-full size-full object-cover" alt="Avatar" />
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Hero() {
    const [activeId, setActiveId] = useState<number | null>(null);
    const [isManual, setIsManual] = useState(false);
    const nextIndexRef = useRef(0); // Track sequence

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
        <div className="bg-black relative size-full font-['Outfit:Regular',sans-serif] min-h-screen overflow-hidden group" data-name="Pexio" data-node-id="163:3">
            {/* Logo */}
            <Link href="/" className="absolute left-[70px] -top-[10px] z-50">
                <Image
                    src="/logo.svg"
                    alt="Qural Logo"
                    width={166}
                    height={110}
                    className="w-[166px] h-auto"
                    priority
                />
            </Link>

            {/* Figma Absolute Background Ellipses */}
            <div className="absolute flex h-[935.705px] items-center justify-center left-[-146px] top-[-161px] w-[896.198px]">
                <div className="flex-none rotate-[46.53deg]">
                    <div className="h-[124.867px] relative w-[1170.946px]" data-node-id="163:4">
                        <div className="absolute inset-[-152.16%_-16.23%]">
                            <img alt="" className="block max-w-none size-full" src={imgEllipse2} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute flex h-[935.705px] items-center justify-center left-[-176px] top-[-543px] w-[896.198px]">
                <div className="flex-none rotate-[46.53deg]">
                    <div className="h-[124.867px] relative w-[1170.946px]" data-node-id="163:5">
                        <div className="absolute inset-[-152.16%_-16.23%]">
                            <img alt="" className="block max-w-none size-full" src={imgEllipse2} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute flex h-[935.705px] items-center justify-center left-[-594px] top-[-276px] w-[896.198px]">
                <div className="flex-none rotate-[46.53deg]">
                    <div className="h-[124.867px] relative w-[1170.946px]" data-node-id="163:6">
                        <div className="absolute inset-[-152.16%_-16.23%]">
                            <img alt="" className="block max-w-none size-full" src={imgEllipse2} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Navigation Bar */}
            <div className="-translate-x-1/2 absolute content-stretch flex font-['Outfit:Regular',sans-serif] font-normal gap-[70px] items-center leading-[normal] left-[calc(50%-0.5px)] text-[14px] top-[45px]" data-node-id="163:7">
                <Link href="/" className="relative shrink-0 text-white hover:text-white transition-colors" data-node-id="163:8">Home</Link>
                <Link href="/" className="relative shrink-0 text-[rgba(255,255,255,0.8)] hover:text-white transition-colors" data-node-id="163:9">Feature</Link>
                <Link href="/" className="relative shrink-0 text-[rgba(255,255,255,0.8)] hover:text-white transition-colors" data-node-id="163:10">Pricing</Link>
                <Link href="/" className="relative shrink-0 text-[rgba(255,255,255,0.8)] hover:text-white transition-colors" data-node-id="163:11">Contact</Link>
                <Link href="/" className="relative shrink-0 text-[rgba(255,255,255,0.8)] hover:text-white transition-colors" data-node-id="163:12">Pages</Link>
            </div>
            {/* Right Button */}
            <button className="absolute bg-[#f4f4f4] content-stretch flex h-[47px] items-center justify-center left-[calc(81.25%-17px)] px-[22.448px] py-[8.418px] rounded-[8.418px] shadow-[0.312px_0.312px_0.441px_0px_rgba(0,0,0,0.26),0.849px_0.849px_1.201px_0px_rgba(0,0,0,0.25),1.865px_1.865px_2.637px_0px_rgba(0,0,0,0.23),4.139px_4.139px_5.854px_0px_rgba(0,0,0,0.19),7.015px_7.015px_14.881px_0px_rgba(0,0,0,0.05),-0.351px_-0.351px_0px_0px_rgba(0,0,0,0.05)] top-[33px] cursor-pointer hover:brightness-95 transition-all" data-name="Button" data-node-id="169:746">
                <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ed3543] text-[12px]" data-node-id="169:747">Want to Upskill ? </p>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0.701px_0.701px_0.701px_0px_white,inset_-0.701px_-0.701px_0.701px_0px_rgba(0,0,0,0.15)]" />
            </button>
            {/* Tagline Pill and Decorative Lines */}
            {/* Tagline Pill and Decorative Lines */}
            <div className="-translate-x-1/2 absolute flex items-center justify-center gap-[32px] left-1/2 top-[150px] w-auto" data-node-id="163:17">
                <div className="h-[24px] w-[220px]" data-node-id="163:23">
                    <img alt="" className="block max-w-none size-full" src={imgGroup358} />
                </div>
                <div className="bg-[rgba(233,12,12,0.1)] content-stretch flex items-center justify-center px-[30px] py-[8px] rounded-[30px]" data-node-id="163:18">
                    <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-white" data-node-id="163:19">Where careers are engineered</p>
                </div>
                <div className="h-[24px] w-[220px]" data-node-id="163:20">
                    <img alt="" className="block max-w-none size-full" src={imgGroup357} />
                </div>
            </div>
            {/* Headline */}
            {/* Headline */}
            <p className="absolute font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] left-1/2 -translate-x-1/2 whitespace-nowrap text-[40px] text-white top-[200px]" data-node-id="163:26">Engineering careers aren’t accidental.</p>
            <p className="absolute font-['Outfit:SemiBold',sans-serif] font-semibold leading-[0] left-1/2 -translate-x-1/2 whitespace-nowrap text-[0px] text-[40px] text-white top-[250px]" data-node-id="163:27">
                <span className="leading-[normal]">They’re </span>
                <span className="leading-[normal] text-[#ee3042]">ENGINEERED</span>
                <span className="leading-[normal]">.</span>
            </p>
            <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[normal] left-1/2 -translate-x-1/2 whitespace-nowrap text-[14px] text-white top-[305px]" data-node-id="163:28">Building Talent. Powering Projects. Scaling Futures</p>
            {/* Main CTA Button */}
            {/* Main CTA Button */}
            {/* Main CTA Button */}
            <button className="-translate-x-1/2 absolute border border-solid border-white content-stretch flex h-[56px] items-center justify-center left-[calc(50%+0.5px)] p-[8px] rounded-[10px] shadow-[0px_24.721px_32.257px_0px_rgba(229,0,92,0.19),0px_3.714px_4.846px_0px_rgba(229,0,92,0.15),0px_0px_0px_0px_#f8eaf0,0px_0px_0px_0px_white] top-[350px] w-[300px] cursor-pointer hover:brightness-95 transition-all z-10" data-node-id="169:743">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
                    <div className="absolute bg-gradient-to-b from-[#ed3543] inset-0 rounded-[10px] to-[#bb1f36]" />
                    <div className="absolute bg-size-[307.20001220703125px_307.20001220703125px] bg-top-left inset-0 mix-blend-plus-lighter opacity-40 rounded-[10px]" style={{ backgroundImage: `url('${imgFrame1321314585}')` }} />
                </div>
                <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-white" data-node-id="169:744">Looking for a Talent ?</p>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_18px_0px_#ffd9e8,inset_0px_1px_4px_0px_#ffd9e8]" />
            </button>
            {/* Testimonials */}
            {testimonials.map((t) => (
                <TestimonialBubble
                    key={t.id}
                    data={t}
                    isActive={activeId === t.id}
                    onInteract={(active) => {
                        setIsManual(active);
                        setActiveId(active ? t.id : null);
                    }}
                />
            ))}

            {/* Decorative Images and Vectors */}
            <div className="-translate-x-1/2 absolute left-1/2 size-[1556px] top-[864px]" data-node-id="163:29">
                <img alt="" className="block max-w-none size-full" src={imgEllipse7} />
            </div>
            <div className="absolute left-[31px] size-[1389px] top-[947px]" data-node-id="163:30">
                <img alt="" className="block max-w-none size-full" src={imgEllipse8} />
            </div>
            <div className="absolute bg-black blur-[75px] h-[318px] left-0 top-[889px] w-[1440px]" data-node-id="163:31" />
            <div className="-translate-x-1/2 absolute bottom-[-10px] flex h-[474px] items-center justify-center left-[calc(53.13%-30.5px)] w-[1527px]">
                <div className="-scale-y-100 flex-none rotate-180">
                    <div className="h-[474px] relative w-[1527px]" data-name="Vector" data-node-id="170:767">
                        <img alt="" className="block max-w-none size-full" src={imgVector} />
                    </div>
                </div>
            </div>
            {/* <div className="absolute bottom-[50px] right-[50px] w-auto h-auto z-10" data-node-id="173:900">
                <img alt="" className="block max-w-none h-[50px] w-auto" src={imgGroup1000001535} />
            </div> */}

        </div>
    );
}
