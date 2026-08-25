// app/become-dealer/page.tsx
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { 
  CheckCircle, 
  Handshake, 
  FileText, 
  Phone, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe,
  Award,
  Mail,
  MessageCircle,
  ClipboardList,
  Building,
  FileCheck,
  Hash,
  UserCheck,
  MapPin,
  Banknote,
  Calendar,
  Target,
  FolderOpen
} from 'lucide-react';

const dealerSteps = [
  {
    icon: FileText,
    title: 'Подача заявки',
    description: 'Заполните форму на сайте или отправьте запрос на почту с информацией о вашей компании',
  },
  {
    icon: Handshake,
    title: 'Согласование условий',
    description: 'Обсуждение индивидуальных условий сотрудничества, ценовой политики и подписание дилерского договора',
  },
  {
    icon: Users,
    title: 'Обучение и сертификация',
    description: 'Проведение обучения для ваших менеджеров и инженеров по продуктам и техническим решениям PEMO',
  },
  {
    icon: Globe,
    title: 'Старт продаж',
    description: 'Получение доступа к маркетинговым материалам, коммерческим предложениям и начало активной работы',
  },
];

const dealerBenefits = [
  {
    icon: Shield,
    title: 'Официальный статус',
    description: 'Станьте официальным представителем бренда PEMO в вашем регионе',
  },
  {
    icon: TrendingUp,
    title: 'Маржинальность',
    description: 'Привлекательные условия работы и высокая маржинальность',
  },
  {
    icon: Award,
    title: 'Поддержка',
    description: 'Техническая и маркетинговая поддержка на всех этапах',
  },
  {
    icon: MessageCircle,
    title: 'Прямые контакты',
    description: 'Прямая связь с производителем и инженерным отделом',
  },
];

// Список документов для статуса авторизованного дилера
const requiredDocuments = [
  {
    icon: ClipboardList,
    title: 'Анкета кандидата в дилеры',
    description: 'Заполненная анкета с информацией о компании',
  },
  {
    icon: Building,
    title: 'Копия устава',
    description: 'Устав организации заверенный печатью',
  },
  {
    icon: FileCheck,
    title: 'Свидетельство о регистрации',
    description: 'Копия свидетельства о государственной регистрации юридического лица',
  },
  {
    icon: FileCheck,
    title: 'Свидетельство о постановке на учет',
    description: 'Копия свидетельства о постановке на налоговый учет',
  },
  {
    icon: FolderOpen,
    title: 'Выписка из ЕГРЮЛ',
    description: 'Актуальная выписка из Единого государственного реестра юридических лиц',
  },
  {
    icon: UserCheck,
    title: 'Решение о назначении директора',
    description: 'Копия выписки из решения о назначении генерального директора',
  },
  {
    icon: Hash,
    title: 'Коды статистики',
    description: 'Копия кодов статистики организации',
  },
  {
    icon: UserCheck,
    title: 'Паспортные данные руководства',
    description: 'Копии паспортов генерального, исполнительного директоров, главного бухгалтера (1 стр. и стр. с регистрацией)',
  },
  {
    icon: MapPin,
    title: 'Адреса организации',
    description: 'Юридический, фактический и почтовый адрес',
  },
  {
    icon: FileCheck,
    title: 'Подтверждение полномочий',
    description: 'Подтверждение полномочий лица, имеющего право подписывать договора',
  },
  {
    icon: Banknote,
    title: 'Банковские реквизиты',
    description: 'Реквизиты расчетного счета организации',
  },
  {
    icon: Users,
    title: 'Ответственные лица',
    description: 'Список лиц, ответственных за работу по договору (ФИО, должность, телефон, email)',
  },
  {
    icon: Target,
    title: 'Бизнес-план',
    description: 'Бизнес-план и план маркетингового продвижения насосной продукции PEMO на заявленной территории',
  },
];

