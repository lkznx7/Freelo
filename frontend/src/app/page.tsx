'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Briefcase, 
  Users, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight,
  Star,
  Award,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BrandLogo } from '@/components/brand-logo';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navbar */}
      <header className="px-4 lg:px-8 h-20 flex items-center border-b bg-secondary sticky top-0 z-50">
        <Link href="/">
          <BrandLogo theme="dark" showText={true} size="md" />
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-8">
          <Link className="text-sm font-bold text-white/70 hover:text-primary transition-colors hidden md:block" href="#how-it-works">
            Como funciona
          </Link>
          <Link className="text-sm font-bold text-white/70 hover:text-primary transition-colors hidden md:block" href="#benefits">
            Benefícios
          </Link>
          <Button asChild variant="ghost" className="text-white hover:bg-background/10 hidden sm:flex font-bold">
            <Link href="/login">Entrar</Link>
          </Button>
          <Button asChild className="bg-primary text-white hover:bg-[#E85F00] font-bold px-6 rounded-full h-11 shadow-lg shadow-primary/20 transition-all active:scale-95">
            <Link href="/register/worker">Quero Trabalhar</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-24 lg:py-40 bg-secondary overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[150px] rounded-full -mr-20 -mt-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-full bg-blue-500/10 blur-[120px] rounded-full -ml-20 -mb-20"></div>
          
          <div className="container px-6 md:px-12 mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-10 text-left"
              >
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-background/5 border border-white/10 text-primary text-xs font-black uppercase tracking-[0.2em]">
                  <Zap className="h-4 w-4 fill-current animate-bounce" />
                  <span>A revolução do staff para eventos</span>
                </div>
                <h1 className="text-5xl font-black tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none text-white leading-[0.95]">
                  Trabalho imediato. <br />
                  <span className="text-primary italic">Ganhos reais.</span>
                </h1>
                <p className="max-w-[540px] text-zinc-400 text-xl md:text-2xl font-medium leading-relaxed">
                  Conectamos os melhores talentos às produções mais épicas do Brasil. Escolha quando quer faturar e receba via PIX.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 pt-4">
                  <Button asChild size="lg" className="h-20 px-12 text-xl font-black bg-primary text-white hover:bg-[#E85F00] rounded-3xl shadow-[0_20px_50px_rgba(255,107,0,0.3)] active:scale-95 transition-all">
                    <Link href="/register/worker">
                      Começar Agora <ArrowRight className="ml-2 h-7 w-7" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-20 px-12 text-xl font-bold bg-background/5 text-white border-white/10 hover:bg-background/10 rounded-3xl backdrop-blur-md">
                    <Link href="/register/company">Contratar Equipe</Link>
                  </Button>
                </div>
                
                <div className="flex items-center gap-8 pt-10 border-t border-white/10">
                   <div className="flex -space-x-4">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-[3px] border-secondary bg-zinc-800 flex items-center justify-center relative overflow-hidden shadow-2xl">
                           <Image 
                              src={`https://i.pravatar.cc/100?u=prof-${i}`} 
                              alt={`Profissional ${i}`}
                              width={48}
                              height={48}
                            />
                        </div>
                      ))}
                   </div>
                   <div className="space-y-1">
                      <div className="flex items-center gap-1">
                         {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 text-primary fill-current" />)}
                      </div>
                      <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">
                        <span className="text-white">+5.000 profissionais</span> ativos e avaliados
                      </p>
                   </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="hidden lg:block relative"
              >
                <div className="relative z-10 bg-background/5 p-6 rounded-[50px] border border-white/10 backdrop-blur-xl shadow-2xl">
                   <div className="bg-secondary rounded-[40px] overflow-hidden border border-white/5 shadow-inner relative aspect-[4/3]">
                      <Image 
                        src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800" 
                        alt="Event Production"
                        fill
                        className="object-cover opacity-60 hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>
                   </div>
                </div>
                
                {/* Premium Floating Metrics */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 z-20 bg-background p-8 rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-border flex flex-col gap-2"
                >
                  <p className="text-[10px] uppercase font-black text-primary tracking-[0.2em]">Pagamentos</p>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-black text-secondary tracking-tighter">R$ 1.2M+</span>
                    <span className="text-xs font-bold text-green-500 mb-1">PAGOS VIA PIX</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  animate={{ x: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-10 -left-16 z-20 bg-secondary p-8 rounded-[32px] shadow-2xl border border-white/10 backdrop-blur-md flex flex-col gap-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-[10px] uppercase font-black text-white/50 tracking-[0.2em]">Live Status</p>
                  </div>
                  <p className="text-2xl font-black text-white tracking-tighter">248 Vagas Abertas</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Logos - Improved Visuals */}
        <section className="w-full py-16 bg-background border-y border-border/40">
          <div className="container px-6 mx-auto">
            <p className="text-center text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em] mb-12">Empresas que elevam o padrão com a Freelo</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
              {['Live Nation', 'Rock in Rio', 'Time For Fun', 'Allianz Parque', 'Pacha'].map(brand => (
                <span key={brand} className="text-3xl font-black text-secondary tracking-tighter hover:text-primary transition-colors">{brand}</span>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works - New Step-by-Step Section */}
        <section className="w-full py-32 bg-background" id="how-it-works">
           <div className="container px-6 mx-auto">
              <div className="flex flex-col items-center text-center space-y-4 mb-20">
                 <div className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">O Caminho do Sucesso</div>
                 <h2 className="text-4xl md:text-5xl font-black tracking-tight text-secondary">Seu novo trabalho em <span className="text-primary italic">3 passos.</span></h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                 {[
                   { step: '01', title: 'Crie seu Perfil', desc: 'Complete seus dados e habilidades em menos de 2 minutos.' },
                   { step: '02', title: 'Escolha a Vaga', desc: 'Filtre por local, cargo e valor. Aplique com um clique.' },
                   { step: '03', title: 'Receba via PIX', desc: 'Trabalhou, brilhou, recebeu. Simples assim.' },
                 ].map((s, i) => (
                   <div key={i} className="relative p-10 rounded-[40px] bg-muted/20 border border-transparent hover:border-primary/20 hover:bg-background hover:shadow-2xl transition-all duration-500 group">
                      <div className="text-6xl font-black text-primary/10 group-hover:text-primary/20 transition-colors absolute top-6 right-8 leading-none">{s.step}</div>
                      <div className="space-y-4 relative z-10">
                         <h4 className="text-2xl font-black text-secondary tracking-tight">{s.title}</h4>
                         <p className="text-muted-foreground font-medium leading-relaxed">{s.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Categories Grid - Refined */}
        <section className="w-full py-24 bg-muted/30">
          <div className="container px-6 mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
              <div className="space-y-4 max-w-2xl">
                 <h2 className="text-4xl md:text-5xl font-black tracking-tight text-secondary leading-tight">
                    Oportunidades em <br /> <span className="text-primary italic">todas as verticais.</span>
                 </h2>
                 <p className="text-muted-foreground text-lg font-medium">
                    Do corporativo ao entretenimento, conectamos você ao seu propósito.
                 </p>
              </div>
              <Button asChild variant="outline" className="h-14 px-8 rounded-2xl border-2 font-bold group">
                 <Link href="/jobs" className="flex items-center gap-2">
                    Explorar todas as vagas <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                 </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Garçom de Elite', icon: Briefcase, jobs: '124', color: 'bg-blue-500' },
                { name: 'Recepcionista VIP', icon: Users, jobs: '86', color: 'bg-primary' },
                { name: 'Segurança Executiva', icon: ShieldCheck, jobs: '52', color: 'bg-secondary' },
                { name: 'Promotor de Marca', icon: Zap, jobs: '94', color: 'bg-green-500' },
              ].map((cat) => (
                <Link 
                  key={cat.name} 
                  href={`/jobs?category=${cat.name.toLowerCase()}`}
                  className="group p-10 rounded-[40px] bg-background border border-border/60 hover:border-primary transition-all duration-500 cursor-pointer flex flex-col justify-between h-[300px] shadow-sm hover:shadow-2xl hover:shadow-primary/10 block"
                >
                  <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-all`}>
                    <cat.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{cat.jobs} Vagas Disponíveis</p>
                    <h3 className="text-2xl font-black text-secondary tracking-tight group-hover:text-primary transition-colors">{cat.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits - Refined */}
        <section className="w-full py-32 bg-background" id="benefits">
          <div className="container px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-12">
                  <div className="space-y-4">
                     <div className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-widest inline-block">Nossos Diferenciais</div>
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-secondary leading-[1.1]">
                       Por que escolher <br /> a <span className="text-primary italic underline underline-offset-8 decoration-primary/20">Freelo?</span>
                     </h2>
                  </div>
                  
                  <div className="space-y-10">
                     {[
                       { title: 'Liquidez Instantânea', desc: 'Receba via PIX em até 24h após o checkout validado. Seu dinheiro no seu bolso, sem enrolação.', icon: CheckCircle2 },
                       { title: 'Liberdade de Escolha', desc: 'Trabalhe nos eventos que você ama, nos dias que você pode. Você é o seu próprio gestor.', icon: Clock },
                       { title: 'Credibilidade & Segurança', desc: 'Apenas empresas verificadas e de alto padrão entram na nossa rede. Zero risco para você.', icon: Award },
                     ].map(feat => (
                       <div key={feat.title} className="flex gap-6 group">
                          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                            <feat.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-black text-xl text-secondary">{feat.title}</h4>
                            <p className="text-muted-foreground font-medium text-lg leading-relaxed">{feat.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               
               <div className="relative">
                  <div className="absolute -inset-4 bg-primary/5 rounded-[60px] blur-2xl"></div>
                  <div className="bg-secondary rounded-[50px] p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl border border-white/5">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px]"></div>
                     <div className="space-y-10 relative z-10">
                       <Star className="h-12 w-12 text-primary fill-current" />
                       <h3 className="text-3xl lg:text-4xl font-black leading-tight italic tracking-tight">
                          &quot;A Freelo elevou o nível do staff de eventos. Hoje consigo planejar minha renda com segurança e trabalhar em produções que nunca imaginei.&quot;
                       </h3>
                       <div className="flex items-center gap-5 pt-8 border-t border-white/10">
                          <div className="h-16 w-16 border-2 border-primary rounded-full overflow-hidden relative shadow-xl">
                            <Image src="https://i.pravatar.cc/150?u=user-9" alt="Larissa Mendes" fill className="object-cover" />
                          </div>
                          <div>
                            <p className="text-xl font-black tracking-tight">Larissa Mendes</p>
                            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Garçonete Diamond • +150 Eventos</p>
                          </div>
                       </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Premium Refinement */}
        <section className="w-full py-32 bg-secondary relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50"></div>
          <div className="container px-6 md:px-12 mx-auto text-center space-y-12 relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
              Pronto para ser <br /> <span className="text-primary italic">Protagonista?</span>
            </h2>
            <p className="text-zinc-400 text-xl md:text-2xl font-medium max-w-[700px] mx-auto leading-relaxed">
              Junte-se à elite dos eventos no Brasil. A próxima grande produção está esperando por você.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
               <Button asChild size="lg" className="h-24 px-16 text-2xl font-black bg-primary text-white hover:bg-[#E85F00] rounded-[32px] shadow-[0_20px_80px_rgba(255,107,0,0.4)] transition-all active:scale-95">
                 <Link href="/register/worker">Entrar na Rede <ArrowRight className="ml-2 h-8 w-8" /></Link>
               </Button>
            </div>
            <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em]">Cadastro Gratuito • Pagamento via PIX • Suporte 24/7</p>
          </div>
        </section>
      </main>

      <footer className="w-full py-16 bg-secondary text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-6">
              <Link href="/">
                <BrandLogo theme="dark" showText={true} size="md" />
              </Link>
              <p className="text-zinc-500 font-medium leading-relaxed">
                Conectando talentos a oportunidades incríveis no setor de eventos desde 2024.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Plataforma</h4>
              <ul className="space-y-4 text-zinc-400 font-medium">
                <li><Link href="/jobs" className="hover:text-primary transition-colors">Buscar Vagas</Link></li>
                <li><Link href="/business" className="hover:text-primary transition-colors">Freelo para Empresas</Link></li>
                <li><Link href="/investors" className="hover:text-primary transition-colors">Investidores</Link></li>
                <li><Link href="/register/worker" className="hover:text-primary transition-colors">Sou Profissional</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Suporte</h4>
              <ul className="space-y-4 text-zinc-400 font-medium">
                <li><Link href="/faq" className="hover:text-primary transition-colors">Perguntas Frequentes</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Central de Ajuda</Link></li>
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Termos e Privacidade</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Redes Sociais</h4>
              <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-xl bg-background/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-white font-bold border border-white/10">IG</div>
                 <div className="w-10 h-10 rounded-xl bg-background/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-white font-bold border border-white/10">FB</div>
                 <div className="w-10 h-10 rounded-xl bg-background/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-white font-bold border border-white/10">LN</div>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/5 text-center text-sm text-zinc-600 font-medium">
            Feito por Lucas Moreira - Engenheiro de Software / Arquiteto de Software © 2026
          </div>
        </div>
      </footer>
    </div>
  );
}
