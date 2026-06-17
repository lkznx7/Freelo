'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BrandLogo } from '@/components/brand-logo';

const companySchema = z.object({
  companyName: z.string().min(3, 'Razão social muito curta'),
  tradeName: z.string().min(2, 'Nome fantasia muito curto'),
  cnpj: z.string().min(14, 'CNPJ inválido'),
  responsible: z.string().min(3, 'Nome do responsável inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
});

type CompanyValues = z.infer<typeof companySchema>;

export default function CompanyRegisterPage() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyValues>({
    resolver: zodResolver(companySchema),
  });

  const onSubmit = async (data: CompanyValues) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Company registration:', data);
    toast.success('Cadastro de empresa realizado com sucesso!');
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <Link href="/">
            <BrandLogo size="lg" theme="dark" />
          </Link>
          <div className="text-center space-y-1">
            <h1 className="text-3xl font-extrabold text-secondary tracking-tight">Cadastro de Empresa</h1>
            <p className="text-muted-foreground font-medium">Contrate os melhores profissionais para seus eventos</p>
          </div>
        </div>

        <Card className="border-border/50 shadow-2xl shadow-secondary/5 rounded-3xl overflow-hidden bg-white">
          <CardHeader className="pb-6 border-b border-border/50 bg-muted/5">
            <CardTitle className="text-xl font-bold text-secondary">Informações da Empresa</CardTitle>
            <CardDescription className="font-medium">Preencha os dados abaixo para criar sua conta corporativa.</CardDescription>
          </CardHeader>
          <CardContent className="pt-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="font-bold text-secondary/80">Razão Social</Label>
                  <Input id="companyName" {...register('companyName')} className="h-11 rounded-xl border-border/60" />
                  {errors.companyName && <p className="text-xs text-destructive font-medium">{errors.companyName.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tradeName" className="font-bold text-secondary/80">Nome Fantasia</Label>
                  <Input id="tradeName" {...register('tradeName')} className="h-11 rounded-xl border-border/60" />
                  {errors.tradeName && <p className="text-xs text-destructive font-medium">{errors.tradeName.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="cnpj" className="font-bold text-secondary/80">CNPJ</Label>
                  <Input id="cnpj" {...register('cnpj')} placeholder="00.000.000/0000-00" className="h-11 rounded-xl border-border/60" />
                  {errors.cnpj && <p className="text-xs text-destructive font-medium">{errors.cnpj.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="responsible" className="font-bold text-secondary/80">Responsável</Label>
                  <Input id="responsible" {...register('responsible')} className="h-11 rounded-xl border-border/60" />
                  {errors.responsible && <p className="text-xs text-destructive font-medium">{errors.responsible.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-bold text-secondary/80">Telefone de Contato</Label>
                  <Input id="phone" {...register('phone')} placeholder="(00) 00000-0000" className="h-11 rounded-xl border-border/60" />
                  {errors.phone && <p className="text-xs text-destructive font-medium">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-bold text-secondary/80">E-mail Corporativo</Label>
                  <Input id="email" type="email" {...register('email')} className="h-11 rounded-xl border-border/60" />
                  {errors.email && <p className="text-xs text-destructive font-medium">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" title="password" className="font-bold text-secondary/80">Senha de Acesso</Label>
                <Input id="password" type="password" {...register('password')} className="h-11 rounded-xl border-border/60" />
                {errors.password && <p className="text-xs text-destructive font-medium">{errors.password.message}</p>}
              </div>

              <Button type="submit" className="w-full h-12 text-base font-bold btn-primary rounded-xl" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Criando conta corporativa...
                  </>
                ) : (
                  'Cadastrar Minha Empresa'
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 border-t border-border/50 bg-muted/20 py-8">
            <p className="text-sm text-center text-muted-foreground font-medium">
              Já possui conta?{' '}
              <Link href="/login" className="text-primary font-bold hover:underline">
                Fazer login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
