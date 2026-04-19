interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <div className="relative mb-10 animate-fade-up">
      {/* subtle glow behind title */}
      <div className="pointer-events-none absolute -top-10 -left-10 h-48 w-[420px] rounded-full bg-primary/10 blur-3xl" />
      <div className="relative flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          {eyebrow && <div className="eyebrow-accent mb-3">{eyebrow}</div>}
          <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-[1.05] text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {children && <div className="flex flex-wrap items-center gap-2 shrink-0">{children}</div>}
      </div>
      <div className="mt-6 h-px w-full divider-ember opacity-60" />
    </div>
  );
}
