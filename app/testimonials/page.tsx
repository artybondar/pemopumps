import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Star, MessageCircle } from 'lucide-react';

// Используем те же данные, можно расширить для этой страницы
const allTestimonials = [
  {
    id: 1,
    name: 'Алексей, Технический директор',
    company: 'Горнорудная компания «Север»',
    text: 'Насосы PEMO показали себя с лучшей стороны. Перекачка пульпы с абразивными частицами идет без проблем, а замена импеллера занимает минуты. Снизили простои на 30%.',
    rating: 5,
    date: '15 июня 2025',
  },
  {
    id: 2,
    name: 'Михаил, Главный инженер',
    company: 'Керамический завод «Стройкерамика»',
    text: 'Используем трёхступенчатые насосы PEMO для подачи шликера уже 3 года. Техобслуживание проводится редко, производительность стабильно высокая. Отличная альтернатива поршневым насосам.',
    rating: 5,
    date: '02 июля 2025',
  },
  {
    id: 3,
    name: 'Елена, Менеджер по закупкам',
    company: 'Химический комбинат «Западный»',
    text: 'Работаем с кислотами и высокими температурами. Насосы PEMO единственные, кто справляется с нашей средой без частых поломок. Рекомендуем!',
    rating: 5,
    date: '14 августа 2025',
  },
  {
    id: 4,
    name: 'Сергей, Главный энергетик',
    company: 'ТЭС «Восточная»',
    text: 'Применяем насосы PEMO для перекачки зольных осадков. Простота в обслуживании и надежность — ключевые факторы, которые нас привлекли. Экономия на обслуживании ощутимая.',
    rating: 5,
    date: '10 сентября 2025',
  },
  {
    id: 5,
    name: 'Иван, Технолог',
    company: 'Гранитный карьер «Урал»',
    text: 'Отличное решение для перекачки воды с песком. Работают без сбоев, ремонт простой, корпус износостойкий. Планируем закупить еще.',
    rating: 5,
    date: '20 сентября 2025',
  },
  {
    id: 6,
    name: 'Дмитрий, Директор',
    company: 'Биогазовый комплекс "Энергия"',
    text: 'Насосы PEMO используются для перекачки абразивных сред в системе подготовки биомассы. Показали себя как крайне надежное и эффективное оборудование.',
    rating: 5,
    date: '05 октября 2025',
  },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-navy-900 pt-24 pb-16">
      <Container>
        <SectionTitle
          title="Отзывы о насосах PEMO"
          subtitle="Что говорят о нашей продукции инженеры и руководители предприятий"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {allTestimonials.map((testimonial) => (
            <GlassCard key={testimonial.id} className="h-full">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-white font-semibold text-sm">{testimonial.name}</h3>
                  <p className="text-copper-400 text-xs">{testimonial.company}</p>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? 'fill-copper-400 text-copper-400'
                          : 'text-slate-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">“{testimonial.text}”</p>
              <div className="flex items-center gap-2 text-slate-500 text-xs">
                <MessageCircle className="w-3 h-3" />
                <span>{testimonial.date}</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </main>
  );
}