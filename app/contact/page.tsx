// app/contact/page.tsx
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { Mail, Phone, MapPin, Clock, Send, FileText, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Контакты — Насосы PEMO',
  description: 'Свяжитесь с нами: телефон, email, адрес офиса в Санкт-Петербурге. Закажите консультацию или оставьте заявку на подбор насосов.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-navy-900 pt-24 pb-16">
      <Container>
        {/* Заголовок страницы */}
        <div className="mb-12">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Контакты
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Свяжитесь с нами любым удобным способом. Наши инженеры помогут подобрать оборудование и рассчитать стоимость.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Левая колонка: Контактная информация и карта */}
          <div className="space-y-6">
            {/* Контактные данные в виде карточек */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <GlassCard className="flex items-center gap-4">
                <div className="w-12 h-12 bg-copper-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-copper-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Телефон</p>
                  <a href="tel:+78125078588" className="text-white hover:text-copper-400 transition-colors font-medium">
                    +7 (812) 507-85-88
                  </a>
                </div>
              </GlassCard>

              <GlassCard className="flex items-center gap-4">
                <div className="w-12 h-12 bg-copper-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-copper-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Email</p>
                  <a href="mailto:info@pemopumps.ru" className="text-white hover:text-copper-400 transition-colors font-medium">
                    info@pemopumps.ru
                  </a>
                </div>
              </GlassCard>

              <GlassCard className="flex items-center gap-4">
                <div className="w-12 h-12 bg-copper-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-copper-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Адрес офиса</p>
                  <p className="text-white font-medium">Санкт-Петербург</p>
                  <p className="text-slate-400 text-sm">ул. Маршала Блюхера, д. 12к7</p>
                </div>
              </GlassCard>

              <GlassCard className="flex items-center gap-4">
                <div className="w-12 h-12 bg-copper-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-copper-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Режим работы</p>
                  <p className="text-white font-medium">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-slate-400 text-sm">Сб-Вс: выходной</p>
                </div>
              </GlassCard>
            </div>

            {/* Карта - обновленная с правильным адресом */}
            <GlassCard>
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-copper-400" />
                Мы на карте
              </h3>
              <div className="aspect-[16/9] bg-navy-800 rounded-lg overflow-hidden">
                <iframe src="https://yandex.ru/map-widget/v1/-/CDUtu40V" className="grayscale hover:grayscale-0 transition-all duration-500" width="100%" height="100%" title="Карта офиса PEMO в Санкт-Петербурге"></iframe>
              </div>
              <p className="text-slate-400 text-xs mt-2 text-center">
                Санкт-Петербург, ул. Маршала Блюхера, д. 12к7
              </p>
            </GlassCard>

            {/* Реквизиты */}
            <GlassCard className="bg-navy-800/30 border-navy-700">
              <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-copper-400" />
                Реквизиты компании
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-slate-400 text-xs">Полное наименование</p>
                  <p className="text-slate-300">ООО «ПЕМО Насосы»</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">ИНН / КПП</p>
                  <p className="text-slate-300">7812345678 / 781201001</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">ОГРН</p>
                  <p className="text-slate-300">1237800000000</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Юридический адрес</p>
                  <p className="text-slate-300">Санкт-Петербург, ул. Маршала Блюхера, д. 12к7</p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Правая колонка: Форма обратной связи */}
          <div>
            <GlassCard className="h-full">
              <h2 className="text-2xl font-semibold text-white mb-2">Оставить заявку</h2>
              <p className="text-slate-400 text-sm mb-6">
                Заполните форму, и наш менеджер свяжется с вами в ближайшее время.
              </p>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-1">
                    Ваше имя <span className="text-copper-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Иван Иванов"
                    className="w-full bg-navy-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-slate-300 text-sm font-medium mb-1">
                    Телефон <span className="text-copper-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-navy-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="info@example.com"
                    className="w-full bg-navy-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-1">
                    Сообщение <span className="text-copper-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    placeholder="Опишите вашу задачу или вопрос..."
                    rows={5}
                    className="w-full bg-navy-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 transition-all resize-none"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Отправить заявку
                </Button>

                <p className="text-slate-500 text-xs text-center mt-4">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            </GlassCard>
          </div>
        </div>
      </Container>
    </main>
  );
}