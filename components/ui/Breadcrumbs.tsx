'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { Container } from './Container';

interface BreadcrumbItem {
  label: string;
  href: string;
  isLast: boolean;
}

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Если это главная страница, не показываем хлебные крошки
  if (pathname === '/') {
    return null;
  }

  // Разбиваем путь на сегменты
  const pathSegments = pathname.split('/').filter(Boolean);

  // Создаем массив хлебных крошек
  const breadcrumbs: BreadcrumbItem[] = pathSegments.map((segment, index) => {
    // Восстанавливаем путь для каждой крошки
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    
    // Преобразуем сегмент в читаемый заголовок
    const labels: Record<string, string> = {
      'about': 'О компании',
      'catalog': 'Каталог',
      'purchase': 'Где купить',
      'leasing': 'Кредиты и лизинг',
      'delivery': 'Доставка',
      'service': 'Монтаж и обслуживание',
      'testimonials': 'Отзывы',
      'become-dealer': 'Стать дилером',
      'contact': 'Контакты',
      'vertical': 'Вертикальные насосы',
      'horizontal': 'Горизонтальные насосы',
      'multistep': 'Многоступенчатые насосы',
      'super-durable-steel': 'Из суперпрочной стали',
      'immersible': 'Погружные насосы',
      'privacy': 'Политика конфиденциальности',
      'terms': 'Условия использования',
    };

    const label = labels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    const isLast = index === pathSegments.length - 1;

    return { label, href, isLast };
  });

  return (
    <nav className="w-full bg-navy-800/50 border-b border-white/5 py-3 mt-16 sm:mt-20" aria-label="Breadcrumbs">
      <Container>  {/* 👈 ОБЕРТЫВАЕМ В КОНТЕЙНЕР */}
        <ol className="flex items-center flex-wrap gap-1 text-sm">
          <li>
            <Link 
              href="/" 
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only">Главная</span>
            </Link>
          </li>
          
          {breadcrumbs.map((item) => (
            <li key={item.href} className="flex items-center gap-1">
              <ChevronRight className="w-4 h-4 text-slate-600" />
              {item.isLast ? (
                <span className="text-copper-400 font-medium">{item.label}</span>
              ) : (
                <Link 
                  href={item.href} 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}