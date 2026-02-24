import SlideLayout from "../SlideLayout";
import { CheckCircle, Leaf, Zap, Settings, Target } from "lucide-react";

export default function Slide10() {
  return (
    <SlideLayout>
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <p className="text-3xl font-mono tracking-widest text-primary uppercase mb-6 animate-fade-up">
          Conclusão
        </p>
        <h1 className="text-9xl font-bold leading-none mb-16 animate-fade-up delay-100">
          A Solução Mais Coerente<br />
          <span className="text-gradient-accent">com o Cenário</span>
        </h1>

        <div className="flex gap-10 mb-16 animate-fade-up delay-300">
          {[
            { icon: Zap, label: "Flexível" },
            { icon: Leaf, label: "Sustentável" },
            { icon: Settings, label: "Adaptável" },
            { icon: CheckCircle, label: "Viável" },
            { icon: Target, label: "Zero emissão" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-full gradient-accent flex items-center justify-center animate-glow-pulse">
                <Icon className="w-12 h-12 text-primary-foreground" />
              </div>
              <p className="text-2xl font-semibold">{label}</p>
            </div>
          ))}
        </div>

        <div className="max-w-[1400px] animate-scale-in delay-600">
          <p className="text-6xl font-bold leading-snug">
            No centro de São Paulo, vence quem é{" "}
            <span className="text-gradient-accent">leve, rápido e limpo.</span>
          </p>
        </div>

        {/* Member names */}
        <div className="mt-14 animate-fade-in delay-800">
          <p className="text-2xl text-foreground/80 mb-2">
            Lucas Veras &nbsp;·&nbsp; Rikelmy Bezerra &nbsp;·&nbsp; Enzo Cavalcante
          </p>
          <p className="text-xl text-muted-foreground font-mono">
            Grupo B — Microhubs + Cargobikes / Veículos Leves Zero Emissão
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
