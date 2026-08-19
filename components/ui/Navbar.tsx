'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Container } from './Container';
import { Button } from './Button';

const menuItems = [
  {
    label: 'Каталог',
    href: '/catalog',
    submenu: [
      { label: 'Вертикальные насосы', href: '/catalog#vertical' },
      { label: 'Горизонтальные насосы', href: '/catalog#horizontal' },
      { label: 'Многоступенчатые насосы', href: '/catalog#multistage' },
      { label: 'Из суперпрочной стали', href: '/catalog#super-steel' },
      { label: 'Погружные насосы', href: '/catalog#submersible' },
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
  { label: 'Контакты', href: '/contact' },
  { label: 'Отзывы', href: '/testimonials' },
  { label: 'Стать дилером', href: '/become-dealer' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [purchaseOpen, setPurchaseOpen] = useState(false);

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

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setCatalogOpen(false);
    setPurchaseOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-copper-500 rounded-lg flex items-center justify-center font-display font-bold text-white text-sm sm:text-base">
              P
            </div>
            <span className="font-display font-bold text-white text-lg sm:text-xl tracking-tight">
              PEMO <span className="text-copper-500">Pumps</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {menuItems.map((item) => {
              if (item.submenu) {
                const isOpenSubmenu = item.label === 'Каталог' ? catalogOpen : purchaseOpen;
                const setIsOpenSubmenu = item.label === 'Каталог' ? setCatalogOpen : setPurchaseOpen;

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setIsOpenSubmenu(true)}
                    onMouseLeave={() => setIsOpenSubmenu(false)}
                  >
                    <Link
                      href={item.href}
                      className="text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-sm xl:text-base"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpenSubmenu ? 'rotate-180' : ''}`} />
                    </Link>
                    <AnimatePresence>
                      {isOpenSubmenu && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-navy-800/95 backdrop-blur-sm rounded-xl border border-slate-700 shadow-xl py-2"
                        >
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-navy-700/50 transition-colors"
                              onClick={() => setIsOpenSubmenu(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-slate-300 hover:text-white transition-colors text-sm xl:text-base"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Contact */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
            <a href="tel:+78125078588" className="text-white font-medium flex items-center gap-2 text-sm xl:text-base whitespace-nowrap">
              <Phone className="w-4 h-4 text-copper-400" />
              +7 (812) 507-85-88
            </a>
            <Button 
              size="sm" 
              className="flex items-center gap-2 text-sm"
              onClick={() => {
                const contact = document.getElementById('contact');
                if (contact) contact.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail className="w-4 h-4" />
              Заявка
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed top-16 sm:top-20 left-0 w-full bg-navy-900/98 backdrop-blur-md overflow-y-auto"
          >
            <Container className="py-6 space-y-4">
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
                      <AnimatePresence>
                        {isOpenSubmenu && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-2 border-l-2 border-copper-500/30"
                          >
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
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block text-white font-medium py-2 hover:text-copper-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-slate-700 space-y-3">
                <a
                  href="tel:+78125078588"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-copper-400" />
                  +7 (812) 507-85-88
                </a>
                <Button 
                  size="lg" 
                  className="w-full flex items-center justify-center"
                  onClick={() => {
                    setIsOpen(false);
                    const contact = document.getElementById('contact');
                    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Оставить заявку
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}