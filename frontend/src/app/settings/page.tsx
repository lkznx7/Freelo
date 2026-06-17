'use client';

import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { 
  User, 
  Lock, 
  Bell, 
  Shield, 
  CreditCard,
  Trash2
} from 'lucide-react';

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8 pb-12">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Configurações</h1>
          <p className="text-muted-foreground">Gerencie suas preferências de conta e segurança.</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Navigation */}
          <div className="lg:col-span-1 space-y-1">
             <Button variant="secondary" className="w-full justify-start gap-3 bg-primary/10 text-primary border-none">
                <User className="h-4 w-4" /> Perfil
             </Button>
             <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground">
                <Lock className="h-4 w-4" /> Segurança
             </Button>
             <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground">
                <Bell className="h-4 w-4" /> Notificações
             </Button>
             <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground">
                <CreditCard className="h-4 w-4" /> Pagamentos
             </Button>
             <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground">
                <Shield className="h-4 w-4" /> Privacidade
             </Button>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3 space-y-6">
             <Card className="border-none shadow-lg">
                <CardHeader>
                   <CardTitle>Perfil Público</CardTitle>
                   <CardDescription>Como os outros verão você na plataforma.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                   <div className="flex items-center gap-6">
                      <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center border-2 border-primary/20">
                         <User className="h-10 w-10 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                         <Button size="sm">Alterar Foto</Button>
                         <p className="text-xs text-muted-foreground">JPG, GIF ou PNG. Tamanho máximo de 2MB.</p>
                      </div>
                   </div>
                   
                   <Separator />

                   <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                         <Label htmlFor="firstName">Primeiro Nome</Label>
                         <Input id="firstName" defaultValue="João" />
                      </div>
                      <div className="space-y-2">
                         <Label htmlFor="lastName">Sobrenome</Label>
                         <Input id="lastName" defaultValue="Silva" />
                      </div>
                   </div>

                   <div className="space-y-2">
                      <Label htmlFor="bio">Sobre você</Label>
                      <textarea 
                        id="bio" 
                        className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm"
                        defaultValue="Profissional com vasta experiência em eventos de grande porte..."
                      />
                   </div>

                   <Button className="w-fit px-8">Salvar Alterações</Button>
                </CardContent>
             </Card>

             <Card className="border-none shadow-lg">
                <CardHeader>
                   <CardTitle>Notificações</CardTitle>
                   <CardDescription>Escolha como deseja ser avisado sobre novas vagas.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                   <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                      <div className="space-y-0.5">
                         <p className="text-sm font-bold">Push Notifications</p>
                         <p className="text-xs text-muted-foreground">Receba avisos em tempo real no seu celular.</p>
                      </div>
                      <Switch defaultChecked />
                   </div>
                   <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                      <div className="space-y-0.5">
                         <p className="text-sm font-bold">E-mail Marketing</p>
                         <p className="text-xs text-muted-foreground">Resumo semanal de vagas e novidades.</p>
                      </div>
                      <Switch />
                   </div>
                   <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                      <div className="space-y-0.5">
                         <p className="text-sm font-bold">WhatsApp</p>
                         <p className="text-xs text-muted-foreground">Alertas críticos sobre convites e pagamentos.</p>
                      </div>
                      <Switch defaultChecked />
                   </div>
                </CardContent>
             </Card>

             <Card className="border-none shadow-lg border-destructive/20 bg-destructive/5">
                <CardHeader>
                   <CardTitle className="text-destructive">Zona de Perigo</CardTitle>
                   <CardDescription>Ações irreversíveis para sua conta.</CardDescription>
                </CardHeader>
                <CardContent>
                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-1">
                         <p className="text-sm font-bold">Excluir Conta</p>
                         <p className="text-xs text-muted-foreground">Ao excluir sua conta, todos os seus dados serão removidos permanentemente.</p>
                      </div>
                      <Button variant="destructive" className="gap-2">
                         <Trash2 className="h-4 w-4" /> Excluir permanentemente
                      </Button>
                   </div>
                </CardContent>
             </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
