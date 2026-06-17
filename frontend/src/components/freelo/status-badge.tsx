'use client';

import { cn } from '@/lib/utils';

export type FreeloStatus = 'pending' | 'accepted' | 'rejected' | 'finished' | 'urgent' | 'new' | 'featured';

interface StatusBadgeProps {
  status: FreeloStatus;
  className?: string;
}

const statusConfig: Record<FreeloStatus, { label: string; className: string }> = {
  pending: {
    label: 'Pendente',
    className: 'bg-warning/10 text-warning border-warning/20',
  },
  accepted: {
    label: 'Aceita',
    className: 'bg-success/10 text-success border-success/20',
  },
  rejected: {
    label: 'Recusada',
    className: 'bg-destructive/10 text-destructive border-destructive/20',
  },
  finished: {
    label: 'Finalizada',
    className: 'bg-info/10 text-info border-info/20',
  },
  urgent: {
    label: 'Urgente',
    className: 'bg-destructive text-white border-transparent animate-pulse',
  },
  new: {
    label: 'Novo',
    className: 'bg-primary text-white border-transparent',
  },
  featured: {
    label: 'Destaque',
    className: 'bg-secondary text-white border-transparent',
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <span 
      className={cn(
        "px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest border",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
