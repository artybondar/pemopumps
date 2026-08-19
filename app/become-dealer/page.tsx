import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { CheckCircle, Handshake, FileText, Phone } from 'lucide-react';

const dealerSteps = [
  {
    icon: FileText,
    title: 'Заявка',
    description: 'Подайте заявку на дилерство через форму на сайте',
  },
  {
    icon: Handshake,
    title: 'Согласование',
    description: 'Обсуждение условий сотрудничества и подписание договора',
  },
  {
    icon: CheckCircle,
    title: 'Обучение',
    description: 'Обучение ваших сотрудников продуктам и техническим решениям PEMO',
  },
  {
    icon: Phone,
    title: 'Старт продаж',
    description: 'Получение доступа к материалам и начало работы',
  },
];

export default function BecomeDealerPage() {
  return (
    <main className="min-h-screen bg-navy-900 pt-24 pb-16">
      <Container>
        <SectionTitle
          title="Как стать дилером?"
          subtitle="Присоединяйтесь к команде PEMO и развивайте свой бизнес"
        />

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {dealerSteps.map((step, index) => (
            <GlassCard key={index} className="text-center">
              <div className="text-3xl mb-3">{index + 1}</div>
              <div className="w-12 h-12 bg-copper-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <step.icon className="w-6 h-6 text-copper-400" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">{step.title}</h3>
              <p className="text-slate-400 text-xs">{step.description}</p>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="bg-copper-500/5 border-copper-500/20 p-6 text-center">
          <h3 className="text-white font-semibold text-xl mb-2">Начните сотрудничество с PEMO</h3>
          <p className="text-slate-400 text-sm mb-4">Получите консультацию по условиям дилерства</p>
          <Button size="lg">
            Оставить заявку
          </Button>
        </GlassCard>
      </Container>
    </main>
  );
}