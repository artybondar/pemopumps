import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className, hover = true }: GlassCardProps) => {
  return (
    <div
      className={cn(
        'bg-card-gradient backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 border border-white/5 transition-all duration-300',
        hover && 'hover:border-copper-500/30 hover:shadow-glow hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
};