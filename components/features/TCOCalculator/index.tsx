'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingDown, Calendar, Zap, DollarSign, RefreshCw } from 'lucide-react';
import { calculateTCO, type TCOInput, type TCOResult } from './TCOLogic';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  type TooltipProps,
} from 'recharts';

const defaultInputs: TCOInput = {
  power: 75,
  hoursPerYear: 6000,
  electricityCost: 5.8,
  pumpPrice: 850000,
  sparePartsCost: 120000,
  downtimeCostPerHour: 45000,
  pemoEfficiency: 0.9,
  analogEfficiency: 0.72,
};

export default function TCOCalculator() {
  const [inputs, setInputs] = useState<TCOInput>(defaultInputs);
  const [result, setResult] = useState<TCOResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleChange = (key: keyof TCOInput, value: string) => {
    const numValue = parseFloat(value) || 0;
    setInputs((prev: TCOInput) => ({ ...prev, [key]: numValue }));
  };

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      const calcResult = calculateTCO(inputs);
      setResult(calcResult);
      setIsCalculating(false);
    }, 600);
  };

  const formatNumber = (value: number): string => {
    return new Intl.NumberFormat('ru-RU').format(value) + ' ₽';
  };

  const chartData = result ? [
    { name: 'PEMO', ...result.pemo, label: 'PEMO' },
    { name: 'Аналог', ...result.analog, label: 'Аналог' },
  ] : [];

  // Кастомный formatter для Tooltip
  const formatTooltipValue = (value: string | number | readonly (string | number)[] | undefined): string => {
    if (typeof value === 'number') {
      return formatNumber(value);
    }
    if (typeof value === 'string') {
      const num = parseFloat(value);
      if (!isNaN(num)) {
        return formatNumber(num);
      }
      return value;
    }
    if (Array.isArray(value)) {
      return value.map((v) => formatNumber(Number(v))).join(', ');
    }
    return String(value || '');
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-navy-900" id="calculator">
      <Container>
        <SectionTitle
          title="Калькулятор TCO"
          subtitle="Введите параметры вашего процесса и узнайте, сколько вы сэкономите с насосами PEMO"
        />

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Левая колонка - форма */}
          <div className="space-y-6">
            <GlassCard className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs sm:text-sm text-slate-400 font-medium block mb-1.5">
                    Мощность насоса, кВт
                  </label>
                  <input
                    type="number"
                    value={inputs.power}
                    onChange={(e) => handleChange('power', e.target.value)}
                    className="w-full bg-navy-800 border border-slate-700 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-white focus:border-copper-500 focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm text-slate-400 font-medium block mb-1.5">
                    Часов работы в год
                  </label>
                  <input
                    type="number"
                    value={inputs.hoursPerYear}
                    onChange={(e) => handleChange('hoursPerYear', e.target.value)}
                    className="w-full bg-navy-800 border border-slate-700 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-white focus:border-copper-500 focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm text-slate-400 font-medium block mb-1.5">
                    Стоимость эл/энергии, руб/кВтч
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={inputs.electricityCost}
                    onChange={(e) => handleChange('electricityCost', e.target.value)}
                    className="w-full bg-navy-800 border border-slate-700 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-white focus:border-copper-500 focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm text-slate-400 font-medium block mb-1.5">
                    Стоимость насоса, руб
                  </label>
                  <input
                    type="number"
                    value={inputs.pumpPrice}
                    onChange={(e) => handleChange('pumpPrice', e.target.value)}
                    className="w-full bg-navy-800 border border-slate-700 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-white focus:border-copper-500 focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm text-slate-400 font-medium block mb-1.5">
                    Запчасти в год, руб
                  </label>
                  <input
                    type="number"
                    value={inputs.sparePartsCost}
                    onChange={(e) => handleChange('sparePartsCost', e.target.value)}
                    className="w-full bg-navy-800 border border-slate-700 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-white focus:border-copper-500 focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm text-slate-400 font-medium block mb-1.5">
                    Потери от простоя, руб/час
                  </label>
                  <input
                    type="number"
                    value={inputs.downtimeCostPerHour}
                    onChange={(e) => handleChange('downtimeCostPerHour', e.target.value)}
                    className="w-full bg-navy-800 border border-slate-700 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-white focus:border-copper-500 focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  onClick={handleCalculate} 
                  size="lg" 
                  className="flex-1 flex items-center justify-center"
                >
                  <Calculator className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Рассчитать экономию</span>
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => {
                    setInputs(defaultInputs);
                    setResult(null);
                  }}
                  className="flex items-center justify-center sm:flex-1 lg:flex-none"
                >
                  <RefreshCw className="w-5 h-5 flex-shrink-0" />
                  <span className="ml-2 text-sm">Сбросить</span>
                </Button>
              </div>
            </GlassCard>
          </div>

          {/* Правая колонка - результаты */}
          <div className="mt-6 lg:mt-0">
            <AnimatePresence mode="wait">
              {isCalculating ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center h-full min-h-[250px] sm:min-h-[300px]"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-copper-500/30 border-t-copper-500 rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-slate-400 text-base sm:text-lg">Рассчитываем...</p>
                  </div>
                </motion.div>
              ) : result ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* Экономия */}
                  <GlassCard className="border-copper-500/30 bg-gradient-to-br from-copper-500/10 to-transparent p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <p className="text-sm text-slate-400 font-medium">Экономия в год</p>
                        <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-copper-400 break-words">
                          {formatNumber(result.savingsPerYear)}
                        </p>
                      </div>
                      <div className="bg-copper-500/20 p-2 sm:p-3 rounded-xl flex-shrink-0">
                        <TrendingDown className="w-6 h-6 sm:w-8 sm:h-8 text-copper-400" />
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-copper-400 flex-shrink-0" />
                        <span className="text-slate-300">
                          Окупаемость: <strong className="text-white">{result.paybackPeriod} мес.</strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-copper-400 flex-shrink-0" />
                        <span className="text-slate-300">
                          КПД: <strong className="text-white">PEMO {Math.round(inputs.pemoEfficiency * 100)}%</strong>
                        </span>
                      </div>
                    </div>
                  </GlassCard>

                  {/* График сравнения */}
                  <GlassCard className="p-3 sm:p-4">
                    <p className="text-sm text-slate-400 mb-3 sm:mb-4 font-medium">Сравнение затрат</p>
                    <div className="w-full h-[180px] sm:h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                          <XAxis 
                            dataKey="name" 
                            stroke="#94A3B8" 
                            tick={{ fill: '#94A3B8', fontSize: 12 }}
                            tickLine={false}
                          />
                          <YAxis 
                            stroke="#94A3B8" 
                            tick={{ fill: '#94A3B8', fontSize: 12 }}
                            tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}k`}
                            tickLine={false}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#0A1628',
                              border: '1px solid #1E293B',
                              borderRadius: '8px',
                              color: '#E2E8F0',
                              fontSize: '12px',
                            }}
                            formatter={formatTooltipValue}
                          />
                          <Legend 
                            wrapperStyle={{ fontSize: '12px', paddingTop: '8px' }}
                          />
                          <Line
                            type="monotone"
                            dataKey="total"
                            name="Общие затраты"
                            stroke="#D4865E"
                            strokeWidth={2}
                            dot={{ fill: '#D4865E', r: 4 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </GlassCard>

                  {/* Детализация */}
                  <div className="grid grid-cols-1 xs:grid-cols-3 gap-3">
                    {[
                      { label: 'Энергия', pemo: result.pemo.energyCost, analog: result.analog.energyCost },
                      { label: 'Запчасти', pemo: result.pemo.partsCost, analog: result.analog.partsCost },
                      { label: 'Простои', pemo: result.pemo.downtimeCost, analog: result.analog.downtimeCost },
                    ].map((item) => (
                      <GlassCard key={item.label} className="p-3 text-center">
                        <p className="text-xs text-slate-400">{item.label}</p>
                        <p className="text-xs sm:text-sm text-copper-400 font-bold break-words">
                          {formatNumber(item.pemo)}
                        </p>
                        <p className="text-xs text-slate-500 line-through truncate">
                          {formatNumber(item.analog)}
                        </p>
                      </GlassCard>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center h-full min-h-[200px] sm:min-h-[300px] text-center p-4"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-copper-500/10 rounded-2xl flex items-center justify-center mb-4">
                    <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-copper-500/30" />
                  </div>
                  <p className="text-slate-400 text-sm sm:text-base max-w-xs">
                    Заполните параметры слева<br />
                    и нажмите <strong className="text-white">«Рассчитать экономию»</strong>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}