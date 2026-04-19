import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type Domain = "technical" | "physical" | "cognitive" | "mental" | "recovery";

interface DomainBadgeProps {
  domain: Domain;
  icon?: LucideIcon;
  label: string;
  className?: string;
  size?: "sm" | "md";
}

const styles: Record<Domain, string> = {
  technical: "bg-domain-technical/10 text-domain-technical border-domain-technical/30",
  physical: "bg-domain-physical/10 text-domain-physical border-domain-physical/30",
  cognitive: "bg-domain-cognitive/10 text-domain-cognitive border-domain-cognitive/30",
  mental: "bg-domain-mental/10 text-domain-mental border-domain-mental/30",
  recovery: "bg-domain-recovery/10 text-domain-recovery border-domain-recovery/30",
};

const dotStyles: Record<Domain, string> = {
  technical: "bg-domain-technical shadow-[0_0_8px_hsl(var(--domain-technical))]",
  physical: "bg-domain-physical shadow-[0_0_8px_hsl(var(--domain-physical))]",
  cognitive: "bg-domain-cognitive shadow-[0_0_8px_hsl(var(--domain-cognitive))]",
  mental: "bg-domain-mental shadow-[0_0_8px_hsl(var(--domain-mental))]",
  recovery: "bg-domain-recovery shadow-[0_0_8px_hsl(var(--domain-recovery))]",
};

export function DomainBadge({ domain, icon: Icon, label, className, size = "sm" }: DomainBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium capitalize",
        size === "sm" ? "px-2.5 py-0.5 text-[11px]" : "px-3 py-1 text-xs",
        styles[domain],
        className,
      )}
    >
      {Icon ? (
        <Icon className={size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5"} />
      ) : (
        <span className={cn("h-1.5 w-1.5 rounded-full", dotStyles[domain])} />
      )}
      {label}
    </span>
  );
}
