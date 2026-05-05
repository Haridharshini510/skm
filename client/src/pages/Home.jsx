import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
