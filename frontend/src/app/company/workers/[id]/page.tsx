'use client';

import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/dashboard-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  ArrowLeft, 
  MapPin, 
  Star, 
  Briefcase, 
  CheckCircle2, 
  Award,
  Zap,
  Calendar,
  MessageSquare,
  MoreVertical
} from 'lucide-react';
import { cn } from '@/lib/utils';

const workerDetail = {
  id: '1',
  name: 'João Silva',
  role: 'Garçom Profissional',
  location: 'Copacabana, Rio de Janeiro - RJ',
  rating: 4.9,
  reviews: 24,
  xp: '4.850',
  experience: '3 anos',
  bio: 'Especialista em atendimento de gala e eventos corporativos. Pontual, proativo e com traje social completo próprio. Experiência em hotéis 5 estrelas.',
  skills: ['Vinhos', 'Serviço à Inglesa', 'Coquetelaria Básica', 'Inglês Intermediário'],
  achievements: [
    { name: 'Primeiro Freela', icon: Zap, color: 'text-yellow-600 bg-yellow-100' },
    { name: '10 Eventos', icon: Award, color: 'text-primary bg-primary/10' },
    { name: 'Elite', icon: CheckCircle2, color: 'text-blue-600 bg-blue-100' },
  ],
};

export default function WorkerProfilePage() {
  const router = useRouter();

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto space-y-8 pb-12">
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            className="pl-0 hover:bg-transparent hover:text-primary transition-colors font-bold"
            onClick={() => router.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para busca
          </Button>
          <Button variant="ghost" size="icon" className="rounded-xl"><MoreVertical className="h-5 w-5" /></Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Profile Sidebar */}
          <div className="space-y-6">
            <Card className="card-freelo border-none shadow-xl overflow-hidden">
               <div className="h-32 bg-secondary relative">
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                    <Avatar className="h-24 w-24 border-4 border-white shadow-2xl">
                       <AvatarImage src="https://i.pravatar.cc/150?u=1" />
                       <AvatarFallback className="bg-primary text-white font-black text-2xl">JS</AvatarFallback>
                    </Avatar>
                  </div>
               </div>
               <CardContent className="pt-16 pb-8 text-center space-y-4">
                  <div>
                    <h1 className="text-2xl font-black text-secondary tracking-tight">{workerDetail.name}</h1>
                    <p className="text-sm font-bold text-primary uppercase tracking-widest">{workerDetail.role}</p>
                  </div>
                  
                  <div className="flex items-center justify-center gap-1.5 bg-yellow-50 text-yellow-600 px-4 py-2 rounded-2xl w-fit mx-auto border border-yellow-100">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="font-black text-lg">{workerDetail.rating}</span>
                    <span className="text-xs font-bold opacity-60">({workerDetail.reviews} reviews)</span>
                  </div>

                  <div className="flex flex-col gap-3 pt-4">
                     <Button className="w-full h-12 rounded-xl btn-primary font-bold shadow-lg shadow-primary/20">
                        Convidar para Evento
                     </Button>
                     <Button variant="outline" className="w-full h-12 rounded-xl border-2 font-bold flex gap-2">
                        <MessageSquare className="h-4 w-4" /> Enviar Mensagem
                     </Button>
                  </div>
               </CardContent>
            </Card>

            <Card className="card-freelo border-none shadow-md">
               <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                     <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Conquistas</p>
                     <div className="grid grid-cols-3 gap-3">
                        {workerDetail.achievements.map((ach) => (
                          <div key={ach.name} className="flex flex-col items-center gap-2">
                             <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner", ach.color)}>
                                <ach.icon className="h-6 w-6" />
                             </div>
                             <span className="text-[9px] font-black text-center leading-tight">{ach.name}</span>
                          </div>
                        ))}
                     </div>
                  </div>
               </CardContent>
            </Card>
          </div>

          {/* Main Profile Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
               <div className="space-y-4">
                  <h2 className="text-2xl font-black text-secondary tracking-tight">Sobre</h2>
                  <p className="text-muted-foreground font-medium leading-relaxed text-lg">
                    {workerDetail.bio}
                  </p>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Localização', value: 'Rio de Janeiro', icon: MapPin },
                    { label: 'Experiência', value: workerDetail.experience, icon: Briefcase },
                    { label: 'Eventos', value: '42 concluídos', icon: Calendar },
                    { label: 'Score XP', value: workerDetail.xp, icon: Zap },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 bg-muted/30 rounded-2xl border border-border/50">
                       <stat.icon className="h-5 w-5 text-primary mb-2" />
                       <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                       <p className="font-bold text-secondary text-sm">{stat.value}</p>
                    </div>
                  ))}
               </div>

               <div className="space-y-4">
                  <h2 className="text-xl font-black text-secondary tracking-tight">Habilidades</h2>
                  <div className="flex flex-wrap gap-2">
                    {workerDetail.skills.map(skill => (
                      <Badge key={skill} variant="secondary" className="px-4 py-2 rounded-xl bg-white border-2 border-border text-secondary font-bold text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
               </div>

               <div className="space-y-4">
                  <h2 className="text-xl font-black text-secondary tracking-tight">Avaliações Recentes</h2>
                  <div className="space-y-4">
                     {[1, 2].map((i) => (
                       <div key={i} className="p-6 bg-white rounded-3xl border border-border/50 shadow-sm space-y-4">
                          <div className="flex justify-between items-start">
                             <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xs">EF</div>
                                <div>
                                   <p className="font-bold text-sm">Empresa Festas SA</p>
                                   <p className="text-xs text-muted-foreground">Evento de Gala • 10 Jun, 2026</p>
                                </div>
                             </div>
                             <div className="flex text-yellow-500">
                                <Star className="h-3.5 w-3.5 fill-current" />
                                <Star className="h-3.5 w-3.5 fill-current" />
                                <Star className="h-3.5 w-3.5 fill-current" />
                                <Star className="h-3.5 w-3.5 fill-current" />
                                <Star className="h-3.5 w-3.5 fill-current" />
                             </div>
                          </div>
                          <p className="text-sm text-muted-foreground italic font-medium leading-relaxed">
                            &quot;O João é um profissional excepcional. Chegou com antecedência, estava impecavelmente trajado e atendeu nossos convidados com muita elegância. Recomendamos fortemente!&quot;
                          </p>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
