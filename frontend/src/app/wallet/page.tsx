'use client';

import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Clock, 
  CheckCircle2, 
  TrendingUp,
  Download,
  CreditCard
} from 'lucide-react';

const transactions = [
  { id: '1', title: 'Pagamento: Hotel Copacabana', date: '15 Jun, 10:30', amount: 'R$ 180,00', type: 'income', status: 'completed' },
  { id: '2', title: 'Saque para conta bancária', date: '12 Jun, 14:20', amount: '- R$ 500,00', type: 'outcome', status: 'completed' },
  { id: '3', title: 'Pagamento: Buffet Alegria', date: '10 Jun, 09:15', amount: 'R$ 150,00', type: 'income', status: 'completed' },
  { id: '4', title: 'Pagamento: Arena Fest', date: '08 Jun, 11:45', amount: 'R$ 220,00', type: 'income', status: 'completed' },
  { id: '5', title: 'Pagamento: Produções Cariocas', date: '05 Jun, 16:00', amount: 'R$ 130,00', type: 'income', status: 'pending' },
];

export default function WalletPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Minha Carteira</h1>
          <p className="text-muted-foreground">Gerencie seus ganhos e realize saques.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2 bg-secondary text-white border-none shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Wallet className="h-32 w-32" />
             </div>
             <CardContent className="p-8 space-y-8 relative z-10">
                <div className="space-y-1">
                  <p className="text-zinc-400 text-sm font-medium uppercase tracking-wider">Saldo Disponível</p>
                  <p className="text-4xl md:text-5xl font-bold">R$ 1.240,50</p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8">
                    Realizar Saque <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 h-12 px-8">
                    Configurar PIX
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-4 border-t border-white/10">
                   <div className="space-y-1">
                     <p className="text-zinc-400 text-xs">Saldo Pendente</p>
                     <p className="text-xl font-bold text-primary">R$ 130,00</p>
                   </div>
                   <div className="space-y-1">
                     <p className="text-zinc-400 text-xs">Total Recebido</p>
                     <p className="text-xl font-bold text-green-400">R$ 4.850,00</p>
                   </div>
                </div>
             </CardContent>
          </Card>

          <Card className="shadow-lg border-primary/10">
            <CardHeader>
              <CardTitle className="text-lg">Dicas de Finanças</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div className="text-sm">
                  <p className="font-bold">Aumente sua renda</p>
                  <p className="text-muted-foreground">Trabalhar em feriados pode pagar até 50% a mais.</p>
                </div>
              </div>
              <Separator />
              <div className="flex gap-3">
                <div className="p-2 bg-green-100 rounded-lg shrink-0">
                  <CreditCard className="h-5 w-5 text-green-600" />
                </div>
                <div className="text-sm">
                  <p className="font-bold">Saque rápido</p>
                  <p className="text-muted-foreground">Cadastre seu PIX para receber em poucos minutos.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
           <div className="flex items-center justify-between">
             <h2 className="text-xl font-bold">Extrato Recente</h2>
             <Button variant="ghost" size="sm" className="text-primary gap-2">
               <Download className="h-4 w-4" /> Exportar PDF
             </Button>
           </div>

           <Card className="border-none shadow-sm overflow-hidden">
             <CardContent className="p-0">
                <div className="divide-y">
                   {transactions.map((t) => (
                     <div key={t.id} className="p-4 flex items-center justify-between hover:bg-muted/30 transition-colors">
                        <div className="flex items-center gap-4">
                           <div className={`p-2.5 rounded-full ${t.type === 'income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                              {t.type === 'income' ? <ArrowDownLeft className="h-5 w-5" /> : <ArrowUpRight className="h-5 w-5" />}
                           </div>
                           <div>
                              <p className="font-bold text-sm md:text-base">{t.title}</p>
                              <p className="text-xs text-muted-foreground">{t.date}</p>
                           </div>
                        </div>
                        <div className="text-right">
                           <p className={`font-bold ${t.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                             {t.amount}
                           </p>
                           <div className="flex items-center justify-end gap-1 mt-1">
                              {t.status === 'completed' ? (
                                <CheckCircle2 className="h-3 w-3 text-green-600" />
                              ) : (
                                <Clock className="h-3 w-3 text-amber-500" />
                              )}
                              <span className={`text-[10px] font-bold uppercase ${t.status === 'completed' ? 'text-green-600' : 'text-amber-500'}`}>
                                {t.status === 'completed' ? 'Concluído' : 'Pendente'}
                              </span>
                           </div>
                        </div>
                     </div>
                   ))}
                </div>
             </CardContent>
           </Card>
           
           <Button variant="outline" className="w-full text-muted-foreground">
              Ver extrato completo
           </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
