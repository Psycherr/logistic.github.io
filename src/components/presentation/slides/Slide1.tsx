import SlideLayout from "../SlideLayout";
import cityImg from "@/assets/slide-city.jpg";
import { MapPin, Snowflake, Leaf, TrendingUp, AlertTriangle } from "lucide-react";

export default function Slide1() {
  return (
    <SlideLayout backgroundImage={cityImg} overlayStrength="strong">
      <div className="flex-1 flex flex-col justify-center">
        {/* Member names */}
        <div className="mb-8 animate-fade-up">
          <p className="text-xl font-mono tracking-widest text-muted-foreground uppercase mb-2">Grupo B</p>
          <p className="text-2xl text-foreground/80">
            Lucas Veras &nbsp;·&nbsp; Rikelmy Bezerra &nbsp;·&nbsp; Enzo Cavalcante
          </p>
        </div>

        <p className="text-3xl font-mono tracking-widest text-primary uppercase mb-6 animate-fade-up delay-100">
          O Dilema Logístico
        </p>
        <h1 className="text-9xl font-bold leading-none mb-12 animate-fade-up delay-200">
          O Desafio da Distribuição<br />
          <span className="text-gradient-accent">Urbana Sustentável</span>
        </h1>

        <div className="grid grid-cols-5 gap-6 mb-14 animate-fade-up delay-300">
          {[
            { icon: MapPin, label: "500 pontos de venda", sub: "supermercados e padarias" },
            { icon: Snowflake, label: "Produtos congelados", sub: "cadeia de frio ininterrupta" },
            { icon: TrendingUp, label: "Centro expandido", sub: "de São Paulo" },
            { icon: Leaf, label: "Meta", sub: "zero emissão de carbono" },
            { icon: AlertTriangle, label: "Alta densidade", sub: "+ congestionamento" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="bg-secondary/60 backdrop-blur-sm rounded-xl p-6 border border-border">
              <Icon className="w-10 h-10 text-primary mb-3" />
              <p className="text-2xl font-semibold">{label}</p>
              <p className="text-xl text-muted-foreground">{sub}</p>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-primary pl-8 animate-fade-up delay-500">
          <p className="text-4xl italic text-foreground/90">
            "O problema não é só transportar.<br />
            É transportar <span className="text-primary font-semibold">rápido, frio e limpo.</span>"
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
