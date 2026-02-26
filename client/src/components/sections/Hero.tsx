import { motion } from "framer-motion";
import { ArrowRight, Droplets, Grid, Ruler } from "lucide-react";
import heroImage from "@/assets/images/hero-paint-2.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background intensity blobs */}
      <div className="section-blob w-[600px] h-[600px] bg-primary/30 top-0 -left-24" />
      <div className="section-blob w-[500px] h-[500px] bg-secondary/20 bottom-0 right-0" />
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-primary font-bold text-xs uppercase tracking-widest">
              Distribuidor Oficial Paraná
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Alta Tensão <span className="text-primary italic">Brasil</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
            Representante oficial <span className="font-bold text-foreground">Sefar & Tecno Paint</span>. 
            Especialistas em tintas industriais e esticagem de tecidos de alto padrão para áreas críticas.
          </p>

          <div className="flex flex-wrap gap-4">
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-primary/25">
              Solicitar Orçamento <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-4 px-4 py-2 bg-white rounded-md border border-border">
              <img src="https://image4.owler.com/logo/sefar_owler_20160227_022206_large.png" alt="Sefar" className="h-6 opacity-70" />
              <div className="w-[1px] h-6 bg-border" />
              <img src="https://static.wixstatic.com/media/2685b6_61c370d358544bebb129a9d45d23c000~mv2.png/v1/fill/w_236,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%20Tecnopaint.png" alt="Tecnopaint" className="h-6 opacity-70" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl rounded-full opacity-50" />
          <img
            src={heroImage}
            alt="Screen Printing Precision"
            className="relative rounded-2xl shadow-2xl border-4 border-white object-cover aspect-[4/3]"
          />
        </motion.div>
      </div>
    </section>
  );
}
