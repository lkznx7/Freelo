'use client';

import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Users, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2,
  MessageSquare,
  AlertCircle,
  TrendingUp,
  Zap,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const myEvents = [
  {
    id: '1',
    title: 'Evento de Gala - Copacabana',
    role: 'Coordenador Geral',
    date: 'Hoje, 18:00',
    location: 'Copacabana Palace, RJ',
    staffCount: 12,
    staffPresent: 10,
    status: 'starting',
  },
  {
    id: '2',
    title: 'Show Arena Fest',
    role: 'Coordenador de Bar',
    date: 'Sábado, 22:00',
    location: 'Arena Rio, RJ',
    staffCount: 8,
    staffPresent: 0,
    status: 'upcoming',
  },
];

export default function CoordinatorDashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-10 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-secondary">
              Painel do <span className="text-primary italic">Coordenador</span> 🛡️
            </h1>
            <p className="text-muted-foreground font-medium text-lg">
              Olá, Ricardo. Você tem <span className="text-secondary font-bold">1 evento começando agora</span>.
            </p>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="h-14 px-6 rounded-2xl border-2 font-bold gap-2">
                <AlertCircle className="h-5 w-5 text-destructive" /> Relatar Problema
             </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { title: 'Eventos Este Mês', value: '08', icon: Calendar, color: 'text-secondary' },
             { title: 'Staff Sob Comando', value: '42', icon: Users, color: 'text-primary' },
             { title: 'Taxa de Presença', value: '98%', icon: CheckCircle2, color: 'text-success' },
             { title: 'Sua Avaliação', value: '4.9', icon: ShieldCheck, color: 'text-secondary' },
           ].map((stat, i) => (
             <Card key={i} className="card-freelo border-none shadow-md overflow-hidden">
                <CardContent className="p-6 flex justify-between items-center">
                   <div className="space-y-1">
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.title}</p>
                      <h3 className={cn("text-3xl font-black italic", stat.color)}>{stat.value}</h3>
                   </div>
                   <div className="p-3 bg-muted rounded-2xl">
                      <stat.icon className="h-6 w-6 text-muted-foreground" />
                   </div>
                </CardContent>
             </Card>
           ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Active Events */}
          <div className="lg:col-span-2 space-y-6">
             <h2 className="text-2xl font-extrabold text-secondary flex items-center gap-3">
                <Zap className="h-6 w-6 text-primary" />
                Eventos em Coordenação
             </h2>
             
             <div className="grid gap-4">
                {myEvents.map((event) => (
                  <Card key={event.id} className="card-freelo border-none overflow-hidden group shadow-md">
                     <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                           <div className="p-6 md:p-8 flex-1 space-y-6">
                              <div className="flex justify-between items-start">
                                 <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                       <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{event.title}</h3>
                                       <Badge className={cn(
                                         "border-none font-black text-[9px] px-2 h-4",
                                         event.status === 'starting' ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                                       )}>
                                         {event.status === 'starting' ? 'COMEÇANDO' : 'EM BREVE'}
                                       </Badge>
                                    </div>
                                    <p className="text-xs font-black text-primary uppercase tracking-widest italic">{event.role}</p>
                                 </div>
                              </div>

                              <div className="flex flex-wrap gap-4">
                                 <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground bg-muted/50 px-4 py-2 rounded-xl">
                                    <MapPin className="h-4 w-4 text-primary" />
                                    {event.location}
                                 </div>
                                 <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground bg-muted/50 px-4 py-2 rounded-xl">
                                    <Clock className="h-4 w-4 text-primary" />
                                    {event.date}
                                 </div>
                              </div>

                              <div className="pt-2">
                                 <div className="flex justify-between text-[11px] font-bold mb-1.5">
                                    <span className="text-muted-foreground uppercase tracking-wider">Staff Presente: {event.staffPresent}/{event.staffCount}</span>
                                    <span className="text-secondary">{Math.round((event.staffPresent / event.staffCount) * 100)}%</span>
                                 </div>
                                 <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-primary transition-all duration-700"
                                      style={{ width: `${(event.staffPresent / event.staffCount) * 100}%` }}
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="p-6 md:w-56 border-t md:border-t-0 md:border-l flex flex-col items-center justify-center bg-muted/20 gap-3 group-hover:bg-primary/5 transition-colors">
                              <Button className="w-full font-black rounded-xl h-11 text-xs uppercase tracking-widest shadow-lg shadow-primary/10">
                                 Lista de Chamada
                              </Button>
                              <Button variant="outline" className="w-full font-bold rounded-xl h-11 border-2 bg-white">
                                 Mapa do Evento
                              </Button>
                           </div>
                        </div>
                     </CardContent>
                  </Card>
                ))}
             </div>
          </div>

          {/* Quick Staff Actions */}
          <div className="space-y-6">
             <h2 className="text-xl font-extrabold text-secondary">Acesso Rápido</h2>
             <div className="grid gap-4">
                <Card className="card-freelo border-none shadow-md hover:border-primary/50 transition-all cursor-pointer group">
                   <CardContent className="p-6 flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary transition-colors">
                         <MessageSquare className="h-6 w-6 text-primary group-hover:text-white" />
                      </div>
                      <div>
                         <p className="font-extrabold text-secondary">Chat da Equipe</p>
                         <p className="text-xs text-muted-foreground font-medium">12 mensagens novas</p>
                      </div>
                      <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground" />
                   </CardContent>
                </Card>

                <Card className="card-freelo border-none shadow-md hover:border-primary/50 transition-all cursor-pointer group">
                   <CardContent className="p-6 flex items-center gap-4">
                      <div className="p-3 bg-secondary/10 rounded-2xl group-hover:bg-secondary transition-colors">
                         <TrendingUp className="h-6 w-6 text-secondary group-hover:text-white" />
                      </div>
                      <div>
                         <p className="font-extrabold text-secondary">Relatório de Evento</p>
                         <p className="text-xs text-muted-foreground font-medium">Finalizar coordenação anterior</p>
                      </div>
                      <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground" />
                   </CardContent>
                </Card>

                <div className="pt-4">
                   <Card className="bg-primary text-white border-none rounded-[32px] overflow-hidden relative">
                      <div className="absolute top-0 right-0 p-6 opacity-20">
                         <ShieldCheck className="h-24 w-24" />
                      </div>
                      <CardContent className="p-8 space-y-4 relative z-10">
                         <h3 className="text-xl font-bold leading-tight">Você é um Coordenador Elite</h3>
                         <p className="text-sm text-white/80 font-medium">
                            Continue com bom desempenho para garantir as melhores taxas de coordenação do mercado.
                         </p>
                         <Button variant="link" className="text-white font-bold p-0 flex items-center gap-2 h-auto">
                            Ver benefícios <ArrowRight className="h-4 w-4" />
                         </Button>
                      </CardContent>
                   </Card>
                </div>
             </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
