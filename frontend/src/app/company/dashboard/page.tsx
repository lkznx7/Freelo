'use client';

import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  DollarSign, 
  Star, 
  Plus, 
  ArrowRight,
  MapPin,
  Clock,
  TrendingUp,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import { StatsCard } from '@/components/freelo/stats-card';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const activeEvents = [
  {
    id: '1',
    title: 'Evento de Gala - Copacabana',
    date: '20 Jun, 18:00',
    location: 'Rio de Janeiro, RJ',
    hired: 8,
    total: 10,
    status: 'Inscrições abertas',
    category: 'Gala',
  },
  {
    id: '2',
    title: 'Show Arena Fest',
    date: '22 Jun, 22:00',
    location: 'Rio de Janeiro, RJ',
    hired: 15,
    total: 15,
    status: 'Preenchido',
    category: 'Show',
  },
];

export default function CompanyDashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-10 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-secondary">
              Olá, <span className="text-primary italic">Equipe Eventos!</span> 🏢
            </h1>
            <p className="text-muted-foreground font-medium text-lg">
              Você tem <span className="text-secondary font-bold">2 eventos ativos</span> e 12 candidaturas pendentes.
            </p>
          </div>
          <Button asChild size="lg" className="h-14 px-8 rounded-2xl btn-primary font-bold shadow-2xl shadow-primary/20">
            <Link href="/company/events/create">
              <Plus className="mr-2 h-6 w-6" /> Novo Evento
            </Link>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard 
            title="Dívida Pendente" 
            value="R$ 12.450" 
            icon={DollarSign} 
            className="border-l-4 border-l-destructive"
            subValue="18 pagamentos aguardando"
          />
          <StatsCard 
            title="Coordenadores" 
            value="06" 
            icon={Users} 
            trend={{ value: '2 novos', isUp: true }}
          />
          <StatsCard 
            title="Promotores" 
            value="24" 
            icon={Zap} 
            trend={{ value: '5 ativos agora', isUp: true }}
          />
          <StatsCard 
            title="Avaliação Média" 
            value="4.8" 
            icon={Star} 
            trend={{ value: '0.2', isUp: true }}
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Active Events Management */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-secondary flex items-center gap-3">
                <Zap className="h-6 w-6 text-primary" />
                Seus Eventos Ativos
              </h2>
              <Button variant="ghost" className="text-primary font-bold hover:bg-primary/5" asChild>
                <Link href="/company/events">Ver todos</Link>
              </Button>
            </div>
            
            <div className="grid gap-4">
              {activeEvents.map((event) => (
                <Card key={event.id} className="card-freelo overflow-hidden group border-none shadow-md">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="p-6 flex-1 space-y-4">
                        <div className="flex justify-between items-start">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{event.title}</h3>
                              <Badge className={cn(
                                "border-none font-black text-[10px] px-2.5 h-5",
                                event.status === 'Preenchido' ? "bg-green-100 text-green-700" : "bg-primary/10 text-primary"
                              )}>
                                {event.status.toUpperCase()}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm font-bold text-muted-foreground">
                               <div className="flex items-center gap-1.5">
                                 <MapPin className="h-4 w-4 text-primary" />
                                 {event.location}
                               </div>
                               <div className="flex items-center gap-1.5">
                                 <Clock className="h-4 w-4 text-primary" />
                                 {event.date}
                               </div>
                            </div>
                          </div>
                          <span className="bg-secondary/5 text-secondary px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">
                            {event.category}
                          </span>
                        </div>
                        
                        <div className="pt-2">
                           <div className="flex justify-between text-[11px] font-bold mb-1.5">
                             <span className="text-muted-foreground uppercase tracking-wider">Profissionais: {event.hired}/{event.total}</span>
                             <span className="text-secondary">{Math.round((event.hired / event.total) * 100)}%</span>
                           </div>
                           <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden shadow-inner">
                              <div 
                                className={cn(
                                  "h-full transition-all duration-1000 ease-out rounded-full",
                                  event.status === 'Preenchido' ? "bg-success shadow-[0_0_10px_rgba(34,197,94,0.4)]" : "bg-primary shadow-[0_0_10px_rgba(255,107,0,0.4)]"
                                )}
                                style={{ width: `${(event.hired / event.total) * 100}%` }} 
                              />
                           </div>
                        </div>
                      </div>
                      <div className="bg-muted/30 p-4 md:w-48 flex items-center justify-center border-t md:border-t-0 md:border-l group-hover:bg-primary/5 transition-colors">
                         <Button variant="outline" className="w-full md:w-auto font-bold rounded-xl h-11 px-6 border-2 hover:bg-primary hover:text-white hover:border-primary transition-all">
                            Gerenciar
                         </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button variant="outline" className="w-full h-14 rounded-2xl border-2 font-bold text-muted-foreground hover:text-primary hover:border-primary transition-all" asChild>
               <Link href="/company/events">Explorar histórico de eventos</Link>
            </Button>
          </div>

          {/* Sidebar - Recommendations & Tools */}
          <div className="space-y-10">
             <div className="space-y-4">
                <h2 className="text-xl font-extrabold text-secondary flex items-center gap-2">
                   <Users className="h-5 w-5 text-primary" />
                   Recomendados
                </h2>
                <div className="grid gap-3">
                   {[
                     { name: 'Ricardo S.', role: 'Garçom', rating: 5.0, xp: '4.8k' },
                     { name: 'Maria O.', role: 'Recepcionista', rating: 4.9, xp: '3.2k' },
                     { name: 'Bruno L.', role: 'Segurança', rating: 4.8, xp: '5.1k' },
                   ].map((p, i) => (
                     <div key={i} className="flex items-center justify-between p-4 bg-white rounded-3xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all cursor-pointer group">
                        <div className="flex items-center gap-3">
                           <Avatar className="h-12 w-12 border-2 border-primary/10 group-hover:scale-105 transition-transform">
                              <AvatarImage src={`https://i.pravatar.cc/100?u=${i+10}`} />
                              <AvatarFallback>{p.name.substring(0, 2)}</AvatarFallback>
                           </Avatar>
                           <div>
                             <p className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">{p.name}</p>
                             <div className="flex items-center gap-2">
                                <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">{p.role}</span>
                                <span className="w-1 h-1 rounded-full bg-border" />
                                <span className="text-[10px] font-bold text-primary">{p.xp} xp</span>
                             </div>
                           </div>
                        </div>
                        <div className="flex items-center text-yellow-500 bg-yellow-50 px-2 py-1 rounded-lg">
                           <Star className="h-3 w-3 fill-current" />
                           <span className="text-[10px] font-black ml-1">{p.rating}</span>
                        </div>
                     </div>
                   ))}
                </div>
                <Button variant="link" className="text-primary font-bold p-0 h-auto w-full justify-center" asChild>
                  <Link href="/company/workers">Buscar novos talentos <ArrowRight className="h-4 w-4 ml-1" /></Link>
                </Button>
             </div>

             <Card className="bg-secondary text-white border-none rounded-[32px] overflow-hidden relative shadow-2xl">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                   <TrendingUp className="h-24 w-24" />
                </div>
                <CardContent className="p-8 space-y-6 relative z-10">
                   <div className="space-y-2">
                      <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Insights</p>
                      <h3 className="text-2xl font-extrabold leading-tight">Economize 15% em sua próxima equipe</h3>
                   </div>
                   <p className="text-sm text-white/60 font-medium leading-relaxed">
                      Utilize o sistema de pacotes Freelo para grandes eventos e garanta as melhores taxas de serviço.
                   </p>
                   <Button className="w-full bg-white text-secondary hover:bg-white/90 font-bold rounded-xl h-12">
                      Conhecer Planos Business
                   </Button>
                </CardContent>
             </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
