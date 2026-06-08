export function Logo({ light = false, size = "md" }: { light?: boolean; size?: "sm" | "md" | "lg" }) {
  const textSize = size === "sm" ? "text-[1rem]" : size === "lg" ? "text-[1.5rem]" : "text-[1.15rem]";
  const subSize  = size === "sm" ? "text-[0.38rem]" : size === "lg" ? "text-[0.52rem]" : "text-[0.43rem]";

  return (
    <div className="flex flex-col leading-none">
      <span
        className={`font-display font-medium tracking-[0.14em] uppercase ${textSize} ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        Two Bears
      </span>
      <div
        className={`my-[3px] h-px ${
          light ? "bg-white/30" : "bg-foreground/18"
        }`}
      />
      <span
        className={`label-eyebrow tracking-[0.26em] ${subSize} ${
          light ? "text-white/80" : "text-muted-foreground/65"
        }`}
      >
        Renovation
      </span>
    </div>
  );
}
