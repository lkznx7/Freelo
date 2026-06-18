'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, ArrowLeft, MailCheck } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BrandLogo } from '@/components/brand-logo';

const forgotPasswordSchema = z.object({
  email: z.string().email('Email inválido'),
});

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordValues) => {
    setIsLoading(true);
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Recovery email sent to:', data.email);
    setIsSent(true);
    toast.success('E-mail de recuperação enviado!');
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <Link href="/">
            <BrandLogo size="lg" />
          </Link>
          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold tracking-tight text-secondary">Recuperar Senha</h1>
            <p className="text-sm text-muted-foreground font-medium">
              Enviaremos um link para você redefinir seu acesso
            </p>
          </div>
        </div>

        <Card className="border-border/50 shadow-2xl shadow-secondary/5 rounded-[32px] overflow-hidden bg-white">
          {!isSent ? (
            <>
              <CardHeader className="space-y-1 pb-4">
                <CardTitle className="text-xl font-bold text-secondary">Esqueceu sua senha?</CardTitle>
                <CardDescription className="font-medium">
                  Não se preocupe, acontece com os melhores.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-bold text-secondary/80 text-xs uppercase tracking-widest">Seu E-mail Cadastrado</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      {...register('email')}
                      className="h-12 rounded-xl border-border/60 focus-visible:ring-primary/20"
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive font-bold">{errors.email.message}</p>
                    )}
                  </div>
                  <Button type="submit" className="w-full h-12 rounded-xl text-base font-black btn-primary shadow-xl shadow-primary/20" disabled={isLoading}>
                    {isLoading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      'Enviar Link de Recuperação'
                    )}
                  </Button>
                </form>
              </CardContent>
            </>
          ) : (
            <CardContent className="pt-8 pb-6 flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
                 <MailCheck className="h-10 w-10 text-green-600" />
              </div>
              <div className="space-y-2">
                 <h2 className="text-2xl font-black text-secondary">Confira seu E-mail</h2>
                 <p className="text-sm text-muted-foreground font-medium">
                    Enviamos as instruções de recuperação para o e-mail informado.
                 </p>
              </div>
              <Button asChild variant="outline" className="w-full h-12 rounded-xl font-bold border-2">
                 <Link href="/login">Voltar ao Login</Link>
              </Button>
            </CardContent>
          )}
          <CardFooter className="bg-muted/20 border-t border-border/50 py-6">
            <Link href="/login" className="text-sm font-bold text-secondary flex items-center gap-2 hover:text-primary transition-colors mx-auto">
              <ArrowLeft className="h-4 w-4" /> Voltar para o Login
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
