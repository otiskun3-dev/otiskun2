import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Info } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Product Images
import ink1 from "@/assets/images/product-ink.jpg";
import ink2 from "@/assets/images/product-ink-2.png";
import mesh1 from "@/assets/images/product-mesh.jpg";
import mesh2 from "@/assets/images/product-mesh-2.jpg";
import acm1 from "@/assets/images/product-acm.jpg";
import acm2 from "@/assets/images/product-acm-2.jpg";

// Misc Images from attached assets
import mantaMagnetica from "@/assets/images/manta-magnetica.jpg";
import psAi from "@/assets/images/ps-ai.jpg";
import esticagem from "@/assets/images/esticagem.webp";
import tensiometro from "@/assets/images/tensiometro.jpg";
import laserFilm from "@/assets/images/laser-film.jpg";

const products = [
  {
    id: 1,
    title: "Tintas Tecno Paint",
    shortDescription: "Linha completa de tintas de alta performance para serigrafia e impressão digital.",
    fullDescription: "A Tecno Paint é sinônimo de excelência em pigmentação. Nossas tintas oferecem secagem rápida, ancoragem perfeita em diversos substratos e resistência excepcional a intempéries. Disponíveis em versões Solvente, Eco-Solvente e UV, atendem desde a serigrafia têxtil até a comunicação visual de grandes formatos.",
    images: [ink1, ink2],
    tag: "Alta Performance",
    specs: ["Secagem Rápida", "Alta Cobertura", "Resistência UV", "Cores Vibrantes"]
  },
  {
    id: 2,
    title: "Telas Sefar",
    shortDescription: "Telas técnicas suíças de precisão para máxima definição.",
    fullDescription: "Distribuidora oficial Sefar no Paraná. As telas Sefar são reconhecidas mundialmente pela sua estabilidade dimensional e uniformidade da malha. Essenciais para impressões que exigem alta precisão técnica, como eletrônicos, vidros automotivos e tecidos finos.",
    images: [mesh1, mesh2],
    tag: "Precisão Suíça",
    specs: ["Estabilidade Dimensional", "Alta Tensão", "Longa Durabilidade", "Micragem Precisa"]
  },
  {
    id: 3,
    title: "Chapas de ACM",
    shortDescription: "Alumínio Composto para fachadas e sinalização de alto impacto.",
    fullDescription: "Nossas chapas de ACM (Aluminum Composite Material) combinam leveza e rigidez. Ideais para revestimentos de fachadas, totens e sinalização interna ou externa. Disponíveis em diversas cores e acabamentos metálicos que garantem um visual moderno e duradouro.",
    images: [acm1, acm2],
    tag: "Comunicação Visual",
    specs: ["Leveza", "Fácil Moldagem", "Resistente à Corrosão", "Acabamento Premium"]
  },
  {
    id: 4,
    title: "Equipamentos e Insumos",
    shortDescription: "Tecnologia e materiais de suporte para esticagem e fotolito.",
    fullDescription: "Oferecemos soluções completas para o seu processo produtivo, incluindo mantas magnéticas de várias espessuras, chapas de PS e AI, além de serviços especializados de esticagem com controle por tensiômetros Sefar de alta precisão e Laser Film para fotolitos de alta definição.",
    images: [esticagem, tensiometro, mantaMagnetica, laserFilm, psAi],
    tag: "Tecnologia Técnica",
    specs: ["Esticagem de Precisão", "Tensiômetros Sefar", "Mantas Magnéticas", "Laser Film 93 micras"]
  }
];

function ProductCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i === index ? "bg-primary w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Showcase() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);

  return (
    <section id="showcase" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm">Nossos Insumos</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-2 mb-6">Showcase de Produtos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Clique nos produtos para ver detalhes técnicos e galeria de imagens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white border border-border shadow-lg transition-all duration-300 group-hover:border-primary/30">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={product.images[0]} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur p-4 rounded-full shadow-lg">
                      <Info className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                    {product.tag}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 transition-colors group-hover:text-primary">{product.title}</h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-2">
                    {product.shortDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-transparent shadow-none">
          {selectedProduct && (
            <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
              <div className="md:w-1/2 p-4">
                <ProductCarousel images={selectedProduct.images} />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <DialogTitle className="text-3xl font-bold mb-2">{selectedProduct.title}</DialogTitle>
                <div className="text-primary font-bold uppercase tracking-widest text-xs mb-6">
                  {selectedProduct.tag}
                </div>
                <DialogDescription className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {selectedProduct.fullDescription}
                </DialogDescription>
                
                <div className="space-y-4 mb-8">
                  <h4 className="font-bold text-sm uppercase tracking-wider">Especificações</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProduct.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setSelectedProduct(null);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
                >
                  Solicitar Cotação
                </button>
              </div>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
