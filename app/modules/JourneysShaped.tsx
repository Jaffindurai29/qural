import ProfileCard from '../components/ProfileCard';

const imgCompanyLogo = "/company.png";
const imgLearnerProfile = "/profile.jpg";

export default function JourneysShaped() {
    return (
        <div className="relative w-full h-screen flex items-center justify-center bg-[#ed3543] isolate overflow-hidden">
            {/* Scaled Content Container */}
            <div className="relative w-[1280px] h-full shrink-0 origin-center scale-[0.4] sm:scale-[0.5] md:scale-[0.6] lg:scale-[0.7] xl:scale-[0.8] 2xl:scale-100 transition-transform duration-300 flex flex-col items-center justify-center">

                {/* Title Section */}
                <div className="flex flex-col items-center gap-2">
                    <h1 className="font-['Outfit:SemiBold',sans-serif] font-semibold text-[64px] text-white text-center leading-tight">
                        Journeys shaped at Qural
                    </h1>
                    {/* Handwritten Underline */}
                    <div className="w-[370px] h-[30px] relative">
                        <svg viewBox="0 0 371 30" fill="none" className="w-full h-full opacity-100">
                            <path d="M5 25C100 15 250 15 365 10" stroke="#FFBC11" strokeWidth="6" strokeLinecap="round" />
                            <path d="M10 28C110 20 230 20 360 15" stroke="#FFBC11" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                {/* Profile Cards Grid */}
                <div className="flex justify-center gap-6 px-10 w-full">
                    <ProfileCard
                        name="Padmini Kadhirvel"
                        beforeRole="Diploma Civil"
                        afterRole="Revit Structure Modeler"
                        profileImage={imgLearnerProfile}
                        companyLogo={imgCompanyLogo}
                    />
                    <ProfileCard
                        name="Padmini Kadhirvel"
                        beforeRole="Junior Architect"
                        afterRole="Architectural BIM Modeler"
                        profileImage={imgLearnerProfile}
                        companyLogo={imgCompanyLogo}
                    />
                    <ProfileCard
                        name="Padmini Kadhirvel"
                        beforeRole="Career gap / Non-core job"
                        afterRole="MEP Design Engineer (Electrical)"
                        profileImage={imgLearnerProfile}
                        companyLogo={imgCompanyLogo}
                    />
                </div>

                {/* Action Row: Nav and CTA Buttons */}
                <div className="mt-12 flex flex-col items-center gap-6 mb-6">
                    <div className="flex items-center gap-4 md:gap-6">
                        {/* Nav Left */}
                        <button className="w-14 h-14 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors shrink-0">
                            <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Glassy Red Button */}
                        <button className="relative px-8 py-4 rounded-[12px] group overflow-hidden border border-white/20 shadow-lg cursor-pointer transition-all hover:scale-105 active:scale-95">
                            <div className="absolute inset-0 bg-gradient-to-b from-[#ed3543] to-[#bb1f36]" />
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative font-['Outfit:SemiBold',sans-serif] font-semibold text-white text-[18px] whitespace-nowrap">
                                Find Your Industry-Ready Path
                            </span>
                        </button>

                        {/* White Button */}
                        <button className="px-8 py-4 rounded-[12px] bg-[#f4f4f4] shadow-[0_4px_14px_rgba(0,0,0,0.1)] cursor-pointer transition-all hover:scale-105 active:scale-95 border-b-2 border-gray-200">
                            <span className="font-['Outfit:SemiBold',sans-serif] font-semibold text-[#ed3543] text-[18px] whitespace-nowrap">
                                Get Career Guidance
                            </span>
                        </button>

                        {/* Nav Right */}
                        <button className="w-14 h-14 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
