'use client';

import Link from 'next/link';
import { Container } from './Container';
import { Phone, Mail, MapPin, Send, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-navy-800 border-t border-white/5 py-12 mt-0">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8">
          {/* Колонка 1: Бренд */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="font-display font-bold text-2xl text-white flex items-center gap-2">
              <span className="w-8 h-8 sm:w-10 sm:h-10 bg-copper-500 rounded-lg flex items-center justify-center font-display font-bold text-white text-sm sm:text-base flex-shrink-0">
                P
              </span>
              PEMO <span className="text-copper-500">Pumps</span>
            </Link>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Надежные насосы для самых сложных промышленных сред.
              Инженерные решения с 1947 года.
            </p>
            <div className="flex gap-3 mt-1">
              <a
                href="https://t.me/pemopumps"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-slate-400 hover:bg-copper-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@pemopumps"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-slate-400 hover:bg-copper-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/pemopumps"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-slate-400 hover:bg-copper-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Колонка 2: Разделы */}
          <div>
            <h4 className="text-white font-semibold text-base mb-3 tracking-wide">Разделы</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/about" className="text-slate-400 text-sm hover:text-white transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link href="/purchase" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Где купить
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link href="/become-dealer" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Стать дилером
                </Link>
              </li>
            </ul>
          </div>

          {/* Колонка 3: Услуги */}
          <div>
            <h4 className="text-white font-semibold text-base mb-3 tracking-wide">Услуги</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/purchase/leasing" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Кредиты и лизинг
                </Link>
              </li>
              <li>
                <Link href="/purchase/delivery" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Доставка
                </Link>
              </li>
              <li>
                <Link href="/purchase/service" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Монтаж и обслуживание
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Колонка 4: Контакты */}
          <div>
            <h4 className="text-white font-semibold text-base mb-3 tracking-wide">Контакты</h4>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-copper-400 flex-shrink-0" />
                <a href="tel:+78125078588" className="hover:text-white transition-colors">
                  +7 (812) 507-85-88
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-copper-400 flex-shrink-0" />
                <a href="mailto:info@pemopumps.ru" className="hover:text-white transition-colors">
                  info@pemopumps.ru
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-copper-400 flex-shrink-0" />
                <span>Россия, Санкт-Петербург</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Нижняя строка */}
        <div className="border-t border-white/5 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© 2026 PEMO Pumps. Все права защищены.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="text-sm text-slate-500 hover:text-white transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}