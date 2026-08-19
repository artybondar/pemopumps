import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'PEMO Pumps | Инженерные решения для тяжелых сред',
    template: '%s | PEMO Pumps',
  },
  description: 'Насосы PEMO для горнодобывающей, химической и металлургической промышленности. Снижение TCO до 30%. Надежность, проверенная десятилетиями.',
  keywords: 'насосы PEMO, промышленные насосы, перекачка пульпы, насосы для шлама, TCO калькулятор',
  openGraph: {
    title: 'PEMO Pumps — инженерные решения для тяжелых сред',
    description: 'Насосы, которые работают там, где другие останавливаются. Рассчитайте экономию на нашем калькуляторе.',
    type: 'website',
    locale: 'ru_RU',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://pemopumps.ru',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="bg-navy-900 text-slate-200 font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}