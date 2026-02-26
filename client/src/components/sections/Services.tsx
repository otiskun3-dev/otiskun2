import { Droplets, Grid, Ruler, Truck, Users, Layout } from "lucide-react";

const features = [
  {
    icon: Grid,
    title: "Telas Técnicas Sefar",
    description: "Distribuidor oficial Sefar. A malha suíça perfeita para cada micragem e definição técnica.",
  },
  {
    icon: Droplets,
    title: "Tintas Tecno Paint",
    description: "Alta performance para serigrafia e impressão digital (Solvente, Eco e UV).",
  },
  {
    icon: Ruler,
    title: "Esticagem de Precisão",
    description: "Serviço com pinças pneumáticas suíças e controle rigoroso de tensão (Newton).",
  },
  {
    icon: Layout,
    title: "Comunicação Visual",
    description: "Lonas, vinis e chapas de ACM de alta durabilidade para fachadas e sinalização.",
  },
  {
    icon: Users,
    title: "Suporte Especializado",
    description: "Equipe de vendedoras com conhecimentos técnicos específicos de cada área.",
  },
  {
    icon: Truck,
    title: "Logística no Paraná",
    description: "Entrega em toda Curitiba, região metropolitana e suporte técnico em todo o estado.",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Decorative blobs for color intensity */}
      <div className="section-blob w-[500px] h-[500px] bg-primary/20 -top-48 -left-48" />
      <div className="section-blob w-[400px] h-[400px] bg-secondary/20 -bottom-24 -right-24" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-extrabold tracking-widest uppercase text-sm">Portfólio Completo</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Qualidade e Estabilidade</h2>
          <p className="text-lg text-muted-foreground">
            Garantimos a produtividade e a durabilidade dos seus projetos com os melhores insumos do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-border shadow-lg transition-all duration-300 hover:border-primary/40 group"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white bg-primary shadow-lg shadow-primary/20 transition-transform">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
