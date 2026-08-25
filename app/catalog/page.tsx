import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import {
  ArrowUp,
  ArrowRight,
  Layers,
  Shield,
  Droplets,
  Zap,
  Factory,
  Cpu,
  Flame,
  Wind,
  Gauge,
  HardDrive,
  BadgeCheck,
  ChevronRight,
} from 'lucide-react';

// Данные о насосах, структурированные на основе информации с сайта
const pumpTypes = [
  {
    icon: ArrowUp,
    title: 'Вертикальные насосы (серия AUS)',
    description: 'Оптимальны для перекачки пульпы, шламов и абразивных сред. Отсутствие уплотнений и открытый импеллер обеспечивают экономию электроэнергии на 15–30%.',
    specs: [
      'Производительность: до 1500 м³/ч',
      'Напор: до 90 м (Hardalloy PEMO)',
      'Скорость вращения: до 6613 об/мин',
      'Давление: до 3 бар (44 psi)',
    ],
    applications: ['ГОКи', 'Обогатительные фабрики', 'Перекачка пульпы на гидроциклоны'],
    material: 'Hardalloy PEMO (750–800 HB), резиновая футеровка',
  },
  {
    icon: ArrowRight,
    title: 'Горизонтальные насосы',
    description: 'Классическое исполнение для большинства промышленных задач. Высокая надежность и простота обслуживания. Оптимальны для подачи на фильтр-прессы.',
    specs: [
      'Производительность: до 1200 м³/ч',
      'Напор: до 80 м',
      'КПД: до 92%',
      'Температура: до 120°C',
    ],
    applications: ['Фильтр-прессы', 'Металлургия', 'Керамика'],
    material: 'Hardalloy PEMO, нержавеющая сталь, резиновая футеровка',
  },
  {
    icon: Layers,
    title: 'Многоступенчатые насосы',
    description: 'Двух- и трехступенчатые модели для создания высокого давления, необходимого для фильтр-прессов. Обеспечивают более сухой кек.',
    specs: [
      'Давление: до 20 бар',
      'Подача при заполнении: до 900 м³/ч',
      'Две ступени на одном валу',
      'Специальная конструкция уплотнений',
    ],
    applications: ['Фильтр-прессы', 'Гидроциклоны', 'Химические процессы'],
    material: 'Карбид кремния/вольфрама для уплотнений',
  },
  {
    icon: Shield,
    title: 'Насосы из суперпрочной стали',
    description: 'Специальные материалы для работы в самых агрессивных средах. Высокая стойкость к кислотам, абразиву и высоким температурам.',
    specs: [
      'Материал: Hardalloy PEMO',
      'Твердость: 750–800 HB',
      'pH: 1-14',
      'Температура: до 90°C',
    ],
    applications: ['Химические комбинаты', 'Сталелитейные предприятия', 'Кислотные среды'],
    material: 'Hardalloy PEMO, специальные сплавы',
  },
  {
    icon: Droplets,
    title: 'Погружные насосы',
    description: 'Надежные решения для перекачки буровых растворов, зольных осадков и загрязненных жидкостей на теплоэлектростанциях.',
    specs: [
      'Погружение: до 10 м',
      'Температура: до 100°C',
      'Твердые частицы: до 8 мм',
      'Для буровых и шахтных вод',
    ],
    applications: ['ТЭС', 'Буровые установки', 'Шахтные воды'],
    material: 'Износостойкие сплавы, резиновая футеровка',
  },
  {
    icon: Cpu,
    title: 'Насосы для обработки камня и керамики',
    description: 'Мировой лидер по поставкам насосов для перекачки растворов при распиловке камня, мрамора и керамического шликера.',
    specs: [
      'Длительные рабочие циклы',
      'Повышенное давление',
      'Высокая температура',
      'Специальные материалы',
    ],
    applications: ['Обработка камня', 'Керамическое производство', 'Мраморные карьеры'],
    material: 'Износостойкие сплавы, Hardalloy PEMO',
  },
];

// Данные о дополнительных возможностях и преимуществах
const features = [
  {
    icon: HardDrive,
    title: 'Широкий выбор материалов',
    description:
      'Корпуса, валы и подшипники изготавливаются с запасом прочности. Используются Hardalloy PEMO, нержавеющая сталь, резиновая футеровка.',
  },
  {
    icon: Gauge,
    title: 'Индивидуальные конфигурации',
    description:
      'Возможно изготовление более 2000 вариантов исполнения насосов и насосных станций под ваши технические задачи.',
  },
  {
    icon: BadgeCheck,
    title: 'Надежность в тяжелых условиях',
    description:
      'Увеличенный срок службы благодаря прочным материалам и запатентованным конструктивным решениям (открытый импеллер, отсутствие уплотнений).',
  },
];

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-navy-900 pt-24 pb-16">
      <Container>
        {/* Заголовок страницы */}
        <SectionTitle
          title="Каталог насосов PEMO"
          subtitle="Модельный ряд по варианту исполнения и применению. Широкий ассортимент оборудования для любых промышленных задач"
        />

        {/* Сетка с карточками насосов */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pumpTypes.map((pump, index) => (
            <GlassCard key={index} className="h-full hover:border-copper-500/30 transition-all duration-300 flex flex-col">
              {/* Заголовок с иконкой */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-copper-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <pump.icon className="w-6 h-6 text-copper-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{pump.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{pump.description}</p>
                </div>
              </div>

              {/* Блок с характеристиками и применением */}
              <div className="mt-auto space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-navy-800/50 rounded-lg p-3">
                    <p className="text-copper-400 text-xs font-medium mb-1 flex items-center gap-1">
                      <Gauge className="w-3 h-3" /> Характеристики
                    </p>
                    <ul className="space-y-0.5">
                      {pump.specs.map((spec, idx) => (
                        <li key={idx} className="text-slate-400 text-xs">• {spec}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-navy-800/50 rounded-lg p-3">
                    <p className="text-copper-400 text-xs font-medium mb-1 flex items-center gap-1">
                      <Factory className="w-3 h-3" /> Применение
                    </p>
                    <ul className="space-y-0.5">
                      {pump.applications.map((app, idx) => (
                        <li key={idx} className="text-slate-400 text-xs">• {app}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Информация о материале */}
                {pump.material && (
                  <div className="bg-navy-800/50 rounded-lg p-3">
                    <p className="text-copper-400 text-xs font-medium mb-1 flex items-center gap-1">
                      <Shield className="w-3 h-3" /> Материалы исполнения
                    </p>
                    <p className="text-slate-400 text-xs">{pump.material}</p>
                  </div>
                )}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Секция с преимуществами и дополнительной информацией */}
        <div className="mt-16 border-t border-navy-700 pt-12">
          <h3 className="text-white text-2xl font-semibold text-center mb-8">
            Индивидуальные решения и надежность
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <GlassCard key={index} className="text-center hover:border-copper-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-copper-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-copper-400" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">{feature.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
          <p className="text-slate-500 text-sm text-center mt-8 border-t border-navy-700 pt-6">
            Компания Perissinotto S.p.A. предлагает более 2000 вариантов исполнения насосов и насосных станций.
            Для получения консультации или запроса коммерческого предложения свяжитесь с нами.
          </p>
        </div>
      </Container>
    </main>
  );
}