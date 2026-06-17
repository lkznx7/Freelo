'use client';

import { Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BrandLogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  showText?: boolean;
  theme?: 'light' | 'dark' | 'orange';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function BrandLogo({
  className,
  iconClassName,
  textClassName,
  showText = true,
  theme = 'orange',
  size = 'md',
}: BrandLogoProps) {
  
  const sizeMap = {
    sm: { container: 'w-8 h-8 rounded-lg', icon: 'h-4 w-4', text: 'text-xl' },
    md: { container: 'w-10 h-10 rounded-xl', icon: 'h-6 w-6', text: 'text-2xl' },
    lg: { container: 'w-12 h-12 rounded-2xl', icon: 'h-7 w-7', text: 'text-3xl' },
    xl: { container: 'w-16 h-16 rounded-[24px]', icon: 'h-9 w-9', text: 'text-4xl' },
  };

  const currentSize = sizeMap[size];

  const themeClasses = {
    orange: {
      container: 'bg-primary shadow-lg shadow-primary/20',
      icon: 'text-white fill-current',
      text: 'text-secondary dark:text-white',
    },
    light: {
      container: 'bg-white shadow-sm border border-border',
      icon: 'text-primary fill-current',
      text: 'text-secondary',
    },
    dark: {
      container: 'bg-secondary shadow-lg border border-white/10',
      icon: 'text-primary fill-current',
      text: 'text-white',
    },
  };

  const currentTheme = themeClasses[theme];

  return (
    <div className={cn("flex items-center gap-2 group", className)}>
      <div 
        className={cn(
          "flex items-center justify-center transition-all duration-300 group-hover:scale-110",
          currentSize.container,
          currentTheme.container,
          iconClassName
        )}
      >
        <Zap className={cn(currentSize.icon, currentTheme.icon)} />
      </div>
      {showText && (
        <span 
          className={cn(
            "font-extrabold tracking-tighter italic transition-colors",
            currentSize.text,
            currentTheme.text,
            textClassName
          )}
        >
          Freelo
        </span>
      )}
    </div>
  );
}
