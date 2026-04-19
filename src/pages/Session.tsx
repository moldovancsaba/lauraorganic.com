import { useEffect, useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DomainBadge } from "@/components/DomainBadge";
import {
  Play, Pause, SkipForward, SkipBack, Volume2, Settings, X,
  Footprints, Brain, Activity, HeartPulse, CheckCircle2, Sparkles,
  Heart, Flame, MessageSquare,
} from "lucide-react";

const blocks = [
  { time: 6, name: "Activation & mobility", domain: "recovery" as const, icon: HeartPulse, reps: "Dynamic flow", why: "Joints primed → cleaner first touch" },
  { time: 12, name: "Wall touch ladder · 4 sets", domain: "technical" as const, icon: Footprints, reps: "30s on / 15s rest", why: "Builds the touch you'll need vs Eagles" },
  { time: 10, name: "Scan-receive-pass rondo", domain: "cognitive" as const, icon: Brain, reps: "5 rounds", why: "Trains perception → decision loop" },
  { time: 8, name: "Confidence finishing · 24 reps", domain: "mental" as const, icon: Activity, reps: "8 reps × 3 angles", why: "Repeats success patterns under pressure" },
  { time: 6, name: "Box breathing + reflect", domain: "mental" as const, icon: Brain, reps: "4-4-4-4", why: "Locks the session into long-term memory" },
];

const Session = () => {
  const [active, setActive] = useState(1);
  const [playing, setPlaying] = useState(true);
  const [elapsed, setElapsed] = useState(214);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(t);
  }, [playing]);

  const total = blocks.reduce((a, b) => a + b.time, 0) * 60;
  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  const block = blocks[active];

  return (
    <AppLayout>
      <div className="min-h-[calc(100vh-3.5rem)] grid lg:grid-cols-[1fr_360px]">
        {/* Stage */}
        <div className="relative overflow-hidden border-r border-border">
          <div className="absolute inset-0 bg-gradient-mesh opacity-80" />
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[140px]" />

          <div className="relative h-full flex flex-col p-6 md:p-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="text-[11px] uppercase tracking-[0.2em] text-primary">Live session</div>
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              </div>
              <Button variant="ghost" size="icon"><X className="h-4 w-4" /></Button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <DomainBadge domain={block.domain} icon={block.icon} label={block.domain} className="mb-6" />
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-3">
                Block {active + 1} / {blocks.length} · {block.reps}
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4 max-w-2xl">
                {block.name}
              </h1>
              <p className="text-muted-foreground max-w-md mb-10">{block.why}</p>

              {/* Big timer */}
              <div className="font-display text-7xl md:text-8xl font-bold text-gradient leading-none mb-8">
                {fmt(elapsed)}
              </div>

              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-full" onClick={() => setActive(Math.max(0, active - 1))}>
                  <SkipBack className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  onClick={() => setPlaying(!playing)}
                  className="h-16 w-16 rounded-full bg-gradient-ember shadow-ember hover:opacity-90"
                >
                  {playing ? <Pause className="h-6 w-6 fill-current" /> : <Play className="h-6 w-6 fill-current" />}
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-full" onClick={() => setActive(Math.min(blocks.length - 1, active + 1))}>
                  <SkipForward className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-8 w-full max-w-md">
                <Progress value={(elapsed / total) * 100} className="h-1 bg-muted" />
                <div className="flex justify-between text-[10px] text-muted-foreground mt-2">
                  <span>{fmt(elapsed)}</span>
                  <span>{fmt(total)}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5"><Heart className="h-3.5 w-3.5 text-domain-physical" />142 bpm</span>
                <span className="flex items-center gap-1.5"><Flame className="h-3.5 w-3.5 text-primary" />218 kcal</span>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon"><Volume2 className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon"><Settings className="h-4 w-4" /></Button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar — block list & live coach */}
        <aside className="bg-background/40 backdrop-blur-xl flex flex-col">
          <div className="p-5 border-b border-border">
            <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Blueprint</div>
            <div className="font-display font-bold">Adaptive · 42 min</div>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
            {blocks.map((b, i) => {
              const done = i < active;
              const current = i === active;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full text-left rounded-lg border p-3 flex items-center gap-3 transition-colors ${
                    current ? "border-primary/60 bg-primary/5"
                      : done ? "border-border/40 opacity-60"
                      : "border-border/60 hover:border-primary/30"
                  }`}
                >
                  <div className={`h-8 w-8 rounded-md flex items-center justify-center shrink-0 ${
                    done ? "bg-primary/20 text-primary" : "bg-muted"
                  }`}>
                    {done ? <CheckCircle2 className="h-4 w-4" /> : <b.icon className="h-4 w-4" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{b.name}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{b.time} min · {b.domain}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <Card className="m-3 card-elevated border-border/60 p-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px shimmer" />
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium">Live cue</span>
            </div>
            <p className="text-xs leading-relaxed text-foreground/90 mb-3">
              Keep your hips facing forward — only the foot rotates. You're loading 14% slower on the weak side.
            </p>
            <Button size="sm" variant="outline" className="w-full h-8 border-primary/30 text-primary">
              <MessageSquare className="h-3 w-3 mr-1.5" />Ask coach
            </Button>
          </Card>
        </aside>
      </div>
    </AppLayout>
  );
};

export default Session;
