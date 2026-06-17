'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/dashboard-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  DollarSign,
  Loader2,
  Info
} from 'lucide-react';
import { toast } from 'sonner';

export default function CreateEventPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    toast.success('Evento criado com sucesso!');
    router.push('/company/dashboard');
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-6 pb-12">
        <Button 
          variant="ghost" 
          className="pl-0 hover:bg-transparent hover:text-primary"
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao Painel
        </Button>

        <div>
          <h1 className="text-2xl font-bold tracking-tight">Criar Novo Evento</h1>
          <p className="text-muted-foreground">Preencha os detalhes para publicar sua vaga.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle>Informações Gerais</CardTitle>
              <CardDescription>Nome do evento e local de realização.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título do Evento</Label>
                <Input id="title" placeholder="Ex: Jantar de Gala - Hotel Copacabana" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Endereço Completo</Label>
                <div className="relative">
                   <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                   <Input id="location" placeholder="Rua, Número, Bairro, Cidade - UF" className="pl-10" required />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle>Data e Horário</CardTitle>
              <CardDescription>Quando o trabalho será realizado.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
               <div className="space-y-2">
                 <Label htmlFor="date">Data do Evento</Label>
                 <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="date" type="date" className="pl-10" required />
                 </div>
               </div>
               <div className="space-y-2">
                 <Label htmlFor="time">Horário de Início</Label>
                 <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="time" type="time" className="pl-10" required />
                 </div>
               </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle>Vagas e Valores</CardTitle>
              <CardDescription>Defina os cargos e a remuneração.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
               <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-1 space-y-2">
                    <Label htmlFor="role">Cargo</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="waiter">Garçom</SelectItem>
                        <SelectItem value="receptionist">Recepcionista</SelectItem>
                        <SelectItem value="security">Segurança</SelectItem>
                        <SelectItem value="promoter">Promotor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="spots">Nº de Vagas</Label>
                    <div className="relative">
                       <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                       <Input id="spots" type="number" placeholder="10" className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="value">Valor Diária (R$)</Label>
                    <div className="relative">
                       <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                       <Input id="value" type="number" placeholder="180,00" className="pl-10" required />
                    </div>
                  </div>
               </div>
               
               <Separator />

               <div className="space-y-2">
                 <Label htmlFor="description">Descrição das Atividades e Requisitos</Label>
                 <textarea 
                  id="description" 
                  className="w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  placeholder="Descreva as tarefas, traje obrigatório e outros detalhes importantes..."
                  required
                 />
               </div>

               <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 flex gap-3 text-sm text-primary">
                  <Info className="h-5 w-5 shrink-0" />
                  <p>
                    O valor total (vagas x diária) será bloqueado da sua conta no momento da publicação e repassado aos profissionais após a conclusão.
                  </p>
               </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button type="button" variant="outline" className="flex-1 h-12" onClick={() => router.back()}>
              Cancelar
            </Button>
            <Button type="submit" className="flex-1 h-12 text-base font-bold shadow-lg shadow-primary/20" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Publicando...
                </>
              ) : (
                'Publicar Evento'
              )}
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
