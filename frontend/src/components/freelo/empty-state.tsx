'use client';

import { SearchX, Briefcase, CalendarX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface EmptyStateProps {
  icon?: 'search' | 'job' | 'calendar';
  title: string;
  description: string;
  action?: {
    label: string;
    href: string;
  };
}

export function EmptyState({ icon = 'search', title, description, action }: EmptyStateProps) {
  const Icon = {
    search: SearchX,
    job: Briefcase,
    calendar: CalendarX,
  }[icon];

  return (
    <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-border/60 rounded-[40px] bg-muted/20 space-y-6">
      <div className="p-6 bg-white rounded-[32px] shadow-xl shadow-secondary/5">
        <Icon className="h-12 w-12 text-primary" />
      </div>
      <div className="space-y-2 max-w-sm">
        <h3 className="text-2xl font-extrabold text-secondary tracking-tight">{title}</h3>
        <p className="text-muted-foreground font-medium">{description}</p>
      </div>
      {action && (
        <Button asChild className="rounded-xl font-bold btn-primary h-11 px-8">
          <Link href={action.href}>{action.label}</Link>
        </Button>
      )}
    </div>
  );
}
