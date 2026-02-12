import Hero from './modules/Hero';
import BuiltThrough from './modules/BuiltThrough';
import JourneysShaped from './modules/JourneysShaped';
import WhyQural from './modules/WhyQural';
import SpecializedPartner from './modules/SpecializedPartner';
import RecruitmentProcess from './modules/RecruitmentProcess';
import PathToIndustryReady from './modules/PathToIndustryReady';
import QuralEcosystem from './modules/QuralEcosystem';
import QuestionsThatMatter from './modules/QuestionsThatMatter';
import BIMShowcase from './modules/BIMShowcase';
import TalentCTA from './modules/TalentCTA';
import Footer from './modules/Footer';

export default function Home() {
    return (
        <>
            <Hero />
            <WhyQural />
            <BIMShowcase />
            <section className='w-full bg-[#ed3543] flex flex-col items-center px-2 md:px-0 relative z-50'>
                <BuiltThrough />
                <JourneysShaped />
            </section>
            <SpecializedPartner />
            <RecruitmentProcess />
            <PathToIndustryReady />
            <QuralEcosystem />
            <QuestionsThatMatter />
            {/* <BIMHRPartner /> */}
            <TalentCTA />
            <Footer />
        </>
    );
}