export default function BecomeDealerPage() {
  return (
    <main className="min-h-screen bg-navy-900 pt-24 pb-16">
      <Container>
        <SectionTitle
          title="Стать дилером PEMO"
          subtitle="Присоединяйтесь к команде мирового лидера в производстве насосов для тяжелых сред"
        />

        {/* Преимущества сотрудничества */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {dealerBenefits.map((benefit, index) => (
            <GlassCard key={index} className="text-center hover:border-copper-500/30 transition-all duration-300">
              <div className="w-14 h-14 bg-copper-500/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <benefit.icon className="w-7 h-7 text-copper-400" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">{benefit.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{benefit.description}</p>
            </GlassCard>
          ))}
        </div>

        {/* Процесс становления дилером */}
        <h2 className="text-2xl font-display font-bold text-white text-center mb-8">
          Как стать партнером PEMO
        </h2>
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {dealerSteps.map((step, index) => (
            <GlassCard key={index} className="text-center relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-copper-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>
              <div className="w-14 h-14 bg-copper-500/10 rounded-2xl flex items-center justify-center mx-auto mb-3 mt-2">
                <step.icon className="w-7 h-7 text-copper-400" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">{step.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{step.description}</p>
            </GlassCard>
          ))}
        </div>

        {/* Список документов для статуса дилера */}
        <div className="mb-12">
          <h2 className="text-2xl font-display font-bold text-white text-center mb-4">
            Необходимые документы
          </h2>
          <p className="text-slate-400 text-center max-w-3xl mx-auto mb-8 text-sm">
            Для получения статуса авторизированного дилера необходимо подготовить пакет документов. 
            Все документы предоставляются заверенными печатью и подписью генерального директора организации-заявителя.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {requiredDocuments.map((doc, index) => (
              <GlassCard key={index} className="hover:border-copper-500/30 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-copper-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <doc.icon className="w-5 h-5 text-copper-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-0.5">{doc.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{doc.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="mt-4 bg-copper-500/5 border-copper-500/20 text-center">
            <div className="flex items-center justify-center gap-2 text-slate-300 text-sm">
              <FileCheck className="w-5 h-5 text-copper-400" />
              <span>Процедура присвоения статуса производится на основании письма-заявления организации-претендента</span>
            </div>
          </GlassCard>
        </div>

        {/* Требования к партнерам */}
        <GlassCard className="mb-12">
          <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-copper-400" />
            Критерии для партнеров
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-copper-400 mt-0.5 flex-shrink-0" />
                Опыт работы на промышленном рынке B2B от 2 лет
              </li>
              <li className="flex items-start gap-2 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-copper-400 mt-0.5 flex-shrink-0" />
                Наличие квалифицированных инженерно-технических специалистов
              </li>
              <li className="flex items-start gap-2 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-copper-400 mt-0.5 flex-shrink-0" />
                Готовность к обучению и сертификации сотрудников
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-copper-400 mt-0.5 flex-shrink-0" />
                Финансовая стабильность и выполнение плановых показателей
              </li>
              <li className="flex items-start gap-2 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-copper-400 mt-0.5 flex-shrink-0" />
                Предоставление обратной связи по рыночной ситуации и конкурентам
              </li>
              <li className="flex items-start gap-2 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-copper-400 mt-0.5 flex-shrink-0" />
                Соблюдение стандартов бренда и ценовой политики
              </li>
            </ul>
          </div>
        </GlassCard>

        {/* Призыв к действию */}
        <GlassCard className="bg-gradient-to-br from-copper-500/10 to-transparent border-copper-500/20 p-8 text-center">
          <h3 className="text-white font-semibold text-2xl mb-2">
            Готовы стать партнером?
          </h3>
          <p className="text-slate-400 text-base mb-6 max-w-2xl mx-auto">
            Оставьте заявку, и наш менеджер по развитию партнерской сети свяжется с вами в ближайшее время для обсуждения деталей сотрудничества.
          </p>
          <p className="text-slate-500 text-xl mt-4">
            Напишите нам на email: <a href="mailto:partners@pemopumps.ru" className="text-copper-400 hover:text-copper-300 transition-colors">partners@pemopumps.ru</a>
          </p>
        </GlassCard>
      </Container>
    </main>
  );
}