import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import Objectives from '@/components/sections/Objectives';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 md:px-8 md:py-24">
        <Hero />
        <Objectives />
      </main>
      <Footer />
    </>
  );
}
