import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { DomainBadge } from "@/components/DomainBadge";
import { cohort } from "@/lib/spl-index";
import { cn } from "@/lib/utils";
import {
  Search, Sparkles, Trophy, Users, ArrowUpRight, Flame,
  Eye, UserPlus, Target, Footprints, Brain, Zap, MapPin, BarChart3,
} from "lucide-react";

const players = [
  { name: "Luca M.",   age: "U14", pos: "Winger",  spl: 78, loc: "Berlin",   strengths: ["Dribbling", "Acceleration"], delta: +6 },
  { name: "Yusuf K.",  age: "U14", pos: "CAM",     spl: 76, loc: "Hamburg",  strengths: ["Scanning", "Passing"],       delta: +4 },
  { name: "Arjun S.",  age: "U15", pos: "Striker", spl: 81, loc: "Munich",   strengths: ["Finishing", "Off-ball"],     delta: +9 },
  { name: "Tomás R.",  age: "U13", pos: "CDM",     spl: 70, loc: "Lisbon",   strengths: ["Discipline", "First touch"], delta: +3 },
  { name: "Noah V.",   age: "U16", pos: "FB",      spl: 83, loc: "Amsterdam",strengths: ["Endurance", "Crossing"],     delta: +5 },
  { name: "Marco J.",  age: "U14", pos: "Winger",  spl: 74, loc: "You",      strengths: ["1v1", "Focus"],              delta: +3, you: true },
];

const feed = [
  { who: "Arjun S.",  what: "broke a personal record · 10m sprint 1.71s", icon: Zap,        kind: "physical" },
  { who: "Noah V.",   what: "completed Path: Become a Winger",            icon: Trophy,     kind: "technical" },
  { who: "Yusuf K.",  what: "scanning improved to 7.2/min in match",      icon: Brain,      kind: "cognitive" },
  { who: "Luca M.",   what: "earned the 30-day streak badge",             icon: Flame,      kind: "mental" },
];

const challenges = [
  { t: "April 10m sprint",       sub: "Submit your fastest split",   joined: 1243, mine: "1.94s", icon: Zap },
  { t: "First-touch ladder",     sub: "Most clean touches in 30s",   joined:  876, mine: "22",    icon: Footprints },
  { t: "Scanning under pressure",sub: "Scans before receiving",      joined:  512, mine: "5.1",   icon: Brain },
];

const cohorts = [
  { t: "U14 · Wingers · Level 3",        size: 11, weekly: "Most 1v1 wins · 3-day window" },
  { t: "European U14 academy hopefuls",  size:  9, weekly: "Best weekly SPL delta" },
];

const insights = [
  "Top U14 wingers scan 6–8 times before receiving.",
  "Players with your profile train 3.2× per week on average.",
  "Elite trajectory U14s gain +8 SPL Index over 12 weeks.",
];

