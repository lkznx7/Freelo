'use client';

import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, MapPin, Calendar, Users, Edit3, Trash2, Search } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const events = [
  {
    id: '1',
    title: 'Evento de Gala - Copacabana',
    date: '20 Jun, 18:00',
    location: 'Copacabana Palace, RJ',
    hired: 8,
    total: 10,
    status: 'active',
    category: 'Gala',
    budget: 'R$ 2.500,00',
  },
  {
    id: '2',
    title: 'Show Arena Fest',
    date: '22 Jun, 22:00',
    location: 'Arena Rio, RJ',
    hired: 15,
    total: 15,
    status: 'filled',
    category: 'Show',
    budget: 'R$ 4.200,00',
  },
  {
    id: '3',
    title: 'Congresso de Tecnologia',
    date: '15 Jul, 08:00',
    location: 'Expocenter, SP',
    hired: 2,
    total: 20,
    status: 'draft',
    category: 'Corporativo',
    budget: 'R$ 6.000,00',
  },
];

export default function CompanyEventsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8 pb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-black text-secondary tracking-tight">Meus Eventos</h1>
            <p className="text-muted-foreground font-medium">Gerencie e acompanhe todos os seus eventos publicados.</p>
          </div>
          <Button asChild className="h-14 px-8 rounded-2xl btn-primary font-bold shadow-2xl shadow-primary/20">
            <Link href="/company/events/create">
              <Plus className="mr-2 h-6 w-6" /> Novo Evento
            </Link>
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
           <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Buscar por nome do evento..." className="h-14 pl-12 bg-white rounded-2xl border-2" />
           </div>
           <div className="flex gap-3">
              <Button variant="outline" className="h-14 px-6 border-2 rounded-2xl font-bold">Ativos</Button>
              <Button variant="outline" className="h-14 px-6 border-2 rounded-2xl font-bold text-muted-foreground">Concluídos</Button>
           </div>
        </div>

        <div className="grid gap-4">
           {events.map((event) => (
             <Card key={event.id} className="card-freelo border-none overflow-hidden group">
                <CardContent className="p-0">
                   <div className="flex flex-col md:flex-row">
                      <div className="p-6 md:p-8 flex-1 space-y-6">
                         <div className="flex justify-between items-start">
                            <div className="space-y-1">
                               <div className="flex items-center gap-3">
                                  <h3 className="text-2xl font-extrabold text-secondary group-hover:text-primary transition-colors">{event.title}</h3>
                                  <Badge className={cn(
                                    "border-none font-black text-[10px] px-3 h-6",
                                    event.status === 'active' ? "bg-primary text-white" : 
                                    event.status === 'filled' ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"
                                  )}>
                                    {event.status === 'active' ? 'PUBLICADO' : event.status === 'filled' ? 'PREENCHIDO' : 'RASCUNHO'}
                                  </Badge>
                               </div>
                               <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{event.category}</p>
                            </div>
                            <div className="text-right">
                               <p className="text-xl font-black text-secondary">{event.budget}</p>
                               <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Orçamento Estimado</p>
                            </div>
                         </div>

                         <div className="flex flex-wrap gap-6">
                            <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground bg-muted/50 px-4 py-2 rounded-2xl">
                               <MapPin className="h-4 w-4 text-primary" />
                               {event.location}
                            </div>
                            <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground bg-muted/50 px-4 py-2 rounded-2xl">
                               <Calendar className="h-4 w-4 text-primary" />
                               {event.date}
                            </div>
                            <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground bg-muted/50 px-4 py-2 rounded-2xl">
                               <Users className="h-4 w-4 text-primary" />
                               {event.hired}/{event.total} Profissionais
                            </div>
                         </div>

                         <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div 
                              className={cn(
                                "h-full transition-all duration-700",
                                event.status === 'filled' ? "bg-success" : "bg-primary"
                              )}
                              style={{ width: `${(event.hired / event.total) * 100}%` }}
                            />
                         </div>
                      </div>

                      <div className="p-6 md:w-56 border-t md:border-t-0 md:border-l flex flex-col items-center justify-center bg-muted/20 gap-3">
                         <Button className="w-full font-black rounded-xl h-11 text-xs uppercase tracking-widest shadow-lg shadow-primary/10">
                            Gerenciar Staff
                         </Button>
                         <div className="flex gap-2 w-full">
                            <Button variant="outline" className="flex-1 font-bold rounded-xl h-11 border-2">
                               <Edit3 className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" className="flex-1 font-bold rounded-xl h-11 border-2 text-destructive hover:bg-destructive/5">
                               <Trash2 className="h-4 w-4" />
                            </Button>
                         </div>
                      </div>
                   </div>
                </CardContent>
             </Card>
           ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
