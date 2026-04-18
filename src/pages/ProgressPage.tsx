import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Flame, Calendar, Award } from "lucide-react";

const ProgressPage = () => {
  const stats = [
    { label: "Sessions completed", value: "42", icon: Calendar, sub: "last 30 days" },
    { label: "Day streak", value: "12", icon: Flame, sub: "personal best 18" },
    { label: "SPL Index", value: "74", icon: TrendingUp, sub: "+3 this week" },
    { label: "Achievements", value: "7", icon: Award, sub: "2 new unlocked" },
  ];

  const skills = [
    { name: "First touch", value: 78 },
    { name: "Passing accuracy", value: 82 },
    { name: "1v1 success", value: 64 },
    { name: "Sprint capacity", value: 71 },
    { name: "Scanning rate", value: 58 },
    { name: "Confidence", value: 84 },
  ];

  return (
    <AppLayout>
      <div className="p-6 md:p-10 lg:p-12">
        <PageHeader eyebrow="Progress" title="The work, made visible." />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {stats.map((s) => (
            <Card key={s.label} className="card-elevated border-border/60 p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
                <s.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="font-display text-3xl font-bold">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>
            </Card>
          ))}
        </div>

        <Card className="card-elevated border-border/60 p-6 mb-8">
          <h3 className="font-display text-xl font-bold mb-1">Consistency</h3>
          <p className="text-sm text-muted-foreground mb-6">Last 12 weeks</p>
          <div className="grid grid-cols-12 gap-1.5">
            {Array.from({ length: 84 }).map((_, i) => {
              const v = Math.random();
              const cls = v > 0.75 ? "bg-primary" : v > 0.45 ? "bg-primary/50" : v > 0.2 ? "bg-primary/20" : "bg-muted";
              return <div key={i} className={`aspect-square rounded-sm ${cls}`} />;
            })}
          </div>
        </Card>

        <Card className="card-elevated border-border/60 p-6">
          <h3 className="font-display text-xl font-bold mb-6">Skill overview</h3>
          <div className="space-y-4">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span>{s.name}</span>
                  <span className="font-mono text-primary">{s.value}</span>
                </div>
                <Progress value={s.value} className="h-1.5 bg-muted" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppLayout>
  );
};

export default ProgressPage;
