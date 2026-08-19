'use client';

import { useState, useEffect } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

interface TooltipData {
  x: number;
  y: number;
  title: string;
  description: string;
  specs?: string[];
}

// Детали насоса с реалистичными формами
const pumpParts = [
  {
    id: 'body',
    title: 'Корпус насоса',
    description: 'Разборный корпус из высокопрочного чугуна ВЧ-50',
    specs: ['Срок службы: 15+ лет', 'Износостойкость: 650 HB'],
  },
  {
    id: 'impeller',
    title: 'Импеллер (шестерня)',
    description: 'Крыльчатка-шестерня из стали 28ХГНМ для работы с абразивными средами',
    specs: ['Балансировка: G2.5', 'Ресурс: 5+ лет'],
  },
  {
    id: 'inlet',
    title: 'Входной патрубок',
    description: 'Прием пульпы с твердыми частицами до 8 мм',
    specs: ['Диаметр: DN 100', 'Материал: хромомолибден'],
  },
  {
    id: 'outlet',
    title: 'Выходной патрубок',
    description: 'Стабильная подача без гидроударов',
    specs: ['Диаметр: DN 80', 'Давление: до 2.5 МПа'],
  },
  {
    id: 'shaft',
    title: 'Вал',
    description: 'Передает крутящий момент от двигателя к импеллеру',
    specs: ['Материал: сталь 40Х', 'Закалка: HRC 45'],
  },
  {
    id: 'seal',
    title: 'Торцевое уплотнение',
    description: 'Не требует подвода воды, простое и надежное',
    specs: ['Ресурс: 8000 часов', 'Не требует обслуживания'],
  },
];

