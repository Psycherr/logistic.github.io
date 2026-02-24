import SlideLayout from "../SlideLayout";
import { Thermometer, Clock, Wifi, RefreshCw, Box } from "lucide-react";

export default function Slide3() {
  return (
    <SlideLayout>
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-3xl font-mono tracking-widest text-primary uppercase mb-6 animate-fade-up">
          Cadeia de Frio
        </p>
        <h1 className="text-8xl font-bold leading-tight mb-16 animate-fade-up delay-100">
          Garantia da<br />
          <span className="text-gradient-accent">Temperatura</span>
        </h1>

        <div className="grid grid-cols-5 gap-6 mb-16 animate-fade-up delay-300">
          {[
            { icon: Box, title: "Caixas isotérmicas", desc: "Certificadas para transporte de congelados" },
            { icon: Thermometer, title: "Gelo eutético", desc: "Ou sistemas refrigerados leves" },
            { icon: Clock, title: "Tempo de rota", desc: "Reduzido pela proximidade dos hubs" },
            { icon: Wifi, title: "Monitoramento", desc: "De temperatura em tempo real" },
            { icon: RefreshCw, title: "Reabastecimento", desc: "Frequente nos hubs" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-secondary/60 rounded-xl p-8 border border-border text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-9 h-9 text-primary" />
              </div>
              <p className="text-2xl font-semibold mb-2">{title}</p>
              <p className="text-xl text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-primary pl-8 animate-fade-up delay-500">
          <p className="text-4xl italic text-foreground/90">
            "Cadeia de frio depende de <span className="text-primary font-semibold">controle de tempo e temperatura</span> — não do tamanho do veículo."
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
