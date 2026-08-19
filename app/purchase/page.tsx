import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Wallet, Truck, Wrench, ChevronRight } from 'lucide-react';

const purchaseItems = [
  {
    icon: Wallet,
    title: 'Кредиты и лизинг',
    description: 'Гибкие финансовые решения для приобретения насосного оборудования',
    href: '/purchase/leasing',
    specs: ['Срок: до 5 лет', 'Аванс: от 0%', 'Специальные программы'],
  },
  {
    icon: Truck,
    title: 'Доставка',
    description: 'Быстрая и надежная доставка оборудования по всей России',
    href: '/purchase/delivery',
    specs: ['По всей России', 'Страхование груза', 'Отслеживание'],
  },
  {
    icon: Wrench,
    title: 'Монтаж и обслуживание',
    description: 'Профессиональный монтаж, пусконаладка и сервисное обслуживание',
    href: '/purchase/service',
    specs: ['Шеф-монтаж', 'Гарантийное обслуживание', 'Поставка запчастей'],
  },
];

export default function PurchasePage() {
  return (
    <main className="min-h-screen bg-navy-900 pt-24 pb-16">
      <Container>
        <SectionTitle
          title="Где купить"
          subtitle="Все способы приобретения и обслуживания насосов PEMO"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {purchaseItems.map((item, index) => (
            <GlassCard key={index} className="h-full hover:border-copper-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-copper-500/10 rounded-lg flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-copper-400" />
                </div>
                <h3 className="text-white font-semibold">{item.title}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>
              <ul className="space-y-1 mb-4">
                {item.specs.map((spec, idx) => (
                  <li key={idx} className="text-slate-500 text-xs flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-copper-500 rounded-full" />
                    {spec}
                  </li>
                ))}
              </ul>
              <Link href={item.href}>
                <Button variant="secondary" size="sm" className="w-full flex items-center justify-center">
                  Подробнее <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </GlassCard>
          ))}
        </div>
      </Container>
    </main>
  );
}