import { CheckCircle2, Award, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
    >
      <div className="section-blob w-[400px] h-[400px] bg-primary/10 top-1/2 -right-24" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              Nossa História
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
              Referência em Soluções para o Setor Gráfico e Visual
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              A Alta Tensão Brasil consolidou-se como referência no Paraná no
              fornecimento de soluções para os setores gráfico e de comunicação
              visual. Como distribuidora oficial da{" "}
              <span className="font-bold text-foreground">Sefar</span> (telas
              técnicas suíças) e{" "}
              <span className="font-bold text-foreground">Tecno Paint</span>{" "}
              (tintas de alta performance), atendemos a todo o estado com
              suporte técnico especializado.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nosso portfólio abrange desde a esticagem de telas para serigrafia
              com precisão técnica até o fornecimento de insumos críticos como
              tintas para serigrafia e impressão digital, lonas, vinis e chapas
              de ACM (Alumínio Composto) para fachadas e sinalização.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Qualidade Suíça Sefar",
                "Tintas de Alta Performance",
                "Suporte Técnico Especializado",
                "Estabilidade de Fornecimento",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-muted/50 p-4 rounded-xl border border-border"
                >
                  <ShieldCheck className="text-primary w-6 h-6 shrink-0" />
                  <span className="font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-card p-10 rounded-3xl relative z-10 overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award className="w-32 h-32 text-primary" />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-primary fill-current" />
                  Compromisso com Resultados
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl font-bold text-primary">PR</div>
                    <div>
                      <div className="font-bold text-lg uppercase tracking-wider">
                        Cobertura Total
                      </div>
                      <div className="text-muted-foreground">
                        Atendimento especializado em todo o estado do Paraná.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-4xl font-bold text-secondary">ACM</div>
                    <div>
                      <div className="font-bold text-lg uppercase tracking-wider">
                        Comunicação Visual
                      </div>
                      <div className="text-muted-foreground">
                        Lonas, vinis e chapas para fachadas de alto impacto.
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="italic text-muted-foreground">
                      "Focamos em qualidade e estabilidade de fornecimento para
                      garantir a produtividade e a durabilidade dos projetos de
                      nossos clientes."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
