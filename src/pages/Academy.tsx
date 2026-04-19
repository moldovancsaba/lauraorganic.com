import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles, Search, ChevronRight, Zap, Shield, Target, Compass,
  ArrowUpRight, BookOpen, Send, Crown, Trophy, Users,
} from "lucide-react";

const systems = [
  { club: "Borussia Dortmund", system: "Gegenpressing 4-2-3-1", tag: "High intensity", tags: ["Press", "Counter"] },
  { club: "Manchester City", system: "Positional 4-3-3", tag: "Possession", tags: ["Build-up", "Half-spaces"] },
  { club: "Real Madrid", system: "Counter 4-3-3", tag: "Transition", tags: ["Direct", "Vinícius wide"] },
  { club: "Ajax", system: "Total Football 4-3-3", tag: "Fluid roles", tags: ["Rotations", "Width"] },
  { club: "Liverpool", system: "Klopp Press 4-3-3", tag: "Heavy metal", tags: ["High line", "Inverted FB"] },
  { club: "FC Barcelona", system: "Positional Play 4-3-3", tag: "Tiki-taka 2.0", tags: ["Triangles", "5-lane"] },
  { club: "Atlético Madrid", system: "Block 4-4-2", tag: "Compact", tags: ["Cover shadow", "Two banks"] },
  { club: "Brighton", system: "Build-up 3-4-3", tag: "Modern", tags: ["Inverted 8s", "Patterns"] },
];

const trainLike = [
  { p: "Mbappé", role: "LW", traits: ["Speed", "1v1", "Finishing"], color: "domain-physical" },
  { p: "Bellingham", role: "CM", traits: ["Box arrivals", "Press", "Carry"], color: "domain-mental" },
  { p: "Rodri", role: "DM", traits: ["Scan", "Pivot", "Tempo"], color: "domain-cognitive" },
  { p: "Yamal", role: "RW", traits: ["Dribble", "Cut-in", "Vision"], color: "domain-technical" },
];

