'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mountain,
  Factory,
  Gem,
  Beaker,
  Flame,
  Zap,
  Droplets,
  Wrench,
} from 'lucide-react';

const industries = [
  {
    id: 'mining',
    icon: Mountain,
    title: 'Добыча и обогащение',
    description: 'Подача пульпы в гидроциклоны и перекачивание абразивных суспензий',
    specs: ['Твердые частицы до 8 мм', 'Плотность пульпы до 1.8 т/м³'],
  },
  {
    id: 'filter',
    icon: Factory,
    title: 'Подача на фильтр-прессы',
    description: 'Двухступенчатое исполнение для стабильной подачи',
    specs: ['Давление до 2.5 МПа', 'Точность дозирования'],
  },
  {
    id: 'stone',
    icon: Gem,
    title: 'Обработка камня',
    description: 'Мировой лидер в поставках для камнеобработки',
    specs: ['Абразивные шламы', 'Высокая износостойкость'],
  },
  {
    id: 'ceramic',
    icon: Beaker,
    title: 'Керамика',
    description: 'Перекачка керамического шликера с высокой плотностью',
    specs: ['Вязкость до 2000 сПз', 'Температура до 80°C'],
  },
  {
    id: 'chemical',
    icon: Flame,
    title: 'Химические процессы',
    description: 'Работа в агрессивных кислотных средах',
    specs: ['pH от 1 до 14', 'Температура до 120°C'],
  },
  {
    id: 'steel',
    icon: Zap,
    title: 'Сталелитейные предприятия',
    description: 'Перекачка воды с маслом и металлическими фракциями',
    specs: ['Температура выше 100°C', 'Наличие металлических частиц'],
  },
  {
    id: 'power',
    icon: Droplets,
    title: 'Теплоэлектростанции',
    description: 'Перекачка углесодержащих шламов и зольных осадков',
    specs: ['Зольность до 40%', 'Температура до 90°C'],
  },
  {
    id: 'drilling',
    icon: Wrench,
    title: 'Буровые растворы',
    description: 'Подача бурового раствора в песко- и илоотделители',
    specs: ['Плотность до 2.0 т/м³', 'Абразивные частицы'],
  },
];

export default function Applications() {
  const [activeId, setActiveId] = useState(industries[0].id);

  const activeIndustry = industries.find((i) => i.id === activeId)!;

  return (
    <section className="py-24 bg-navy-800/30" id="applications">
      <Container>
        <SectionTitle
          title="Отрасли применения"
          subtitle="Насосы PEMO работают в самых сложных условиях — от горнорудных комбинатов до химических производств"
        />

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Вкладки (слева) */}
          <div className="lg:col-span-2 space-y-2">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveId(industry.id)}
                className={`
                  w-full text-left px-4 py-3 rounded-xl transition-all duration-300
                  flex items-center gap-3
                  ${
                    activeId === industry.id
                      ? 'bg-copper-500/20 border border-copper-500/30 text-white shadow-glow'
                      : 'hover:bg-navy-800/50 text-slate-400 hover:text-white border border-transparent'
                  }
                `}
              >
                <industry.icon className={`w-5 h-5 ${
                  activeId === industry.id ? 'text-copper-400' : 'text-slate-500'
                }`} />
                <span className="text-sm font-medium">{industry.title}</span>
              </button>
            ))}
          </div>

          {/* Контент (справа) */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="h-full p-8 border-copper-500/20">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-copper-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <activeIndustry.icon className="w-8 h-8 text-copper-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">
                        {activeIndustry.title}
                      </h3>
                      <p className="text-slate-300 text-lg mt-1">
                        {activeIndustry.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mt-6">
                    {activeIndustry.specs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="bg-navy-800/50 rounded-xl px-4 py-3 border border-slate-800"
                      >
                        <p className="text-sm text-copper-400 font-medium">• {spec}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-copper-500/5 rounded-xl border border-copper-500/10">
                    <p className="text-sm text-slate-400">
                      💡 Насосы PEMO специально адаптированы для работы в этой отрасли
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}