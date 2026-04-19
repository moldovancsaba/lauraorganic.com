import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DomainBadge } from "@/components/DomainBadge";
import { weeklyPlan } from "@/lib/spl-index";
import { cn } from "@/lib/utils";
import {
  Flame, Trophy, CheckCircle2, Circle, RotateCcw, Calendar as CalendarIcon,
  Sparkles, Target, Clock, Users, Plus, AlertCircle, TrendingUp,
} from "lucide-react";

const typeToDomain: Record<string, string> = {
  Technical: "technical", Cognitive: "cognitive", Physical: "physical",
  Recovery: "recovery", Mental: "mental", Match: "technical", Rest: "recovery",
};

// 12 weeks of consistency (heatmap)
const heatmap = Array.from({ length: 84 }).map((_, i) => {
  const seed = (i * 9301 + 49297) % 233280 / 233280;
  if (i > 78) return 0;
  return seed > 0.78 ? 3 : seed > 0.5 ? 2 : seed > 0.25 ? 1 : 0;
});

const upcoming = [
  { d: "Apr 22", t: "Bundesliga Q&A live · Coach Müller", kind: "live"   },
  { d: "Apr 27", t: "vs Eagles FC · away kick-off 14:00", kind: "match"  },
  { d: "May 04", t: "SPL Speed Camp · 3-day intensive",   kind: "camp"   },
];

