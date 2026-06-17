'use client';

import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Wallet, 
  Star, 
  Calendar, 
  ArrowRight,
  TrendingUp,
  Award,
  MessageSquare,
  Gift
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function PromoterDashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-10 pb-12">
        {/* Hero Section for Promoter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-secondary">
              E aí, <span className="text-primary italic">Ana!</span> 🚀
            </h1>
            <p className="text-muted-foreground font-medium text-lg">
              Seu próximo evento de <span className="text-secondary font-bold">Promoção</span> começa em 4 horas.
            </p>
          </div>
          <div className="flex gap-3">
             <Button asChild size="lg" className="h-14 px-8 rounded-2xl btn-primary font-bold shadow-xl shadow-primary/20">
               <Link href="/jobs">
                 Novas Campanhas <Zap className="ml-2 h-5 w-5 fill-current" />
               </Link>
             </Button>
          </div>
        </div>

        {/* Promoter Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { title: 'Ganhos da Semana', value: 'R$ 420,00', icon: Wallet, color: 'text-primary' },
             { title: 'Meta de Vendas', value: '85%', icon: TrendingUp, color: 'text-secondary' },
             { title: 'Eventos Realizados', value: '14', icon: Calendar, color: 'text-secondary' },
             { title: 'Nível de Influência', value: 'Ouro', icon: Award, color: 'text-secondary' },
           ].map((stat, i) => (
             <Card key={i} className="card-freelo border-none shadow-md">
                <CardContent className="p-6 space-y-2">
                   <div className="flex justify-between items-start">
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.title}</p>
                      <stat.icon className={cn("h-4 w-4", stat.color)} />
                   </div>
                   <h3 className="text-2xl font-black italic text-secondary">{stat.value}</h3>
                   <div className="h-1 w-full bg-muted rounded-full">
                      <div className={cn("h-full rounded-full w-2/3", i === 0 ? "bg-primary" : "bg-secondary")} />
                   </div>
                </CardContent>
             </Card>
           ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
             <h2 className="text-2xl font-extrabold text-secondary flex items-center gap-3">
                <Gift className="h-6 w-6 text-primary" />
                Campanha Ativa
             </h2>
             
             <Card className="card-freelo border-none overflow-hidden group shadow-lg bg-white relative">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Zap className="h-32 w-32" />
                </div>
                <CardContent className="p-0">
                   <div className="p-8 space-y-6">
                      <div className="flex justify-between items-start">
                         <div className="space-y-1">
                            <h3 className="text-2xl font-black text-secondary tracking-tight">Lançamento Energy Drink</h3>
                            <div className="flex items-center gap-3">
                               <Badge className="bg-primary text-white border-none font-black text-[9px] px-2">PROMOÇÃO VIP</Badge>
                               <span className="text-xs font-bold text-muted-foreground">Red Bull Brasil</span>
                            </div>
                         </div>
                         <div className="text-right">
                            <p className="text-2xl font-black text-primary">R$ 150/dia</p>
                            <p className="text-[10px] font-black text-muted-foreground uppercase">+ Comissões</p>
                         </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                         <div className="space-y-1">
                            <p className="text-[10px] font-black text-muted-foreground uppercase">Data</p>
                            <p className="text-sm font-bold">Hoje, 14:00</p>
                         </div>
                         <div className="space-y-1">
                            <p className="text-[10px] font-black text-muted-foreground uppercase">Local</p>
                            <p className="text-sm font-bold">Shopping Rio Sul</p>
                         </div>
                         <div className="space-y-1">
                            <p className="text-[10px] font-black text-muted-foreground uppercase">Meta</p>
                            <p className="text-sm font-bold">200 amostras</p>
                         </div>
                         <div className="space-y-1">
                            <p className="text-[10px] font-black text-muted-foreground uppercase">Status</p>
                            <p className="text-sm font-bold text-success">Confirmado</p>
                         </div>
                      </div>

                      <div className="flex gap-4">
                         <Button className="flex-1 h-12 font-black rounded-xl btn-primary shadow-lg shadow-primary/20">
                            Check-in no Local
                         </Button>
                         <Button variant="outline" className="flex-1 h-12 font-black rounded-xl border-2">
                            Briefing da Campanha
                         </Button>
                      </div>
                   </div>
                </CardContent>
             </Card>

             <div className="pt-4 flex justify-between items-center">
                <h3 className="text-xl font-bold text-secondary">Oportunidades Recomendadas</h3>
                <Button variant="link" className="text-primary font-bold">Ver todas</Button>
             </div>
             
             <div className="grid gap-4">
                {[1, 2].map(i => (
                  <Card key={i} className="card-freelo border-none shadow-md hover:shadow-lg transition-all">
                     <CardContent className="p-6 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center font-bold text-secondary">
                              {i === 1 ? 'MT' : 'VS'}
                           </div>
                           <div>
                              <p className="font-bold text-secondary">{i === 1 ? 'Ação de Verão Motorola' : 'Lançamento Vogue'}</p>
                              <p className="text-xs text-muted-foreground font-medium">Rio de Janeiro • 3 dias</p>
                           </div>
                        </div>
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                           <ArrowRight className="h-5 w-5" />
                        </Button>
                     </CardContent>
                  </Card>
                ))}
             </div>
          </div>

          <div className="space-y-8">
             <Card className="card-freelo border-none shadow-xl bg-secondary text-white rounded-[32px] overflow-hidden">
                <CardContent className="p-8 space-y-6">
                   <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                         <Star className="h-8 w-8 text-primary fill-current" />
                      </div>
                      <div>
                         <p className="text-sm font-bold text-primary italic">Promotora Estrela</p>
                         <h3 className="text-2xl font-black">4.9 / 5.0</h3>
                      </div>
                   </div>
                   <p className="text-sm text-white/60 font-medium leading-relaxed">
                      Sua taxa de conversão em vendas está 20% acima da média. Continue assim!
                   </p>
                   <Button className="w-full bg-primary text-white hover:bg-primary/90 font-black rounded-xl h-12">
                      Ver Feedbacks
                   </Button>
                </CardContent>
             </Card>

             <div className="space-y-4">
                <h3 className="text-xl font-bold text-secondary">Suporte Direto</h3>
                <Card className="card-freelo border-none shadow-md cursor-pointer hover:bg-muted/50 transition-colors">
                   <CardContent className="p-6 flex items-center gap-4">
                      <MessageSquare className="h-6 w-6 text-primary" />
                      <div>
                         <p className="font-bold text-secondary">Coordenador do Evento</p>
                         <p className="text-xs text-muted-foreground font-medium">Ricardo S. está online</p>
                      </div>
                   </CardContent>
                </Card>
             </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
