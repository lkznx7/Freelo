'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { MapPin, Calendar, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { StatusBadge, FreeloStatus } from './status-badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  date: string;
  time: string;
  price: string;
  status?: FreeloStatus;
  category: string;
  imageUrl?: string;
  className?: string;
}

export function JobCard({
  title,
  company,
  location,
  date,
  time,
  price,
  status,
  category,
  imageUrl,
  className,
}: JobCardProps) {
  return (
    <Card className={cn("overflow-hidden border-border/50 shadow-lg shadow-secondary/5 group transition-all duration-300 hover:shadow-xl hover:border-primary/20", className)}>
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={imageUrl || "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400"} 
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {status && <StatusBadge status={status} />}
          <span className="bg-secondary/90 backdrop-blur-md text-white px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest">
            {category}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div className="space-y-1">
          <p className="text-xs font-bold text-primary uppercase tracking-widest">{company}</p>
          <h4 className="text-xl font-extrabold text-secondary tracking-tight group-hover:text-primary transition-colors line-clamp-1">{title}</h4>
        </div>
        
        <div className="grid grid-cols-2 gap-y-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium truncate">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium truncate">{date}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium truncate">{time}</span>
          </div>
          <div className="flex items-center gap-2 text-secondary font-extrabold">
            <DollarSign className="h-4 w-4 text-primary" />
            <span className="text-sm">{price}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 border-t border-border/50 bg-muted/5">
        <Button className="w-full h-11 rounded-xl btn-primary font-bold gap-2">
          Ver Detalhes <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
