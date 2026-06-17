'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard-layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  MapPin, 
  Calendar, 
  SlidersHorizontal,
  Building2,
  Star,
  CheckCircle2,
  Heart
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const jobsList = [
  {
    id: '1',
    company: 'Hotel Copacabana Palace',
    role: 'Garçom Extra',
    location: 'Copacabana, RJ',
    distance: '1.2 km',
    date: 'Amanhã, 18:00',
    value: 'R$ 180,00',
    tags: ['Noturno', 'Social'],
    verified: true,
    rating: 4.9
  },
  {
    id: '2',
    company: 'Arena Fest',
    role: 'Segurança',
    location: 'Barra da Tijuca, RJ',
    distance: '8.5 km',
    date: 'Sábado, 22:00',
    value: 'R$ 220,00',
    tags: ['Show', 'Madrugada'],
    verified: true,
    rating: 4.8
  },
  {
    id: '3',
    company: 'Buffet Alegria',
    role: 'Recepcionista',
    location: 'Ipanema, RJ',
    distance: '3.4 km',
    date: 'Domingo, 14:00',
    value: 'R$ 150,00',
    tags: ['Tarde', 'Infantil'],
    verified: false,
    rating: 4.5
  },
];

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <DashboardLayout>
      <div className="space-y-8 pb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-black text-secondary tracking-tight">Buscar Vagas</h1>
            <p className="text-muted-foreground font-medium">Encontre freelas perto de você e fature hoje.</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-2xl border border-primary/20">
             <MapPin className="h-5 w-5 text-primary" />
             <span className="text-sm font-black text-primary uppercase">Rio de Janeiro, RJ</span>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input 
              placeholder="O que você quer fazer hoje? (ex: Garçom)" 
              className="pl-12 h-14 bg-white border-2 border-border rounded-2xl shadow-sm focus-visible:ring-primary/20 focus-visible:border-primary transition-all text-base font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="h-14 px-6 border-2 rounded-2xl font-bold gap-2 hover:bg-secondary hover:text-white hover:border-secondary transition-all">
            <SlidersHorizontal className="h-5 w-5" /> Filtros
          </Button>
        </div>

        {/* Active Filters */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <Badge className="px-4 py-2 bg-primary text-white border-none rounded-xl font-bold whitespace-nowrap">Todas as vagas</Badge>
          <Badge variant="outline" className="px-4 py-2 border-2 rounded-xl font-bold text-muted-foreground hover:border-primary hover:text-primary transition-colors whitespace-nowrap cursor-pointer">Hoje</Badge>
          <Badge variant="outline" className="px-4 py-2 border-2 rounded-xl font-bold text-muted-foreground hover:border-primary hover:text-primary transition-colors whitespace-nowrap cursor-pointer">Alta Remuneração</Badge>
          <Badge variant="outline" className="px-4 py-2 border-2 rounded-xl font-bold text-muted-foreground hover:border-primary hover:text-primary transition-colors whitespace-nowrap cursor-pointer">Favoritos</Badge>
        </div>

        {/* Job List */}
        <div className="grid gap-6">
          {jobsList.map((job) => (
            <Link key={job.id} href={`/jobs/${job.id}`}>
              <Card className="card-freelo overflow-hidden group">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="p-6 md:p-8 flex-1 space-y-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1.5">
                           <div className="flex items-center gap-2">
                             <h3 className="text-2xl font-black text-secondary group-hover:text-primary transition-colors tracking-tight">{job.role}</h3>
                             {job.verified && (
                               <Badge className="bg-blue-100 text-blue-700 border-none px-2 py-0.5 h-6 font-bold text-[10px] uppercase">
                                 <CheckCircle2 className="h-3 w-3 mr-1 fill-current" /> Verificada
                               </Badge>
                             )}
                           </div>
                           <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-muted-foreground">{job.company}</span>
                              <div className="flex items-center text-yellow-500 gap-0.5">
                                 <Star className="h-3.5 w-3.5 fill-current" />
                                 <span className="text-xs font-black text-secondary">{job.rating}</span>
                              </div>
                           </div>
                        </div>
                        <div className="text-right">
                           <p className="text-2xl font-black text-primary">{job.value}</p>
                           <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Diária</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground bg-muted/50 px-4 py-2 rounded-2xl">
                          <MapPin className="h-4 w-4 text-primary" />
                          {job.location} • <span className="text-secondary">{job.distance}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground bg-muted/50 px-4 py-2 rounded-2xl">
                          <Calendar className="h-4 w-4 text-primary" />
                          {job.date}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex gap-2">
                          {job.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="bg-secondary/5 text-secondary border-none px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <button 
                          onClick={(e) => toggleFavorite(job.id, e)}
                          className={cn(
                            "p-3 rounded-2xl border-2 transition-all active:scale-90",
                            favorites.includes(job.id) ? "bg-red-50 border-red-100 text-red-500" : "bg-white border-border text-muted-foreground hover:border-primary/30"
                          )}
                        >
                          <Heart className={cn("h-5 w-5", favorites.includes(job.id) ? "fill-current" : "")} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-6 md:w-56 border-t md:border-t-0 md:border-l flex flex-col items-center justify-center bg-muted/20 group-hover:bg-primary/5 transition-all gap-4">
                       <div className="w-16 h-16 rounded-[24px] bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Building2 className="h-8 w-8 text-secondary" />
                       </div>
                       <Button className="w-full font-black rounded-2xl h-12 text-sm uppercase tracking-widest shadow-lg shadow-primary/10">
                         Candidatar-se
                       </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center pt-8">
          <Button variant="outline" size="lg" className="px-12 h-16 rounded-[24px] border-2 border-border font-black text-secondary hover:text-primary hover:border-primary transition-all shadow-xl shadow-secondary/5">
            Mostrar mais 18 vagas
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
