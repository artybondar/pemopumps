import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GlassCard } from '@/components/ui/GlassCard';
import Image from 'next/image';
import { MapPin, Factory, Globe, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-navy-900 pt-24 pb-16">
      <Container>
        <SectionTitle
          title="О компании PEMO"
          subtitle="Мировой лидер в разработке и производстве насосов для тяжелых сред"
        />

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Левая колонка - текст */}
          <div className="space-y-6">
            <GlassCard>
              <p className="text-slate-300 leading-relaxed">
                Компания <strong className="text-white">PEMO</strong>, основанная в 1947 году , является признанным мировым лидером в проектировании и производстве центробежных насосов для самых тяжелых промышленных условий.
                Наша специализация — создание индивидуальных решений для перекачивания абразивных и агрессивных кислотных сред, где стандартное оборудование часто выходит из строя.
                Мы не предлагаем типовые насосы. Каждое устройство разрабатывается индивидуально под конкретные технологические задачи и требования заказчика.
                Благодаря такому подходу и более чем 75-летнему опыту, с 1947 года мы изготовили и поставили на рынок более 43 000 уникальных насосов, завоевав доверие более чем 4 000 клиентов по всему миру
              </p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-white font-semibold text-lg mb-3">Ключевые факты</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-navy-800/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-display font-bold text-copper-400">1947</div>
                  <p className="text-slate-400 text-xs">Год основания</p>
                </div>
                <div className="bg-navy-800/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-display font-bold text-copper-400">40 000+</div>
                  <p className="text-slate-400 text-xs">Уникальных насосов</p>
                </div>
                <div className="bg-navy-800/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-display font-bold text-copper-400">20 000 м²</div>
                  <p className="text-slate-400 text-xs">Площадь производства</p>
                </div>
                <div className="bg-navy-800/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-display font-bold text-copper-400">20+</div>
                  <p className="text-slate-400 text-xs">Стран поставок</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="text-white font-semibold text-lg mb-3">Наши ценности</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-copper-400" />
                  Индивидуальный подход к каждому проекту
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-copper-400" />
                  Высочайшее качество и надежность
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-copper-400" />
                  Инновационные инженерные решения
                </li>
              </ul>
            </GlassCard>

            <GlassCard className="bg-copper-500/5 border-copper-500/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-copper-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-copper-400" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">
                    <strong className="text-white">Производство:</strong> Италия, Милан
                  </p>
                  <p className="text-slate-400 text-xs">Разработка и изготовление с 1947 года</p>
                </div>
              </div>
            </GlassCard>

          </div>

          {/* Правая колонка - картинки */}
          <div className="space-y-6">
            <GlassCard>
              <div className="aspect-[4/3] bg-navy-800 rounded-lg overflow-hidden relative">
                <Image
                  src="/images/about-factory.jpg"
                  alt="Завод PEMO в Вимодроне, Италия"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900 to-transparent p-4">
                  <p className="text-white text-sm font-medium flex items-center gap-2">
                    <Factory className="w-4 h-4 text-copper-400" />
                    Производственный комплекс в Вимодроне, Милан
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="aspect-[4/3] bg-navy-800 rounded-lg overflow-hidden relative">
                <Image
                  src="/images/world-map.gif"
                  alt="География поставок PEMO"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900 to-transparent p-4">
                  <p className="text-white text-sm font-medium flex items-center gap-2">
                    <Globe className="w-4 h-4 text-copper-400" />
                    Поставки в 20+ стран мира
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-8">
          <GlassCard className="bg-gradient-to-br from-copper-500/5 to-transparent border-copper-500/10">
            <h3 className="text-white font-semibold text-lg mb-2 text-center">География поставок</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {['Россия', 'СНГ', 'США', 'Испания', 'Португалия', 'Франция', 'Голландия', 'Польша', 'Бразилия', 'Египет', 'Сингапур', 'Перу', 'Чили'].map((country) => (
                <span key={country} className="px-3 py-1 bg-navy-800/50 rounded-full text-slate-300 text-xs border border-slate-700">
                  {country}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>
      </Container>
    </main>
  );
}