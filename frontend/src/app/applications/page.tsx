'use client';

import { DashboardLayout } from '@/components/dashboard-layout';
import { StatusBadge, FreeloStatus } from '@/components/freelo/status-badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EmptyState } from '@/components/freelo/empty-state';
import { Building2, MapPin, Calendar, Clock, ChevronRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const applications = [
  {
    id: '1',
    role: 'Garçom Extra',
    company: 'Hotel Copacabana Palace',
    location: 'Copacabana, RJ',
    date: '18 Jun, 2026',
    time: '18:00 - 02:00',
    status: 'pending' as FreeloStatus,
    value: 'R$ 180,00',
  },
  {
    id: '2',
    role: 'Recepcionista',
    company: 'Congresso Tech Rio',
    location: 'Centro, RJ',
    date: '20 Jun, 2026',
    time: '08:00 - 18:00',
    status: 'accepted' as FreeloStatus,
    value: 'R$ 250,00',
  },
  {
    id: '3',
    role: 'Segurança',
    company: 'Arena Fest',
    location: 'Barra, RJ',
    date: '15 Jun, 2026',
    time: '22:00 - 06:00',
    status: 'rejected' as FreeloStatus,
    value: 'R$ 220,00',
  },
];

export default function ApplicationsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8 pb-12">
        <div>
          <h1 className="text-3xl font-black text-secondary tracking-tight">Minhas Candidaturas</h1>
          <p className="text-muted-foreground font-medium">Acompanhe o status das suas solicitações de trabalho.</p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-muted/50 p-1 rounded-2xl h-14 mb-8">
            <TabsTrigger value="all" className="rounded-xl px-8 font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Todas</TabsTrigger>
            <TabsTrigger value="pending" className="rounded-xl px-8 font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Pendentes</TabsTrigger>
            <TabsTrigger value="accepted" className="rounded-xl px-8 font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Aceitas</TabsTrigger>
            <TabsTrigger value="finished" className="rounded-xl px-8 font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Concluídas</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {applications.length > 0 ? (
              applications.map((app) => (
                <Card key={app.id} className="card-freelo overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-muted/50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                          <Building2 className="h-6 w-6 text-secondary group-hover:text-primary transition-colors" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-extrabold text-secondary text-lg leading-tight">{app.role}</h3>
                            <StatusBadge status={app.status} />
                          </div>
                          <p className="text-sm font-bold text-muted-foreground">{app.company}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-6">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                            <MapPin className="h-3 w-3 text-primary" /> Local
                          </div>
                          <p className="text-sm font-bold text-secondary">{app.location}</p>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                            <Calendar className="h-3 w-3 text-primary" /> Data
                          </div>
                          <p className="text-sm font-bold text-secondary">{app.date}</p>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                            <Clock className="h-3 w-3 text-primary" /> Horário
                          </div>
                          <p className="text-sm font-bold text-secondary">{app.time}</p>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                            Valor
                          </div>
                          <p className="text-lg font-black text-primary">{app.value}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {app.status === 'accepted' && (
                          <Button size="icon" variant="outline" className="rounded-xl h-11 w-11 hover:bg-primary hover:text-white hover:border-primary transition-all">
                             <MessageSquare className="h-5 w-5" />
                          </Button>
                        )}
                        <Button variant="ghost" className="rounded-xl font-bold h-11 px-6 group/btn" asChild>
                          <Link href={`/jobs/${app.id}`}>
                            Ver Detalhes <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <EmptyState 
                icon="job"
                title="Nenhuma candidatura"
                description="Você ainda não se candidatou a nenhuma vaga de evento."
                action={{ label: 'Buscar Vagas', href: '/jobs' }}
              />
            )}
          </TabsContent>

          <TabsContent value="pending">
             {/* Similar to 'all' but filtered */}
          </TabsContent>
          <TabsContent value="accepted">
             {/* Similar to 'all' but filtered */}
          </TabsContent>
          <TabsContent value="finished">
             {/* Similar to 'all' but filtered */}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
