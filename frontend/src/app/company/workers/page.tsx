'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Search, 
  MapPin, 
  Star, 
  SlidersHorizontal, 
  Briefcase,
  UserCheck,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const workers = [
  { id: '1', name: 'João Silva', role: 'Garçom Pro', rating: 4.9, reviews: 24, location: 'Copacabana, RJ', status: 'Disponível', experience: '3 anos', xp: '4.8k' },
  { id: '2', name: 'Maria Oliveira', role: 'Recepcionista', rating: 5.0, reviews: 12, location: 'Ipanema, RJ', status: 'Em evento', experience: '1 ano', xp: '2.1k' },
  { id: '3', name: 'Ricardo Santos', role: 'Garçom', rating: 4.8, reviews: 38, location: 'Botafogo, RJ', status: 'Disponível', experience: '5 anos', xp: '6.5k' },
  { id: '4', name: 'Ana Costa', role: 'Promotora', rating: 4.7, reviews: 15, location: 'Niterói, RJ', status: 'Disponível', experience: '2 anos', xp: '1.8k' },
  { id: '5', name: 'Bruno Lima', role: 'Segurança', rating: 4.9, reviews: 42, location: 'Barra, RJ', status: 'Disponível', experience: '6 anos', xp: '8.2k' },
];

export default function WorkersSearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <DashboardLayout>
      <div className="space-y-8 pb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-black text-secondary tracking-tight">Buscar Profissionais</h1>
            <p className="text-muted-foreground font-medium">Encontre os melhores talentos e convide-os para seus eventos.</p>
          </div>
          <div className="flex items-center gap-3 px-5 py-2.5 bg-secondary text-white rounded-2xl shadow-xl shadow-secondary/20">
             <UserCheck className="h-5 w-5 text-primary" />
             <span className="text-sm font-black uppercase tracking-widest">1.240 Ativos</span>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4">
           <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input 
                placeholder="Ex: Garçom com experiência em gala..." 
                className="h-14 pl-12 bg-white border-2 border-border rounded-2xl shadow-sm focus-visible:ring-primary/20 focus-visible:border-primary transition-all text-base font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>
           <Button variant="outline" className="h-14 px-8 border-2 rounded-2xl font-bold gap-2 hover:bg-secondary hover:text-white hover:border-secondary transition-all">
              <SlidersHorizontal className="h-5 h-5" /> Filtros
           </Button>
        </div>

        {/* Categories / Quick Filters */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
           {['Todos', 'Garçom', 'Recepcionista', 'Segurança', 'Promotor', 'Produção'].map((cat, i) => (
             <Badge 
              key={cat} 
              variant={i === 0 ? 'default' : 'outline'} 
              className={cn(
                "px-6 py-2.5 rounded-xl font-bold whitespace-nowrap cursor-pointer transition-all border-2",
                i === 0 ? "bg-primary text-white border-primary" : "text-muted-foreground hover:border-primary hover:text-primary"
              )}
             >
               {cat}
             </Badge>
           ))}
        </div>

        {/* Workers List */}
        <div className="grid gap-6">
           {workers.map((worker) => (
             <Card key={worker.id} className="card-freelo border-none overflow-hidden group shadow-md">
                <CardContent className="p-0">
                   <div className="flex flex-col md:flex-row">
                      <div className="p-6 md:p-8 flex-1 flex items-start gap-6">
                         <div className="relative">
                            <Avatar className="h-20 w-20 border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
                               <AvatarImage src={`https://i.pravatar.cc/150?u=${worker.id+20}`} />
                               <AvatarFallback className="bg-muted text-xl font-black">{worker.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div className={cn(
                              "absolute -bottom-1 -right-1 w-6 h-6 border-4 border-white rounded-full",
                              worker.status === 'Disponível' ? "bg-green-500" : "bg-amber-500"
                            )} />
                         </div>

                         <div className="flex-1 space-y-4">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                               <div className="space-y-1">
                                  <div className="flex items-center gap-2">
                                     <h3 className="text-2xl font-black text-secondary group-hover:text-primary transition-colors tracking-tight">{worker.name}</h3>
                                     <Badge className="bg-blue-100 text-blue-700 border-none font-black text-[10px] h-5">
                                        <CheckCircle2 className="h-3 w-3 mr-1 fill-current" /> ELITE
                                     </Badge>
                                  </div>
                                  <div className="flex items-center gap-3">
                                     <span className="text-sm font-black text-primary uppercase tracking-widest">{worker.role}</span>
                                     <span className="w-1.5 h-1.5 rounded-full bg-border" />
                                     <span className="text-sm font-bold text-muted-foreground">{worker.xp} XP</span>
                                  </div>
                               </div>
                               <div className="flex items-center gap-1.5 bg-yellow-50 text-yellow-600 px-4 py-2 rounded-2xl border border-yellow-100">
                                  <Star className="h-5 w-5 fill-current" />
                                  <span className="font-black text-lg">{worker.rating}</span>
                                  <span className="text-xs font-bold opacity-60">({worker.reviews})</span>
                               </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-6">
                               <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground bg-muted/50 px-4 py-2 rounded-2xl">
                                  <MapPin className="h-4 w-4 text-primary" />
                                  {worker.location}
                               </div>
                               <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground bg-muted/50 px-4 py-2 rounded-2xl">
                                  <Briefcase className="h-4 w-4 text-primary" />
                                  {worker.experience} de experiência
                               </div>
                            </div>
                         </div>
                      </div>

                      <div className="p-6 md:w-64 border-t md:border-t-0 md:border-l flex flex-col items-center justify-center bg-muted/20 gap-3 group-hover:bg-primary/5 transition-all">
                         <Button className="w-full font-black rounded-xl h-12 text-xs uppercase tracking-widest shadow-lg shadow-primary/10 btn-primary">
                            Convidar para Evento
                         </Button>
                         <Button variant="outline" className="w-full font-black rounded-xl h-12 text-xs uppercase tracking-widest border-2 bg-white" asChild>
                            <Link href={`/company/workers/${worker.id}`}>Ver Perfil Completo</Link>
                         </Button>
                      </div>
                   </div>
                </CardContent>
             </Card>
           ))}
        </div>

        <div className="flex justify-center pt-6">
           <Button variant="ghost" className="text-muted-foreground font-bold hover:text-primary transition-colors">
              Carregar mais profissionais
           </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
