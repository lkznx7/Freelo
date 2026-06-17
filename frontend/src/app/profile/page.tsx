'use client';

import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Star, 
  Award,
  Edit,
  Camera,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8 pb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold tracking-tight">Meu Perfil</h1>
          <Button variant="outline" className="gap-2">
            <Edit className="h-4 w-4" /> Editar Perfil
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar Info */}
          <div className="space-y-6">
            <Card className="border-none shadow-xl overflow-hidden">
               <div className="h-24 bg-primary w-full" />
               <CardContent className="p-6 pt-0 -mt-12 text-center space-y-4">
                 <div className="relative inline-block">
                    <Avatar className="h-24 w-24 border-4 border-white shadow-lg mx-auto">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Button size="icon" variant="secondary" className="absolute bottom-0 right-0 h-8 w-8 rounded-full shadow-md border">
                      <Camera className="h-4 w-4" />
                    </Button>
                 </div>
                 <div>
                   <h2 className="text-xl font-bold">João Silva</h2>
                   <p className="text-sm text-muted-foreground">Garçom Pro • Rio de Janeiro</p>
                 </div>
                 <div className="flex justify-center gap-2">
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">
                      Conta Verificada
                    </Badge>
                 </div>
                 <Separator />
                 <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-xl font-bold">24</p>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground">Trabalhos</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold">4.9</p>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground">Avaliação</p>
                    </div>
                 </div>
               </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>joao.silva@email.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>(21) 98888-7777</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Copacabana, Rio de Janeiro</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Profile Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Experiência Profissional</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative pl-6 border-l-2 border-muted space-y-6">
                   <div className="relative">
                      <div className="absolute -left-[31px] top-1 p-1 bg-primary rounded-full ring-4 ring-background">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold">Garçom de Eventos</h4>
                        <p className="text-sm text-muted-foreground">Copacabana Palace • Jun 2026</p>
                        <p className="text-sm">Atendimento em jantar de gala para 500 convidados. Serviço à francesa.</p>
                      </div>
                   </div>
                   <div className="relative">
                      <div className="absolute -left-[31px] top-1 p-1 bg-primary rounded-full ring-4 ring-background">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold">Recepcionista</h4>
                        <p className="text-sm text-muted-foreground">Arena Fest • Mai 2026</p>
                        <p className="text-sm">Controle de entrada e credenciamento em festival de música.</p>
                      </div>
                   </div>
                </div>
                <Button variant="ghost" className="w-full text-primary hover:text-primary hover:bg-primary/5">
                  Ver histórico completo
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Certificados e Habilidades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                   <Badge variant="secondary" className="gap-1 px-3 py-1.5">
                     <Award className="h-3.5 w-3.5 text-primary" /> Atendimento ao Cliente
                   </Badge>
                   <Badge variant="secondary" className="gap-1 px-3 py-1.5">
                     <Award className="h-3.5 w-3.5 text-primary" /> Inglês Intermediário
                   </Badge>
                   <Badge variant="secondary" className="gap-1 px-3 py-1.5">
                     <Award className="h-3.5 w-3.5 text-primary" /> Primeiros Socorros
                   </Badge>
                   <Badge variant="secondary" className="gap-1 px-3 py-1.5">
                     <Award className="h-3.5 w-3.5 text-primary" /> Higiene de Alimentos
                   </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>Últimas Avaliações</CardTitle>
                <Link href="/reviews" className="text-sm text-primary font-medium hover:underline">Ver todas</Link>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted/30 rounded-xl space-y-3">
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-[10px] text-white font-bold">CP</div>
                        <span className="text-sm font-bold">Copacabana Palace</span>
                     </div>
                     <div className="flex items-center text-yellow-500">
                        <Star className="h-3 w-3 fill-current" />
                        <span className="text-xs font-bold ml-1">5.0</span>
                     </div>
                   </div>
                   <p className="text-sm italic text-muted-foreground">
                      &quot;Excelente profissional. Pontual, educado e muito ágil no serviço.&quot;
                   </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
