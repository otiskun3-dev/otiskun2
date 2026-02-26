import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/images/logo.png";

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Alta Tensão Brasil" className="h-12 w-auto object-contain" />
          <span className="font-display text-xl font-bold tracking-tight hidden sm:inline">
            ALTA TENSÃO <span className="text-primary italic">BRASIL</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('home')} className="text-sm font-semibold hover:text-primary transition-colors">Home</button>
          <button onClick={() => scrollTo('showcase')} className="text-sm font-semibold hover:text-primary transition-colors">Produtos</button>
          <button onClick={() => scrollTo('services')} className="text-sm font-semibold hover:text-primary transition-colors">Serviços</button>
          <button onClick={() => scrollTo('contact')} className="text-sm font-semibold hover:text-primary transition-colors">Contato</button>
          
          <div className="flex items-center gap-3 border-l border-border pl-6">
            <a href="https://www.instagram.com/altatensaobrasil/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/altatensaobrasil/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          <button onClick={() => scrollTo('contact')} className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
            Falar com Especialista
          </button>
        </div>
      </div>
    </nav>
  );
}
