import SlideLayout from "../SlideLayout";
import { Weight, Package, Zap, Timer } from "lucide-react";

export default function Slide4() {
  return (
    <SlideLayout>
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-3xl font-mono tracking-widest text-primary uppercase mb-6 animate-fade-up">
          Características Operacionais
        </p>
        <h1 className="text-8xl font-bold leading-tight mb-16 animate-fade-up delay-100">
          Desempenho Logístico no<br />
          <span className="text-gradient-accent">Centro Urbano</span>
        </h1>

        <div className="grid grid-cols-2 gap-8 mb-16">
          <div className="space-y-6 animate-fade-up delay-300">
            <div className="bg-secondary/60 rounded-xl p-8 border border-border flex items-center gap-6">
              <Weight className="w-14 h-14 text-primary flex-shrink-0" />
              <div>
                <p className="text-4xl font-bold text-primary">100–250 kg</p>
                <p className="text-2xl text-muted-foreground">Capacidade média por cargobike</p>
              </div>
            </div>
            <div className="bg-secondary/60 rounded-xl p-8 border border-border flex items-center gap-6">
              <Package className="w-14 h-14 text-primary flex-shrink-0" />
              <div>
                <p className="text-4xl font-bold text-primary">~1,4 m³</p>
                <p className="text-2xl text-muted-foreground">Volume disponível por viagem</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-left delay-400">
            <p className="text-3xl font-semibold mb-4">Velocidade real no centro:</p>
            {[
              { icon: Zap, text: "Evita congestionamento" },
              { icon: Timer, text: "Dispensa busca por vaga" },
              { icon: Timer, text: "Menor tempo de parada" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-4 bg-secondary/40 rounded-lg px-6 py-5 border border-border">
                <Icon className="w-8 h-8 text-primary" />
                <p className="text-2xl">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/10 border border-primary/30 rounded-xl px-10 py-6 animate-fade-up delay-600">
          <p className="text-3xl font-semibold text-center">
            Conclusão operacional: <span className="text-primary">Mais entregas por hora em áreas densas.</span>
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
