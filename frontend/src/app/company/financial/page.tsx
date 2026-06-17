'use client';

import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Download, 
  Filter,
  Wallet,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const transactions = [
  { id: '1', date: 'Hoje, 14:20', description: 'Pagamento Diária - Ricardo S. (Coordenador)', amount: '-R$ 450,00', status: 'completed', category: 'Staff' },
  { id: '2', date: 'Ontem', description: 'Recarga de Saldo - PIX', amount: '+R$ 5.000,00', status: 'completed', category: 'Saldo' },
  { id: '3', date: '15 Jun', description: 'Pagamento Diária - Ana C. (Promotora)', amount: '-R$ 150,00', status: 'pending', category: 'Staff' },
  { id: '4', date: '14 Jun', description: 'Taxa de Serviço Freelo - Evento Gala', amount: '-R$ 280,00', status: 'completed', category: 'Taxa' },
];

export default function CompanyFinancialPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8 pb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-black text-secondary tracking-tight">Financeiro</h1>
            <p className="text-muted-foreground font-medium">Controle seus pagamentos, recargas e histórico de transações.</p>
          </div>
          <div className="flex gap-3">
             <Button className="h-14 px-8 rounded-2xl btn-primary font-black shadow-xl shadow-primary/20 uppercase tracking-widest text-xs">
                Recarregar Saldo
             </Button>
          </div>
        </div>

        {/* Financial Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <Card className="bg-secondary text-white border-none rounded-[32px] overflow-hidden shadow-2xl relative">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                 <Wallet className="h-20 w-20" />
              </div>
              <CardContent className="p-8 space-y-4">
                 <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Saldo Disponível</p>
                 <h2 className="text-4xl font-black italic">R$ 3.840,50</h2>
                 <div className="pt-4 flex items-center gap-2 text-success">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="text-xs font-bold">+R$ 1.200,00 esta semana</span>
                 </div>
              </CardContent>
           </Card>

           <Card className="card-freelo border-none shadow-md rounded-[32px]">
              <CardContent className="p-8 space-y-4">
                 <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Total Devido (Staff)</p>
                 <h2 className="text-4xl font-black italic text-destructive">R$ 1.150,00</h2>
                 <p className="text-xs text-muted-foreground font-medium">8 pagamentos aguardando liberação</p>
                 <Button variant="link" className="text-primary font-bold p-0 h-auto flex items-center gap-1">
                    Ver todos os débitos <ArrowRight className="h-3 w-3" />
                 </Button>
              </CardContent>
           </Card>

           <Card className="card-freelo border-none shadow-md rounded-[32px]">
              <CardContent className="p-8 space-y-4">
                 <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Gastos no Mês</p>
                 <h2 className="text-4xl font-black italic text-secondary">R$ 8.420,00</h2>
                 <div className="pt-4 flex items-center gap-2 text-destructive">
                    <ArrowDownRight className="h-4 w-4" />
                    <span className="text-xs font-bold">+15% em relação a Maio</span>
                 </div>
              </CardContent>
           </Card>
        </div>

        {/* Transactions List */}
        <div className="space-y-6">
           <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold text-secondary">Histórico de Transações</h2>
              <div className="flex gap-2">
                 <Button variant="outline" size="sm" className="rounded-xl border-2 font-bold h-10 px-4">
                    <Filter className="h-4 w-4 mr-2" /> Filtrar
                 </Button>
                 <Button variant="outline" size="sm" className="rounded-xl border-2 font-bold h-10 px-4">
                    <Download className="h-4 w-4 mr-2" /> Exportar
                 </Button>
              </div>
           </div>

           <div className="bg-white rounded-[32px] border border-border/50 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="border-b border-border/50 bg-muted/20">
                          <th className="px-6 py-4 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Data</th>
                          <th className="px-6 py-4 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Descrição</th>
                          <th className="px-6 py-4 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Categoria</th>
                          <th className="px-6 py-4 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Valor</th>
                          <th className="px-6 py-4 text-[10px] font-black text-muted-foreground uppercase tracking-widest text-right">Status</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                       {transactions.map((t) => (
                         <tr key={t.id} className="hover:bg-muted/10 transition-colors">
                            <td className="px-6 py-4 text-sm font-bold text-muted-foreground">{t.date}</td>
                            <td className="px-6 py-4">
                               <p className="text-sm font-bold text-secondary">{t.description}</p>
                            </td>
                            <td className="px-6 py-4">
                               <Badge className="bg-muted text-muted-foreground border-none font-bold text-[9px] px-2">
                                  {t.category.toUpperCase()}
                               </Badge>
                            </td>
                            <td className="px-6 py-4">
                               <span className={cn(
                                 "text-sm font-black",
                                 t.amount.startsWith('+') ? "text-success" : "text-secondary"
                               )}>
                                  {t.amount}
                               </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                               <div className="flex items-center justify-end gap-1.5">
                                  {t.status === 'completed' ? (
                                    <CheckCircle2 className="h-4 w-4 text-success" />
                                  ) : (
                                    <Clock className="h-4 w-4 text-amber-500" />
                                  )}
                                  <span className={cn(
                                    "text-xs font-bold capitalize",
                                    t.status === 'completed' ? "text-success" : "text-amber-500"
                                  )}>
                                     {t.status === 'completed' ? 'Concluído' : 'Pendente'}
                                  </span>
                               </div>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
