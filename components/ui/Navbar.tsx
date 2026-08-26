'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from './Container';
import { Menu, X, Phone, Mail, ChevronDown, Send } from 'lucide-react';
import { Button } from './Button';

const menuItems = [
  {
    label: 'Каталог',
    href: '/catalog',
    submenu: [
      { label: 'Вертикальные насосы', href: '/catalog/vertical' },
      { label: 'Горизонтальные насосы', href: '/catalog/horizontal' },
      { label: 'Многоступенчатые насосы', href: '/catalog/multistep' },
      { label: 'Из суперпрочной стали', href: '/catalog/super-durable-steel' },
      { label: 'Погружные насосы', href: '/catalog/immersible' },
    ],
  },
  { label: 'О компании', href: '/about' },
  {
    label: 'Где купить',
    href: '/purchase',
    submenu: [
      { label: 'Кредиты и лизинг', href: '/purchase/leasing' },
      { label: 'Доставка', href: '/purchase/delivery' },
      { label: 'Монтаж и обслуживание', href: '/purchase/service' },
    ],
  },
  { label: 'Отзывы', href: '/testimonials' },
  { label: 'Стать дилером', href: '/become-dealer' },
  { label: 'Контакты', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [purchaseOpen, setPurchaseOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const catalogTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const purchaseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const catalogRef = useRef<HTMLDivElement>(null);
  const purchaseRef = useRef<HTMLDivElement>(null);

  // Проверка активного пункта меню
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const isSubmenuActive = (submenu: { label: string; href: string }[]) => {
    return submenu.some(item => pathname.startsWith(item.href));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setCatalogOpen(false);
      setPurchaseOpen(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleCatalogEnter = () => {
    if (catalogTimeoutRef.current) {
      clearTimeout(catalogTimeoutRef.current);
      catalogTimeoutRef.current = null;
    }
    setCatalogOpen(true);
  };

  const handleCatalogLeave = () => {
    catalogTimeoutRef.current = setTimeout(() => {
      setCatalogOpen(false);
    }, 200);
  };

  const handlePurchaseEnter = () => {
    if (purchaseTimeoutRef.current) {
      clearTimeout(purchaseTimeoutRef.current);
      purchaseTimeoutRef.current = null;
    }
    setPurchaseOpen(true);
  };

  const handlePurchaseLeave = () => {
    purchaseTimeoutRef.current = setTimeout(() => {
      setPurchaseOpen(false);
    }, 200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Заявка отправлена! Мы свяжемся с вами.');
    setIsModalOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Логотип */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
              <span className="w-8 h-8 sm:w-10 sm:h-10 bg-copper-500 rounded-lg flex items-center justify-center font-display font-bold text-white text-sm sm:text-base">
                P
              </span>
              <span className="font-display font-bold text-white text-lg sm:text-xl tracking-tight">
                PEMO <span className="text-copper-500">Pumps</span>
              </span>
            </Link>

            {/* Десктопное меню */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              {menuItems.map((item) => {
                if (item.submenu) {
                  const isOpenSubmenu = item.label === 'Каталог' ? catalogOpen : purchaseOpen;
                  const handleEnter = item.label === 'Каталог' ? handleCatalogEnter : handlePurchaseEnter;
                  const handleLeave = item.label === 'Каталог' ? handleCatalogLeave : handlePurchaseLeave;
                  const ref = item.label === 'Каталог' ? catalogRef : purchaseRef;
                  const active = isActive(item.href) || isSubmenuActive(item.submenu);

                  return (
                    <div
                      key={item.label}
                      ref={ref}
                      className="relative"
                      onMouseEnter={handleEnter}
                      onMouseLeave={handleLeave}
                    >
                      <Link
                        href={item.href}
                        className={`text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-sm xl:text-base ${
                          active ? 'text-copper-400' : ''
                        }`}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpenSubmenu ? 'rotate-180' : ''}`} />
                      </Link>
                      {isOpenSubmenu && (
                        <div
                          className="absolute top-full left-0 mt-2 w-56 bg-navy-800/95 backdrop-blur-sm rounded-xl border border-slate-700 shadow-xl py-2"
                          onMouseEnter={() => {
                            if (item.label === 'Каталог' && catalogTimeoutRef.current) {
                              clearTimeout(catalogTimeoutRef.current);
                              catalogTimeoutRef.current = null;
                            }
                            if (item.label === 'Где купить' && purchaseTimeoutRef.current) {
                              clearTimeout(purchaseTimeoutRef.current);
                              purchaseTimeoutRef.current = null;
                            }
                          }}
                          onMouseLeave={handleLeave}
                        >
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className={`block px-4 py-2 text-sm transition-colors ${
                                pathname === sub.href
                                  ? 'text-copper-400 bg-navy-700/50'
                                  : 'text-slate-300 hover:text-white hover:bg-navy-700/50'
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-slate-300 hover:text-white transition-colors text-sm xl:text-base ${
                      isActive(item.href) ? 'text-copper-400' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href="tel:+78125078588"
                className="text-white font-medium flex items-center gap-2 text-sm xl:text-base whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-copper-400" />
                +7 (812) 507-85-88
              </a>
              <Button
                size="sm"
                className="flex items-center gap-2 text-sm"
                onClick={() => setIsModalOpen(true)}
              >
                <Mail className="w-4 h-4" />
                Заявка
              </Button>
            </div>

            {/* Мобильная кнопка */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Мобильное меню */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-white/5">
              <div className="flex flex-col gap-3">
                {menuItems.map((item) => {
                  if (item.submenu) {
                    const isOpenSubmenu = item.label === 'Каталог' ? catalogOpen : purchaseOpen;
                    const setIsOpenSubmenu = item.label === 'Каталог' ? setCatalogOpen : setPurchaseOpen;

                    return (
                      <div key={item.label} className="space-y-2">
                        <button
                          onClick={() => setIsOpenSubmenu(!isOpenSubmenu)}
                          className="w-full text-left text-white font-medium flex items-center justify-between py-2"
                        >
                          {item.label}
                          <ChevronDown className={`w-4 h-4 transition-transform ${isOpenSubmenu ? 'rotate-180' : ''}`} />
                        </button>
                        {isOpenSubmenu && (
                          <div className="pl-4 space-y-2 border-l-2 border-copper-500/30">
                            {item.submenu.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className="block text-slate-300 hover:text-white py-1.5 text-sm transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-white font-medium py-2 hover:text-copper-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <a
                  href="tel:+78125078588"
                  className="text-copper-400 font-medium py-2 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +7 (812) 507-85-88
                </a>
                <Button
                  size="lg"
                  className="w-full flex items-center justify-center"
                  onClick={() => {
                    setIsOpen(false);
                    setIsModalOpen(true);
                  }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Оставить заявку
                </Button>
              </div>
            </div>
          )}
        </Container>
      </nav>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-md bg-navy-800 rounded-2xl border border-slate-700 shadow-2xl p-6 relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-copper-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Mail className="w-7 h-7 text-copper-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Оставить заявку</h3>
              <p className="text-slate-400 text-sm">Заполните форму и наш инженер свяжется с вами</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 font-medium mb-1.5">
                  Ваше имя <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Иван Петров"
                  className="w-full bg-navy-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-copper-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 font-medium mb-1.5">
                  Телефон <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (999) 123-45-67"
                  className="w-full bg-navy-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-copper-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 font-medium mb-1.5">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="info@company.ru"
                  className="w-full bg-navy-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-copper-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 font-medium mb-1.5">
                  Сообщение
                </label>
                <textarea
                  rows={3}
                  placeholder="Расскажите о вашей задаче..."
                  className="w-full bg-navy-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-copper-500 focus:outline-none transition-colors resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                Отправить заявку
              </Button>
            </form>

            <p className="text-center text-xs text-slate-500 mt-4">
              Нажимая кнопку, вы соглашаетесь с политикой обработки данных
            </p>
          </div>
        </div>
      )}
    </>
  );
}