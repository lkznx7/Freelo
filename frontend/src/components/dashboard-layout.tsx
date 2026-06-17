'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Search, 
  FileText, 
  Calendar, 
  Wallet, 
  Bell, 
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  TrendingUp,
  Users,
  ShieldCheck,
  Zap
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { BrandLogo } from '@/components/brand-logo';

const workerMenuItems = [
  { title: 'Início', icon: Home, href: '/dashboard' },
  { title: 'Buscar Vagas', icon: Search, href: '/jobs' },
  { title: 'Minhas Candidaturas', icon: FileText, href: '/applications' },
  { title: 'Meus Trabalhos', icon: Calendar, href: '/my-jobs' },
  { title: 'Carteira', icon: Wallet, href: '/wallet' },
  { title: 'Chat', icon: MessageSquare, href: '/chat' },
];

const companyMenuItems = [
  { title: 'Início', icon: Home, href: '/company/dashboard' },
  { title: 'Meus Eventos', icon: Calendar, href: '/company/events' },
  { title: 'Buscar Profissionais', icon: Search, href: '/company/workers' },
  { title: 'Minha Equipe', icon: Users, href: '/company/team' },
  { title: 'Financeiro', icon: Wallet, href: '/company/financial' },
  { title: 'Chat', icon: MessageSquare, href: '/company/chat' },
];

const coordinatorMenuItems = [
  { title: 'Início', icon: Home, href: '/coordinator/dashboard' },
  { title: 'Meus Eventos', icon: Calendar, href: '/coordinator/events' },
  { title: 'Gerenciar Staff', icon: Users, href: '/coordinator/staff' },
  { title: 'Relatórios', icon: FileText, href: '/coordinator/reports' },
  { title: 'Chat', icon: MessageSquare, href: '/coordinator/chat' },
];

