'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

// Placeholder Assets
const imgBee = '/bee.png';
const imgCourseThumb = '/block.jpg';
const imgFrame1321314585 = 'https://www.figma.com/api/mcp/asset/8fb099de-3579-46e3-9ec7-9c3631f2af2e';

const courses = [
    {
        id: 1,
        title: 'Advanced Architecture BIM Professional',
        subtitle: 'Design ideas into build-ready reality.',
        image: '/course-1.png',
        stats: { likes: '18.4K', comments: '10.2K' },
        details: {
            duration: '7 Months',
            mode: 'Offline',
            rating: 4.8,
            alignment: 'Project-Based',
        },
    },
    {
        id: 2,
        title: 'Advanced Structural BIM Professional',
        subtitle: 'Turn strength into structure.',
        image: '/course-2.png',
        stats: { likes: '15.7K', comments: '8.4K' },
        details: {
            duration: '7 Months',
            mode: 'Offline',
            rating: 4.8,
            alignment: 'Project-Based',
        },
    },
    {
        id: 3,
        title: 'Advanced HVAC BIM Professional',
        subtitle: 'Where comfort meets engineering precision.',
        image: '/course-3.png',
        stats: { likes: '22.1K', comments: '14.3K' },
        details: {
            duration: '7 Months',
            mode: 'Offline',
            rating: 4.8,
            alignment: 'Project-Based',
        },
    },
    {
        id: 4,
        title: 'Advanced PHE BIM Professional',
        subtitle: 'Design systems that make building work.',
        image: '/course-4.png',
        stats: { likes: '12.9K', comments: '7.1K' },
        details: {
            duration: '7 Months',
            mode: 'Offline',
            rating: 4.8,
            alignment: 'Project-Based',
        },
    },
    {
        id: 5,
        title: 'Advanced Electrical BIM Professional',
        subtitle: 'Intelligent electrical modeling for infrastructure.',
        image: '/course-5.png',
        stats: { likes: '19.8K', comments: '11.5K' },
        details: {
            duration: '7 Months',
            mode: 'Offline',
            rating: 4.8,
            alignment: 'Project-Based',
        },
    },
];

const RatingStars = ({ rating }: { rating: number }) => (
    <div className='flex items-center gap-1'>
        {[...Array(5)].map((_, i) => (
            <img
                key={i}
                src='/star.svg'
                alt='star'
                className={`w-5 h-5 ${i < Math.floor(rating) ? '' : 'opacity-20 grayscale'}`}
            />
        ))}
        <span className='text-sm text-[#ed3543] font-archivo font-bold ml-1'>{rating}</span>
    </div>
);

