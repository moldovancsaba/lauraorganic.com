import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DomainBadge } from "@/components/DomainBadge";
import {
  Target, Trophy, Lock, Check, Compass, Sparkles, Plus, Flame,
  Footprints, Brain, Activity, Zap, ArrowUpRight,
} from "lucide-react";

const paths = [
  { name: "Become a Winger", weeks: 12, progress: 42, focus: "Speed · 1v1 · Crosses", level: "Advanced", icon: Zap },
  { name: "Improve Finishing", weeks: 6, progress: 78, focus: "Box presence · Composure", level: "Intermediate", icon: Target },
  { name: "Build Confidence", weeks: 4, progress: 25, focus: "Routines · Habits · Voice", level: "All levels", icon: Activity },
  { name: "Press Like a #10", weeks: 8, progress: 0, focus: "Triggers · Cover shadow", level: "Advanced", icon: Brain },
  { name: "Rock-solid First Touch", weeks: 6, progress: 0, focus: "Wall work · Reception", level: "Beginner", icon: Footprints },
  { name: "Match-day Mindset", weeks: 4, progress: 0, focus: "Pre-game · Reset · Reflection", level: "All levels", icon: Sparkles },
];

const milestones = [
  { week: "Week 1–2", title: "Foundation", domain: "technical" as const, status: "done" },
  { week: "Week 3–4", title: "Acceleration mechanics", domain: "physical" as const, status: "done" },
  { week: "Week 5–6", title: "1v1 in the channel", domain: "technical" as const, status: "current" },
  { week: "Week 7–8", title: "Decision under pressure", domain: "cognitive" as const, status: "locked" },
  { week: "Week 9–10", title: "Crossing & assists", domain: "technical" as const, status: "locked" },
  { week: "Week 11–12", title: "Match application", domain: "mental" as const, status: "locked" },
];

const Paths = () => (
  <AppLayout>
    <div className="p-6 md:p-10 lg:p-12">
      <PageHeader
        eyebrow="Training Paths"
        title="Your journey, mapped."
        description="Pick a destination — your AI coach builds the multi-week curriculum and adapts every week based on your data."
      >
        <Button variant="outline" size="sm"><Compass className="h-3.5 w-3.5 mr-2" />Explore</Button>
        <Button size="sm" className="bg-gradient-ember text-primary-foreground shadow-ember"><Plus className="h-3.5 w-3.5 mr-2" />New path</Button>
      </PageHeader>

      {/* Active path */}
      <Card className="card-elevated border-border/60 p-6 md:p-8 mb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-60" />
        <div className="relative grid lg:grid-cols-[1fr_auto] gap-6 items-end">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-primary mb-2">Active path · Week 5 of 12</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Become a Winger</h2>
            <p className="text-sm text-muted-foreground max-w-lg mb-4">
              Built around your sprint profile and weak-foot data. Next milestone unlocks at 50% completion.
            </p>
            <div className="flex items-center gap-3 max-w-md">
              <Progress value={42} className="h-1.5 flex-1" />
              <span className="font-mono text-sm text-primary">42%</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button size="lg" className="bg-gradient-ember text-primary-foreground shadow-ember">
              <Flame className="h-4 w-4 mr-2" />Continue path
            </Button>
            <Button size="lg" variant="outline">View curriculum <ArrowUpRight className="h-3.5 w-3.5 ml-1" /></Button>
          </div>
        </div>
      </Card>

      {/* Milestones rail */}
      <div className="mb-12">
        <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-4">Milestones</div>
        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
          {milestones.map((m, i) => (
            <Card
              key={i}
              className={`p-4 border-border/60 relative ${
                m.status === "current" ? "border-primary/60 bg-primary/5" : ""
              } ${m.status === "locked" ? "opacity-50" : ""}`}
            >
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{m.week}</div>
              <div className="font-medium text-sm mb-3">{m.title}</div>
              <div className="flex items-center justify-between">
                <DomainBadge domain={m.domain} label={m.domain} />
                {m.status === "done" && <div className="h-6 w-6 rounded-full bg-primary/15 flex items-center justify-center"><Check className="h-3 w-3 text-primary" /></div>}
                {m.status === "current" && <div className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />}
                {m.status === "locked" && <Lock className="h-3.5 w-3.5 text-muted-foreground" />}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* All paths */}
      <div>
        <div className="flex items-end justify-between mb-4">
          <h3 className="font-display text-xl font-bold">All paths</h3>
          <span className="text-xs text-muted-foreground">{paths.length} available</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paths.map((p) => (
            <Card key={p.name} className="card-elevated border-border/60 p-5 group hover:border-primary/40 transition-all cursor-pointer relative overflow-hidden">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{p.level}</span>
                </div>
                <h4 className="font-display font-bold text-lg mb-1">{p.name}</h4>
                <p className="text-xs text-muted-foreground mb-4">{p.focus}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                  <span>{p.weeks} weeks</span>
                  <span className="font-mono text-primary">{p.progress}%</span>
                </div>
                <Progress value={p.progress} className="h-1 bg-muted" />
                <Button size="sm" variant="ghost" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {p.progress > 0 ? "Continue" : "Start path"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </AppLayout>
);

export default Paths;
