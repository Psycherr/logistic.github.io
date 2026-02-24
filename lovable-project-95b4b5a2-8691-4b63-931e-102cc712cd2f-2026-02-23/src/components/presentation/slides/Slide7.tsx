import SlideLayout from "../SlideLayout";
import { DollarSign, Zap, Wrench, Users } from "lucide-react";

export default function Slide7() {
  return (
    <SlideLayout>
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-3xl font-mono tracking-widest text-primary uppercase mb-6 animate-fade-up">
          Análise de Custos
        </p>
        <h1 className="text-8xl font-bold leading-tight mb-14 animate-fade-up delay-100">
          Quando se Torna<br />
          <span className="text-gradient-accent">Mais Econômico?</span>
        </h1>

        <div className="grid grid-cols-3 gap-8 mb-14">
          <div className="bg-secondary/60 rounded-xl p-8 border border-border animate-fade-up delay-200">
            <p className="text-primary font-mono text-lg uppercase tracking-widest mb-4">Custos Fixos</p>
            <div className="space-y-5">
              {["Microhubs", "Frota leve", "Tecnologia de controle térmico"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <p className="text-2xl">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-secondary/60 rounded-xl p-8 border border-border animate-fade-up delay-300">
            <p className="text-slide-warm font-mono text-lg uppercase tracking-widest mb-4">Custos Variáveis</p>
            <div className="space-y-5">
              {[
                { icon: Zap, text: "Energia elétrica" },
                { icon: Users, text: "Mão de obra" },
                { icon: Wrench, text: "Manutenção simplificada" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon className="w-7 h-7 text-slide-warm" />
                  <p className="text-2xl">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/10 rounded-xl p-8 border border-primary/30 animate-fade-up delay-400">
            <p className="text-primary font-mono text-lg uppercase tracking-widest mb-4">Mais econômico quando</p>
            <div className="space-y-5">
              {[
                { icon: DollarSign, text: "Alta densidade de entregas" },
                { icon: DollarSign, text: "Centro congestionado" },
                { icon: DollarSign, text: "Múltiplas paradas curtas" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Icon className="w-7 h-7 text-primary" />
                  <p className="text-2xl font-semibold">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
