import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import OriginStory from '@/components/OriginStory';
import HowItWorks from '@/components/HowItWorks';
import ProductShowcase from '@/components/ProductShowcase';
import ThreeScene from '@/components/ThreeScene';
import ProblemSolution from '@/components/ProblemSolution';
import Features from '@/components/Features';
import Personas from '@/components/Personas';
import Stats from '@/components/Stats';
import DemoCarousel from '@/components/DemoCarousel';
import Pricing from '@/components/Pricing';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <Hero />
      <Mission />
      <OriginStory />
      <HowItWorks />
      <ProductShowcase />
      <ProblemSolution />

      {/* <ThreeScene /> */}

      <section id="features">
        <Features />
      </section>
      <section id="who-its-for">
        <Personas />
      </section>
      <Stats />
      {/* <DemoCarousel /> */}
      <section id="pricing">
        <Pricing />
      </section>

      <Footer />
    </main>
  );
}
