'use client';

import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, CheckCircle2, Wallet, Briefcase, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const notifications = [
  {
    id: '1',
    title: 'Novo Convite Recebido',
    message: 'O Hotel Copacabana Palace te convidou para o evento "Garçom Extra".',
    time: 'Há 5 min',
    type: 'invite',
    read: false,
    icon: Zap,
    color: 'bg-primary/10 text-primary',
  },
  {
    id: '2',
    title: 'Pagamento Confirmado',
    message: 'Seu pagamento de R$ 280,00 referente ao Casamento Marina & Leo foi liberado.',
    time: 'Há 2 horas',
    type: 'payment',
    read: false,
    icon: Wallet,
    color: 'bg-green-100 text-green-600',
  },
  {
    id: '3',
    title: 'Candidatura Aprovada',
    message: 'Parabéns! Sua candidatura para "Recepcionista" foi aprovada pela empresa.',
    time: 'Há 5 horas',
    type: 'approval',
    read: true,
    icon: CheckCircle2,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: '4',
    title: 'Nova Vaga na Sua Área',
    message: 'Uma nova vaga de "Segurança" acaba de ser publicada em Barra da Tijuca.',
    time: 'Ontem',
    type: 'job',
    read: true,
    icon: Briefcase,
    color: 'bg-secondary/10 text-secondary',
  },
];

export default function NotificationsPage() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8 pb-12">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-secondary tracking-tight">Notificações</h1>
            <p className="text-muted-foreground font-medium">Fique por dentro de tudo o que acontece na sua conta.</p>
          </div>
          <div className="flex gap-2">
             <Button variant="outline" className="rounded-xl font-bold h-11 border-2">Marcar todas como lidas</Button>
             <Button variant="ghost" className="rounded-xl h-11 w-11 p-0 text-destructive hover:bg-destructive/10">
                <Trash2 className="h-5 w-5" />
             </Button>
          </div>
        </div>

        <div className="space-y-4">
           {notifications.map((notif) => (
             <Card key={notif.id} className={cn(
               "card-freelo border-none transition-all cursor-pointer group",
               !notif.read ? "bg-white shadow-md ring-1 ring-primary/10" : "bg-white/60 opacity-80"
             )}>
                <CardContent className="p-6">
                   <div className="flex gap-6">
                      <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-inner", notif.color)}>
                         <notif.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1 space-y-1">
                         <div className="flex justify-between items-start">
                            <h3 className={cn("font-extrabold text-lg tracking-tight", !notif.read ? "text-secondary" : "text-muted-foreground")}>
                               {notif.title}
                            </h3>
                            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{notif.time}</span>
                         </div>
                         <p className="text-sm font-medium text-muted-foreground leading-relaxed">{notif.message}</p>
                         
                         {!notif.read && (
                           <div className="pt-3 flex gap-2">
                              {notif.type === 'invite' && (
                                <>
                                  <Button size="sm" className="rounded-lg font-bold bg-primary h-8 px-4">Ver Convite</Button>
                                  <Button size="sm" variant="ghost" className="rounded-lg font-bold h-8 px-4">Ignorar</Button>
                                </>
                              )}
                              {notif.type === 'payment' && (
                                <Button size="sm" variant="outline" className="rounded-lg font-bold h-8 px-4 border-2">Ver Carteira</Button>
                              )}
                           </div>
                         )}
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
