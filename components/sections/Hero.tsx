'use client';

import { useState, useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Статичная версия для SSR (без анимаций)
  if (!isMounted) {
    return (
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-900">
        <div className="absolute inset-0 bg-hero-gradient opacity-40" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-copper-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

        <Container className="relative z-10 pt-16 sm:pt-20 pb-20 sm:pb-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Левая колонка - текст */}
            <div className="order-2 lg:order-1">
              <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-copper-500/10 border border-copper-500/20 rounded-full text-copper-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                ⚙️ Инженерные решения с 1947 года
              </div>

              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-4 sm:mb-6">
                Работает там,
                <br />
                <span className="text-copper-500">где другие</span>
                <br />
                останавливаются
              </h1>

              <p className="text-sm xs:text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 max-w-lg leading-relaxed">
                Насосы PEMO — надежность, проверенная в самых агрессивных средах. Снижаем TCO на{' '}
                <span className="text-copper-400 font-bold">до 30%</span> за счет продуманной инженерии.
              </p>

              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
                <Button 
                  size="lg" 
                  className="w-full xs:w-auto flex items-center justify-center"
                  onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Рассчитать экономию <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full xs:w-auto flex items-center justify-center"
                  onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Смотреть технологии
                </Button>
              </div>
            </div>

            {/* Правая колонка - SVG насоса (статичная версия) */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-square max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg mx-auto w-full">
                <svg viewBox="0 0 500 500" className="w-full h-full">
                  {/* Внешний светящийся ореол (статичный) */}
                  <circle cx="250" cy="250" r="200" fill="none" stroke="#D4865E" strokeWidth="1" opacity="0.1" />

                  {/* Корпус насоса - основа */}
                  <circle
                    cx="250"
                    cy="250"
                    r="140"
                    fill="url(#bodyGradient)"
                    stroke="#D4865E"
                    strokeWidth="3"
                    opacity="0.95"
                  />
                  
                  {/* Декоративные болты на корпусе */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, idx) => {
                    const rad = (deg * Math.PI) / 180;
                    const x = 250 + 120 * Math.cos(rad);
                    const y = 250 + 120 * Math.sin(rad);
                    return (
                      <circle
                        key={idx}
                        cx={x}
                        cy={y}
                        r="4"
                        fill="#475569"
                        stroke="#94A3B8"
                        strokeWidth="1"
                      />
                    );
                  })}

                  {/* Импеллер (статичный) */}
                  <g>
                      ${[0, 60, 120, 180, 240, 300].map((deg, idx) => {
                          const rad = (deg * Math.PI) / 180;
                          const x1 = 250 + 40 * Math.cos(rad);
                          const y1 = 250 + 40 * Math.sin(rad);
                          const x2 = 250 + 95 * Math.cos(rad - 0.3);
                          const y2 = 250 + 95 * Math.sin(rad - 0.3);
                          const x3 = 250 + 95 * Math.cos(rad + 0.3);
                          const y3 = 250 + 95 * Math.sin(rad + 0.3);
                          return `
                              <path 
                                  key="${idx}" 
                                  d="M ${x1} ${y1} L ${x2} ${y2} A 95 95 0 0 1 ${x3} ${y3} Z" 
                                  fill="${idx % 2 === 0 ? '#E8A87C' : '#D4865E'}" 
                                  opacity="0.85"
                              />
                          `;
                      }).join('')}
                  </g>

                  {/* Центральная ступица */}
                  <circle cx="250" cy="250" r="35" fill="#1E293B" stroke="#D4865E" strokeWidth="3" />
                  <circle cx="250" cy="250" r="18" fill="#E8A87C" />
                  <circle cx="250" cy="250" r="8" fill="#D4865E" />

                  {/* Входной патрубок */}
                  <path
                    d="M 110 230 L 60 230 L 60 210 C 60 195 70 190 80 190 L 110 190 L 120 210 L 120 230 Z"
                    fill="#334155"
                    stroke="#94A3B8"
                    strokeWidth="2"
                  />
                  <rect x="105" y="185" width="10" height="50" rx="2" fill="#475569" stroke="#94A3B8" strokeWidth="1" />
                  
                  {/* Выходной патрубок */}
                  <path
                    d="M 390 230 L 440 230 L 440 210 C 440 195 430 190 420 190 L 390 190 L 380 210 L 380 230 Z"
                    fill="#334155"
                    stroke="#94A3B8"
                    strokeWidth="2"
                  />
                  <rect x="385" y="185" width="10" height="50" rx="2" fill="#475569" stroke="#94A3B8" strokeWidth="1" />

                  {/* Стрелки потока */}
                  <g opacity="0.6">
                    <path d="M 50 210 L 70 210" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />
                    <text x="30" y="205" className="text-xs fill-slate-500 font-medium">ВХОД</text>
                    <path d="M 430 210 L 450 210" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />
                    <text x="452" y="205" className="text-xs fill-slate-500 font-medium">ВЫХОД</text>
                  </g>

                  {/* Частицы (статичные) */}
                  <circle cx="70" cy="210" r="3" fill="#E8A87C" opacity="0.8" />
                  <circle cx="75" cy="215" r="2" fill="#E8A87C" opacity="0.6" />
                  <circle cx="400" cy="210" r="3" fill="#E8A87C" opacity="0.8" />

                  <defs>
                    <radialGradient id="bodyGradient" cx="35%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#1E293B" />
                      <stop offset="50%" stopColor="#0F172A" />
                      <stop offset="100%" stopColor="#060E1A" />
                    </radialGradient>
                    <marker
                      id="arrow"
                      markerWidth="8"
                      markerHeight="6"
                      refX="8"
                      refY="3"
                      orient="auto"
                    >
                      <polygon points="0 0, 8 3, 0 6" fill="#94A3B8" />
                    </marker>
                  </defs>
                </svg>

                {/* Информационные карточки (статичные) */}
                <div className="absolute top-0 right-0 bg-navy-800/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-copper-500/30 shadow-glow">
                  <span className="text-copper-400 font-bold text-xs sm:text-sm">КПД 92%</span>
                </div>
                <div className="absolute bottom-0 left-0 bg-navy-800/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-copper-500/30 shadow-glow">
                  <span className="text-copper-400 font-bold text-xs sm:text-sm">30% экономии</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  // Полная версия с анимациями для клиента
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-900">
      {/* Декоративный фон */}
      <div className="absolute inset-0 bg-hero-gradient opacity-40" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-copper-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <Container className="relative z-10 pt-16 sm:pt-20 pb-20 sm:pb-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Левая колонка - текст */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-copper-500/10 border border-copper-500/20 rounded-full text-copper-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            >⚙️ Инженерные решения с 1947 года
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-4 sm:mb-6"
            >
              Работает там,
              <br />
              <span className="text-copper-500">где другие</span>
              <br />
              останавливаются
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm xs:text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 max-w-lg leading-relaxed"
            >
              Насосы PEMO — надежность, проверенная в самых агрессивных средах. Снижаем TCO на{' '}
              <span className="text-copper-400 font-bold">до 30%</span> за счет продуманной инженерии.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col xs:flex-row gap-3 sm:gap-4"
            >
              <Button 
                size="lg" 
                className="w-full xs:w-auto flex items-center justify-center"
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Рассчитать экономию <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full xs:w-auto flex items-center justify-center"
                onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Смотреть технологии
              </Button>
            </motion.div>
          </motion.div>

          {/* Правая колонка - SVG насоса (с анимациями) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-square max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg mx-auto w-full">
              <svg viewBox="0 0 500 500" className="w-full h-full">
                {/* Внешний светящийся ореол */}
                <circle cx="250" cy="250" r="200" fill="none" stroke="#D4865E" strokeWidth="1" opacity="0.1">
                  <animate attributeName="r" values="200;210;200" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.1;0.2;0.1" dur="4s" repeatCount="indefinite" />
                </circle>

                {/* Корпус насоса - основа */}
                <circle
                  cx="250"
                  cy="250"
                  r="140"
                  fill="url(#bodyGradient)"
                  stroke="#D4865E"
                  strokeWidth="3"
                  opacity="0.95"
                />
                
                {/* Декоративные болты на корпусе */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, idx) => {
                  const rad = (deg * Math.PI) / 180;
                  const x = 250 + 120 * Math.cos(rad);
                  const y = 250 + 120 * Math.sin(rad);
                  return (
                    <circle
                      key={idx}
                      cx={x}
                      cy={y}
                      r="4"
                      fill="#475569"
                      stroke="#94A3B8"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Импеллер (крыльчатка) - вращается */}
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 250 250"
                    to="360 250 250"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                  {[0, 60, 120, 180, 240, 300].map((deg, idx) => {
                    const rad = (deg * Math.PI) / 180;
                    const x1 = 250 + 40 * Math.cos(rad);
                    const y1 = 250 + 40 * Math.sin(rad);
                    const x2 = 250 + 95 * Math.cos(rad - 0.3);
                    const y2 = 250 + 95 * Math.sin(rad - 0.3);
                    const x3 = 250 + 95 * Math.cos(rad + 0.3);
                    const y3 = 250 + 95 * Math.sin(rad + 0.3);
                    return (
                      <path
                        key={idx}
                        d={`M ${x1} ${y1} L ${x2} ${y2} A 95 95 0 0 1 ${x3} ${y3} Z`}
                        fill={idx % 2 === 0 ? '#E8A87C' : '#D4865E'}
                        opacity="0.85"
                      />
                    );
                  })}
                </g>

                {/* Центральная ступица */}
                <circle cx="250" cy="250" r="35" fill="#1E293B" stroke="#D4865E" strokeWidth="3" />
                <circle cx="250" cy="250" r="18" fill="#E8A87C" />
                <circle cx="250" cy="250" r="8" fill="#D4865E" />

                {/* Входной патрубок (слева) */}
                <path
                  d="M 110 230 L 60 230 L 60 210 C 60 195 70 190 80 190 L 110 190 L 120 210 L 120 230 Z"
                  fill="#334155"
                  stroke="#94A3B8"
                  strokeWidth="2"
                />
                <rect x="105" y="185" width="10" height="50" rx="2" fill="#475569" stroke="#94A3B8" strokeWidth="1" />
                
                {/* Выходной патрубок (справа) */}
                <path
                  d="M 390 230 L 440 230 L 440 210 C 440 195 430 190 420 190 L 390 190 L 380 210 L 380 230 Z"
                  fill="#334155"
                  stroke="#94A3B8"
                  strokeWidth="2"
                />
                <rect x="385" y="185" width="10" height="50" rx="2" fill="#475569" stroke="#94A3B8" strokeWidth="1" />

                {/* Стрелки потока с анимацией */}
                <g opacity="0.6">
                  <path d="M 50 210 L 70 210" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />
                  <text x="30" y="205" className="text-xs fill-slate-500 font-medium">ВХОД</text>
                  <path d="M 430 210 L 450 210" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />
                  <text x="452" y="205" className="text-xs fill-slate-500 font-medium">ВЫХОД</text>
                </g>

                {/* Частицы в потоке (анимация) */}
                <circle cx="70" cy="210" r="3" fill="#E8A87C" opacity="0.8">
                  <animate attributeName="cx" values="70;100" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="75" cy="215" r="2" fill="#E8A87C" opacity="0.6">
                  <animate attributeName="cx" values="75;100" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="400" cy="210" r="3" fill="#E8A87C" opacity="0.8">
                  <animate attributeName="cx" values="400;430" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0" dur="2s" repeatCount="indefinite" />
                </circle>

                <defs>
                  <radialGradient id="bodyGradient" cx="35%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#1E293B" />
                    <stop offset="50%" stopColor="#0F172A" />
                    <stop offset="100%" stopColor="#060E1A" />
                  </radialGradient>
                  <marker
                    id="arrow"
                    markerWidth="8"
                    markerHeight="6"
                    refX="8"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 8 3, 0 6" fill="#94A3B8" />
                  </marker>
                </defs>
              </svg>

              {/* Плавающие информационные карточки */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 right-0 bg-navy-800/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-copper-500/30 shadow-glow"
              >
                <span className="text-copper-400 font-bold text-xs sm:text-sm">КПД 92%</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-0 left-0 bg-navy-800/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-copper-500/30 shadow-glow"
              >
                <span className="text-copper-400 font-bold text-xs sm:text-sm">30% экономии</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}