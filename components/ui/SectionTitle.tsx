import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionTitle = ({ title, subtitle, className }: SectionTitleProps) => {
  return (
    <div className={cn('text-center mb-12', className)}>
      <div className="inline-block">
        <span className="block w-16 h-1 bg-copper-500 mx-auto mb-4 rounded-full" />
      </div>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};