export default function Network() {
  const [tab, setTab] = useState<"discover" | "feed" | "challenges" | "cohorts" | "compare">("discover");

  return (
    <AppLayout>
      <div className="p-6 md:p-10 space-y-8">
        <PageHeader
          eyebrow="Network · Development-focused"
          title="Train alone. Grow with players like you."
          description="Discover, benchmark and challenge — without the noise of social media. Every interaction here ties back to your SPL Index."
        >
          <Button variant="outline" size="sm"><Eye className="h-4 w-4" /> Profile visibility</Button>
          <Button size="sm" className="bg-gradient-ember text-primary-foreground shadow-ember">
            <Trophy className="h-4 w-4" /> Join challenge
          </Button>
        </PageHeader>

        {/* tabs */}
        <div className="flex flex-wrap gap-2">
          {([
            ["discover",   "Discover",   Users],
            ["compare",    "Compare",    BarChart3],
            ["challenges", "Challenges", Trophy],
            ["cohorts",    "Cohorts",    Sparkles],
            ["feed",       "Activity",   Flame],
          ] as const).map(([k, label, Icon]) => {
            const on = tab === k;
            return (
              <button
                key={k}
                onClick={() => setTab(k as typeof tab)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium transition-all",
                  on ? "border-primary bg-primary/15 text-primary ring-ember" : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                <Icon className="h-3.5 w-3.5" /> {label}
              </button>
            );
          })}
        </div>

        {tab === "discover" && (
          <>
            <Card className="p-4 flex items-center gap-3">
              <Search className="h-4 w-4 text-muted-foreground ml-1" />
              <Input placeholder="Search by position, age, level, location…" className="border-0 focus-visible:ring-0 bg-transparent h-9" />
              <div className="hidden md:flex items-center gap-1.5">
                {["U13", "U14", "U15", "U16"].map((t) => <Tag key={t}>{t}</Tag>)}
                {["Winger", "CAM", "Striker"].map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {players.map((p) => (
                <Card key={p.name} className={cn("p-5 group hover:border-primary/40 transition-all", p.you && "border-primary/40 ring-ember")}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-xl bg-gradient-ember flex items-center justify-center font-display font-bold text-primary-foreground shadow-ember">
                        {p.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold leading-tight flex items-center gap-2">{p.name}{p.you && <span className="text-[9px] uppercase tracking-wider text-primary">you</span>}</div>
                        <div className="text-[11px] text-muted-foreground">{p.age} · {p.pos} · <span className="inline-flex items-center gap-0.5"><MapPin className="h-3 w-3" />{p.loc}</span></div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-display text-2xl font-bold text-gradient leading-none">{p.spl}</div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">+{p.delta} / mo</div>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.strengths.map((s) => <Tag key={s}>{s}</Tag>)}
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    {!p.you && <>
                      <Button size="sm" variant="outline" className="flex-1"><UserPlus className="h-3.5 w-3.5" /> Follow</Button>
                      <Button size="sm" variant="ghost" className="flex-1"><BarChart3 className="h-3.5 w-3.5" /> Compare</Button>
                    </>}
                    {p.you && <Button size="sm" className="flex-1 bg-gradient-ember text-primary-foreground shadow-ember">Edit profile</Button>}
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}

        {tab === "compare" && (
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
            <Card className="p-6">
              <div className="eyebrow-accent">Compare yourself</div>
              <div className="font-display text-2xl font-bold mt-1">vs cohort · U14 wingers</div>
              <div className="text-xs text-muted-foreground mt-1">{cohort.cohortSize.toLocaleString()} players · April snapshot</div>

              <div className="mt-6 space-y-4">
                {[
                  { l: "SPL Index",      you: 74, them: cohort.cohortAverage,   top: 88 },
                  { l: "First touch",    you: 72, them: 68,                     top: 86 },
                  { l: "Scanning / min", you: 48, them: 65,                     top: 82 },
                  { l: "Sprint 10m",     you: 72, them: 66,                     top: 90 },
                ].map((r) => (
                  <div key={r.l}>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-muted-foreground">{r.l}</span>
                      <span className="tabular-nums">you <span className="font-semibold text-foreground">{r.you}</span> · avg {r.them} · top {r.top}</span>
                    </div>
                    <div className="relative h-2 rounded-full bg-secondary overflow-hidden">
                      <div className="absolute inset-y-0 bg-muted-foreground/30" style={{ width: `${r.them}%` }} />
                      <div className="absolute inset-y-0 bg-gradient-ember" style={{ width: `${r.you}%` }} />
                      <div className="absolute top-0 bottom-0 w-px bg-foreground/60" style={{ left: `${r.top}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <div className="eyebrow-accent">Player insights</div>
              <div className="font-display text-2xl font-bold mt-1">Learn from players like you</div>
              <div className="mt-5 space-y-3">
                {insights.map((s) => (
                  <div key={s} className="flex items-start gap-3 rounded-lg border border-border bg-card/50 p-3">
                    <Sparkles className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <div className="text-sm leading-snug">{s}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-4">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-primary"><Target className="h-3 w-3" /> Pathway visibility</div>
                <div className="font-medium text-sm mt-2">Noah V. moved from SPL 70 → 83 in 14 weeks.</div>
                <div className="text-xs text-muted-foreground mt-1">3× weekly Path: Become a Winger · daily scanning drill · weekly clip review.</div>
                <Button size="sm" variant="outline" className="mt-3">See pathway <ArrowUpRight className="h-3.5 w-3.5" /></Button>
              </div>
            </Card>
          </div>
        )}

        {tab === "challenges" && (
          <div className="grid md:grid-cols-3 gap-4">
            {challenges.map((c) => (
              <Card key={c.t} className="p-5">
                <div className="h-10 w-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-3"><c.icon className="h-5 w-5" /></div>
                <div className="font-semibold">{c.t}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{c.sub}</div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Your best</div>
                    <div className="font-display text-2xl font-bold text-gradient">{c.mine}</div>
                  </div>
                  <div className="text-right text-[11px] text-muted-foreground"><Users className="h-3 w-3 inline" /> {c.joined.toLocaleString()} joined</div>
                </div>
                <Button size="sm" className="w-full mt-4 bg-gradient-ember text-primary-foreground shadow-ember">Submit attempt</Button>
              </Card>
            ))}

            <Card className="p-5 md:col-span-3 border-primary/30">
              <div className="flex items-center justify-between">
                <div>
                  <div className="eyebrow-accent">Compete vs AI</div>
                  <div className="font-display text-xl font-bold mt-1">Beat the U14 elite benchmark</div>
                  <div className="text-sm text-muted-foreground mt-1">Run any challenge solo and we'll match your result against age-group standards in real-time.</div>
                </div>
                <Button className="bg-gradient-ember text-primary-foreground shadow-ember"><Sparkles className="h-4 w-4" /> Start AI challenge</Button>
              </div>
            </Card>
          </div>
        )}

        {tab === "cohorts" && (
          <div className="grid md:grid-cols-2 gap-4">
            {cohorts.map((c) => (
              <Card key={c.t} className="p-6">
                <div className="flex items-center justify-between">
                  <DomainBadge domain="cognitive" label={`${c.size} players`} size="sm" />
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">private pod</span>
                </div>
                <div className="font-display text-xl font-bold mt-3">{c.t}</div>
                <div className="text-xs text-muted-foreground mt-1">This week · {c.weekly}</div>
                <Progress value={62} className="h-1.5 mt-4" />
                <div className="text-[10px] text-muted-foreground mt-2">Your rank: 3 of {c.size}</div>
                <Button size="sm" className="mt-4 w-full" variant="outline">Open cohort</Button>
              </Card>
            ))}
          </div>
        )}

        {tab === "feed" && (
          <Card className="p-6">
            <div className="eyebrow-accent">Activity · controlled feed</div>
            <div className="font-display text-xl font-bold mt-1">Only milestones, results & improvements</div>
            <div className="mt-5 space-y-2">
              {feed.map((e, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg border border-border bg-card/50 p-3">
                  <div className="h-9 w-9 rounded-lg flex items-center justify-center"
                       style={{ background: `hsl(var(--domain-${e.kind}) / 0.15)`, color: `hsl(var(--domain-${e.kind}))` }}>
                    <e.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 text-sm"><span className="font-medium">{e.who}</span> <span className="text-muted-foreground">{e.what}</span></div>
                  <Button size="sm" variant="ghost">React</Button>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </AppLayout>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-card px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
      {children}
    </span>
  );
}
