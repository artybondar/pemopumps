import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { Wallet, Calendar, Percent, CheckCircle } from 'lucide-react';

const leasingPrograms = [
  {
    title: 'Стандартный лизинг',
    description: 'Классическая программа для приобретения оборудования',
    terms: ['Срок: от 1 до 5 лет', 'Аванс: от 10%', 'Выкупная цена: символическая'],
  },
  {
    title: 'Лизинг с отсрочкой',
    description: 'Первые платежи через 3-6 месяцев после поставки',
    terms: ['Отсрочка: до 6 месяцев', 'Аванс: от 20%', 'Гибкий график'],
  },
  {
    title: 'Специальная программа',
    description: 'Для новых предприятий и стартапов с ограниченным бюджетом',
    terms: ['Аванс: от 0%', 'Срок: до 7 лет', 'Индивидуальный подход'],
  },
];

export default function LeasingPage() {
  return (
    <main className="min-h-screen bg-navy-900 pt-24 pb-16">
      <Container>
        <SectionTitle
          title="Кредиты и лизинг"
          subtitle="Гибкие финансовые решения для вашего бизнеса"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {leasingPrograms.map((program, index) => (
            <GlassCard key={index} className="h-full">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-copper-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wallet className="w-5 h-5 text-copper-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{program.title}</h3>
                  <p className="text-slate-400 text-sm">{program.description}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {program.terms.map((term, idx) => (
                  <li key={idx} className="text-slate-300 text-sm flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-copper-400 flex-shrink-0" />
                    {term}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="bg-copper-500/5 border-copper-500/20 p-6">
          <div className="text-center">
            <p className="text-slate-300 text-sm mb-4">
              <strong className="text-white">Оставьте заявку</strong> на индивидуальный расчет, и наш финансовый специалист свяжется с вами
            </p>
            <Button>
              Оставить заявку
            </Button>
          </div>
        </GlassCard>
      </Container>
    </main>
  );
}