interface SlideIndicatorProps {
  current: number;
  total: number;
}

export default function SlideIndicator({ current, total }: SlideIndicatorProps) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === current
              ? "w-8 bg-primary"
              : i < current
              ? "w-3 bg-primary/40"
              : "w-3 bg-muted"
          }`}
        />
      ))}
    </div>
  );
}
