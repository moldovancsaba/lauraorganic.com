import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Eye, Zap } from "lucide-react";

const players = [
  { name: "Kylian Mbappé", pos: "LW · PSG → RM", strengths: ["Speed", "1v1", "Finishing"], stat: "5 dribbles", insight: "Proof of his 1v1 dominance under pressure." },
  { name: "Jude Bellingham", pos: "CM · Real Madrid", strengths: ["Box arrivals", "Press", "Drive"], stat: "4 chances created", insight: "Late runs win games — train arrival timing." },
  { name: "Rodri", pos: "DM · Man City", strengths: ["Positioning", "Passing", "IQ"], stat: "94% pass acc.", insight: "Decisions before the ball arrives." },
];

const Intel = () => {
  return (
    <AppLayout>
      <div className="p-6 md:p-10 lg:p-12">
        <PageHeader
          eyebrow="Pro · Player Intelligence"
          title="Real football. Real lessons."
          description="Follow elite players. We translate their stats into training you can do tonight."
        />

        <div className="grid gap-5 md:grid-cols-3 mb-10">
          {players.map((p) => (
            <Card key={p.name} className="card-elevated border-border/60 p-6 group hover:border-primary/40 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-display font-bold text-lg leading-tight">{p.name}</h3>
                  <div className="text-xs text-muted-foreground">{p.pos}</div>
                </div>
                <Sparkles className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.strengths.map((s) => (
                  <span key={s} className="text-[10px] uppercase tracking-wider rounded-full bg-primary/10 text-primary px-2 py-0.5">{s}</span>
                ))}
              </div>

              <div className="rounded-lg border border-border/60 bg-background/40 p-3 mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="h-3.5 w-3.5 text-primary" />
                  <span className="font-mono text-sm font-medium">{p.stat}</span>
                  <span className="text-xs text-muted-foreground ml-auto">last match</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.insight}</p>
              </div>

              <Button size="sm" className="w-full bg-gradient-primary text-primary-foreground">
                <Zap className="h-3.5 w-3.5 mr-2" /> Train like {p.name.split(" ")[0]}
              </Button>
            </Card>
          ))}
        </div>

        <Card className="card-elevated border-border/60 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Eye className="h-4 w-4 text-primary" />
            <h3 className="font-display font-bold">Position benchmarks · Winger</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Sprints / 90", "28", "Top 10%"],
              ["1v1 attempts", "9", "Elite"],
              ["Scans pre-receive", "6–8", "Goal"],
              ["Final-third entries", "12", "Strong"],
            ].map(([l, v, tag]) => (
              <div key={l} className="rounded-lg border border-border/60 p-4">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{l}</div>
                <div className="font-display text-2xl font-bold">{v}</div>
                <div className="text-xs text-primary">{tag}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Intel;
