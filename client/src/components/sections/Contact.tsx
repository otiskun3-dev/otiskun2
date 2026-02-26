import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const placeId = "ChIJMWaDgJTl3JQRMPTT4GpBc9I";

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="section-blob w-[500px] h-[500px] bg-accent/20 -bottom-48 -left-24" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            Atendimento Especializado
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Vamos Impulsionar seu Projeto
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm flex items-start gap-6 hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-4 rounded-xl">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sede em Curitiba</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Logística estratégica para entregas em toda a <br />
                  região metropolitana de Curitiba e suporte em todo o PR.
                </p>
                <div className="mt-4">
                  <a
                    href={`https://www.google.com/search?q=alta+tens%C3%A3o+brasil&sxsrf=ANbL-n4pptWzXVoM4_4ddkMcrZxKkzXXrQ%3A1770935703311#lpc=lpc`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-bold text-sm uppercase tracking-wider flex items-center gap-2 group"
                  >
                    Ver Produtos no Google Business
                    <div className="w-6 h-[2px] bg-primary group-hover:w-10 transition-all" />
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl border border-border shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-wider text-sm mb-1">
                    Telefone
                  </h3>
                  <p className="text-muted-foreground font-medium text-lg tracking-tight">
                    (41) 3086-4600
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-border shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-wider text-sm mb-1">
                    Email
                  </h3>
                  <p className="text-muted-foreground font-medium break-all">
                    comercial@altatensao.com.br
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden border border-border shadow-2xl relative min-h-[400px]"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!4v1770929283862!6m8!1m7!1sp_pJEJADUeulbYFxzaUhFQ!2m2!1d-25.41533852373809!2d-49.2183367011681!3f258.12923638650193!4f-5.994506120746536!5f0.9081832613390185`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute top-6 right-6 glass-card px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Empresa Verificada no Google
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
