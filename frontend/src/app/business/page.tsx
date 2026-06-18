'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  ShieldCheck, 
  Building2, 
  Wallet,
  Star,
  ChevronRight,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { BrandLogo } from '@/components/brand-logo';
import Image from 'next/image';

export default function BusinessLandingPage() {
  return (
    <div className="min-h-screen bg-white text-secondary selection:bg-primary selection:text-white overflow-x-hidden font-sans">
      {/* Premium B2B Navbar */}
      <header className="px-6 lg:px-12 h-20 flex items-center justify-between border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <Link href="/">
          <BrandLogo theme="light" size="md" showText />
        </Link>
        <nav className="hidden lg:flex items-center gap-10">
          <Link href="#solutions" className="text-sm font-bold text-muted-foreground hover:text-secondary transition-colors">Soluções</Link>
          <Link href="#features" className="text-sm font-bold text-muted-foreground hover:text-secondary transition-colors">Recursos</Link>
          <Link href="#pricing" className="text-sm font-bold text-muted-foreground hover:text-secondary transition-colors">Planos</Link>
          <Button asChild variant="ghost" className="font-bold">
            <Link href="/login">Entrar</Link>
          </Button>
          <Button asChild className="bg-secondary text-white hover:bg-secondary/90 font-bold px-8 rounded-full h-11 shadow-lg shadow-secondary/10">
            <Link href="/register/company">Falar com Consultor</Link>
          </Button>
        </nav>
      </header>

      <main>
        {/* B2B Hero */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-muted/20">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full -mr-40 -mt-40 pointer-events-none"></div>
          
          <div className="container px-6 mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest">
                  <Building2 className="h-4 w-4" />
                  <span>Soluções Enterprise</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-secondary">
                  Escale sua equipe de eventos <span className="text-primary underline underline-offset-8 decoration-primary/20">sem burocracia.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-xl leading-relaxed">
                  A Freelo ajuda empresas a contratar, gerenciar e pagar staff qualificado em minutos. Reduza custos operacionais e foque no que importa: a experiência do seu cliente.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="h-16 px-10 text-lg font-extrabold bg-primary text-white hover:bg-[#E85F00] rounded-2xl shadow-2xl shadow-primary/30 active:scale-95 transition-all">
                    Começar Gratuitamente <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                  <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold border-2 rounded-2xl bg-white hover:bg-muted/50">
                    <Play className="mr-2 h-5 w-5 fill-current" /> Ver Demo
                  </Button>
                </div>
                
                <div className="flex items-center gap-8 pt-8 border-t border-border">
                   <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                         {[1,2,3].map(i => (
                           <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-muted"></div>
                         ))}
                      </div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-tight">
                        Confiança de <br /> <span className="text-secondary">+500 empresas</span>
                      </p>
                   </div>
                   <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-yellow-500 fill-current" />
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-tight">
                        Avaliação <br /> <span className="text-secondary">4.9/5 Estrelas</span>
                      </p>
                   </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative hidden lg:block"
              >
                <div className="relative z-10 bg-secondary p-4 rounded-[40px] shadow-2xl border border-secondary/20 overflow-hidden">
                   <div className="bg-white rounded-[32px] overflow-hidden aspect-[4/3] relative">
                      <Image 
                        src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=800" 
                        alt="Empresa usando Freelo"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-secondary/10" />
                   </div>
                </div>
                {/* Floating Metrics */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl border border-border space-y-2 z-20"
                >
                   <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Economia Operacional</p>
                   <p className="text-3xl font-black text-primary italic">35%</p>
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-border space-y-2 z-20"
                >
                   <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Sourcing Velocity</p>
                   <p className="text-3xl font-black text-secondary italic">2 min</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Freelo for Business */}
        <section id="solutions" className="py-24 bg-white">
           <div className="container px-6 mx-auto space-y-20 text-center">
              <div className="space-y-4 max-w-3xl mx-auto">
                 <h2 className="text-4xl md:text-5xl font-black tracking-tight text-secondary">A solução completa para <span className="text-primary italic">Operações de Staff</span></h2>
                 <p className="text-muted-foreground font-medium text-lg">Pare de sofrer com faltas de última hora e informalidade.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-10">
                 {[
                   { 
                     title: 'Staff Qualificado & Verificado', 
                     desc: 'Cada profissional passa por uma verificação rigorosa de documentos e histórico antes de entrar na plataforma.', 
                     icon: ShieldCheck 
                   },
                   { 
                     title: 'Gestão Financeira Simplificada', 
                     desc: 'Emita uma única nota fiscal e nós cuidamos do pagamento individual de todo o staff via PIX.', 
                     icon: Wallet 
                   },
                   { 
                     title: 'Coordenadores Elite', 
                     desc: 'Tenha supervisores experientes gerenciando sua equipe on-site através do nosso app especializado.', 
                     icon: Users 
                   },
                 ].map((item, i) => (
                   <div key={i} className="p-10 rounded-[40px] bg-muted/10 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-2xl transition-all text-left space-y-6 group">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                         <item.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="text-2xl font-black text-secondary leading-tight">{item.title}</h4>
                      <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Dashboards Preview */}
        <section id="features" className="py-24 bg-secondary text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-primary/5 blur-[150px] rounded-full pointer-events-none opacity-30"></div>
           
           <div className="container px-6 mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                 <div className="space-y-8 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                       Controle total na <br /> <span className="text-primary italic">palma da sua mão.</span>
                    </h2>
                    <p className="text-white/60 text-lg font-medium leading-relaxed">
                       Esqueça as planilhas. Nosso dashboard Enterprise permite que você acompanhe a presença em tempo real, gerencie orçamentos e valide a performance da equipe com um clique.
                    </p>
                    <div className="space-y-4 pt-4">
                       {[
                         'Dashboard Financeiro em tempo real',
                         'Relatórios de Performance de Equipe',
                         'Integração via API para grandes eventos',
                         'Suporte VIP dedicado 24/7'
                       ].map(feat => (
                         <div key={feat} className="flex items-center gap-3 font-bold text-sm">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                            {feat}
                         </div>
                       ))}
                    </div>
                    <Button size="lg" className="h-14 px-10 text-lg font-black bg-primary text-white hover:bg-[#E85F00] rounded-2xl transition-all">
                       Explorar Ferramentas <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                 </div>
                 
                 <div className="relative">
                    <div className="relative z-10 bg-white/5 p-4 rounded-[40px] border border-white/10 backdrop-blur-sm">
                       <div className="bg-zinc-900 rounded-[32px] p-6 border border-white/5 shadow-2xl aspect-[4/3] flex flex-col gap-6 overflow-hidden">
                          <div className="flex justify-between items-center">
                             <div className="w-20 h-4 bg-white/10 rounded-full" />
                             <div className="flex gap-2">
                                <div className="w-8 h-8 rounded-full bg-white/5" />
                                <div className="w-8 h-8 rounded-full bg-white/5" />
                             </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                             <div className="h-24 bg-white/5 rounded-2xl" />
                             <div className="h-24 bg-primary/10 rounded-2xl border border-primary/20" />
                          </div>
                          <div className="flex-1 bg-white/5 rounded-2xl p-4 space-y-3">
                             <div className="w-full h-3 bg-white/10 rounded-full" />
                             <div className="w-2/3 h-3 bg-white/10 rounded-full" />
                             <div className="w-full h-3 bg-white/10 rounded-full" />
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Pricing/Plans */}
        <section id="pricing" className="py-24 bg-white">
           <div className="container px-6 mx-auto text-center space-y-16">
              <div className="space-y-4">
                 <h2 className="text-4xl md:text-5xl font-black tracking-tight text-secondary">Planos feitos para <span className="text-primary italic">escalar.</span></h2>
                 <p className="text-muted-foreground font-medium text-lg">Pague por evento ou escolha um plano mensal para economizar.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                 {/* Demand Plan */}
                 <Card className="p-10 rounded-[40px] border border-border bg-white flex flex-col text-left space-y-8">
                    <div className="space-y-2">
                       <h4 className="text-xl font-black text-secondary">On-Demand</h4>
                       <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Para eventos ocasionais</p>
                    </div>
                    <div className="text-4xl font-black text-secondary">Grátis</div>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">Pague apenas uma taxa de serviço por cada profissional contratado.</p>
                    <ul className="space-y-4 flex-1">
                       {['Acesso a 5k+ profissionais', 'Pagamentos via PIX', 'Chat com staff', 'Suporte via Ticket'].map(i => (
                         <li key={i} className="flex items-center gap-2 text-xs font-bold text-secondary">
                            <CheckCircle2 className="h-4 w-4 text-success" /> {i}
                         </li>
                       ))}
                    </ul>
                    <Button variant="outline" className="h-12 rounded-xl font-black border-2">Começar Agora</Button>
                 </Card>

                 {/* Professional Plan */}
                 <Card className="p-10 rounded-[40px] border-4 border-primary bg-white flex flex-col text-left space-y-8 relative shadow-2xl scale-105 z-10">
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                       Mais Popular
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-xl font-black text-secondary">Business</h4>
                       <p className="text-xs font-bold text-primary uppercase tracking-widest">Para produtoras em escala</p>
                    </div>
                    <div className="flex items-end gap-1">
                       <span className="text-4xl font-black text-secondary italic">R$ 499</span>
                       <span className="text-sm font-bold text-muted-foreground pb-1">/mês</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">Assinatura mensal para taxas reduzidas e recursos avançados.</p>
                    <ul className="space-y-4 flex-1">
                       {['Taxa de serviço reduzida (-25%)', 'Gestão de Coordenadores', 'Dashboard de Staff Personalizado', 'Suporte Prioritário WhatsApp'].map(i => (
                         <li key={i} className="flex items-center gap-2 text-xs font-bold text-secondary">
                            <CheckCircle2 className="h-4 w-4 text-success" /> {i}
                         </li>
                       ))}
                    </ul>
                    <Button className="h-12 rounded-xl font-black btn-primary shadow-lg shadow-primary/20">Assinar Business</Button>
                 </Card>

                 {/* Enterprise Plan */}
                 <Card className="p-10 rounded-[40px] border border-border bg-secondary text-white flex flex-col text-left space-y-8">
                    <div className="space-y-2">
                       <h4 className="text-xl font-black text-white">Enterprise</h4>
                       <p className="text-xs font-bold text-primary uppercase tracking-widest">Para grandes arenas e festivais</p>
                    </div>
                    <div className="text-4xl font-black text-white italic">Sob Consulta</div>
                    <p className="text-sm text-white/50 font-medium leading-relaxed">Customização total da plataforma para grandes operações de volume.</p>
                    <ul className="space-y-4 flex-1">
                       {['Integração API Dedicada', 'White-label Staff App', 'SLA de Atendimento 1h', 'Gerente de Contas Dedicado'].map(i => (
                         <li key={i} className="flex items-center gap-2 text-xs font-bold text-white">
                            <CheckCircle2 className="h-4 w-4 text-primary" /> {i}
                         </li>
                       ))}
                    </ul>
                    <Button className="h-12 rounded-xl font-black bg-white text-secondary hover:bg-zinc-200 transition-colors">Falar com Vendas</Button>
                 </Card>
              </div>
           </div>
        </section>

        {/* Final B2B CTA */}
        <section className="py-24 bg-muted/20 text-center">
           <div className="container px-6 mx-auto space-y-10">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-secondary leading-tight">
                 Pronto para profissionalizar sua <br /> <span className="text-primary italic">Operação de Staff?</span>
              </h2>
              <p className="text-muted-foreground font-medium text-lg max-w-2xl mx-auto leading-relaxed">
                 Junte-se às empresas que já economizam tempo e dinheiro com a Freelo. Crie sua conta gratuita em menos de 2 minutos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Button size="lg" className="h-16 px-12 text-lg font-black bg-secondary text-white hover:bg-secondary/90 rounded-2xl shadow-2xl transition-all">
                    Criar Conta Empresa
                 </Button>
                 <Button size="lg" variant="outline" className="h-16 px-12 text-lg font-bold border-2 rounded-2xl bg-white">
                    Solicitar Demonstração
                 </Button>
              </div>
           </div>
        </section>
      </main>

      <footer className="py-20 border-t bg-white">
         <div className="container px-6 mx-auto flex flex-col items-center space-y-8">
            <BrandLogo theme="light" size="md" />
            <p className="text-sm text-muted-foreground font-medium text-center">
               Feito por Lucas Moreira - Engenheiro de Software / Arquiteto de Software © 2026
            </p>
         </div>
      </footer>
    </div>
  );
}
