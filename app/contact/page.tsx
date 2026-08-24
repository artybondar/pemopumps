import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Контакты — Насосы PEMO',
  description: 'Свяжитесь с нами: телефон, email, адрес офиса. Закажите консультацию или оставьте заявку.',
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20"> {/* Отступ сверху, чтобы не перекрывалось Navbar */}
      <Container>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-8">
          Контакты
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Левая колонка: Информация */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Свяжитесь с нами</h2>
            <p className="text-slate-300">
              Наши инженеры готовы проконсультировать вас по подбору оборудования и рассчитать стоимость.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-copper-400" />
                <a href="tel:+78125078588" className="text-white hover:text-copper-400 transition-colors">
                  +7 (812) 507-85-88
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-copper-400" />
                <a href="mailto:info@pemopumps.ru" className="text-white hover:text-copper-400 transition-colors">
                  info@pemopumps.ru
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-copper-400" />
                <span className="text-slate-300">Санкт-Петербург, ул. Промышленная, д. 1</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-copper-400" />
                <span className="text-slate-300">Пн-Пт: 9:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Правая колонка: Форма (можно скопировать/вставить форму с главной страницы) */}
          <div className="bg-navy-800/50 p-8 rounded-2xl border border-slate-700">
            <h2 className="text-2xl font-semibold text-white mb-6">Оставить заявку</h2>
            {/* Если у вас есть готовый компонент формы, импортируйте его сюда */}
            <div className="space-y-4">
               <input type="text" placeholder="Ваше имя" className="w-full bg-navy-900 border border-slate-600 rounded-lg p-3 text-white focus:outline-none focus:border-copper-500" />
               <input type="tel" placeholder="Телефон" className="w-full bg-navy-900 border border-slate-600 rounded-lg p-3 text-white focus:outline-none focus:border-copper-500" />
               <textarea placeholder="Сообщение" rows={4} className="w-full bg-navy-900 border border-slate-600 rounded-lg p-3 text-white focus:outline-none focus:border-copper-500"></textarea>
               <Button size="lg" className="w-full">Отправить</Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}