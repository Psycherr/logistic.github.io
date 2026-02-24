import SlideLayout from "../SlideLayout";
import microhubImg from "@/assets/slide-microhub.jpg";
import { Network, TrendingUp, Map } from "lucide-react";

export default function Slide5() {
  return (
    <SlideLayout backgroundImage={microhubImg} overlayStrength="strong">
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-3xl font-mono tracking-widest text-primary uppercase mb-6 animate-fade-up">
          Vantagens Estratégicas
        </p>
        <h1 className="text-8xl font-bold leading-tight mb-16 animate-fade-up delay-100">
          Por que Nossa Solução<br />
          <span className="text-gradient-accent">é Mais Flexível</span>
        </h1>

        <div className="grid grid-cols-3 gap-8 mb-16 animate-fade-up delay-300">
          {[
            { icon: Network, title: "Alta capilaridade", desc: "Alcança qualquer ponto de venda, mesmo em vielas e áreas restritas" },
            { icon: TrendingUp, title: "Adaptação rápida", desc: "Resposta ágil a picos de demanda e mudanças de volume" },
            { icon: Map, title: "Operação por zonas", desc: "Divisão inteligente da cidade para máxima eficiência" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-secondary/60 backdrop-blur-sm rounded-xl p-10 border border-border">
              <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mb-6">
                <Icon className="w-9 h-9 text-primary-foreground" />
              </div>
              <p className="text-3xl font-bold mb-3">{title}</p>
              <p className="text-2xl text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-primary pl-8 animate-fade-up delay-500">
          <p className="text-4xl italic text-foreground/90">
            "Flexibilidade é <span className="text-primary font-semibold">responder ao trânsito</span>, não sofrer com ele."
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
