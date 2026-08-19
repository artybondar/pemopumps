'use client';

import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, MessageCircle } from 'lucide-react';

// Демо-данные отзывов (замени на реальные отзывы с сайта и сторонних площадок [citation:2][citation:5][citation:14])
const testimonials = [
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
    text: 'Используем трёхступенчатые насосы PEMO для подачи шликера уже 3 года. Техобслуживание проводится редко, производительность стабильно высокая. Отличная альтернатива поршневым насосам [citation:6].',
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
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-navy-900" id="testimonials">
      <Container>
        <SectionTitle
          title="Отзывы наших клиентов"
          subtitle="Реальные отзывы предприятий, которые уже оценили надежность насосов PEMO"
        />

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full">
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
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/testimonials">
            <Button size="lg" variant="secondary">
              Все отзывы →
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}