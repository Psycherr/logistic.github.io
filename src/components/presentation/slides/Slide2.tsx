import SlideLayout from "../SlideLayout";
import cargobikeImg from "@/assets/slide-cargobike.jpg";
import { ArrowRight } from "lucide-react";

export default function Slide2() {
  return (
    <SlideLayout backgroundImage={cargobikeImg} overlayStrength="strong">
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-3xl font-mono tracking-widest text-primary uppercase mb-6 animate-fade-up">
          Nossa Tese (Grupo B)
        </p>
        <h1 className="text-8xl font-bold leading-tight mb-16 animate-fade-up delay-100">
          Solução Proposta —<br />
          <span className="text-gradient-accent">Microhubs + Veículos Leves<br />Zero Emissão</span>
        </h1>

        <div className="flex items-center gap-4 mb-16 animate-fade-up delay-300">
          {[
            { label: "CD Principal", color: "bg-secondary" },
            { label: "Microhubs Urbanos", color: "gradient-accent" },
            { label: "Cargobikes / Veículos Leves", color: "gradient-accent" },
            { label: "PDVs", color: "bg-secondary" },
          ].map((step, i) => (
            <div key={step.label} className="flex items-center gap-4">
              <div className={`${step.color} px-8 py-6 rounded-xl border border-border`}>
                <p className="text-2xl font-semibold text-foreground">{step.label}</p>
              </div>
              {i < 3 && <ArrowRight className="w-10 h-10 text-primary" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8 animate-fade-up delay-500">
          {[
            { title: "Reduz circulação", desc: "de veículos pesados no centro" },
            { title: "Garante capilaridade", desc: "porta a porta" },
            { title: "Elimina emissão", desc: "no trecho final" },
          ].map(({ title, desc }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-primary mt-3 flex-shrink-0" />
              <div>
                <p className="text-3xl font-semibold">{title}</p>
                <p className="text-2xl text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
