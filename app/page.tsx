import Hero from "./modules/Hero";
import SuccessStories from "./modules/SuccessStories";
import WhyQural from "./modules/WhyQural";
import PathToIndustryReady from "./modules/PathToIndustryReady";
import QuralEcosystem from "./modules/QuralEcosystem";
import QuestionsThatMatter from "./modules/QuestionsThatMatter";

export default function Home() {
  return (
    <>
      <Hero />
      <SuccessStories />
      <WhyQural />
      <PathToIndustryReady />
      <QuralEcosystem />
      <QuestionsThatMatter />
    </>
  );
}