import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import SlideIndicator from "./SlideIndicator";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import Slide5 from "./slides/Slide5";
import Slide6 from "./slides/Slide6";
import Slide7 from "./slides/Slide7";
import Slide8 from "./slides/Slide8";
import Slide9 from "./slides/Slide9";
import Slide10 from "./slides/Slide10";

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10];

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goNext = useCallback(() => setCurrent((c) => Math.min(c + 1, slides.length - 1)), []);
  const goPrev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goNext(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
      if (e.key === "f" || e.key === "F5") { e.preventDefault(); toggleFullscreen(); }
      if (e.key === "Escape" && isFullscreen) setIsFullscreen(false);
    };

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) setIsFullscreen(false);
    };

    window.addEventListener("keydown", handleKey);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [goNext, goPrev, toggleFullscreen, isFullscreen]);

  const CurrentSlide = slides[current];

  return (
    <div className="w-screen h-screen bg-background flex flex-col">
      {/* Slide area */}
      <div className="flex-1 relative">
        <CurrentSlide />
        {/* Page number overlay - bottom right */}
        <div className="absolute bottom-4 right-6 z-50">
          <span className="font-mono text-sm text-muted-foreground/70">
            {current + 1} / {slides.length}
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="h-14 bg-card border-t border-border flex items-center justify-between px-6">
        <SlideIndicator current={current} total={slides.length} />

        <div className="flex items-center gap-2">
          <button
            onClick={goPrev}
            disabled={current === 0}
            className="p-2 rounded-lg bg-secondary hover:bg-muted disabled:opacity-30 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={goNext}
            disabled={current === slides.length - 1}
            className="p-2 rounded-lg bg-secondary hover:bg-muted disabled:opacity-30 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors ml-2"
          >
            {isFullscreen ? (
              <Minimize2 className="w-5 h-5 text-foreground" />
            ) : (
              <Maximize2 className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
