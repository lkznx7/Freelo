'use client';

import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Users, 
  DollarSign, 
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BrandLogo } from '@/components/brand-logo';

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Premium Navbar */}
      <header className="px-6 h-24 flex items-center justify-between border-b border-white/5 sticky top-0 z-50 bg-black/80 backdrop-blur-xl">
        <Link href="/">
          <BrandLogo theme="dark" size="md" showText />
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link href="#market" className="text-sm font-bold text-white/50 hover:text-white transition-colors">Mercado</Link>
          <Link href="#model" className="text-sm font-bold text-white/50 hover:text-white transition-colors">Modelo</Link>
          <Link href="#metrics" className="text-sm font-bold text-white/50 hover:text-white transition-colors">Tração</Link>
          <Button variant="outline" className="border-white/10 bg-white/5 text-white hover:bg-white/10 font-bold rounded-full px-6">
            Pitch Deck <Download className="ml-2 h-4 w-4" />
          </Button>
          <Button className="bg-primary text-white hover:bg-[#E85F00] font-black rounded-full px-8 h-12">
            Falar com Founders
          </Button>
        </div>
      </header>

      <main>
        {/* Investor Hero */}
        <section className="relative py-24 lg:py-40">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-primary/10 blur-[160px] rounded-full opacity-30 pointer-events-none"></div>
          
          <div className="container px-6 mx-auto relative z-10 text-center space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-black uppercase tracking-widest"
            >
              <Zap className="h-4 w-4 fill-current" />
              <span>Series Seed • Q3 2026</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] max-w-5xl mx-auto"
            >
              Digitizing the <span className="text-primary italic">Event Economy</span> across LATAM.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-500 font-medium max-w-2xl mx-auto leading-relaxed"
            >
              A Freelo está construindo o sistema operacional para o trabalho sob demanda em eventos. Escalável, baseado em dados e pronto para dominar um mercado de R$ 15Bi.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <Button size="lg" className="h-16 px-12 text-lg font-black bg-white text-black hover:bg-zinc-200 rounded-2xl shadow-2xl transition-all">
                Investir na Freelo
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-12 text-lg font-bold border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-2xl">
                Agendar Reunião
              </Button>
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-24 border-t border-white/5"
            >
              <div className="space-y-1">
                <p className="text-3xl font-black italic text-primary">15%</p>
                <p className="text-[10px] font-black uppercase text-zinc-500 tracking-[0.2em]">Crescimento MoM</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-black italic text-white">R$ 15Bi</p>
                <p className="text-[10px] font-black uppercase text-zinc-500 tracking-[0.2em]">TAM (Brasil)</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-black italic text-white">82%</p>
                <p className="text-[10px] font-black uppercase text-zinc-500 tracking-[0.2em]">Retenção B2B</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-black italic text-primary">3.2x</p>
                <p className="text-[10px] font-black uppercase text-zinc-500 tracking-[0.2em]">LTV / CAC</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section id="market" className="py-24 bg-zinc-950">
          <div className="container px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
                  Mercado & Oportunidade
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                  O setor de eventos ainda vive no <span className="text-primary">passado.</span>
                </h2>
                <div className="space-y-6 text-zinc-400 font-medium text-lg">
                  <p>
                    Hoje, a contratação de staff para eventos é informal, depende de grupos de WhatsApp e planilhas, gerando riscos jurídicos e operacionais altíssimos para as empresas.
                  </p>
                  <p>
                    A Freelo centraliza todo o fluxo: do sourcing e verificação até a coordenação on-site e o pagamento instantâneo.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-4">
                    <Users className="h-8 w-8 text-primary" />
                    <h4 className="font-bold">4.2M Profissionais</h4>
                    <p className="text-xs text-zinc-500">Atuando na informalidade no setor de eventos no Brasil.</p>
                  </div>
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-4">
                    <ShieldCheck className="h-8 w-8 text-white" />
                    <h4 className="font-bold">Compliance Total</h4>
                    <p className="text-xs text-zinc-500">Redução de 90% em riscos trabalhistas e operacionais.</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30"></div>
                <div className="relative aspect-square rounded-[40px] border border-white/10 bg-black p-8 shadow-2xl flex flex-col justify-between">
                   <div className="space-y-2">
                      <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Projeção de GMV (Annualized)</p>
                      <h3 className="text-4xl font-black italic">R$ 124.000.000</h3>
                   </div>
                   {/* Mock Graph */}
                   <div className="flex items-end gap-2 h-48 pt-10">
                      {[30, 45, 35, 60, 80, 70, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-white/5 hover:bg-primary transition-colors rounded-t-lg" style={{ height: `${h}%` }}></div>
                      ))}
                   </div>
                   <div className="flex justify-between text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                      <span>2024</span>
                      <span>2025 (e)</span>
                      <span>2026 (e)</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Model */}
        <section id="model" className="py-24 bg-black border-y border-white/5">
           <div className="container px-6 mx-auto text-center space-y-20">
              <div className="space-y-4 max-w-3xl mx-auto">
                 <h2 className="text-4xl md:text-5xl font-black tracking-tight">O Modelo SaaS + <span className="text-primary italic">Marketplace</span></h2>
                 <p className="text-zinc-500 font-medium text-lg">Uma máquina de receita recorrente e escalabilidade infinita.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   { 
                     title: 'Take Rate Transactional', 
                     desc: 'Cobramos uma taxa de serviço sobre cada diária paga através da plataforma.', 
                     icon: DollarSign, 
                     value: '15-20%' 
                   },
                   { 
                     title: 'Business Subscription', 
                     desc: 'Assinaturas mensais para empresas que precisam de gestão avançada e relatórios.', 
                     icon: BarChart3, 
                     value: 'R$ 499/mês' 
                   },
                   { 
                     title: 'Premium Worker', 
                     desc: 'Serviços de destaque, antecipação de recebíveis e capacitação para profissionais.', 
                     icon: Zap, 
                     value: 'R$ 29/mês' 
                   },
                 ].map((item, i) => (
                   <div key={i} className="group p-10 rounded-[40px] bg-zinc-950 border border-white/5 hover:border-primary/50 transition-all text-left space-y-6">
                      <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                         <item.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-white mb-2">{item.title}</h4>
                        <p className="text-zinc-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                      </div>
                      <p className="text-3xl font-black italic text-primary">{item.value}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Traction & Exit Vision */}
        <section id="metrics" className="py-24 bg-black relative">
           <div className="container px-6 mx-auto">
              <div className="rounded-[60px] bg-zinc-950 border border-white/10 p-10 lg:p-20 overflow-hidden relative">
                 <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl rounded-full"></div>
                 
                 <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="space-y-8">
                       <h2 className="text-4xl font-black tracking-tight leading-tight">Caminho para o <span className="text-primary">Série A</span></h2>
                       <ul className="space-y-6">
                          {[
                            { step: '01', title: 'Dominação do Sudeste', desc: 'Foco em SP e RJ para atingir R$ 2M/mês em GMV.' },
                            { step: '02', title: 'Expansão Latam', desc: 'Lançamento em México e Colômbia via parcerias estratégicas.' },
                            { step: '03', title: 'Verticalização Fintech', desc: 'Lançamento do Freelo Card e antecipação de recebíveis.' },
                          ].map(item => (
                            <li key={item.step} className="flex gap-6">
                               <span className="text-primary font-black italic text-xl">{item.step}</span>
                               <div>
                                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                  <p className="text-sm text-zinc-500 font-medium">{item.desc}</p>
                               </div>
                            </li>
                          ))}
                       </ul>
                    </div>
                    
                    <div className="bg-black/50 backdrop-blur-md rounded-3xl border border-white/10 p-8 space-y-8">
                       <div className="flex items-center justify-between">
                          <p className="font-black italic uppercase text-xs tracking-widest">Growth Forecast</p>
                          <TrendingUp className="h-4 w-4 text-primary" />
                       </div>
                       <div className="space-y-6">
                          <div>
                             <div className="flex justify-between text-xs font-bold mb-2">
                                <span className="text-zinc-500">MERCADO PENETRADO</span>
                                <span className="text-white">2.4%</span>
                             </div>
                             <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-[30%]" />
                             </div>
                          </div>
                          <div>
                             <div className="flex justify-between text-xs font-bold mb-2">
                                <span className="text-zinc-500">USER ACQUISITION EFFICIENCY</span>
                                <span className="text-white">High</span>
                             </div>
                             <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-[75%]" />
                             </div>
                          </div>
                       </div>
                       <Button className="w-full bg-white text-black font-black rounded-xl h-14">
                          Baixar Estudo de Caso
                       </Button>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 text-center">
           <div className="container px-6 mx-auto space-y-10">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Pronto para a próxima <span className="text-primary italic">Big Thing?</span></h2>
              <p className="text-zinc-500 font-medium text-lg max-w-2xl mx-auto">
                 Estamos abertos a discussões com investidores institucionais e anjos estratégicos que queiram transformar o futuro do trabalho.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Button size="lg" className="h-16 px-12 text-lg font-black bg-primary text-white hover:bg-[#E85F00] rounded-2xl shadow-2xl transition-all">
                    Entrar em Contato
                 </Button>
                 <Button size="lg" variant="outline" className="h-16 px-12 text-lg font-bold border-white/10 text-white hover:bg-white/5 rounded-2xl">
                    Ver Rodada no AngelList
                 </Button>
              </div>
           </div>
        </section>
      </main>

      <footer className="py-16 border-t border-white/5 bg-zinc-950">
        <div className="container px-6 mx-auto flex flex-col items-center space-y-8">
           <BrandLogo theme="dark" size="md" />
           <p className="text-zinc-500 font-medium text-sm text-center">
             Feito por Lucas Moreira - Engenheiro de Software / Arquiteto de Software © 2026
           </p>
        </div>
      </footer>
    </div>
  );
}