export default function PathToIndustryReady() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);
    const maxIndex = Math.max(0, courses.length - visibleCards);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setVisibleCards(1);
            else if (window.innerWidth < 1024) setVisibleCards(2);
            else setVisibleCards(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };
    return (
        <section
            id='career-paths'
            className='w-full bg-[#ed3543] py-24 relative overflow-hidden'
            data-section='path-to-industry-ready'
        >
            {/* Background Decor (Waves/Mesh) */}
            <div className='absolute inset-0 pointer-events-none opacity-10'>
                <div className='absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-black/20 to-transparent'></div>
            </div>

            {/* Header Content */}
            <div className='relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16'>
                <h2 className='text-4xl md:text-6xl font-bold text-white font-outfit mb-4'>
                    Paths to <br className='md:hidden' /> Industry-Ready Roles
                </h2>
                <p className='text-white/80 text-lg md:text-xl font-outfit max-w-2xl mx-auto'>
                    We transform engineering graduates into BIM-ready professionals across Architecture, Structure, and
                    MEP Construction.
                </p>

                {/* Floating Bee Illustration */}
                <div className='absolute -right-4 top-0 md:-top-10 md:right-10 w-32 md:w-48 hidden sm:block animate-bounce-slow'>
                    <img src={imgBee} alt='Bee' className='w-full h-auto object-contain transform rotate-12' />
                </div>
            </div>

            {/* Carousel Container */}
            <div className='relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='overflow-hidden -mx-4 px-4 pt-10 pb-10'>
                    <motion.div
                        animate={{ x: `-${currentIndex * (100 / visibleCards)}%` }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className='flex'
                    >
                        {courses.map((course) => (
                            <div key={course.id} className='w-full md:w-1/2 lg:w-1/3 shrink-0 px-4'>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className='bg-white rounded-[40px] p-6 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full'
                                >
                                    {/* Card Image Area */}
                                    <div className='relative mb-10 group'>
                                        <div className='relative h-48 rounded-2xl overflow-hidden shadow-[0px_8px_30px_rgba(0,0,0,0.1)]'>
                                            <img
                                                src={course.image}
                                                alt={course.title}
                                                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                            />
                                        </div>

                                        {/* Floating stats badges - Centered & Overlapping */}
                                        <div className='absolute bottom-0 left-0 right-0 flex justify-center gap-4 translate-y-1/2 z-10'>
                                            <div className='bg-white px-5 py-3 rounded-2xl flex items-center gap-2.5 shadow-[0px_10px_30px_rgba(0,0,0,0.1)] border border-gray-50'>
                                                <Heart className='w-6 h-6 text-[#ed3543] fill-[#ed3543]' />
                                                <span className='text-base font-bold text-[#353535] font-archivo'>
                                                    {course.stats.likes}
                                                </span>
                                            </div>
                                            <div className='bg-white px-5 py-3 rounded-2xl flex items-center gap-2.5 shadow-[0px_10px_30px_rgba(0,0,0,0.1)] border border-gray-50'>
                                                <MessageSquare className='w-6 h-6 text-[#58c2a3] fill-[#58c2a3]' />
                                                <span className='text-base font-bold text-[#353535] font-archivo'>
                                                    {course.stats.comments}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className='px-2'>
                                        <h3 className='text-[#BB1F36] font-roboto font-bold mb-2 leading-tight text-lg tracking-tight'>
                                            {course.title}
                                        </h3>
                                        <p className='text-[#42445D] font-roboto text-base mb-6 tracking-tight'>
                                            {course.subtitle}
                                        </p>

                                        {/* Details Grid - 2x2 with thin dividers */}
                                        <div className='grid grid-cols-2 gap-0 mb-6 border border-gray-100/70 rounded-2xl overflow-hidden'>
                                            <div className='p-4 border-r border-b border-gray-100 relative'>
                                                <div className='absolute left-0 top-4 bottom-4 w-0.5 bg-[#ed3543] rounded-full' />
                                                <p className='text-[12px] text-[#353535] font-archivo font-regular mb-1 uppercase tracking-widest whitespace-nowrap'>
                                                    Program Duration
                                                </p>
                                                <p className='text-xl font-archivo font-medium text-[#0B090A]'>
                                                    {course.details.duration}
                                                </p>
                                            </div>
                                            <div className='p-4 border-b border-gray-100 relative'>
                                                <div className='absolute left-0 top-4 bottom-4 w-0.5 bg-[#ed3543] rounded-full' />
                                                <p className='text-[12px] text-[#353535] font-archivo font-regular mb-1 uppercase whitespace-nowrap'>
                                                    Delivery Mode
                                                </p>
                                                <p className='text-xl font-archivo font-medium text-[#0B090A]'>
                                                    {course.details.mode}
                                                </p>
                                            </div>
                                            <div className='p-4 border-r border-gray-100 relative'>
                                                <div className='absolute left-0 top-4 bottom-4 w-0.5 bg-[#ed3543] rounded-full' />
                                                <p className='text-[12px] text-[#353535] font-archivo font-regular mb-1 uppercase tracking-widest whitespace-nowrap'>
                                                    Program Rating
                                                </p>
                                                <div className='mt-1'>
                                                    <RatingStars rating={course.details.rating} />
                                                </div>
                                            </div>
                                            <div className='p-4 relative'>
                                                <div className='absolute left-0 top-4 bottom-4 w-0.5 bg-[#ed3543] rounded-full' />
                                                <p className='text-[12px] text-[#353535] font-archivo font-regular mb-1 uppercase whitespace-nowrap'>
                                                    Industry Alignment
                                                </p>
                                                <p className='text-xl font-archivo font-medium text-[#0B090A]'>
                                                    {course.details.alignment}
                                                </p>
                                            </div>
                                        </div>

                                {/* CTA Button */}
                                <button className="w-full bg-gradient-to-r from-[#ed3543] to-[#C41C30] text-white py-3 rounded-xl font-['Outfit'] font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                                    Explore this path
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
