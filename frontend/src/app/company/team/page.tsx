'use client';

import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Search, 
  Filter, 
  DollarSign, 
  MessageSquare, 
  Zap,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const teamMembers = [
  { id: '1', name: 'Ricardo Santos', role: 'Coordenador', status: 'Em evento', debt: 'R$ 450,00', events: 12, rating: 4.9 },
  { id: '2', name: 'Ana Costa', role: 'Promotora', status: 'Disponível', debt: 'R$ 120,00', events: 8, rating: 4.8 },
  { id: '3', name: 'Bruno Lima', role: 'Coordenador', status: 'Férias', debt: 'R$ 0,00', events: 25, rating: 5.0 },
  { id: '4', name: 'Juliana Vale', role: 'Promotora', status: 'Disponível', debt: 'R$ 380,00', events: 5, rating: 4.7 },
  { id: '5', name: 'Marcos Paulo', role: 'Promotor', status: 'Em evento', debt: 'R$ 200,00', events: 15, rating: 4.6 },
];

export default function CompanyTeamPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8 pb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-black text-secondary tracking-tight">Gestão de Equipe</h1>
            <p className="text-muted-foreground font-medium">Acompanhe seus coordenadores, promotores e pagamentos pendentes.</p>
          </div>
          <div className="flex gap-3">
             <div className="flex items-center gap-3 px-6 py-3 bg-destructive/10 text-destructive rounded-2xl border border-destructive/20">
                <DollarSign className="h-5 w-5" />
                <div className="flex flex-col leading-none">
                   <span className="text-[10px] font-black uppercase tracking-widest opacity-70">Total Devido</span>
                   <span className="text-lg font-black italic">R$ 1.150,00</span>
                </div>
             </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4">
           <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input 
                placeholder="Buscar por nome ou cargo..." 
                className="h-14 pl-12 bg-white border-2 border-border rounded-2xl shadow-sm focus-visible:ring-primary/20 focus-visible:border-primary transition-all font-medium"
              />
           </div>
           <div className="flex gap-3">
              <Button variant="outline" className="h-14 px-6 border-2 rounded-2xl font-bold flex gap-2">
                 <Filter className="h-5 w-5" /> Filtrar
              </Button>
              <Button className="h-14 px-8 rounded-2xl btn-primary font-black shadow-xl shadow-primary/20 uppercase tracking-widest text-xs">
                 Convidar Staff
              </Button>
           </div>
        </div>

        {/* Team Table/Grid */}
        <div className="grid gap-4">
           {teamMembers.map((member) => (
             <Card key={member.id} className="card-freelo border-none overflow-hidden group shadow-md hover:shadow-xl transition-all">
                <CardContent className="p-0">
                   <div className="flex flex-col md:flex-row items-center">
                      <div className="p-6 md:p-8 flex-1 flex items-center gap-6 w-full">
                         <div className="relative">
                            <Avatar className="h-16 w-16 border-2 border-primary/10 group-hover:scale-105 transition-transform">
                               <AvatarImage src={`https://i.pravatar.cc/150?u=${member.id+30}`} />
                               <AvatarFallback className="font-bold">{member.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div className={cn(
                              "absolute -bottom-1 -right-1 w-5 h-5 border-2 border-white rounded-full",
                              member.status === 'Em evento' ? "bg-green-500" : member.status === 'Disponível' ? "bg-blue-500" : "bg-muted-foreground"
                            )} />
                         </div>

                         <div className="flex-1 grid md:grid-cols-4 gap-6 items-center">
                            <div className="space-y-1">
                               <h3 className="text-lg font-black text-secondary group-hover:text-primary transition-colors tracking-tight">{member.name}</h3>
                               <div className="flex items-center gap-2">
                                  {member.role === 'Coordenador' ? (
                                    <Badge className="bg-secondary text-white border-none font-black text-[9px] px-2 h-4">
                                       <ShieldCheck className="h-2.5 w-2.5 mr-1" /> COORDENADOR
                                    </Badge>
                                  ) : (
                                    <Badge className="bg-primary/10 text-primary border-none font-black text-[9px] px-2 h-4">
                                       <Zap className="h-2.5 w-2.5 mr-1" /> PROMOTOR
                                    </Badge>
                                  )}
                               </div>
                            </div>

                            <div className="space-y-1">
                               <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none">Dívida Atual</p>
                               <p className={cn(
                                 "text-lg font-black italic",
                                 member.debt !== 'R$ 0,00' ? "text-destructive" : "text-success"
                               )}>{member.debt}</p>
                            </div>

                            <div className="hidden lg:block space-y-1">
                               <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none">Desempenho</p>
                               <div className="flex items-center gap-2">
                                  <div className="flex items-center text-yellow-500">
                                     <CheckCircle2 className="h-4 w-4 mr-1 text-primary" />
                                     <span className="font-bold text-secondary text-sm">{member.events} eventos</span>
                                  </div>
                               </div>
                            </div>

                            <div className="space-y-1">
                               <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none">Status</p>
                               <p className="text-xs font-bold text-secondary">{member.status}</p>
                            </div>
                         </div>
                      </div>

                      <div className="p-6 md:w-64 border-t md:border-t-0 md:border-l flex items-center justify-center bg-muted/20 gap-3 group-hover:bg-primary/5 transition-colors w-full">
                         <Button variant="outline" className="flex-1 font-bold rounded-xl h-11 border-2 bg-white">
                            <MessageSquare className="h-4 w-4 mr-2 text-primary" /> Chat
                         </Button>
                         <Button className="flex-1 font-bold rounded-xl h-11 shadow-lg shadow-primary/10 btn-primary">
                            Pagar
                         </Button>
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
