'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { Send, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      // Имитация отправки
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Успешно
      setStatus('success');
      setFormData({ name: '', company: '', phone: '', email: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-navy-900" id="contact">
      <Container>
        <SectionTitle
          title="Свяжитесь с нами"
          subtitle="Оставьте заявку, и наш инженер свяжется с вами для подбора оптимального решения"
        />

        <div className="max-w-2xl mx-auto">
          <GlassCard className="p-4 xs:p-5 sm:p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="name" className="text-xs sm:text-sm text-slate-400 font-medium block mb-1.5">
                    Ваше имя *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-navy-800 border border-slate-700 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-white text-sm sm:text-base focus:border-copper-500 focus:outline-none transition-colors"
                    placeholder="Иван Петров"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="text-xs sm:text-sm text-slate-400 font-medium block mb-1.5">
                    Компания
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-navy-800 border border-slate-700 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-white text-sm sm:text-base focus:border-copper-500 focus:outline-none transition-colors"
                    placeholder="ООО Горная промышленность"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="phone" className="text-xs sm:text-sm text-slate-400 font-medium block mb-1.5">
                    Телефон *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-navy-800 border border-slate-700 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-white text-sm sm:text-base focus:border-copper-500 focus:outline-none transition-colors"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs sm:text-sm text-slate-400 font-medium block mb-1.5">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-navy-800 border border-slate-700 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-white text-sm sm:text-base focus:border-copper-500 focus:outline-none transition-colors"
                    placeholder="info@company.ru"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-xs sm:text-sm text-slate-400 font-medium block mb-1.5">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-navy-800 border border-slate-700 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-white text-sm sm:text-base focus:border-copper-500 focus:outline-none transition-colors resize-y min-h-[100px]"
                  placeholder="Расскажите о вашей задаче, параметрах процесса или требованиях к оборудованию..."
                />
              </div>

              {/* Блок кнопок — в одну строку */}
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 flex items-center justify-center w-full xs:w-auto"
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </Button>
                <Button
                  type="reset"
                  variant="ghost"
                  size="lg"
                  onClick={() => {
                    setFormData({ name: '', company: '', phone: '', email: '', message: '' });
                    setStatus('idle');
                  }}
                  className="flex items-center justify-center w-full xs:w-auto sm:flex-1 lg:flex-none"
                >
                  <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="ml-2 text-xs sm:text-sm">Очистить</span>
                </Button>
              </div>

              {/* Статусы отправки */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 text-emerald-400 bg-emerald-400/10 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm"
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span>Заявка успешно отправлена! Наш инженер свяжется с вами.</span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 text-red-400 bg-red-400/10 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm"
                  >
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span>Произошла ошибка. Пожалуйста, попробуйте снова.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}