import { useEffect, useRef, useState, ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  backgroundImage?: string;
  overlayStrength?: "normal" | "strong";
}

export default function SlideLayout({ children, backgroundImage, overlayStrength = "normal" }: SlideLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const parent = containerRef.current.parentElement;
        if (parent) {
          const scaleX = parent.clientWidth / 1920;
          const scaleY = parent.clientHeight / 1080;
          setScale(Math.min(scaleX, scaleY));
        }
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div ref={containerRef} className="slide-container" style={{ width: "100%", height: "100%" }}>
      <div
        className="slide-wrapper slide-content"
        style={{ transform: `scale(${scale})` }}
      >
        {backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
        <div className={`absolute inset-0 ${overlayStrength === "strong" ? "gradient-overlay-strong" : "gradient-overlay"}`} />
        <div className="relative z-10 w-full h-full p-20 flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}
