'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Send, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Колонка 1: Бренд */}
        <div className="brand">
          <Link href="/" className="logo">
            <span className="badge">P</span>
            PEMO <span>Pumps</span>
          </Link>
          <p>
            Надежные насосы для самых сложных промышленных сред.
            Инженерные решения с 1947 года.
          </p>
          <div className="social">
            <a href="#" aria-label="Telegram">
              <Send className="w-5 h-5" />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Колонка 2: Разделы */}
        <div>
          <h4>Разделы</h4>
          <ul>
            <li><Link href="/about">О компании</Link></li>
            <li><Link href="/catalog">Каталог</Link></li>
            <li><Link href="/purchase">Где купить</Link></li>
            <li><Link href="/testimonials">Отзывы</Link></li>
            <li><Link href="/become-dealer">Стать дилером</Link></li>
          </ul>
        </div>

        {/* Колонка 3: Услуги */}
        <div>
          <h4>Услуги</h4>
          <ul>
            <li><Link href="/purchase/leasing">Кредиты и лизинг</Link></li>
            <li><Link href="/purchase/delivery">Доставка</Link></li>
            <li><Link href="/purchase/service">Монтаж и обслуживание</Link></li>
            <li><Link href="/contact">Контакты</Link></li>
          </ul>
        </div>

        {/* Колонка 4: Контакты */}
        <div>
          <h4>Контакты</h4>
          <ul className="contacts">
            <li>
              <Phone className="w-4 h-4" />
              <a href="tel:+78125078588">+7 (812) 507-85-88</a>
            </li>
            <li>
              <Mail className="w-4 h-4" />
              <a href="mailto:info@pemopumps.ru">info@pemopumps.ru</a>
            </li>
            <li>
              <MapPin className="w-4 h-4" />
              <span>Россия, Санкт-Петербург</span>
            </li>
          </ul>
        </div>

        {/* Нижняя строка */}
        <div className="bottom">
          <p>© 2026 PEMO Pumps. Все права защищены.</p>
          <div className="links">
            <Link href="#">Политика конфиденциальности</Link>
            <Link href="#">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}