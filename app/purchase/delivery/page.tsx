import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Truck, Package, MapPin, Clock, Shield as ShieldIcon } from 'lucide-react';

const deliveryMethods = [
  {
    icon: Truck,
    title: 'Автотранспортом',
    description: 'Быстрая доставка по всей России автотранспортом',
    details: ['Срок: 3-10 дней', 'Отслеживание груза', 'Страхование'],
  },
  {
    icon: Package,
    title: 'Железнодорожным транспортом',
    description: 'Экономичная доставка крупногабаритного оборудования',
    details: ['Срок: 7-20 дней', 'Контейнерная перевозка', 'Складские услуги'],
  },
  {
    icon: MapPin,
    title: 'Доставка до объекта',
    description: 'Организация доставки непосредственно на ваше предприятие',
    details: ['Разгрузка', 'Растаможка', 'Полное сопровождение'],
  },
];

export default function DeliveryPage() {
  return (
    <main className="min-h-screen bg-navy-900 pt-24 pb-16">
      <Container>
        <SectionTitle
          title="Доставка оборудования"
          subtitle="Надежная транспортировка насосов PEMO по всей России"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {deliveryMethods.map((method, index) => (
            <GlassCard key={index} className="h-full">
              <div className="w-12 h-12 bg-copper-500/10 rounded-xl flex items-center justify-center mb-4">
                <method.icon className="w-6 h-6 text-copper-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{method.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{method.description}</p>
              <ul className="space-y-1">
                {method.details.map((detail, idx) => (
                  <li key={idx} className="text-slate-300 text-sm flex items-center gap-2">
                    <ShieldIcon className="w-3 h-3 text-copper-400 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </Container>
    </main>
  );
}