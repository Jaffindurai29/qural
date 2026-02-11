import Hero from "./modules/Hero";
import BuiltThrough from "./modules/BuiltThrough";
import JourneysShaped from "./modules/JourneysShaped";
import WhyQural from "./modules/WhyQural";
import PathToIndustryReady from "./modules/PathToIndustryReady";
import QuralEcosystem from "./modules/QuralEcosystem";
import QuestionsThatMatter from "./modules/QuestionsThatMatter";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="w-full bg-[#ed3543] flex flex-col items-center px-2 md:px-0 isolate z-0">
        <BuiltThrough />
        <JourneysShaped />
      </section>
      <WhyQural />
      <PathToIndustryReady />
      <QuralEcosystem />
      <QuestionsThatMatter />
    </>
  );
}