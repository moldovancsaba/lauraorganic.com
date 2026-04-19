import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import {
  Sparkles, ArrowRight, ArrowLeft, Target, Calendar, Heart,
  Trophy, Brain, Zap, Footprints, Activity, CheckCircle2, Play,
  User2, Compass, Moon, Flame,
} from "lucide-react";

type Step = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

const positions = ["GK", "CB", "FB", "CDM", "CM", "CAM", "Winger", "Striker"];
const levels = ["Beginner", "Developing", "Intermediate", "Advanced", "Elite"];
const goalsList = [
  { id: "skills",      label: "Improve skills",   icon: Footprints },
  { id: "academy",     label: "Make academy",     icon: Trophy },
  { id: "confidence",  label: "Build confidence", icon: Activity },
  { id: "fitness",     label: "Get fitter",       icon: Zap },
];
const styles = ["Possession", "Direct", "Pressing", "Counter", "Creative"];
const environments = ["Home", "Field", "Mixed"];

export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(0);

  // profile
  const [name, setName] = useState("");
  const [age, setAge] = useState(14);
  const [position, setPosition] = useState("Winger");
  const [level, setLevel] = useState("Developing");

  // goals
  const [goals, setGoals] = useState<string[]>(["academy"]);
  const [horizon, setHorizon] = useState<"short" | "long">("long");

  // availability
  const [days, setDays] = useState(4);
  const [duration, setDuration] = useState<15 | 45 | 75>(45);
  const [environment, setEnvironment] = useState("Mixed");

  // style
  const [favPlayer, setFavPlayer] = useState("");
  const [style, setStyle] = useState("Pressing");
  const [foot, setFoot] = useState<"left" | "right">("right");

  // self-assessment
  const [ratings, setRatings] = useState({ control: 6, passing: 5, dribble: 7, speed: 6, confidence: 5 });

  // wellness
  const [sleep, setSleep] = useState(4);
  const [energy, setEnergy] = useState(4);
  const [injury, setInjury] = useState<"none" | "minor" | "recovery">("none");

  const toggleGoal = (id: string) =>
    setGoals((g) => (g.includes(id) ? g.filter((x) => x !== id) : [...g, id]));

  const splIndex = useMemo(() => {
    const tech = (ratings.control + ratings.passing + ratings.dribble) / 3;
    const phys = ratings.speed;
    const psych = ratings.confidence;
    const raw = (tech * 0.4 + psych * 0.35 + phys * 0.25) * 10;
    return Math.round(raw);
  }, [ratings]);

  const pdas = useMemo(() => {
    const items = [
      { k: "Ball control", v: ratings.control, icon: Footprints, domain: "domain-technical" },
      { k: "Passing",      v: ratings.passing, icon: Target,     domain: "domain-technical" },
      { k: "Dribbling",    v: ratings.dribble, icon: Sparkles,   domain: "domain-technical" },
      { k: "Speed",        v: ratings.speed,   icon: Zap,        domain: "domain-physical"  },
      { k: "Confidence",   v: ratings.confidence, icon: Activity, domain: "domain-mental"   },
    ];
    return [...items].sort((a, b) => a.v - b.v).slice(0, 3);
  }, [ratings]);

  const totalSteps = 9;
  const progressPct = ((step + 1) / totalSteps) * 100;

  const next = () => setStep((s) => Math.min(8, (s + 1) as Step));
  const back = () => setStep((s) => Math.max(0, (s - 1) as Step));

  const finish = () => navigate("/session");

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* atmosphere */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute -top-32 -left-20 h-[480px] w-[480px] rounded-full bg-primary/15 blur-[140px]" />
      <div className="absolute top-40 right-0 h-[360px] w-[360px] rounded-full bg-domain-physical/10 blur-[120px]" />

      {/* top bar */}
      <header className="relative z-10 border-b border-border/60 backdrop-blur-md bg-background/40">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-gradient-ember flex items-center justify-center font-display font-bold text-primary-foreground shadow-ember text-sm">S</div>
            <div className="leading-tight">
              <div className="font-display font-bold tracking-tight text-sm">SPL Academy</div>
              <div className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground">Player setup</div>
            </div>
          </div>
          <div className="flex-1" />
          <div className="text-xs text-muted-foreground tabular-nums">Step {step + 1} / {totalSteps}</div>
        </div>
        <div className="max-w-3xl mx-auto px-6 pb-4">
          <Progress value={progressPct} className="h-1" />
        </div>
      </header>

      <main className="relative z-10 max-w-3xl mx-auto px-6 py-10 md:py-14 animate-fade-up">
        {step === 0 && (
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-primary mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Welcome
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              We're building your <span className="text-gradient">personal development system</span>.
            </h1>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              In about 4 minutes we'll set up your SPL Index, your training plan, and your first session.
              Coach Alex adapts everything around your goals, your level and your week.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mt-10 text-left">
              {[
                { t: "Track progress",   d: "27 micro-skills, weekly delta", icon: Sparkles },
                { t: "AI coach",         d: "Daily session built for you",  icon: Brain },
                { t: "Personalized",     d: "Position, goals, environment", icon: Compass },
              ].map((b) => (
                <Card key={b.t} className="p-4 surface-glass">
                  <b.icon className="h-4 w-4 text-primary mb-3" />
                  <div className="text-sm font-medium">{b.t}</div>
                  <div className="text-xs text-muted-foreground mt-1">{b.d}</div>
                </Card>
              ))}
            </div>
            <Button size="lg" className="mt-10 bg-gradient-ember text-primary-foreground shadow-ember" onClick={next}>
              Build my player profile <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {step === 1 && (
          <Section eyebrow="Step 1 · Identity" title="Your basic profile" desc="Sets your benchmarks and SPL Index baseline.">
            <div className="grid gap-5">
              <Field label="Name">
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Marco Jansen" />
              </Field>
              <Field label={`Age · ${age}`}>
                <Slider value={[age]} min={8} max={21} step={1} onValueChange={(v) => setAge(v[0])} />
              </Field>
              <Field label="Position">
                <Chips options={positions} value={position} onChange={setPosition} />
              </Field>
              <Field label="Level">
                <Chips options={levels} value={level} onChange={setLevel} />
              </Field>
            </div>
          </Section>
        )}

        {step === 2 && (
          <Section eyebrow="Step 2 · Motivation" title="What do you want most?" desc="Drives your AI recommendations and training paths.">
            <div className="grid sm:grid-cols-2 gap-3">
              {goalsList.map((g) => {
                const on = goals.includes(g.id);
                return (
                  <button
                    key={g.id}
                    onClick={() => toggleGoal(g.id)}
                    className={cn(
                      "text-left rounded-xl border p-4 transition-all",
                      on ? "border-primary bg-primary/10 ring-ember" : "border-border bg-card hover:border-primary/40"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn("h-9 w-9 rounded-lg flex items-center justify-center",
                        on ? "bg-gradient-ember text-primary-foreground" : "bg-muted text-muted-foreground")}>
                        <g.icon className="h-4 w-4" />
                      </div>
                      <div className="font-medium">{g.label}</div>
                      {on && <CheckCircle2 className="h-4 w-4 text-primary ml-auto" />}
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="mt-6">
              <Field label="Timeframe">
                <Chips options={["short", "long"]} value={horizon} onChange={(v) => setHorizon(v as "short" | "long")} labelMap={{ short: "Short term (≤3 months)", long: "Long term (season+)" }} />
              </Field>
            </div>
          </Section>
        )}

        {step === 3 && (
          <Section eyebrow="Step 3 · Availability" title="How does your training week look?" desc="We'll build your weekly calendar around this.">
            <Field label={`Days per week · ${days}`}>
              <Slider value={[days]} min={1} max={7} step={1} onValueChange={(v) => setDays(v[0])} />
            </Field>
            <Field label="Session duration">
              <Chips options={[15, 45, 75]} value={duration} onChange={(v) => setDuration(v as 15 | 45 | 75)} labelMap={{ 15: "Quick · 15", 45: "Standard · 45", 75: "Full · 60+" }} />
            </Field>
            <Field label="Environment">
              <Chips options={environments} value={environment} onChange={setEnvironment} />
            </Field>
          </Section>
        )}

        {step === 4 && (
          <Section eyebrow="Step 4 · Style" title="Player style & preferences" desc="Personalizes Academy content and prescribed drills.">
            <Field label="Favorite player"><Input value={favPlayer} onChange={(e) => setFavPlayer(e.target.value)} placeholder="e.g. Yamal, De Bruyne, Mbappé" /></Field>
            <Field label="Playing style"><Chips options={styles} value={style} onChange={setStyle} /></Field>
            <Field label="Strong foot"><Chips options={["left", "right"]} value={foot} onChange={(v) => setFoot(v as "left" | "right")} labelMap={{ left: "Left", right: "Right" }} /></Field>
          </Section>
        )}

        {step === 5 && (
          <Section eyebrow="Step 5 · Self assessment" title="Where do you stand today?" desc="Quick sliders — we'll calibrate with real drills later.">
            <div className="grid gap-5">
              {([
                ["control", "Ball control"], ["passing", "Passing"],
                ["dribble", "Dribbling"], ["speed", "Speed"], ["confidence", "Confidence"],
              ] as const).map(([k, label]) => (
                <Field key={k} label={`${label} · ${ratings[k]}/10`}>
                  <Slider value={[ratings[k]]} min={0} max={10} step={1} onValueChange={(v) => setRatings({ ...ratings, [k]: v[0] })} />
                </Field>
              ))}
            </div>
          </Section>
        )}

        {step === 6 && (
          <Section eyebrow="Step 6 · Wellness" title="Today's readiness baseline" desc="Adjusts intensity for your first sessions.">
            <Field label={`Sleep quality · ${sleep}/5`}>
              <div className="flex items-center gap-3"><Moon className="h-4 w-4 text-muted-foreground" /><Slider value={[sleep]} min={1} max={5} step={1} onValueChange={(v) => setSleep(v[0])} /></div>
            </Field>
            <Field label={`Energy level · ${energy}/5`}>
              <div className="flex items-center gap-3"><Flame className="h-4 w-4 text-muted-foreground" /><Slider value={[energy]} min={1} max={5} step={1} onValueChange={(v) => setEnergy(v[0])} /></div>
            </Field>
            <Field label="Injury status">
              <Chips options={["none", "minor", "recovery"]} value={injury} onChange={(v) => setInjury(v as typeof injury)} labelMap={{ none: "None", minor: "Minor niggle", recovery: "Returning from injury" }} />
            </Field>
          </Section>
        )}

        {step === 7 && (
          <div className="space-y-6">
            <Section eyebrow="Step 7 · Your player profile" title="Here's your starting point" desc="Coach Alex will adapt this every week based on what you actually do.">
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6 bg-gradient-card border-primary/30 ring-ember">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-2">Initial SPL Index</div>
                  <div className="font-display text-6xl font-bold text-gradient leading-none">{splIndex}</div>
                  <div className="text-xs text-muted-foreground mt-3">U{age} · {position} · {level}</div>
                  <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                    {[
                      { l: "Skill", v: Math.round((ratings.control + ratings.passing + ratings.dribble) / 3 * 10), c: "domain-technical" },
                      { l: "Psych", v: ratings.confidence * 10, c: "domain-mental" },
                      { l: "Phys",  v: ratings.speed * 10,      c: "domain-physical" },
                    ].map((d) => (
                      <div key={d.l} className="rounded-md border border-border bg-card/50 py-2">
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{d.l}</div>
                        <div className="font-display font-bold text-lg" style={{ color: `hsl(var(--${d.c}))` }}>{d.v}</div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-3">Your top 3 focus areas</div>
                  <div className="space-y-3">
                    {pdas.map((p) => (
                      <div key={p.k} className="flex items-center gap-3 rounded-lg border border-border p-3">
                        <div className="h-8 w-8 rounded-md flex items-center justify-center" style={{ background: `hsl(var(--${p.domain}) / 0.15)`, color: `hsl(var(--${p.domain}))` }}>
                          <p.icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">{p.k}</div>
                          <div className="text-[11px] text-muted-foreground">Below benchmark · prescribed in week 1</div>
                        </div>
                        <div className="font-display font-bold tabular-nums text-sm">{p.v * 10}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <Card className="mt-4 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Suggested path</div>
                    <div className="font-display text-xl font-bold mt-1">
                      {goals.includes("academy") ? "Academy preparation · 8 weeks" : style === "Possession" ? "Become a creative midfielder" : "Become a winger"}
                    </div>
                  </div>
                  <Compass className="h-5 w-5 text-primary" />
                </div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-3">Weekly plan preview</div>
                <div className="grid grid-cols-7 gap-1.5">
                  {Array.from({ length: 7 }).map((_, i) => {
                    const active = i < days;
                    const labels = ["M","T","W","T","F","S","S"];
                    return (
                      <div key={i} className={cn(
                        "rounded-md border h-16 flex flex-col items-center justify-center",
                        active ? "border-primary/40 bg-primary/10" : "border-border bg-card/40 opacity-50"
                      )}>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{labels[i]}</div>
                        <div className="text-[10px] font-medium mt-1">{active ? `${duration}m` : "—"}</div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </Section>
          </div>
        )}

        {step === 8 && (
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-primary mb-6">
              <CheckCircle2 className="h-3.5 w-3.5" /> Profile ready
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]">
              You're set up, {name || "player"}.<br />
              <span className="text-gradient">Let's start your first session.</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              {duration} minutes · focused on {pdas[0]?.k.toLowerCase()} and {pdas[1]?.k.toLowerCase()}.
              Your SPL Index updates the moment you log your first reps.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" className="bg-gradient-ember text-primary-foreground shadow-ember" onClick={finish}>
                <Play className="h-4 w-4" /> Start your first session
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/">Go to home</Link>
              </Button>
            </div>
          </div>
        )}

        {/* nav */}
        {step > 0 && step < 8 && (
          <div className="mt-12 flex items-center justify-between">
            <Button variant="ghost" onClick={back}><ArrowLeft className="h-4 w-4" /> Back</Button>
            <Button className="bg-gradient-ember text-primary-foreground shadow-ember" onClick={next}>
              {step === 7 ? "Looks good" : "Continue"} <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}

/* ---------- helpers ---------- */

function Section({ eyebrow, title, desc, children }: { eyebrow: string; title: string; desc?: string; children: React.ReactNode }) {
  return (
    <div className="animate-fade-up">
      <div className="eyebrow-accent mb-3">{eyebrow}</div>
      <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight leading-tight">{title}</h2>
      {desc && <p className="text-sm text-muted-foreground mt-2 max-w-xl">{desc}</p>}
      <div className="mt-8 space-y-5">{children}</div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">{label}</div>
      {children}
    </div>
  );
}

function Chips<T extends string | number>({
  options, value, onChange, labelMap,
}: { options: readonly T[]; value: T; onChange: (v: T) => void; labelMap?: Record<string, string> }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const on = o === value;
        const label = labelMap?.[String(o)] ?? String(o);
        return (
          <button
            key={String(o)}
            onClick={() => onChange(o)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all",
              on ? "border-primary bg-primary/15 text-primary ring-ember" : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
