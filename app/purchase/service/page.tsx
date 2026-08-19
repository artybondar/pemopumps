import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { Wrench, Settings, Clock, Shield as ShieldIcon, Users } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Монтаж и пусконаладка',
    description: 'Профессиональный монтаж оборудования на вашем предприятии',
    details: ['Шеф-монтаж', 'Пусконаладка', 'Обучение персонала'],
  },
  {
    icon: Settings,
    title: 'Сервисное обслуживание',
    description: 'Регулярное техническое обслуживание насосов',
    details: ['Плановые осмотры', 'Замена запчастей', 'Диагностика'],
  },
  {
    icon: Clock,
    title: 'Ремонт',
    description: 'Быстрый ремонт оборудования с заменой изношенных деталей',
    details: ['Замена импеллера', 'Ремонт уплотнений', 'Балансировка'],
  },
];

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-navy-900 pt-24 pb-16">
      <Container>
        <SectionTitle
          title="Монтаж и обслуживание"
          subtitle="Профессиональная поддержка на всех этапах эксплуатации насосов PEMO"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <GlassCard key={index} className="h-full">
              <div className="w-12 h-12 bg-copper-500/10 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-copper-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{service.description}</p>
              <ul className="space-y-1">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="text-slate-300 text-sm flex items-center gap-2">
                    <ShieldIcon className="w-3 h-3 text-copper-400 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>

        <div className="mt-8 p-6 bg-navy-800/50 rounded-xl border border-copper-500/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-semibold text-lg">Закажите обслуживание прямо сейчас</h3>
              <p className="text-slate-400 text-sm">Наши инженеры готовы выехать на ваш объект</p>
            </div>
            <Button>
              Оставить заявку
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}