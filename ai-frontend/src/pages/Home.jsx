import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../home/HeroSection";
import HowItWorks from "../home/HowItWorks";
import ValueProposition from "../home/ValueProposition";
import CTA from "../home/CallToAction";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <ValueProposition />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
