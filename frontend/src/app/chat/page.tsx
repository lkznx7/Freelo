'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard-layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Search, 
  Send, 
  MoreVertical, 
  Phone, 
  Video, 
  Paperclip,
  Smile,
  CheckCheck,
  ChevronLeft
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Contact {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
  verified: boolean;
}

const contacts: Contact[] = [
  { id: '1', name: 'Copacabana Palace', lastMessage: 'Olá João, tudo certo para amanhã?', time: '10:30', unread: 2, online: true, verified: true },
  { id: '2', name: 'Arena Fest', lastMessage: 'Obrigado pelo excelente trabalho!', time: 'Ontem', unread: 0, online: false, verified: true },
  { id: '3', name: 'Buffet Alegria', lastMessage: 'Pode enviar seu comprovante?', time: 'Segunda', unread: 0, online: false, verified: false },
];

const messagesList = [
  { id: '1', text: 'Olá, bom dia! Gostaria de confirmar minha presença no evento.', time: '09:00', sender: 'me' },
  { id: '2', text: 'Bom dia João! Que ótimo. Já registramos aqui.', time: '09:05', sender: 'them' },
  { id: '3', text: 'Você já possui o traje completo (social preto)?', time: '09:06', sender: 'them' },
  { id: '4', text: 'Sim, tenho o terno completo e sapato social.', time: '09:10', sender: 'me' },
  { id: '5', text: 'Perfeito. Te aguardamos às 18:00 na entrada de serviço.', time: '09:15', sender: 'them' },
];

