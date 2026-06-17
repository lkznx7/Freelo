'use client';

import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  Star, 
  ArrowRight,
  MapPin,
  Clock,
  TrendingUp,
  Building2,
  Zap,
  ArrowUpRight,
  ChevronRight,
  Award
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const earnings = [
  { title: 'Hoje', value: 'R$ 180,00', trend: '+12%', color: 'text-primary' },
  { title: 'Esta Semana', value: 'R$ 840,00', trend: '+5%', color: 'text-secondary' },
  { title: 'Este Mês', value: 'R$ 2.450,00', trend: '+18%', color: 'text-secondary' },
  { title: 'Total Geral', value: 'R$ 12.840,00', trend: '', color: 'text-secondary' },
];

const achievements = [
  { name: 'Primeiro Freela', icon: Zap, color: 'bg-yellow-100 text-yellow-600', earned: true },
  { name: '10 Eventos', icon: Award, color: 'bg-primary/10 text-primary', earned: true },
  { name: '50 Eventos', icon: Star, color: 'bg-muted text-muted-foreground', earned: false },
  { name: 'Destaque do Mês', icon: TrendingUp, color: 'bg-blue-100 text-blue-600', earned: true },
];

const jobs = [
  {
    id: '1',
    company: 'Hotel Copacabana Palace',
    role: 'Garçom Extra',
    location: 'Copacabana, RJ',
    distance: '1.2 km',
    date: 'Amanhã, 18:00',
    value: 'R$ 180,00',
    verified: true,
  },
  {
    id: '2',
    company: 'Arena Fest',
    role: 'Segurança',
    location: 'Barra da Tijuca, RJ',
    distance: '8.5 km',
    date: 'Sábado, 22:00',
    value: 'R$ 220,00',
    verified: true,
  },
];

export default function WorkerDashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-10 pb-12">
        {/* Welcome Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-secondary">
              Bora faturar, <span className="text-primary italic">João?</span> 👋
            </h1>
            <p className="text-muted-foreground font-medium text-lg">
              Você tem <span className="text-secondary font-bold">2 novos convites</span> e 3 eventos esta semana.
            </p>
          </div>
          <div className="flex gap-3">
             <Button asChild size="lg" className="h-14 px-8 rounded-2xl btn-primary font-bold">
               <Link href="/jobs">
                 Ver todas as vagas <ArrowRight className="ml-2 h-5 w-5" />
               </Link>
             </Button>
          </div>
        </div>

        {/* Earnings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {earnings.map((item) => (
            <Card key={item.title} className="card-freelo border-none shadow-sm group">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                   <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{item.title}</p>
                   {item.trend && (
                     <Badge className="bg-green-100 text-green-700 border-none text-[10px] font-bold">
                       {item.trend} <ArrowUpRight className="ml-0.5 h-3 w-3" />
                     </Badge>
                   )}
                </div>
                <p className={cn("text-2xl font-black tracking-tight", item.color)}>{item.value}</p>
                <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                   <div className="h-full bg-primary/20 w-2/3 group-hover:w-full transition-all duration-700" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content - Jobs Near You */}
          <div className="lg:col-span-2 space-y-6">
             <div className="flex items-center justify-between">
                <h2 className="text-2xl font-extrabold text-secondary flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  Vagas perto de você
                </h2>
                <Button variant="ghost" className="text-primary font-bold hover:bg-primary/5">Ver mapa</Button>
             </div>

             <div className="grid gap-4">
                {jobs.map((job) => (
                  <Card key={job.id} className="card-freelo overflow-hidden group">
                     <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                           <div className="p-6 flex-1 space-y-4">
                              <div className="flex justify-between items-start">
                                 <div>
                                    <div className="flex items-center gap-2 mb-1">
                                       <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{job.role}</h3>
                                       {job.verified && (
                                         <Badge className="bg-blue-100 text-blue-700 border-none px-2 py-0.5 h-5">
                                            <CheckCircle2 className="h-3 w-3 mr-1 fill-current" /> Verificada
                                         </Badge>
                                       )}
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground font-semibold text-sm">
                                       <Building2 className="h-4 w-4" />
                                       {job.company}
                                    </div>
                                 </div>
                                 <p className="text-xl font-black text-secondary">{job.value}</p>
                              </div>

                              <div className="flex flex-wrap gap-4 pt-2">
                                 <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-xl">
                                    <MapPin className="h-4 w-4 text-primary" />
                                    {job.location} • <span className="text-secondary">{job.distance}</span>
                                 </div>
                                 <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-xl">
                                    <Clock className="h-4 w-4 text-primary" />
                                    {job.date}
                                 </div>
                              </div>
                           </div>
                           <div className="bg-muted/30 p-4 md:w-48 flex items-center justify-center border-t md:border-t-0 md:border-l group-hover:bg-primary/5 transition-colors">
                              <Button className="w-full md:w-auto font-bold rounded-xl h-11 px-6">Ver detalhes</Button>
                           </div>
                        </div>
                     </CardContent>
                  </Card>
                ))}
             </div>
             
             <Button variant="outline" className="w-full h-14 rounded-2xl border-2 font-bold text-muted-foreground hover:text-primary hover:border-primary transition-all">
                Carregar mais oportunidades
             </Button>
          </div>

          {/* Sidebar - Gamification & Ranking */}
          <div className="space-y-10">
             <div className="space-y-4">
                <h2 className="text-xl font-extrabold text-secondary">Suas Conquistas</h2>
                <div className="grid grid-cols-2 gap-4">
                   {achievements.map((ach) => (
                     <div key={ach.name} className={cn(
                       "p-4 rounded-3xl border flex flex-col items-center text-center space-y-3 transition-all",
                       ach.earned ? "bg-white border-border shadow-sm" : "bg-muted/50 border-dashed border-muted-foreground/20 opacity-60"
                     )}>
                        <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner", ach.color)}>
                           <ach.icon className="h-6 w-6" />
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-tighter leading-tight">{ach.name}</p>
                     </div>
                   ))}
                </div>
             </div>

             <Card className="bg-secondary text-white border-none rounded-[32px] overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                   <TrendingUp className="h-24 w-24" />
                </div>
                <CardContent className="p-8 space-y-6 relative z-10">
                   <div>
                      <Badge className="bg-primary text-white border-none font-black text-[10px] mb-4">RANKING REGIONAL</Badge>
                      <h3 className="text-2xl font-bold">Você está no Top 5% de sua região</h3>
                   </div>
                   <div className="space-y-4">
                      {[
                        { pos: 1, name: 'Ricardo S.', xp: '4.850xp' },
                        { pos: 2, name: 'Maria O.', xp: '4.720xp' },
                        { pos: 12, name: 'VOCÊ', xp: '3.940xp', highlight: true },
                      ].map(user => (
                        <div key={user.pos} className={cn(
                          "flex justify-between items-center p-3 rounded-2xl transition-colors",
                          user.highlight ? "bg-primary shadow-lg shadow-primary/20" : "bg-white/5 hover:bg-white/10"
                        )}>
                           <div className="flex items-center gap-3">
                              <span className="font-black italic text-sm">{user.pos}º</span>
                              <span className="font-bold text-sm">{user.name}</span>
                           </div>
                           <span className="text-xs font-black opacity-80">{user.xp}</span>
                        </div>
                      ))}
                   </div>
                   <Button variant="link" className="text-primary font-bold p-0 h-auto hover:text-white">Ver ranking completo <ChevronRight className="h-4 w-4 ml-1" /></Button>
                </CardContent>
             </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
