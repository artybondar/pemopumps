import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Advantages from '@/components/sections/Advantages';
import Applications from '@/components/sections/Applications';
import TCOCalculator from '@/components/features/TCOCalculator';
import PumpDiagram from '@/components/features/PumpDiagram';
import Testimonials from '@/components/sections/Testimonials';
import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Главная — Насосы PEMO для тяжелых сред',
  description: 'Инженерные решения для горнодобывающей, химической и металлургической промышленности. Калькулятор TCO, интерактивная диаграмма насоса.',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Advantages />
      <Applications />
      <TCOCalculator />
      <PumpDiagram />
      <Testimonials />
      <ContactForm />
    </main>
  );
}