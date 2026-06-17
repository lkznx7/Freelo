'use client';

import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  subValue?: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    isUp: boolean;
  };
  className?: string;
}

export function StatsCard({ 
  title, 
  value, 
  subValue, 
  icon: Icon, 
  trend, 
  className 
}: StatsCardProps) {
  return (
    <Card className={cn("overflow-hidden border-border/50 shadow-lg shadow-secondary/5 group transition-all duration-300 hover:shadow-xl hover:-translate-y-1", className)}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{title}</p>
            <h3 className="text-3xl font-extrabold text-secondary tracking-tight">{value}</h3>
            {subValue && (
              <p className="text-xs text-muted-foreground font-medium">{subValue}</p>
            )}
            {trend && (
              <div className={cn(
                "flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full w-fit",
                trend.isUp ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
              )}>
                {trend.isUp ? '↑' : '↓'} {trend.value}
              </div>
            )}
          </div>
          <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary transition-colors duration-300">
            <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
