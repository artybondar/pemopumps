import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GlassCard } from '@/components/ui/GlassCard';
import { Gauge, Shield, Clock, Zap } from 'lucide-react';

const products = [
  {
    icon: Gauge,
    title: 'Насосы для пульпы',
    description: 'Перекачивание абразивных суспензий с твердыми частицами до 8 мм',
    specs: ['Производительность: до 1000 м³/ч', 'Напор: до 80 м'],
  },
  {
    icon: Shield,
    title: 'Насосы для шлама',
    description: 'Работа с высококонцентрированными смесями и осадками',
    specs: ['Плотность до 2.0 т/м³', 'Износостойкость: 650 HB'],
  },
  {
    icon: Clock,
    title: 'Химические насосы',
    description: 'Стойкость к агрессивным средам и высокой температуре',
    specs: ['pH: 1-14', 'Температура до 120°C'],
  },
  {
    icon: Zap,
    title: 'Энергоэффективные решения',
    description: 'Снижение энергопотребления до 30%',
    specs: ['КПД до 92%', 'Окупаемость до 12 месяцев'],
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-navy-900 pt-24 pb-16">
      <Container>
        <SectionTitle
          title="Продукция PEMO"
          subtitle="Широкий ассортимент насосов для любых промышленных задач"
        />
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <GlassCard key={index}>
              <div className="w-12 h-12 bg-copper-500/10 rounded-xl flex items-center justify-center mb-4">
                <product.icon className="w-6 h-6 text-copper-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{product.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{product.description}</p>
              <ul className="space-y-1">
                {product.specs.map((spec, idx) => (
                  <li key={idx} className="text-xs text-slate-500">• {spec}</li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </Container>
    </main>
  );
}