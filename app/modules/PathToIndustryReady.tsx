'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import LeadModal from '../components/LeadModal';

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
            duration: '90-Days',
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
            duration: '90-Days',
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
            duration: '90-Days',
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
            duration: '90-Days',
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
            duration: '90-Days',
            mode: 'Offline',
            rating: 4.8,
            alignment: 'Project-Based',
        },
    },
];

const RatingStars = ({ rating }: { rating: number }) => (
    <div className='flex items-center gap-0.5 md:gap-1'>
        {[...Array(5)].map((_, i) => (
            <img
                key={i}
                src='/star.svg'
                alt='star'
                className={`w-3.5 h-3.5 md:w-5 md:h-5 ${i < Math.floor(rating) ? '' : 'opacity-20 grayscale'}`}
            />
        ))}
        <span className='text-[10px] md:text-sm text-[#ed3543] font-archivo font-bold ml-0.5 md:ml-1'>{rating}</span>
    </div>
);

export default function PathToIndustryReady() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalOption, setModalOption] = useState('');

    const openModal = (option: string) => {
        setModalOption(option);
        setIsModalOpen(true);
    };
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
            id='our-program'
            className='w-full bg-[#ed3543] py-24 relative overflow-hidden'
            data-section='path-to-industry-ready'
        >
            {/* Background Decor (Waves/Mesh) */}
            <div className='absolute inset-0 pointer-events-none opacity-10'>
                <div className='absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-black/20 to-transparent'></div>
            </div>

            {/* Header Content */}
            <div className='relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 md:mb-16'>
                <h2 className='text-3xl md:text-6xl font-bold text-white font-outfit mb-4'>
                    Industry demanded program by <br /> Qural Academy.
                </h2>
                <p className='text-white/80 text-lg md:text-xl font-outfit max-w-2xl mx-auto'>
                    We transform engineering graduates into Job Ready professionals across Architecture, Structure, and
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
                                    className='bg-white rounded-[32px] md:rounded-[40px] p-4 md:p-6 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col'
                                >
                                    {/* Card Image Area */}
                                    <div className='relative mb-6 md:mb-10 group'>
                                        <div className='relative h-32 md:h-48 rounded-2xl overflow-hidden shadow-[0px_8px_30px_rgba(0,0,0,0.1)]'>
                                            <img
                                                src={course.image}
                                                alt={course.title}
                                                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                            />
                                        </div>

                                        {/* Floating stats badges - Centered & Overlapping */}
                                        <div className='absolute bottom-0 left-0 right-0 flex justify-center gap-2 md:gap-4 translate-y-1/2 z-10'>
                                            <div className='bg-white px-3 py-2 md:px-5 md:py-3 rounded-2xl flex items-center gap-2 md:gap-2.5 shadow-[0px_10px_30px_rgba(0,0,0,0.1)] border border-gray-50'>
                                                <Heart className='w-5 h-5 md:w-6 md:h-6 text-[#ed3543] fill-[#ed3543]' />
                                                <span className='text-sm md:text-base font-bold text-[#353535] font-archivo'>
                                                    {course.stats.likes}
                                                </span>
                                            </div>
                                            <div className='bg-white px-3 py-2 md:px-5 md:py-3 rounded-2xl flex items-center gap-2 md:gap-2.5 shadow-[0px_10px_30px_rgba(0,0,0,0.1)] border border-gray-50'>
                                                <MessageSquare className='w-5 h-5 md:w-6 md:h-6 text-[#58c2a3] fill-[#58c2a3]' />
                                                <span className='text-sm md:text-base font-bold text-[#353535] font-archivo'>
                                                    {course.stats.comments}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className='px-1 md:px-2 flex-grow'>
                                        <h3 className='text-[#BB1F36] font-roboto font-bold mb-1 md:mb-2 leading-tight text-base md:text-lg tracking-tight'>
                                            {course.title}
                                        </h3>
                                        <p className='text-[#42445D] font-roboto text-xs md:text-base mb-4 md:mb-6 tracking-tight'>
                                            {course.subtitle}
                                        </p>

                                        {/* Details Grid - 2x2 with thin dividers */}
                                        <div className='grid grid-cols-2 gap-0 mb-4 md:mb-6 border border-gray-100/70 rounded-2xl overflow-hidden'>
                                            <div className='p-2.5 md:p-4 border-r border-b border-gray-100 relative'>
                                                <div className='absolute left-0 top-3 md:top-4 bottom-3 md:bottom-4 w-0.5 bg-[#ed3543] rounded-full' />
                                                <p className='text-[9px] md:text-[12px] text-[#353535] font-archivo font-regular mb-0.5 md:mb-1 uppercase tracking-widest'>
                                                    Program Duration
                                                </p>
                                                <p className='text-base md:text-xl font-archivo font-medium text-[#0B090A] leading-tight'>
                                                    {course.details.duration}
                                                </p>
                                            </div>
                                            <div className='p-2.5 md:p-4 border-b border-gray-100 relative'>
                                                <div className='absolute left-0 top-3 md:top-4 bottom-3 md:bottom-4 w-0.5 bg-[#ed3543] rounded-full' />
                                                <p className='text-[9px] md:text-[12px] text-[#353535] font-archivo font-regular mb-0.5 md:mb-1 uppercase'>
                                                    Delivery Mode
                                                </p>
                                                <p className='text-base md:text-xl font-archivo font-medium text-[#0B090A] leading-tight'>
                                                    {course.details.mode}
                                                </p>
                                            </div>
                                            <div className='p-2.5 md:p-4 border-r border-gray-100 relative'>
                                                <div className='absolute left-0 top-3 md:top-4 bottom-3 md:bottom-4 w-0.5 bg-[#ed3543] rounded-full' />
                                                <p className='text-[9px] md:text-[12px] text-[#353535] font-archivo font-regular mb-0.5 md:mb-1 uppercase tracking-widest'>
                                                    Program Rating
                                                </p>
                                                <div className='mt-0.5'>
                                                    <RatingStars rating={course.details.rating} />
                                                </div>
                                            </div>
                                            <div className='p-2.5 md:p-4 relative'>
                                                <div className='absolute left-0 top-3 md:top-4 bottom-3 md:bottom-4 w-0.5 bg-[#ed3543] rounded-full' />
                                                <p className='text-[9px] md:text-[12px] text-[#353535] font-archivo font-regular mb-0.5 md:mb-1 uppercase'>
                                                    Industry Alignment
                                                </p>
                                                <p className='text-sm md:text-xl font-archivo font-medium text-[#0B090A] leading-tight'>
                                                    {course.details.alignment}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <button
                                        onClick={() => openModal('Interested in Course')}
                                        className="w-full bg-gradient-to-r from-[#ed3543] to-[#C41C30] text-white py-3 rounded-xl font-['Outfit'] font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 mt-auto"
                                    >
                                        Join Course
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </button>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Navigation Buttons */}
                <div className='flex justify-center gap-4 mt-8'>
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className={`w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center text-white transition-all ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/10 hover:border-white'
                            }`}
                    >
                        <ChevronLeft className='w-6 h-6' />
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={currentIndex >= maxIndex}
                        className={`w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center text-white transition-all ${currentIndex >= maxIndex ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/10 hover:border-white'
                            }`}
                    >
                        <ChevronRight className='w-6 h-6' />
                    </button>
                </div>
            </div>

            <LeadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                defaultOption={modalOption}
                title="Join Our Industry-Ready Program"
            />
        </section>
    );
}
