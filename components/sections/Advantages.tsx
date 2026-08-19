'use client';

import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Gauge, Clock, Shield, ArrowRight } from 'lucide-react';

const advantages = [
  {
    icon: Gauge,
    title: 'На 30% дольше',
    description: 'Испытания на реальных производствах подтвердили увеличенный ресурс работы',
  },
  {
    icon: Clock,
    title: 'Минуты на ремонт',
    description: 'Разборный корпус позволяет заменить импеллер без специального оборудования',
  },
  {
    icon: Shield,
    title: 'Без подвода воды',
    description: 'Уникальная схема уплотнения не требует дополнительных коммуникаций',
  },
  {
    icon: ArrowRight,
    title: 'Доступная цена',
    description: 'Насосы и запчасти стоят дешевле при сопоставимых характеристиках',
  },
];

export default function Advantages() {
  return (
    <section className="py-24 bg-navy-800/50" id="advantages">
      <Container>
        <SectionTitle
          title="Почему инженеры выбирают PEMO"
          subtitle="Четыре ключевых преимущества, которые снижают ваши затраты и повышают надежность производства"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, index) => (
            <AnimatedSection key={adv.title} delay={index * 0.1}>
              <GlassCard>
                <div className="w-12 h-12 bg-copper-500/10 rounded-xl flex items-center justify-center mb-4">
                  <adv.icon className="w-6 h-6 text-copper-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{adv.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{adv.description}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}