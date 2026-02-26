import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border py-4">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Alta Tensão Brasil" className="h-10 w-auto object-contain" />
              <span className="font-display text-2xl font-bold tracking-tight">
                ALTA TENSÃO <span className="text-primary italic">BRASIL</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm text-lg">
              Referência no Paraná em soluções para os setores gráfico e comunicação visual. Distribuidora oficial Sefar e Tecno Paint.
            </p>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Redes Sociais</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/altatensaobrasil/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/altatensaobrasil/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-white transition-all shadow-sm"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-muted-foreground font-medium">
              <li><button onClick={() => document.getElementById('home')?.scrollIntoView({behavior:'smooth'})} className="hover:text-primary transition-colors">Início</button></li>
              <li><button onClick={() => document.getElementById('showcase')?.scrollIntoView({behavior:'smooth'})} className="hover:text-primary transition-colors">Produtos</button></li>
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({behavior:'smooth'})} className="hover:text-primary transition-colors">Serviços</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="hover:text-primary transition-colors">Contato</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Alta Tensão Brasil. Todos os direitos reservados.</p>
          <p>Tintas, Insumos, Qualidade e Suporte em um só lugar.</p>
        </div>
      </div>
    </footer>
  );
}
