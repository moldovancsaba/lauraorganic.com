import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles, Search, ChevronRight, Zap, Shield, Target, Compass,
  ArrowUpRight, BookOpen, Send,
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

const Academy = () => (
  <AppLayout>
    <div className="p-6 md:p-10 lg:p-12">
      <PageHeader
        eyebrow="Academy · Tactics Engine"
        title="Learn how the elite play."
        description="40+ playing systems decoded. Ask Coach Alex anything tactical — get drills built around the answer."
      >
        <Button variant="outline" size="sm"><BookOpen className="h-3.5 w-3.5 mr-2" />Curriculum</Button>
      </PageHeader>

      {/* AI Q&A */}
      <Card className="card-elevated border-border/60 p-6 mb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        <div className="relative">
          <div className="text-[11px] uppercase tracking-[0.22em] text-primary mb-2">Ask Coach Alex</div>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Any tactical question, answered like a pro.</h2>
          <div className="flex gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="e.g. How does BVB press after losing the ball?" className="h-12 pl-10 bg-background/60" />
            </div>
            <Button size="lg" className="bg-gradient-ember text-primary-foreground shadow-ember h-12">
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
              <button key={p} className="rounded-full border border-border/80 px-3 py-1.5 text-xs hover:border-primary hover:text-primary transition-colors">
                {p}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Tactical principles */}
      <div className="mb-10">
        <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-4">Tactical principles</div>
        <div className="grid gap-3 md:grid-cols-4">
          {[
            { t: "Pressing triggers", d: "When and how the trap is set", icon: Zap },
            { t: "Compact defending", d: "Lines, distances, cover shadows", icon: Shield },
            { t: "Build-up patterns", d: "How to escape the first press", icon: Compass },
            { t: "Final-third entries", d: "Half-spaces, third-man runs", icon: Target },
          ].map((p) => (
            <Card key={p.t} className="card-elevated border-border/60 p-4 group hover:border-primary/40 cursor-pointer transition-colors">
              <p.icon className="h-4 w-4 text-primary mb-3" />
              <div className="font-medium text-sm">{p.t}</div>
              <div className="text-xs text-muted-foreground mt-1">{p.d}</div>
            </Card>
          ))}
        </div>
      </div>

      {/* Systems library */}
      <div>
        <div className="flex items-end justify-between mb-4">
          <h3 className="font-display text-xl font-bold">40+ elite systems</h3>
          <Button variant="ghost" size="sm" className="text-muted-foreground">All systems <ChevronRight className="h-3.5 w-3.5 ml-1" /></Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {systems.map((s) => (
            <Card key={s.club} className="card-elevated border-border/60 p-5 group hover:border-primary/40 cursor-pointer transition-colors">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{s.club}</div>
              <h4 className="font-display font-bold text-base mb-1">{s.system}</h4>
              <div className="text-xs text-primary mb-3">{s.tag}</div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {s.tags.map((t) => <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>)}
              </div>
              <Button size="sm" variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Sparkles className="h-3.5 w-3.5 mr-2" />Train this system
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Position curriculum */}
      <Card className="card-elevated border-border/60 p-6 mt-10 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-6 items-center">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-primary mb-2">Position curriculum · Winger</div>
            <h3 className="font-display text-2xl font-bold mb-3">Become a complete modern winger.</h3>
            <p className="text-sm text-muted-foreground mb-4">12 lessons on isolation, half-space pinning, dart timing, defensive duties and game management.</p>
            <Button className="bg-gradient-ember text-primary-foreground shadow-ember">
              Open curriculum <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {["Isolation", "Half-space", "Dart inside", "1v1 timing", "Defending", "Set pieces"].map((l) => (
              <div key={l} className="rounded-lg border border-border/60 bg-background/40 p-3 text-xs font-medium">{l}</div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  </AppLayout>
);

export default Academy;
