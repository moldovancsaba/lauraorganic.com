import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DomainBadge } from "@/components/DomainBadge";
import {
  Trophy, MapPin, Calendar, Clock, Sparkles, Wind, Activity,
  ArrowUpRight, Plus, Target, ChevronRight, Flame,
} from "lucide-react";

const upcoming = { opp: "FC Eagles", date: "Sat · 15:00", venue: "Home", form: ["W","D","W","L","W"], readiness: 78 };

const past = [
  { opp: "Vipers United", score: "2-1", role: "RW", rating: 7.8, mins: 78, key: ["1 goal", "3 dribbles", "1 KP"] },
  { opp: "North FC", score: "0-0", role: "RW", rating: 6.4, mins: 90, key: ["2 KP", "1 shot"] },
  { opp: "Riverside", score: "3-2", role: "LW", rating: 8.1, mins: 90, key: ["1 goal", "1 assist", "5 dribbles"] },
];

const MatchCenter = () => (
  <AppLayout>
    <div className="p-6 md:p-10 lg:p-12">
      <PageHeader
        eyebrow="Match Center"
        title="Match-day intelligence."
        description="Pre-game readiness, opponent scouting and post-match self-analysis — built into your training cycle."
      >
        <Button variant="outline" size="sm"><Plus className="h-3.5 w-3.5 mr-2" />Log match</Button>
      </PageHeader>

      {/* Upcoming hero */}
      <Card className="card-elevated border-border/60 p-6 md:p-8 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-primary mb-2">Match −2 days</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-3">vs {upcoming.opp}</h2>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{upcoming.date}</span>
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" />{upcoming.venue}</span>
              <span className="flex items-center gap-1.5"><Wind className="h-4 w-4" />Light wind · 14°C</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <DomainBadge domain="technical" label="Sharpen 1v1" />
              <DomainBadge domain="cognitive" label="Press triggers" />
              <DomainBadge domain="mental" label="Pre-game routine" />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button className="bg-gradient-ember text-primary-foreground shadow-ember">
                <Sparkles className="h-4 w-4 mr-2" />Open match prep plan
              </Button>
              <Button variant="outline">Scout opponent <ArrowUpRight className="h-3.5 w-3.5 ml-1" /></Button>
            </div>
          </div>

          <Card className="border-border/60 p-5 bg-background/60 backdrop-blur">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Readiness</div>
                <div className="font-display text-4xl font-bold text-gradient">{upcoming.readiness}%</div>
              </div>
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-3">
              {[
                { l: "Physical load", v: 72 },
                { l: "Mental focus", v: 84 },
                { l: "Recovery", v: 78 },
                { l: "Tactical clarity", v: 80 },
              ].map((r) => (
                <div key={r.l}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">{r.l}</span>
                    <span className="font-mono">{r.v}</span>
                  </div>
                  <Progress value={r.v} className="h-1 bg-muted" />
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border/60 text-xs text-muted-foreground">
              Recent form: {upcoming.form.map((f, i) => (
                <span key={i} className={`inline-block w-5 h-5 rounded mx-0.5 text-center text-[10px] font-bold leading-5 ${
                  f === "W" ? "bg-primary/20 text-primary" :
                  f === "D" ? "bg-muted text-foreground" :
                  "bg-domain-physical/15 text-domain-physical"
                }`}>{f}</span>
              ))}
            </div>
          </Card>
        </div>
      </Card>

      {/* 4-day prep plan */}
      <div className="mb-10">
        <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-4">4-day match prep</div>
        <div className="grid gap-3 md:grid-cols-4">
          {[
            { d: "Thu · MD-2", focus: "Heavy technical", color: "technical" as const },
            { d: "Fri · MD-1", focus: "Light + tactical", color: "cognitive" as const },
            { d: "Sat · MD", focus: "Match", color: "mental" as const },
            { d: "Sun · MD+1", focus: "Active recovery", color: "recovery" as const },
          ].map((d, i) => (
            <Card key={i} className="card-elevated border-border/60 p-4">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">{d.d}</div>
              <div className="font-medium text-sm mb-3">{d.focus}</div>
              <DomainBadge domain={d.color} label={d.color} />
            </Card>
          ))}
        </div>
      </div>

      {/* Past matches */}
      <div>
        <div className="flex items-end justify-between mb-4">
          <h3 className="font-display text-xl font-bold">Past matches</h3>
          <Button variant="ghost" size="sm" className="text-muted-foreground">Season log <ChevronRight className="h-3.5 w-3.5 ml-1" /></Button>
        </div>
        <div className="space-y-3">
          {past.map((m, i) => (
            <Card key={i} className="card-elevated border-border/60 p-4 hover:border-primary/40 transition-colors cursor-pointer">
              <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
                <div className="text-center">
                  <div className="font-display text-2xl font-bold">{m.score}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{m.role} · {m.mins}'</div>
                </div>
                <div>
                  <div className="font-medium">vs {m.opp}</div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {m.key.map((k) => <span key={k} className="text-[10px] rounded bg-muted px-1.5 py-0.5">{k}</span>)}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <div className="font-display text-2xl font-bold text-gradient">{m.rating}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </AppLayout>
);

export default MatchCenter;
