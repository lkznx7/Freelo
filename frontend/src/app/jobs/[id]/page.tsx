'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/dashboard-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Clock, 
  Building2, 
  Users, 
  CheckCircle2, 
  Info,
  Loader2,
  Star
} from 'lucide-react';
import { toast } from 'sonner';
import Link from 'next/link';

const jobDetail = {
  id: '1',
  company: 'Hotel Copacabana Palace',
  role: 'Garçom Extra',
  location: 'Av. Atlântica, 1702 - Copacabana, Rio de Janeiro - RJ',
  date: 'Sábado, 20 de Junho',
  time: '18:00 às 02:00 (8 horas)',
  value: 'R$ 180,00',
  totalSpots: 10,
  availableSpots: 4,
  description: `Estamos contratando garçons extras para evento de gala. O profissional será responsável pelo atendimento às mesas, serviço de bebidas e organização do salão.

Requisitos:
• Experiência prévia em eventos de alto padrão
• Traje Social Completo (Calça preta, camisa branca, sapato preto social)
• Pontualidade britânica
• Boa comunicação e proatividade

Benefícios:
• Jantar no local
• Vale Transporte incluso no valor da diária
• Pagamento em até 24h após o término do evento`,
};

export default function JobDetailPage() {
  const router = useRouter();
  const [isApplying, setIsApplying] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);

  const handleApply = async () => {
    setIsApplying(true);
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setHasApplied(true);
    setIsApplying(false);
    toast.success('Candidatura enviada com sucesso!');
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6 pb-12">
        <Button 
          variant="ghost" 
          className="pl-0 hover:bg-transparent hover:text-primary transition-colors"
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para busca
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase font-bold tracking-wider">
                    Evento de Gala
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">
                    {jobDetail.value}
                  </Badge>
                </div>
                <h1 className="text-3xl font-bold tracking-tight">{jobDetail.role}</h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building2 className="h-4 w-4" />
                  <span className="font-medium">{jobDetail.company}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-muted/30 border-none shadow-none">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="p-2 bg-background rounded-lg text-primary shadow-sm">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Data</p>
                      <p className="font-semibold text-sm">{jobDetail.date}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-muted/30 border-none shadow-none">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="p-2 bg-background rounded-lg text-primary shadow-sm">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Horário</p>
                      <p className="font-semibold text-sm">{jobDetail.time}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Local do Trabalho</p>
                    <p className="text-muted-foreground">{jobDetail.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Users className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="font-semibold">Vagas Disponíveis</p>
                    <p className="text-muted-foreground">{jobDetail.availableSpots} de {jobDetail.totalSpots} vagas restantes</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h2 className="text-xl font-bold">Descrição da Vaga</h2>
                <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {jobDetail.description}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Action */}
          <div className="space-y-6">
            <Card className="sticky top-24 shadow-xl border-primary/10 overflow-hidden">
               <div className="h-2 bg-primary w-full" />
               <CardHeader>
                 <CardTitle className="text-lg">Candidatar-se</CardTitle>
                 <p className="text-xs text-muted-foreground leading-relaxed">
                   Ao se candidatar, você confirma que possui o traje necessário e disponibilidade para o horário informado.
                 </p>
               </CardHeader>
               <CardContent className="space-y-4">
                 <div className="p-3 bg-muted/50 rounded-xl border space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Valor da diária:</span>
                      <span className="font-bold text-primary">{jobDetail.value}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Taxa Freelo:</span>
                      <span className="text-green-600 font-medium">Grátis</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span>Você recebe:</span>
                      <span>{jobDetail.value}</span>
                    </div>
                 </div>

                 {hasApplied ? (
                   <Button className="w-full h-12 bg-green-500 hover:bg-green-600 cursor-default" disabled>
                     <CheckCircle2 className="mr-2 h-5 w-5" /> Candidatura Enviada
                   </Button>
                 ) : (
                   <Button 
                    className="w-full h-12 text-base font-bold shadow-lg shadow-primary/20" 
                    onClick={handleApply}
                    disabled={isApplying}
                   >
                     {isApplying ? (
                       <>
                         <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processando...
                       </>
                     ) : (
                       'Confirmar Candidatura'
                     )}
                   </Button>
                 )}
                 
                 <div className="flex items-center gap-2 p-3 bg-blue-50 text-blue-700 rounded-lg text-xs">
                    <Info className="h-4 w-4 shrink-0" />
                    <p>O pagamento será liberado na sua carteira em até 24h após o evento.</p>
                 </div>
               </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Sobre a Empresa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center text-white font-bold">
                    CP
                  </div>
                  <div>
                    <p className="font-bold text-sm">Copacabana Palace</p>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-3 w-3 fill-current" />
                      <Star className="h-3 w-3 fill-current" />
                      <Star className="h-3 w-3 fill-current" />
                      <Star className="h-3 w-3 fill-current" />
                      <Star className="h-3 w-3 fill-current" />
                      <span className="text-xs ml-1 text-muted-foreground">(48 avaliações)</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full text-xs" asChild>
                  <Link href="/company/1">Ver Perfil da Empresa</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