const Academy = () => (
  <AppLayout>
    <div className="p-6 md:p-10 lg:p-12">
      <PageHeader
        eyebrow="Academy · Tactics & Intelligence"
        title="Learn how the elite play."
        description="40+ playing systems decoded. Pro player breakdowns. Ask Coach Alex anything tactical — and turn the answer into a session."
      >
        <Button variant="outline" size="sm"><BookOpen className="h-3.5 w-3.5 mr-2" />Curriculum</Button>
        <Button size="sm" className="bg-gradient-ember text-primary-foreground shadow-ember"><Crown className="h-3.5 w-3.5 mr-2" />Masterclass</Button>
      </PageHeader>

      {/* AI Q&A hero */}
      <Card className="card-elevated border-primary/30 ring-ember p-6 md:p-8 mb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative">
          <div className="eyebrow-accent mb-3">Ask Coach Alex</div>
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-5 leading-tight max-w-3xl">
            Any tactical question, answered like a pro — then <span className="text-gradient">trained tomorrow</span>.
          </h2>
          <div className="flex flex-col sm:flex-row gap-2 mb-5 max-w-3xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="e.g. How does BVB press after losing the ball?" className="h-12 pl-10 bg-background/60 border-border/60 focus-visible:ring-primary/40" />
            </div>
            <Button size="lg" className="bg-gradient-ember text-primary-foreground shadow-ember h-12 px-6">
              <Send className="h-4 w-4 mr-2" />Ask
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "How does Man City build out from the back?",
              "What happens when 4-4-2 faces a 3-5-2 high press?",
              "Why does Barça use the 5-lane structure?",
              "Train this system: Gegenpressing",
            ].map((p) => (
              <button key={p} className="rounded-full border border-border/80 bg-background/40 px-3 py-1.5 text-xs hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors">
                {p}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Tactical principles */}
      <div className="mb-12">
        <div className="flex items-end justify-between mb-5">
          <div>
            <div className="eyebrow-accent mb-2">Foundations</div>
            <h3 className="font-display text-2xl font-bold">Tactical principles</h3>
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground">All principles <ChevronRight className="h-3.5 w-3.5 ml-1" /></Button>
        </div>
        <div className="grid gap-3 md:grid-cols-4">
          {[
            { t: "Pressing triggers", d: "When and how the trap is set", icon: Zap, color: "domain-physical" },
            { t: "Compact defending", d: "Lines, distances, cover shadows", icon: Shield, color: "domain-mental" },
            { t: "Build-up patterns", d: "How to escape the first press", icon: Compass, color: "domain-cognitive" },
            { t: "Final-third entries", d: "Half-spaces, third-man runs", icon: Target, color: "domain-technical" },
          ].map((p) => (
            <Card key={p.t} className="card-elevated border-border/60 p-5 group hover:border-primary/40 hover:-translate-y-0.5 cursor-pointer transition-all relative overflow-hidden">
              <div
                className="absolute -top-8 -right-8 h-24 w-24 rounded-full opacity-15 group-hover:opacity-30 blur-2xl transition-opacity"
                style={{ backgroundColor: `hsl(var(--${p.color}))` }}
              />
              <div className="relative">
                <div
                  className="h-10 w-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: `hsl(var(--${p.color}) / 0.15)`, color: `hsl(var(--${p.color}))` }}
                >
                  <p.icon className="h-5 w-5" />
                </div>
                <div className="font-display font-semibold mb-1">{p.t}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{p.d}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Train Like — pro players */}
      <div className="mb-12">
        <div className="flex items-end justify-between mb-5">
          <div>
            <div className="eyebrow-accent mb-2">Pro Player Intelligence</div>
            <h3 className="font-display text-2xl font-bold">Train Like — pick a player, get their game.</h3>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trainLike.map((p) => (
            <Card key={p.p} className="card-elevated border-border/60 p-5 group hover:border-primary/40 cursor-pointer transition-all relative overflow-hidden">
              <div
                className="absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-20 group-hover:opacity-40 blur-2xl transition-opacity"
                style={{ backgroundColor: `hsl(var(--${p.color}))` }}
              />
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{p.role}</div>
                  <Trophy className="h-3.5 w-3.5 text-primary" />
                </div>
                <h4 className="font-display text-xl font-bold mb-3">{p.p}</h4>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.traits.map((t) => (
                    <Badge key={t} variant="secondary" className="text-[10px] bg-background/60">{t}</Badge>
                  ))}
                </div>
                <Button size="sm" variant="outline" className="w-full border-border/80 group-hover:bg-gradient-ember group-hover:text-primary-foreground group-hover:border-transparent transition-all">
                  <Sparkles className="h-3.5 w-3.5 mr-2" />Train like {p.p.split(" ")[0]}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Systems library */}
      <div className="mb-12">
        <div className="flex items-end justify-between mb-5">
          <div>
            <div className="eyebrow-accent mb-2">Tactics Engine</div>
            <h3 className="font-display text-2xl font-bold">40+ elite systems decoded</h3>
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground">All systems <ChevronRight className="h-3.5 w-3.5 ml-1" /></Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {systems.map((s) => (
            <Card key={s.club} className="card-elevated border-border/60 p-5 group hover:border-primary/40 hover:-translate-y-0.5 cursor-pointer transition-all">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{s.club}</div>
              <h4 className="font-display font-bold text-base mb-1 leading-tight">{s.system}</h4>
              <div className="text-xs text-primary mb-3">{s.tag}</div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {s.tags.map((t) => <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>)}
              </div>
              <Button size="sm" variant="ghost" className="w-full group-hover:bg-gradient-ember group-hover:text-primary-foreground transition-all">
                <Sparkles className="h-3.5 w-3.5 mr-2" />Train this system
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Position curriculum */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="card-elevated border-border/60 p-6 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative">
            <div className="eyebrow-accent mb-3">Position curriculum · Winger</div>
            <h3 className="font-display text-2xl font-bold mb-3">Become a complete modern winger.</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">12 lessons on isolation, half-space pinning, dart timing, defensive duties and game management.</p>
            <Button className="bg-gradient-ember text-primary-foreground shadow-ember mb-5">
              Open curriculum <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
            </Button>
            <div className="grid grid-cols-3 gap-2">
              {["Isolation", "Half-space", "Dart inside", "1v1 timing", "Defending", "Set pieces"].map((l) => (
                <div key={l} className="rounded-lg border border-border/60 bg-background/40 p-2.5 text-[11px] font-medium text-center">{l}</div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="card-elevated border-border/60 p-6 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-domain-cognitive/10 blur-3xl" />
          <div className="relative">
            <div className="eyebrow-accent mb-3">Bundesliga Masterclass</div>
            <h3 className="font-display text-2xl font-bold mb-3">Live monthly with elite coaches.</h3>
            <p className="text-sm text-muted-foreground mb-5 max-w-md">
              Partner sessions with Bundesliga coaches. April: <span className="text-foreground font-medium">"Pressing in the modern 4-2-3-1"</span> — reserve your seat.
            </p>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex -space-x-2">
                {[0,1,2,3].map(i => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-gradient-ember" />
                ))}
              </div>
              <span className="text-xs text-muted-foreground"><Users className="h-3 w-3 inline mr-1" /> 348 players joined</span>
            </div>
            <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
              Reserve seat <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  </AppLayout>
);

export default Academy;
