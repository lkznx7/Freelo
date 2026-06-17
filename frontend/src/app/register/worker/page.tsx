'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ChevronLeft, ChevronRight, Upload, CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BrandLogo } from '@/components/brand-logo';
import { cn } from '@/lib/utils';

const workerSchema = z.object({
  // Step 1
  name: z.string().min(3, 'Nome muito curto'),
  cpf: z.string().min(11, 'CPF inválido'),
  birthDate: z.string().min(10, 'Data inválida'),
  phone: z.string().min(10, 'Telefone inválido'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha curta'),
  // Step 2
  cep: z.string().min(8, 'CEP inválido'),
  city: z.string().min(2, 'Cidade obrigatória'),
  state: z.string().min(2, 'Estado obrigatório'),
  // Step 3
  role: z.string().min(1, 'Selecione um cargo'),
  experience: z.string().min(1, 'Informe sua experiência'),
  availability: z.string().min(1, 'Informe sua disponibilidade'),
});

type WorkerValues = z.infer<typeof workerSchema>;

export default function WorkerRegisterPage() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const totalSteps = 5;

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors },
  } = useForm<WorkerValues>({
    resolver: zodResolver(workerSchema),
    mode: 'onChange',
  });

  const nextStep = async () => {
    let fieldsToValidate: (keyof WorkerValues)[] = [];
    if (step === 1) fieldsToValidate = ['name', 'cpf', 'birthDate', 'phone', 'email', 'password'];
    if (step === 2) fieldsToValidate = ['cep', 'city', 'state'];
    if (step === 3) fieldsToValidate = ['role', 'experience', 'availability'];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const onSubmit = async (data: WorkerValues) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Final registration data:', data);
    setStep(5);
    setIsLoading(false);
    toast.success('Cadastro realizado com sucesso!');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-bold text-secondary/80">Nome Completo</Label>
              <Input id="name" {...register('name')} className="h-11 rounded-xl" />
              {errors.name && <p className="text-xs text-destructive font-medium">{errors.name.message}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cpf" className="font-bold text-secondary/80">CPF</Label>
                <Input id="cpf" {...register('cpf')} placeholder="000.000.000-00" className="h-11 rounded-xl" />
                {errors.cpf && <p className="text-xs text-destructive font-medium">{errors.cpf.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="birthDate" className="font-bold text-secondary/80">Data de Nascimento</Label>
                <Input id="birthDate" type="date" {...register('birthDate')} className="h-11 rounded-xl" />
                {errors.birthDate && <p className="text-xs text-destructive font-medium">{errors.birthDate.message}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-bold text-secondary/80">Telefone</Label>
              <Input id="phone" {...register('phone')} placeholder="(00) 00000-0000" className="h-11 rounded-xl" />
              {errors.phone && <p className="text-xs text-destructive font-medium">{errors.phone.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-bold text-secondary/80">E-mail</Label>
              <Input id="email" type="email" {...register('email')} className="h-11 rounded-xl" />
              {errors.email && <p className="text-xs text-destructive font-medium">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" title="password" className="font-bold text-secondary/80">Senha</Label>
              <Input id="password" type="password" {...register('password')} className="h-11 rounded-xl" />
              {errors.password && <p className="text-xs text-destructive font-medium">{errors.password.message}</p>}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
              <Label htmlFor="cep" className="font-bold text-secondary/80">CEP</Label>
              <Input id="cep" {...register('cep')} className="h-11 rounded-xl" />
              {errors.cep && <p className="text-xs text-destructive font-medium">{errors.cep.message}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city" className="font-bold text-secondary/80">Cidade</Label>
                <Input id="city" {...register('city')} className="h-11 rounded-xl" />
                {errors.city && <p className="text-xs text-destructive font-medium">{errors.city.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="state" className="font-bold text-secondary/80">Estado</Label>
                <Input id="state" {...register('state')} className="h-11 rounded-xl" />
                {errors.state && <p className="text-xs text-destructive font-medium">{errors.state.message}</p>}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
              <Label htmlFor="role" className="font-bold text-secondary/80">Cargo Principal</Label>
              <Select onValueChange={(v) => setValue('role', v as string)}>
                <SelectTrigger className="h-11 rounded-xl">
                  <SelectValue placeholder="Selecione seu cargo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="waiter">Garçom</SelectItem>
                  <SelectItem value="receptionist">Recepcionista</SelectItem>
                  <SelectItem value="security">Segurança</SelectItem>
                  <SelectItem value="promoter">Promotor</SelectItem>
                </SelectContent>
              </Select>
              {errors.role && <p className="text-xs text-destructive font-medium">{errors.role.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience" className="font-bold text-secondary/80">Experiência</Label>
              <Select onValueChange={(v) => setValue('experience', v as string)}>
                <SelectTrigger className="h-11 rounded-xl">
                  <SelectValue placeholder="Quanto tempo de experiência?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Nenhuma</SelectItem>
                  <SelectItem value="less_1">Menos de 1 ano</SelectItem>
                  <SelectItem value="1_3">1 a 3 anos</SelectItem>
                  <SelectItem value="more_3">Mais de 3 anos</SelectItem>
                </SelectContent>
              </Select>
              {errors.experience && <p className="text-xs text-destructive font-medium">{errors.experience.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="availability" className="font-bold text-secondary/80">Disponibilidade</Label>
              <Select onValueChange={(v) => setValue('availability', v as string)}>
                <SelectTrigger className="h-11 rounded-xl">
                  <SelectValue placeholder="Qual sua disponibilidade?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekends">Finais de semana</SelectItem>
                  <SelectItem value="weekdays">Dias de semana</SelectItem>
                  <SelectItem value="any">Qualquer dia</SelectItem>
                </SelectContent>
              </Select>
              {errors.availability && <p className="text-xs text-destructive font-medium">{errors.availability.message}</p>}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4 bg-muted/30 border-border/60 hover:border-primary/50 transition-colors">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-secondary">Foto de Perfil</p>
                <p className="text-xs text-muted-foreground font-medium">Arraste ou clique para enviar sua melhor foto</p>
              </div>
              <Button variant="outline" size="sm" className="rounded-xl font-bold">Selecionar Arquivo</Button>
            </div>
            <div className="border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4 bg-muted/30 border-border/60 hover:border-primary/50 transition-colors">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-secondary">Documento de Identidade</p>
                <p className="text-xs text-muted-foreground font-medium">RG ou CNH (Frente e Verso)</p>
              </div>
              <Button variant="outline" size="sm" className="rounded-xl font-bold">Selecionar Arquivo</Button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="py-8 flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in-95 duration-500">
            <div className="relative">
               <div className="absolute inset-0 bg-green-500 blur-2xl opacity-20 animate-pulse"></div>
               <CheckCircle2 className="h-24 w-24 text-green-500 relative z-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-extrabold text-secondary">Quase lá!</h3>
              <p className="text-muted-foreground font-medium max-w-xs mx-auto">
                Seu cadastro foi recebido. Nossa equipe analisará seus dados e você será notificado em breve.
              </p>
            </div>
            <Button asChild className="w-full mt-6 h-12 rounded-xl text-base font-bold btn-primary">
              <Link href="/login">Ir para o Login</Link>
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4">
      <div className="max-w-xl mx-auto space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <Link href="/">
            <BrandLogo size="md" />
          </Link>
          <div className="w-full space-y-3 px-4">
            <div className="flex justify-between text-xs font-bold text-muted-foreground/60 uppercase tracking-widest mb-1">
              <span>Passo {step} de {totalSteps}</span>
              <span className="text-primary">{Math.round((step / totalSteps) * 100)}%</span>
            </div>
            <Progress value={(step / totalSteps) * 100} className="h-2 bg-white shadow-inner" />
          </div>
        </div>

        <Card className="border-border/50 shadow-2xl shadow-secondary/5 rounded-3xl overflow-hidden bg-white">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-extrabold text-secondary">
              {step === 1 && 'Dados Pessoais'}
              {step === 2 && 'Seu Endereço'}
              {step === 3 && 'Perfil Profissional'}
              {step === 4 && 'Documentação'}
              {step === 5 && 'Cadastro Concluído'}
            </CardTitle>
            <CardDescription className="font-medium">
              {step === 1 && 'Preencha suas informações básicas para começar.'}
              {step === 2 && 'Precisamos saber onde você mora para filtrar as melhores vagas.'}
              {step === 3 && 'Conte-nos sobre sua experiência e o que você faz de melhor.'}
              {step === 4 && 'Envie fotos nítidas dos seus documentos para validação.'}
              {step === 5 && 'Agora é só aguardar nossa aprovação.'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {renderStep()}
          </CardContent>
          {step < 5 && (
            <CardFooter className="flex justify-between gap-4 pt-8 bg-muted/10 border-t border-border/50 py-6 mt-6">
              <Button
                variant="ghost"
                onClick={prevStep}
                disabled={step === 1 || isLoading}
                className={cn("rounded-xl font-bold h-11 px-6", step === 1 ? 'invisible' : '')}
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Voltar
              </Button>
              {step < 4 ? (
                <Button onClick={nextStep} className="px-8 h-11 rounded-xl font-bold btn-primary transition-all">
                  Continuar <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmit(onSubmit)} className="px-8 h-11 rounded-xl font-bold btn-primary" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Finalizando...
                    </>
                  ) : (
                    'Finalizar Cadastro'
                  )}
                </Button>
              )}
            </CardFooter>
          )}
        </Card>

        {step < 5 && (
          <p className="text-center text-sm text-muted-foreground font-medium">
            Já tem uma conta?{' '}
            <Link href="/login" className="text-primary font-bold hover:underline">
              Fazer login
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
