import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/providers/app-providers";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta'
});

export const metadata: Metadata = {
  title: "Freelo | Trabalho Imediato nos Melhores Eventos",
  description: "Conectamos profissionais de eventos com oportunidades reais. Garçons, recepcionistas e mais.",
  authors: [{ name: "Lucas Moreira", url: "https://github.com/lkznx7" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${jakarta.variable} font-sans antialiased`}>
        <AppProviders>
          <TooltipProvider>
            {children}
            <Toaster position="top-right" richColors closeButton />
          </TooltipProvider>
        </AppProviders>
      </body>
    </html>
  );
}
