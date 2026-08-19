// components/sections/CTASection.tsx
'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function CTASection() {
  const scrollToCalculator = () => {
    const calculator = document.getElementById('calculator');
    if (calculator) {
      calculator.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-navy-800/30 to-navy-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Готовы посчитать <br />
            <span className="text-copper-500">вашу выгоду</span>?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Введите параметры вашего процесса в калькулятор TCO и узнайте, 
            сколько вы сэкономите с насосами PEMO
          </p>

          <Button 
            size="lg" 
            className="flex items-center justify-center mx-auto"
            onClick={scrollToCalculator}
          >
            <span className="mr-2">→</span>
            Запустить калькулятор TCO
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}