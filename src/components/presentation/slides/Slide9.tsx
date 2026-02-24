import SlideLayout from "../SlideLayout";
import { Building, Fuel, MapPin } from "lucide-react";

export default function Slide9() {
  return (
    <SlideLayout>
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-3xl font-mono tracking-widest text-slide-warm uppercase mb-6 animate-fade-up">
          Crítica ao Grupo C
        </p>
        <h1 className="text-8xl font-bold leading-tight mb-16 animate-fade-up delay-100">
          Centralização Tradicional:<br />
          <span className="text-slide-warm">Riscos</span>
        </h1>

        <div className="grid grid-cols-3 gap-8 mb-16 animate-fade-up delay-300">
          {[
            { icon: Building, title: "Risco operacional", desc: "Um único cross-docking cria ponto único de falha" },
            { icon: Fuel, title: "Combustível fóssil", desc: "Mantém diesel/gasolina no trecho longo" },
            { icon: MapPin, title: "Último quilômetro", desc: "Não resolve o problema da entrega final" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-secondary/60 rounded-xl p-10 border border-slide-warm/20">
              <Icon className="w-12 h-12 text-slide-warm mb-4" />
              <p className="text-3xl font-bold mb-2">{title}</p>
              <p className="text-2xl text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-slide-warm pl-8 animate-fade-up delay-500">
          <p className="text-5xl italic font-semibold text-slide-warm">
            "Consolidar é bom. Ignorar o último km é erro."
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
