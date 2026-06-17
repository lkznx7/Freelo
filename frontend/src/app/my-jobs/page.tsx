'use client';

import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EmptyState } from '@/components/freelo/empty-state';
import { MapPin, Calendar, Clock, Star, Download, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface JobAgenda {
  id: string;
  role: string;
  company: string;
  location: string;
  date: string;
  time: string;
  status: 'today' | 'upcoming' | 'completed';
  value: string;
  rating?: number;
}

const myJobs: JobAgenda[] = [
  {
    id: '1',
    role: 'Staff de Produção',
    company: 'Lollapalooza Brasil',
    location: 'Interlagos, SP',
    date: 'Hoje, 16 Jun',
    time: '14:00 - 23:00',
    status: 'today',
    value: 'R$ 220,00',
  },
  {
    id: '2',
    role: 'Promotor de Vendas',
    company: 'Exposhopping 2026',
    location: 'Expo Center Norte, SP',
    date: 'Amanhã, 17 Jun',
    time: '10:00 - 20:00',
    status: 'upcoming',
    value: 'R$ 150,00',
  },
  {
    id: '3',
    role: 'Garçom VIP',
    company: 'Casamento Marina & Leo',
    location: 'Mansão das Heras, RJ',
    date: '12 Jun, 2026',
    time: '17:00 - 03:00',
    status: 'completed',
    value: 'R$ 280,00',
    rating: 5,
  },
];

export default function MyJobsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8 pb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-black text-secondary tracking-tight">Meus Trabalhos</h1>
            <p className="text-muted-foreground font-medium">Gerencie sua agenda e histórico de eventos.</p>
          </div>
          <Button variant="outline" className="rounded-xl font-bold h-11 px-6 border-2 gap-2">
            <Download className="h-4 w-4" /> Exportar Agenda
          </Button>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="bg-muted/50 p-1 rounded-2xl h-14 mb-8">
            <TabsTrigger value="upcoming" className="rounded-xl px-8 font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Próximos</TabsTrigger>
            <TabsTrigger value="today" className="rounded-xl px-8 font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Hoje</TabsTrigger>
            <TabsTrigger value="completed" className="rounded-xl px-8 font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Concluídos</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            {myJobs.filter(j => j.status === 'upcoming').map(job => (
              <JobAgendaCard key={job.id} job={job} />
            ))}
          </TabsContent>

          <TabsContent value="today" className="space-y-4">
            {myJobs.filter(j => j.status === 'today').map(job => (
              <JobAgendaCard key={job.id} job={job} isToday />
            ))}
            {myJobs.filter(j => j.status === 'today').length === 0 && (
              <EmptyState 
                icon="calendar"
                title="Nada para hoje"
                description="Você não tem nenhum trabalho agendado para o dia de hoje."
              />
            )}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {myJobs.filter(j => j.status === 'completed').map(job => (
              <JobAgendaCard key={job.id} job={job} isCompleted />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

function JobAgendaCard({ job, isToday, isCompleted }: { job: JobAgenda; isToday?: boolean; isCompleted?: boolean }) {
  return (
    <Card className={cn(
      "card-freelo border-none overflow-hidden",
      isToday && "ring-2 ring-primary ring-offset-2"
    )}>
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className={cn(
            "p-6 md:p-8 flex-1 space-y-6",
            isToday && "bg-primary/5"
          )}>
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                   <h3 className="text-xl font-extrabold text-secondary">{job.role}</h3>
                   {isToday && <Badge className="bg-primary text-white font-black text-[10px] animate-pulse">AGORA</Badge>}
                </div>
                <p className="text-sm font-bold text-muted-foreground">{job.company}</p>
              </div>
              <p className="text-xl font-black text-secondary">{job.value}</p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground bg-muted/50 px-4 py-2 rounded-2xl">
                <MapPin className="h-4 w-4 text-primary" />
                {job.location}
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground bg-muted/50 px-4 py-2 rounded-2xl">
                <Calendar className="h-4 w-4 text-primary" />
                {job.date}
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground bg-muted/50 px-4 py-2 rounded-2xl">
                <Clock className="h-4 w-4 text-primary" />
                {job.time}
              </div>
            </div>
            
            {isCompleted && job.rating && (
              <div className="flex items-center gap-2 pt-2">
                 <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Sua Avaliação:</p>
                 <div className="flex gap-1 text-yellow-500">
                    {[...Array(job.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                 </div>
              </div>
            )}
          </div>
          
          <div className="p-6 md:w-56 border-t md:border-t-0 md:border-l flex flex-col items-center justify-center bg-muted/20 gap-3">
             {isToday ? (
               <>
                 <Button className="w-full font-black rounded-xl h-12 text-xs uppercase tracking-widest bg-success hover:bg-success/90 shadow-lg shadow-success/10">
                   Confirmar Check-in
                 </Button>
                 <Button variant="outline" className="w-full font-black rounded-xl h-12 text-xs uppercase tracking-widest border-2">
                   Ver Localização
                 </Button>
               </>
             ) : isCompleted ? (
               <>
                 <div className="flex items-center gap-2 text-success mb-2">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="text-xs font-black uppercase tracking-widest">Pago</span>
                 </div>
                 <Button variant="outline" className="w-full font-black rounded-xl h-12 text-xs uppercase tracking-widest border-2">
                   Ver Recibo
                 </Button>
               </>
             ) : (
               <>
                 <Button className="w-full font-black rounded-xl h-12 text-xs uppercase tracking-widest shadow-lg shadow-primary/10">
                   Detalhes
                 </Button>
                 <Button variant="ghost" className="w-full font-black rounded-xl h-12 text-xs uppercase tracking-widest text-destructive hover:bg-destructive/10">
                   Cancelar
                 </Button>
               </>
             )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
