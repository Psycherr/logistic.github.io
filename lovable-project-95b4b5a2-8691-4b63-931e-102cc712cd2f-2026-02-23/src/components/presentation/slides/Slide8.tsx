import SlideLayout from "../SlideLayout";
import { AlertTriangle, Truck, ParkingCircle } from "lucide-react";

export default function Slide8() {
  return (
    <SlideLayout>
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-3xl font-mono tracking-widest text-slide-danger uppercase mb-6 animate-fade-up">
          Crítica ao Grupo A
        </p>
        <h1 className="text-8xl font-bold leading-tight mb-16 animate-fade-up delay-100">
          Frota Elétrica Pesada:<br />
          <span className="text-slide-danger">Limitações</span>
        </h1>

        <div className="grid grid-cols-3 gap-8 mb-16 animate-fade-up delay-300">
          {[
            { icon: AlertTriangle, title: "Resolve emissão", desc: "Mas mantém o gargalo operacional no centro urbano" },
            { icon: Truck, title: "Espaço viário", desc: "Continua ocupando espaço de veículos grandes nas ruas" },
            { icon: ParkingCircle, title: "Parada difícil", desc: "Dificuldade de estacionar e entregar em áreas densas" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-secondary/60 rounded-xl p-10 border border-slide-danger/20">
              <Icon className="w-12 h-12 text-slide-danger mb-4" />
              <p className="text-3xl font-bold mb-2">{title}</p>
              <p className="text-2xl text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-slide-danger pl-8 animate-fade-up delay-500">
          <p className="text-5xl italic font-semibold text-slide-danger">
            "Trocar o motor não resolve o trânsito."
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