export default function PumpDiagram() {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<SVGPathElement>, part: typeof pumpParts[0]) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      x: rect.left + rect.width / 2,
      y: rect.top - 20,
      title: part.title,
      description: part.description,
      specs: part.specs,
    });
    setHoveredPart(part.id);
  };

  const handleMouseLeave = () => {
    setTooltip(null);
    setHoveredPart(null);
  };

  const renderSVG = () => (
    <svg viewBox="0 0 500 420" className="w-full h-full">
      {/* Фоновый ореол */}
      <circle cx="250" cy="210" r="180" fill="none" stroke="#D4865E" strokeWidth="1" opacity="0.1">
        {isMounted && (
          <>
            <animate attributeName="r" values="180;195;180" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.1;0.25;0.1" dur="4s" repeatCount="indefinite" />
          </>
        )}
      </circle>

      {/* ===== КОРПУС НАСОСА ===== */}
      <rect
        x="130"
        y="100"
        width="240"
        height="220"
        rx="16"
        fill={hoveredPart === 'body' ? 'rgba(212, 134, 94, 0.25)' : 'rgba(30, 41, 59, 0.8)'}
        stroke={hoveredPart === 'body' ? '#D4865E' : '#475569'}
        strokeWidth="2.5"
        onMouseEnter={(e) => handleMouseEnter(e, pumpParts[0])}
        onMouseLeave={handleMouseLeave}
        className="cursor-pointer transition-all duration-200"
        style={{ cursor: 'pointer' }}
      />

      {/* Болты на корпусе */}
      {[
        [145, 115],
        [355, 115],
        [355, 305],
        [145, 305],
        [250, 115],
        [250, 305],
      ].map(([x, y], idx) => (
        <circle key={`bolt-${idx}`} cx={x} cy={y} r="5" fill="#475569" stroke="#94A3B8" strokeWidth="1.5" opacity="0.6" />
      ))}

      {/* Крепежные линии на корпусе */}
      <line x1="130" y1="160" x2="370" y2="160" stroke="#334155" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
      <line x1="130" y1="260" x2="370" y2="260" stroke="#334155" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />

      {/* ===== ВХОДНОЙ ПАТРУБОК ===== */}
      <g>
        <rect
          x="70"
          y="195"
          width="60"
          height="30"
          rx="4"
          fill={hoveredPart === 'inlet' ? 'rgba(212, 134, 94, 0.3)' : '#1E293B'}
          stroke={hoveredPart === 'inlet' ? '#D4865E' : '#475569'}
          strokeWidth="2.5"
          onMouseEnter={(e) => handleMouseEnter(e, pumpParts[2])}
          onMouseLeave={handleMouseLeave}
          className="cursor-pointer transition-all duration-200"
          style={{ cursor: 'pointer' }}
        />
        {/* Фланец входного патрубка */}
        <rect x="60" y="190" width="10" height="40" rx="2" fill="#334155" stroke="#475569" strokeWidth="1.5" />
        <circle cx="65" cy="200" r="2" fill="#475569" />
        <circle cx="65" cy="220" r="2" fill="#475569" />
      </g>

      {/* ===== ВЫХОДНОЙ ПАТРУБОК ===== */}
      <g>
        <rect
          x="370"
          y="195"
          width="60"
          height="30"
          rx="4"
          fill={hoveredPart === 'outlet' ? 'rgba(212, 134, 94, 0.3)' : '#1E293B'}
          stroke={hoveredPart === 'outlet' ? '#D4865E' : '#475569'}
          strokeWidth="2.5"
          onMouseEnter={(e) => handleMouseEnter(e, pumpParts[3])}
          onMouseLeave={handleMouseLeave}
          className="cursor-pointer transition-all duration-200"
          style={{ cursor: 'pointer' }}
        />
        {/* Фланец выходного патрубка */}
        <rect x="430" y="190" width="10" height="40" rx="2" fill="#334155" stroke="#475569" strokeWidth="1.5" />
        <circle cx="435" cy="200" r="2" fill="#475569" />
        <circle cx="435" cy="220" r="2" fill="#475569" />
      </g>

      {/* ===== ВАЛ ===== */}
      <rect
        x="242"
        y="60"
        width="16"
        height="40"
        rx="2"
        fill={hoveredPart === 'shaft' ? '#94A3B8' : '#64748B'}
        onMouseEnter={(e) => handleMouseEnter(e, pumpParts[4])}
        onMouseLeave={handleMouseLeave}
        className="cursor-pointer transition-all duration-200"
        style={{ cursor: 'pointer' }}
      />
      {/* Шлицы на валу */}
      <line x1="245" y1="70" x2="245" y2="90" stroke="#475569" strokeWidth="2" />
      <line x1="255" y1="70" x2="255" y2="90" stroke="#475569" strokeWidth="2" />

      {/* ===== ТОРЦЕВОЕ УПЛОТНЕНИЕ ===== */}
      <g>
        <rect
          x="228"
          y="138"
          width="44"
          height="22"
          rx="3"
          fill={hoveredPart === 'seal' ? '#E8A87C' : '#8B5A3A'}
          onMouseEnter={(e) => handleMouseEnter(e, pumpParts[5])}
          onMouseLeave={handleMouseLeave}
          className="cursor-pointer transition-all duration-200"
          style={{ cursor: 'pointer' }}
        />
        {/* Пружины уплотнения */}
        <line x1="235" y1="149" x2="265" y2="149" stroke="#475569" strokeWidth="1.5" strokeDasharray="2 2" />
        <line x1="235" y1="149" x2="265" y2="149" stroke="#475569" strokeWidth="1.5" strokeDasharray="2 2" transform="translate(0, -6)" />
        <line x1="235" y1="149" x2="265" y2="149" stroke="#475569" strokeWidth="1.5" strokeDasharray="2 2" transform="translate(0, 6)" />
      </g>

      {/* ===== ИМПЕЛЛЕР-ШЕСТЕРНЯ (ВРАЩАЕТСЯ) ===== */}
      <g>
        {isMounted && (
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 250 220"
            to="360 250 220"
            dur="6s"
            repeatCount="indefinite"
          />
        )}
        {/* Основная шестерня */}
        <circle
          cx="250"
          cy="220"
          r="45"
          fill={hoveredPart === 'impeller' ? '#E8A87C' : '#D4865E'}
          stroke={hoveredPart === 'impeller' ? '#B86A42' : '#8B5A3A'}
          strokeWidth="2"
          onMouseEnter={(e) => handleMouseEnter(e, pumpParts[1])}
          onMouseLeave={handleMouseLeave}
          className="cursor-pointer transition-all duration-200"
          style={{ cursor: 'pointer' }}
          opacity="0.9"
        />
        {/* Зубья шестерни (8 штук) */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, idx) => {
          const rad = (deg * Math.PI) / 180;
          const x1 = 250 + 38 * Math.cos(rad);
          const y1 = 220 + 38 * Math.sin(rad);
          const x2 = 250 + 55 * Math.cos(rad - 0.2);
          const y2 = 220 + 55 * Math.sin(rad - 0.2);
          const x3 = 250 + 55 * Math.cos(rad + 0.2);
          const y3 = 220 + 55 * Math.sin(rad + 0.2);
          return (
            <path
              key={`tooth-${idx}`}
              d={`M ${x1} ${y1} L ${x2} ${y2} A 55 55 0 0 1 ${x3} ${y3} Z`}
              fill={hoveredPart === 'impeller' ? '#E8A87C' : '#D4865E'}
              stroke={hoveredPart === 'impeller' ? '#B86A42' : '#8B5A3A'}
              strokeWidth="1.5"
              onMouseEnter={(e) => handleMouseEnter(e, pumpParts[1])}
              onMouseLeave={handleMouseLeave}
              className="cursor-pointer transition-all duration-200"
              style={{ cursor: 'pointer' }}
              opacity="0.9"
            />
          );
        })}
        {/* Центральное отверстие шестерни */}
        <circle cx="250" cy="220" r="18" fill="#1E293B" stroke="#D4865E" strokeWidth="2.5" />
        <circle cx="250" cy="220" r="8" fill="#E8A87C" />
        <circle cx="250" cy="220" r="3" fill="#D4865E" />
      </g>

      {/* Линии-выноски с номерами */}
      {pumpParts.map((part, index) => {
        const positions = {
          body: { x: 250, y: 210 },
          impeller: { x: 310, y: 220 },
          inlet: { x: 100, y: 220 },
          outlet: { x: 400, y: 220 },
          shaft: { x: 250, y: 85 },
          seal: { x: 250, y: 160 },
        };
        const pos = positions[part.id as keyof typeof positions];
        const offsetX = part.id === 'inlet' ? -80 : part.id === 'outlet' ? 80 : 100;
        const offsetY = part.id === 'inlet' ? 20 : part.id === 'outlet' ? 20 : -50 + index * 22;

        return (
          <g key={`line-${part.id}`}>
            <line
              x1={pos.x}
              y1={pos.y}
              x2={pos.x + offsetX}
              y2={pos.y + offsetY}
              stroke="#475569"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.5"
            />
            <circle cx={pos.x} cy={pos.y} r="3" fill="#D4865E" opacity="0.6" />

          </g>
        );
      })}
    </svg>
  );

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-navy-800/30" id="technology">
      <div className="max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block">
            <span className="block w-12 sm:w-16 h-1 bg-copper-500 mx-auto mb-3 sm:mb-4 rounded-full" />
          </div>
          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4 tracking-tight">
            Устройство насоса <span className="text-copper-500">PEMO</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto px-2">
            Наведите на деталь для просмотра технической информации
          </p>
        </div>

        <GlassCard className="relative p-4 xs:p-5 sm:p-6 bg-navy-900/90 border border-slate-800/50">
          <div className="relative w-full aspect-[5/4] max-w-2xl mx-auto">
            {renderSVG()}
          </div>

          {/* Список деталей с номерами */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {pumpParts.map((part, index) => (
              <button
                key={part.id}
                className={`text-center p-2 rounded-lg transition-all duration-200 text-xs ${
                  hoveredPart === part.id
                    ? 'bg-copper-500/20 border border-copper-500/30 text-white'
                    : 'bg-navy-800/50 border border-transparent text-slate-400 hover:text-white hover:bg-navy-800/80'
                }`}
                onMouseEnter={() => setHoveredPart(part.id)}
                onMouseLeave={() => setHoveredPart(null)}
              >
                <span className="block text-[10px] text-copper-400">{index + 1}</span>
                <span className="block truncate">{part.title}</span>
              </button>
            ))}
          </div>

          <div className="mt-4 text-center">
            <p className="text-[10px] xs:text-xs text-slate-500">
              💡 Наведите на деталь на схеме или нажмите на название в списке
            </p>
          </div>
        </GlassCard>

        {/* Тултип */}
        <AnimatePresence>
          {tooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="fixed left-1/2 -translate-x-1/2 bottom-4 w-[calc(100%-2rem)] max-w-md bg-navy-800/95 backdrop-blur-sm rounded-xl border border-copper-500/30 p-4 shadow-2xl z-50"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-copper-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Info className="w-4 h-4 text-copper-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">{tooltip.title}</h4>
                  <p className="text-slate-300 text-xs mt-1 leading-relaxed">{tooltip.description}</p>
                  {tooltip.specs && (
                    <ul className="mt-2 space-y-1">
                      {tooltip.specs.map((spec, idx) => (
                        <li key={idx} className="text-xs text-copper-400/80 flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-copper-500 rounded-full flex-shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}