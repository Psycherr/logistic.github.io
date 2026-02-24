import SlideLayout from "../SlideLayout";
import sustainImg from "@/assets/slide-sustentabilidade.jpg";
import { Leaf, Wind, Volume2, Car, Building } from "lucide-react";

export default function Slide6() {
  return (
    <SlideLayout backgroundImage={sustainImg} overlayStrength="strong">
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-3xl font-mono tracking-widest text-primary uppercase mb-6 animate-fade-up">
          Impacto Ambiental
        </p>
        <h1 className="text-8xl font-bold leading-tight mb-16 animate-fade-up delay-100">
          Sustentabilidade<br />
          <span className="text-gradient-accent">Real</span>
        </h1>

        <div className="grid grid-cols-5 gap-6 mb-16 animate-fade-up delay-300">
          {[
            { icon: Leaf, label: "Zero emissão local", sub: "no centro expandido" },
            { icon: Wind, label: "Redução de CO₂", sub: "significativa no last mile" },
            { icon: Volume2, label: "Menos ruído", sub: "operação silenciosa" },
            { icon: Car, label: "Menor impacto", sub: "no tráfego urbano" },
            { icon: Building, label: "Zona de baixa emissão", sub: "contribui para políticas públicas" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="bg-secondary/60 backdrop-blur-sm rounded-xl p-6 border border-border text-center">
              <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-2xl font-semibold">{label}</p>
              <p className="text-xl text-muted-foreground">{sub}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/10 border border-primary/30 rounded-xl px-10 py-6 animate-fade-up delay-500 animate-glow-pulse">
          <p className="text-3xl font-semibold text-center">
            É a única solução <span className="text-primary">100% alinhada ao objetivo ambiental</span> do cenário.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
