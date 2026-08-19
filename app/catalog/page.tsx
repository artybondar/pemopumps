import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { 
  ArrowUp, 
  ArrowRight, 
  Layers, 
  Shield, 
  Droplets,
  ArrowDown,
  ChevronRight 
} from 'lucide-react';

const pumpTypes = [
  {
    icon: ArrowUp,
    title: 'Вертикальные насосы',
    description: 'Компактные решения для ограниченного пространства. Идеальны для перекачки пульпы, шламов и абразивных сред.',
    specs: ['Производительность: до 800 м³/ч', 'Напор: до 60 м', 'Температура: до 120°C'],
    applications: ['ГОКи', 'ТЭС', 'Химическая промышленность'],
  },
  {
    icon: ArrowRight,
    title: 'Горизонтальные насосы',
    description: 'Классическое исполнение для большинства промышленных задач. Высокая надежность и простота обслуживания.',
    specs: ['Производительность: до 1200 м³/ч', 'Напор: до 80 м', 'КПД: до 92%'],
    applications: ['Обогатительные фабрики', 'Металлургия', 'Керамика'],
  },
  {
    icon: Layers,
    title: 'Многоступенчатые насосы',
    description: 'Уникальное двухступенчатое исполнение для подачи на фильтр-прессы и в гидроциклоны.',
    specs: ['Давление: до 2.5 МПа', 'Точность дозирования', 'Стабильность подачи'],
    applications: ['Фильтр-прессы', 'Гидроциклоны', 'Химические процессы'],
  },
  {
    icon: Shield,
    title: 'Насосы из суперпрочной стали',
    description: 'Специальные материалы для работы в самых агрессивных средах. Стойкость к кислотам и абразиву.',
    specs: ['Материал: 28ХГНМ', 'Износостойкость: 650 HB', 'pH: 1-14'],
    applications: ['Химические комбинаты', 'Кислотные среды', 'Абразивные шламы'],
  },
  {
    icon: Droplets,
    title: 'Погружные насосы',
    description: 'Надежные решения для перекачки буровых растворов, зольных осадков и загрязненных жидкостей.',
    specs: ['Погружение: до 10 м', 'Температура: до 100°C', 'Твердые частицы: до 8 мм'],
    applications: ['Буровые установки', 'ТЭС', 'Шахтные воды'],
  },
];

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-navy-900 pt-24 pb-16">
      <Container>
        <SectionTitle
          title="Каталог насосов PEMO"
          subtitle="Широкий ассортимент оборудования для любых промышленных задач"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {pumpTypes.map((pump, index) => (
            <GlassCard key={index} className="h-full hover:border-copper-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-copper-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <pump.icon className="w-6 h-6 text-copper-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{pump.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{pump.description}</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="bg-navy-800/50 rounded-lg p-3">
                  <p className="text-copper-400 text-xs font-medium mb-1">Характеристики</p>
                  <ul className="space-y-0.5">
                    {pump.specs.map((spec, idx) => (
                      <li key={idx} className="text-slate-400 text-xs">• {spec}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-navy-800/50 rounded-lg p-3">
                  <p className="text-copper-400 text-xs font-medium mb-1">Применение</p>
                  <ul className="space-y-0.5">
                    {pump.applications.map((app, idx) => (
                      <li key={idx} className="text-slate-400 text-xs">• {app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </main>
  );
}