export default function CalendarPage() {
  const [selected, setSelected] = useState(1); // index in weeklyPlan
  const day = weeklyPlan[selected];
  const completed = weeklyPlan.filter((d) => d.status === "done").length;
  const goal = 4;

  return (
    <AppLayout>
      <div className="p-6 md:p-10 space-y-8">
        <PageHeader
          eyebrow="Calendar · Smart scheduling"
          title="Your training week, organized."
          description="Coach Alex builds your week from your availability and adapts around matches, fatigue and missed sessions."
        >
          <Button variant="outline" size="sm"><Plus className="h-4 w-4" /> Add event</Button>
          <Button size="sm" className="bg-gradient-ember text-primary-foreground shadow-ember">
            <Sparkles className="h-4 w-4" /> Regenerate week
          </Button>
        </PageHeader>

        {/* week strip + day detail */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="eyebrow-accent">This week · Apr 21 – 27</div>
                <div className="font-display text-xl font-bold mt-1">Mon → Sun overview</div>
              </div>
              <div className="text-xs text-muted-foreground">{completed}/{goal} sessions toward weekly goal</div>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {weeklyPlan.map((d, i) => {
                const active = i === selected;
                const isDone = d.status === "done";
                const isToday = d.status === "today";
                return (
                  <button
                    key={d.day}
                    onClick={() => setSelected(i)}
                    className={cn(
                      "rounded-xl border p-3 text-left transition-all",
                      active ? "border-primary bg-primary/10 ring-ember" : "border-border bg-card/50 hover:border-primary/40",
                      isToday && !active && "border-primary/40"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{d.day}</div>
                      {isDone && <CheckCircle2 className="h-3.5 w-3.5 text-primary" />}
                      {isToday && <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />}
                    </div>
                    <div className="mt-2 text-xs font-medium leading-tight line-clamp-2">{d.type}</div>
                    <div className="mt-3 text-[10px] text-muted-foreground">{d.duration}m</div>
                  </button>
                );
              })}
            </div>

            <Progress value={(completed / goal) * 100} className="h-1.5 mt-6" />
            <div className="text-[11px] text-muted-foreground mt-2">Weekly goal · 4 sessions · {Math.max(0, goal - completed)} to go</div>
          </Card>

          {/* day detail */}
          <Card className={cn("p-6", day.status === "today" && "border-primary/40 ring-ember")}>
            <div className="flex items-center justify-between mb-3">
              <DomainBadge domain={(typeToDomain[day.type] ?? "technical") as any} label={day.type} />
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{day.day} · detail</div>
            </div>
            <div className="font-display text-2xl font-bold tracking-tight">{day.focus}</div>
            <div className="mt-2 text-sm text-muted-foreground flex items-center gap-3">
              <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{day.duration} min</span>
              <span>·</span>
              <span className="capitalize">{day.status}</span>
            </div>

            <div className="mt-5 space-y-2">
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Drill breakdown</div>
              {[
                { n: "Warm-up · activation", m: 6 },
                { n: "Main block · " + day.focus, m: Math.max(15, day.duration - 15) },
                { n: "Cool-down · mobility", m: 9 },
              ].map((b) => (
                <div key={b.n} className="flex items-center justify-between rounded-md border border-border bg-card/50 px-3 py-2 text-xs">
                  <span>{b.n}</span><span className="tabular-nums text-muted-foreground">{b.m}m</span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-2">
              {day.status === "today" && <Button size="sm" className="bg-gradient-ember text-primary-foreground shadow-ember">Start</Button>}
              <Button size="sm" variant="outline"><RotateCcw className="h-4 w-4" /> Reschedule</Button>
              {day.status !== "done" && <Button size="sm" variant="ghost"><Circle className="h-4 w-4" /> Mark complete</Button>}
            </div>
          </Card>
        </div>

        {/* smart scheduling notes */}
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { i: AlertCircle, t: "Match day Saturday", d: "Friday auto-shifted to a lighter activation block.", c: "domain-physical" },
            { i: Sparkles,    t: "Adaptive logic",     d: "Energy logged 5/5 on Tue → intensity bumped +1 step.", c: "domain-cognitive" },
            { i: Trophy,      t: "Goal-based week",    d: "On track for 4-session streak goal.",                  c: "domain-technical" },
          ].map((n) => (
            <Card key={n.t} className="p-5">
              <div className="h-9 w-9 rounded-lg flex items-center justify-center mb-3"
                style={{ background: `hsl(var(--${n.c}) / 0.15)`, color: `hsl(var(--${n.c}))` }}>
                <n.i className="h-4 w-4" />
              </div>
              <div className="text-sm font-semibold">{n.t}</div>
              <div className="text-xs text-muted-foreground mt-1">{n.d}</div>
            </Card>
          ))}
        </div>

        {/* streak heatmap */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="eyebrow-accent">Consistency</div>
              <div className="font-display text-xl font-bold mt-1 flex items-center gap-2">
                <Flame className="h-5 w-5 text-primary" />12-week training heatmap
              </div>
            </div>
            <div className="text-right">
              <div className="font-display text-3xl font-bold text-gradient">23</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">day streak</div>
            </div>
          </div>
          <div className="grid grid-cols-[repeat(12,minmax(0,1fr))] gap-1.5">
            {Array.from({ length: 7 }).map((_, row) =>
              Array.from({ length: 12 }).map((_, col) => {
                const v = heatmap[row * 12 + col];
                const opacity = v === 0 ? 0.08 : v === 1 ? 0.3 : v === 2 ? 0.6 : 1;
                return (
                  <div key={`${row}-${col}`} className="aspect-square rounded-sm"
                       style={{ background: `hsl(var(--primary) / ${opacity})` }} />
                );
              })
            )}
          </div>
          <div className="mt-4 flex items-center gap-2 text-[10px] text-muted-foreground">
            <span>Less</span>
            {[0.08, 0.3, 0.6, 1].map((o) => (
              <span key={o} className="h-3 w-3 rounded-sm" style={{ background: `hsl(var(--primary) / ${o})` }} />
            ))}
            <span>More</span>
          </div>
        </Card>

        {/* events */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="eyebrow-accent">Event layer</div>
              <div className="font-display text-xl font-bold mt-1">Upcoming · camps, live & matches</div>
            </div>
            <Button variant="outline" size="sm"><CalendarIcon className="h-4 w-4" /> Sync calendar</Button>
          </div>
          <div className="space-y-2">
            {upcoming.map((e) => (
              <div key={e.t} className="flex items-center gap-4 rounded-lg border border-border bg-card/50 px-4 py-3">
                <div className="font-display text-lg font-bold w-20 tabular-nums">{e.d}</div>
                <div className="flex-1 text-sm">{e.t}</div>
                <DomainBadge domain={e.kind === "match" ? "physical" : e.kind === "camp" ? "technical" : "mental" as any} label={e.kind} size="sm" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
