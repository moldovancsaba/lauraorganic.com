import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type Domain = "technical" | "physical" | "cognitive" | "mental" | "recovery";

interface DomainBadgeProps {
  domain: Domain;
  icon?: LucideIcon;
  label: string;
  className?: string;
}

const styles: Record<Domain, string> = {
  technical: "bg-domain-technical/15 text-domain-technical border-domain-technical/30",
  physical: "bg-domain-physical/15 text-domain-physical border-domain-physical/30",
  cognitive: "bg-domain-cognitive/15 text-domain-cognitive border-domain-cognitive/30",
  mental: "bg-domain-mental/15 text-domain-mental border-domain-mental/30",
  recovery: "bg-domain-recovery/15 text-domain-recovery border-domain-recovery/30",
};

export function DomainBadge({ domain, icon: Icon, label, className }: DomainBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        styles[domain],
        className,
      )}
    >
      {Icon && <Icon className="h-3 w-3" />}
      {label}
    </span>
  );
}