const promoterMenuItems = [
  { title: 'Início', icon: Home, href: '/promoter/dashboard' },
  { title: 'Campanhas', icon: Zap, href: '/promoter/campaigns' },
  { title: 'Meus Ganhos', icon: Wallet, href: '/promoter/wallet' },
  { title: 'Chat', icon: MessageSquare, href: '/promoter/chat' },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCompany = pathname?.startsWith('/company');
  const isCoordinator = pathname?.startsWith('/coordinator');
  const isPromoter = pathname?.startsWith('/promoter');

  const menuItems = isCompany 
    ? companyMenuItems 
    : isCoordinator 
    ? coordinatorMenuItems 
    : isPromoter 
    ? promoterMenuItems 
    : workerMenuItems;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-muted/30">
        <Sidebar className="border-r border-border/50 bg-secondary text-white">
          <SidebarHeader className="p-6">
            <Link href={
              isCompany ? "/company/dashboard" : 
              isCoordinator ? "/coordinator/dashboard" : 
              isPromoter ? "/promoter/dashboard" : 
              "/dashboard"
            }>
              <BrandLogo theme="dark" size="md" />
            </Link>
          </SidebarHeader>
          
          <SidebarContent className="px-3">
             {(!isCompany && !isCoordinator && !isPromoter) && (
               /* Profile Progress Widget */
               <div className="px-4 py-6 mb-6 bg-white/5 rounded-3xl border border-white/10 space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.15em] text-white/50">
                     <span>Perfil 80%</span>
                     <span className="text-primary">+20xp</span>
                  </div>
                  <Progress value={80} className="h-2 bg-white/10" />
                  <p className="text-[11px] text-white/40 leading-relaxed font-medium">
                    Perfis completos recebem <span className="text-white font-bold underline underline-offset-4 decoration-primary/50">3x mais convites</span>.
                  </p>
               </div>
             )}

             {isCompany && (
                <div className="px-4 py-6 mb-6 bg-primary/10 rounded-3xl border border-primary/20 space-y-4">
                   <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-primary">
                      <span>Plano Business</span>
                      <TrendingUp className="h-3 w-3" />
                   </div>
                   <p className="text-[11px] text-white/60 leading-relaxed font-bold">
                     Você tem <span className="text-white underline">5 convites premium</span> restantes este mês.
                   </p>
                </div>
             )}

             {isCoordinator && (
                <div className="px-4 py-6 mb-6 bg-secondary/20 rounded-3xl border border-white/10 space-y-4">
                   <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-primary">
                      <span>Coordenação</span>
                      <ShieldCheck className="h-3 w-3" />
                   </div>
                   <p className="text-[11px] text-white/60 leading-relaxed font-bold">
                     Ricardo, você é <span className="text-white">Nível Elite</span>. Suas taxas são 10% maiores.
                   </p>
                </div>
             )}

             {isPromoter && (
                <div className="px-4 py-6 mb-6 bg-primary/5 rounded-3xl border border-primary/10 space-y-4">
                   <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-primary">
                      <span>Influência</span>
                      <Zap className="h-3 w-3 fill-current" />
                   </div>
                   <p className="text-[11px] text-white/60 leading-relaxed font-bold">
                     Seu ranking em promoções subiu <span className="text-success font-bold">+2 posições</span> hoje.
                   </p>
                </div>
             )}

            <SidebarMenu className="gap-1.5">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    className={cn(
                      "h-12 px-4 rounded-xl transition-all duration-300",
                      pathname === item.href 
                        ? "bg-primary text-white hover:bg-primary hover:text-white shadow-lg shadow-primary/25" 
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <Link href={item.href}>
                      <item.icon className={cn("h-5 w-5", pathname === item.href ? "fill-current" : "")} />
                      <span className="font-bold text-sm tracking-tight">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter className="p-4 space-y-4">
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors group cursor-pointer">
              <Avatar className="h-10 w-10 border-2 border-primary/20 transition-transform group-hover:scale-105">
                <AvatarImage src="https://i.pravatar.cc/100?u=1" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold truncate">João Silva</span>
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest">Premium</span>
              </div>
              <Link href="/settings" className="ml-auto p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                 <Settings className="h-4 w-4" />
              </Link>
            </div>
            <Button variant="ghost" className="w-full justify-start gap-3 text-white/40 hover:text-destructive hover:bg-destructive/10 rounded-xl px-4 h-11 transition-all group">
              <LogOut className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span className="font-bold text-sm">Sair da Conta</span>
            </Button>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col min-w-0">
          <header className="h-20 border-b bg-background px-6 flex items-center justify-between sticky top-0 z-40">
             <div className="flex items-center gap-4">
                <SidebarTrigger className="md:hidden">
                   <Button variant="ghost" size="icon">
                      <Menu className="h-6 w-6 text-secondary" />
                   </Button>
                </SidebarTrigger>
                <div className="hidden md:flex flex-col">
                   <h2 className="text-lg font-extrabold text-secondary tracking-tight">Início</h2>
                   <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest opacity-60">Bem-vindo de volta!</p>
                </div>
             </div>
             
             <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">
                   <TrendingUp className="h-4 w-4" />
                   <span className="text-[10px] font-extrabold uppercase tracking-widest">Ranking #12</span>
                </div>
                <Button variant="outline" size="icon" className="rounded-xl border-border bg-background shadow-sm relative hover:bg-muted/50 transition-colors" asChild>
                   <Link href="/notifications">
                      <Bell className="h-5 w-5 text-secondary" />
                      <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white animate-pulse" />
                   </Link>
                </Button>
                <Avatar className="h-10 w-10 rounded-xl shadow-md border border-border hover:scale-105 transition-transform cursor-pointer">
                   <AvatarImage src="https://i.pravatar.cc/100?u=1" />
                   <AvatarFallback>JD</AvatarFallback>
                </Avatar>
             </div>
          </header>
          
          <div className="p-6 md:p-10 max-w-[1600px] mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
