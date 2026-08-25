// app/catalog/immersible/page.tsx
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { immersiblePumpsData } from '../immersiblePumps';
import { Gauge, Factory, Shield, Droplets, Cpu, Zap, Thermometer, Ruler } from 'lucide-react';

export default function ImmersiblePumpsPage() {
  const data = immersiblePumpsData;
  const Icon = data.icon;

  return (
    <main className="min-h-screen bg-navy-900 pt-24 pb-16">
      <Container>
        {/* Заголовок */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-copper-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Icon className="w-8 h-8 text-copper-400" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{data.title}</h1>
            <p className="text-slate-400 text-lg mt-1">{data.description}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Характеристики */}
          <GlassCard>
            <h2 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <Gauge className="w-5 h-5 text-copper-400" />
              Технические характеристики
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-navy-700 pb-2">
                <span className="text-slate-400">Погружение</span>
                <span className="text-white font-medium">{data.specs.immersion}</span>
              </div>
              <div className="flex justify-between border-b border-navy-700 pb-2">
                <span className="text-slate-400">Температура</span>
                <span className="text-white font-medium">{data.specs.temperature}</span>
              </div>
              <div className="flex justify-between border-b border-navy-700 pb-2">
                <span className="text-slate-400">Твердые частицы</span>
                <span className="text-white font-medium">{data.specs.solids}</span>
              </div>
              <div className="flex justify-between border-b border-navy-700 pb-2">
                <span className="text-slate-400">Давление</span>
                <span className="text-white font-medium">{data.specs.pressure}</span>
              </div>
              <div className="flex justify-between border-b border-navy-700 pb-2">
                <span className="text-slate-400">Производительность</span>
                <span className="text-white font-medium">{data.specs.flow}</span>
              </div>
              <div className="flex justify-between border-b border-navy-700 pb-2">
                <span className="text-slate-400">Мощность</span>
                <span className="text-white font-medium">{data.specs.power}</span>
              </div>
              <div className="flex justify-between border-b border-navy-700 pb-2">
                <span className="text-slate-400">Скорость вращения</span>
                <span className="text-white font-medium">{data.specs.speed}</span>
              </div>
            </div>
          </GlassCard>

          {/* Применение */}
          <GlassCard>
            <h2 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <Factory className="w-5 h-5 text-copper-400" />
              Отрасли применения
            </h2>
            <ul className="space-y-2">
              {data.applications.map((app, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-300">
                  <span className="text-copper-400 mt-1">•</span>
                  {app}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        {/* Перекачиваемые жидкости */}
        <GlassCard className="mb-12">
          <h2 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
            <Droplets className="w-5 h-5 text-copper-400" />
            Основные типы перекачиваемых жидкостей
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {data.liquids.map((liquid, idx) => (
              <div key={idx} className="bg-navy-800/50 rounded-lg p-3 text-slate-300 text-sm">
                {liquid}
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Материалы */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <GlassCard>
            <h3 className="text-white font-semibold text-md mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-copper-400" />
              Импеллер
            </h3>
            <ul className="space-y-1.5">
              {data.materials.impeller.map((item, idx) => (
                <li key={idx} className="text-slate-400 text-sm">• {item}</li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard>
            <h3 className="text-white font-semibold text-md mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-copper-400" />
              Корпус
            </h3>
            <ul className="space-y-1.5">
              {data.materials.body.map((item, idx) => (
                <li key={idx} className="text-slate-400 text-sm">• {item}</li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard>
            <h3 className="text-white font-semibold text-md mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-copper-400" />
              Уплотнение
            </h3>
            <ul className="space-y-1.5">
              {Array.isArray(data.materials.seal) ? (
                data.materials.seal.map((item, idx) => (
                  <li key={idx} className="text-slate-400 text-sm">• {item}</li>
                ))
              ) : (
                <li className="text-slate-400 text-sm">• {data.materials.seal}</li>
              )}
            </ul>
          </GlassCard>
        </div>

        {/* Особенности */}
        <GlassCard className="mb-12">
          <h2 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-copper-400" />
            Особенности конструкции
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {data.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-slate-300">
                <span className="text-copper-400 mt-1">▸</span>
                {feature}
              </li>
            ))}
          </ul>
        </GlassCard>

        {/* Ключевые параметры в карточках */}
        <div className="grid sm:grid-cols-3 gap-4">
          <GlassCard className="text-center">
            <Thermometer className="w-8 h-8 text-copper-400 mx-auto mb-2" />
            <p className="text-slate-400 text-xs">Температура</p>
            <p className="text-white font-bold">{data.specs.temperature}</p>
          </GlassCard>
          <GlassCard className="text-center">
            <Ruler className="w-8 h-8 text-copper-400 mx-auto mb-2" />
            <p className="text-slate-400 text-xs">Погружение</p>
            <p className="text-white font-bold">{data.specs.immersion}</p>
          </GlassCard>
          <GlassCard className="text-center">
            <Zap className="w-8 h-8 text-copper-400 mx-auto mb-2" />
            <p className="text-slate-400 text-xs">Мощность</p>
            <p className="text-white font-bold">{data.specs.power}</p>
          </GlassCard>
        </div>
      </Container>
    </main>
  );
}