export default function ChatPage() {
  const [selectedContact, setSelectedContact] = useState<Contact>(contacts[0]);
  const [newMessage, setNewMessage] = useState('');
  const [showMobileChat, setShowMobileChat] = useState(false);

  const handleSelectContact = (contact: Contact) => {
    setSelectedContact(contact);
    setShowMobileChat(true);
  };

  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-180px)] flex overflow-hidden rounded-[32px] bg-white border border-border shadow-2xl shadow-secondary/5">
        {/* Contacts List */}
        <div className={cn(
          "w-full md:w-96 border-r flex flex-col bg-muted/20",
          showMobileChat ? "hidden md:flex" : "flex"
        )}>
           <div className="p-6 space-y-6 bg-white border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-secondary tracking-tight">Conversas</h2>
                <Button variant="ghost" size="icon" className="rounded-xl"><MoreVertical className="h-5 w-5" /></Button>
              </div>
              <div className="relative">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                 <Input placeholder="Buscar contatos..." className="pl-11 h-12 bg-muted/50 border-none rounded-2xl focus-visible:ring-primary/30" />
              </div>
           </div>
           <ScrollArea className="flex-1">
              <div className="p-3 space-y-1">
                 {contacts.map((contact) => (
                   <button
                    key={contact.id}
                    onClick={() => handleSelectContact(contact)}
                    className={cn(
                      "w-full p-4 flex items-center gap-4 rounded-2xl transition-all duration-200 group text-left",
                      selectedContact.id === contact.id 
                        ? "bg-white shadow-lg shadow-secondary/5" 
                        : "hover:bg-white/50"
                    )}
                   >
                     <div className="relative shrink-0">
                        <Avatar className="h-14 w-14 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-all">
                          <AvatarFallback className="bg-secondary text-white font-black text-lg">
                            {contact.name.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        {contact.online && (
                          <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-white rounded-full" />
                        )}
                     </div>
                     <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                           <span className={cn("font-bold truncate text-sm", selectedContact.id === contact.id ? "text-primary" : "text-secondary")}>
                             {contact.name}
                           </span>
                           <span className="text-[10px] font-bold text-muted-foreground uppercase">{contact.time}</span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate font-medium">{contact.lastMessage}</p>
                     </div>
                     {contact.unread > 0 && (
                       <Badge className="h-6 w-6 p-0 flex items-center justify-center rounded-xl bg-primary text-[10px] font-black shadow-lg shadow-primary/20">
                         {contact.unread}
                       </Badge>
                     )}
                   </button>
                 ))}
              </div>
           </ScrollArea>
        </div>

        {/* Chat Window */}
        <div className={cn(
          "flex-1 flex flex-col bg-white",
          !showMobileChat ? "hidden md:flex" : "flex"
        )}>
           {/* Chat Header */}
           <div className="p-5 border-b flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10">
              <div className="flex items-center gap-4">
                 <Button 
                    variant="ghost" 
                    size="icon" 
                    className="md:hidden"
                    onClick={() => setShowMobileChat(false)}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                 <div className="relative">
                    <Avatar className="h-12 w-12 rounded-2xl">
                      <AvatarFallback className="bg-primary text-white font-black">
                        {selectedContact.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    {selectedContact.online && (
                      <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full" />
                    )}
                 </div>
                 <div>
                    <h3 className="font-bold text-secondary text-base flex items-center gap-2">
                      {selectedContact.name}
                      {selectedContact.verified && <CheckCheck className="h-4 w-4 text-blue-500" />}
                    </h3>
                    <p className="text-[10px] text-green-600 font-black uppercase tracking-widest">{selectedContact.online ? 'Online agora' : 'Offline'}</p>
                 </div>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                 <Button variant="outline" size="icon" className="rounded-xl border-muted"><Phone className="h-4 w-4 text-secondary" /></Button>
                 <Button variant="outline" size="icon" className="rounded-xl border-muted"><Video className="h-4 w-4 text-secondary" /></Button>
                 <Button variant="ghost" size="icon" className="rounded-xl"><MoreVertical className="h-4 w-4 text-muted-foreground" /></Button>
              </div>
           </div>

           {/* Messages Area */}
           <ScrollArea className="flex-1 p-6 bg-muted/10">
              <div className="space-y-6">
                 {messagesList.map((msg) => (
                   <div 
                    key={msg.id} 
                    className={cn(
                      "flex flex-col max-w-[70%]",
                      msg.sender === 'me' ? "ml-auto items-end" : "items-start"
                    )}
                   >
                      <div className={cn(
                        "p-4 text-sm font-medium shadow-md transition-all",
                        msg.sender === 'me' 
                          ? "bg-primary text-white rounded-3xl rounded-tr-none shadow-primary/10" 
                          : "bg-white text-secondary border border-border rounded-3xl rounded-tl-none shadow-secondary/5"
                      )}>
                         {msg.text}
                      </div>
                      <div className={cn(
                        "flex items-center gap-1.5 mt-1.5 px-1 text-[10px] font-bold uppercase tracking-wider",
                        msg.sender === 'me' ? "text-primary" : "text-muted-foreground"
                      )}>
                         {msg.time}
                         {msg.sender === 'me' && <CheckCheck className="h-3 w-3" />}
                      </div>
                   </div>
                 ))}
              </div>
           </ScrollArea>

           {/* Input Area */}
           <div className="p-6 border-t bg-white">
              <form 
                className="flex items-center gap-4"
                onSubmit={(e) => { e.preventDefault(); setNewMessage(''); }}
              >
                 <Button type="button" variant="ghost" size="icon" className="text-muted-foreground shrink-0 rounded-xl hover:bg-muted/50"><Paperclip className="h-6 w-6" /></Button>
                 <div className="relative flex-1">
                    <Input 
                      placeholder="Sua mensagem..." 
                      className="h-14 pl-6 pr-12 bg-muted/30 border-none rounded-2xl text-secondary font-medium focus-visible:ring-primary/20 shadow-inner"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <Button type="button" variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground rounded-lg"><Smile className="h-6 w-6" /></Button>
                 </div>
                 <Button type="submit" size="icon" className="btn-primary shrink-0 h-14 w-14 rounded-2xl shadow-xl shadow-primary/20">
                    <Send className="h-6 w-6" />
                 </Button>
              </form>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
