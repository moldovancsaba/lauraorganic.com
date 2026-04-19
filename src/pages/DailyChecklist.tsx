import { useMemo, useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  Sun, Dumbbell, Brain, Heart, Moon, Flame, Sparkles,
  CheckCircle2, Circle, TrendingUp, Calendar as CalendarIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Block = "morning" | "training" | "iq" | "wellness" | "reflection";

const blockMeta: Record<Block, { label: string; icon: any; color: string; minutes: string }> = {
  morning:    { label: "Morning Check-in",   icon: Sun,      color: "text-amber-400",   minutes: "2–3 min" },
  training:   { label: "Training & Performance", icon: Dumbbell, color: "text-primary",   minutes: "Core block" },
  iq:         { label: "Football IQ",        icon: Brain,    color: "text-cyan-400",    minutes: "5–10 min" },
  wellness:   { label: "Wellness & Recovery", icon: Heart,   color: "text-emerald-400", minutes: "5–15 min" },
  reflection: { label: "Daily Reflection",   icon: Moon,     color: "text-violet-400",  minutes: "2–3 min" },
};

const trainingTasks = [
  "Complete today's session",
  "Followed drills properly (no rushing)",
  "Tracked results (reps / time / score)",
  "Focused on today's 2–3 key skills",
  "Extra touches / freestyle (optional)",
  "Weak-foot work (optional)",
];
const iqTasks = [
  "Watched 1 tactical clip / lesson",
  "Learned 1 concept (scanning, spacing…)",
  "Answered or asked Coach Alex 1 question",
];
const wellnessTasks = [
  "Stretch / mobility (5–10 min)",
  "Cooldown after training",
  "Hydration target hit",
  "Ate properly",
  "2–3 min breathing / focus routine",
  "No phone 30 min before sleep",
];

const SliderRow = ({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-mono text-foreground">{value}/5</span>
    </div>
    <Slider value={[value]} min={1} max={5} step={1} onValueChange={(v) => onChange(v[0])} />
  </div>
);

const TaskRow = ({ checked, onToggle, label }: { checked: boolean; onToggle: () => void; label: string }) => (
  <button
    onClick={onToggle}
    className={cn(
      "w-full flex items-center gap-3 rounded-md border border-border/60 px-3 py-2.5 text-left text-sm transition-colors",
      checked ? "bg-primary/5 border-primary/40 text-foreground" : "hover:bg-muted/40 text-muted-foreground",
    )}
  >
    {checked ? <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> : <Circle className="h-4 w-4 shrink-0" />}
    <span className={cn(checked && "line-through decoration-primary/40")}>{label}</span>
  </button>
);

const BlockCard = ({
  block, complete, children,
}: { block: Block; complete: boolean; children: React.ReactNode }) => {
  const { label, icon: Icon, color, minutes } = blockMeta[block];
  return (
    <Card className="card-elevated p-5 space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className={cn("h-10 w-10 rounded-lg bg-card border border-border/60 flex items-center justify-center", color)}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <div className="font-display font-semibold">{label}</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{minutes}</div>
          </div>
        </div>
        {complete && (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-primary">
            <CheckCircle2 className="h-3.5 w-3.5" /> Done
          </span>
        )}
      </div>
      {children}
    </Card>
  );
};

const DailyChecklist = () => {
  // Morning
  const [feel, setFeel] = useState(4);
  const [energy, setEnergy] = useState(3);
  const [sleep, setSleep] = useState(4);
  const [soreness, setSoreness] = useState(false);

  // Training
  const [trainDone, setTrainDone] = useState<boolean[]>(trainingTasks.map(() => false));
  const [sessionRating, setSessionRating] = useState(3);
  const [postEnergy, setPostEnergy] = useState(3);
  const [confidence, setConfidence] = useState(3);

  // IQ
  const [iqDone, setIqDone] = useState<boolean[]>(iqTasks.map(() => false));

  // Wellness
  const [wellDone, setWellDone] = useState<boolean[]>(wellnessTasks.map(() => false));

  // Reflection
  const [wentWell, setWentWell] = useState("");
  const [improve, setImprove] = useState("");
  const [followedPlan, setFollowedPlan] = useState(false);
  const [effort, setEffort] = useState(4);
  const [note, setNote] = useState("");

  const toggle = (arr: boolean[], setArr: (v: boolean[]) => void, i: number) => {
    const next = [...arr]; next[i] = !next[i]; setArr(next);
  };

  // Block completion logic
  const morningDone = true; // sliders always have a value
  const trainingDone = trainDone[0]; // session completed
  const iqDoneFlag = iqDone.filter(Boolean).length >= 2;
  const wellnessDoneFlag = wellDone.filter(Boolean).length >= 3;
  const reflectionDone = wentWell.trim().length > 0 && improve.trim().length > 0;

  const score = useMemo(() => {
    return [morningDone, trainingDone, iqDoneFlag, wellnessDoneFlag, reflectionDone].filter(Boolean).length;
  }, [morningDone, trainingDone, iqDoneFlag, wellnessDoneFlag, reflectionDone]);

  const tier =
    score === 5 ? { label: "Elite Day", color: "text-primary", glow: "shadow-ember" } :
    score === 4 ? { label: "Strong Day", color: "text-emerald-400", glow: "" } :
    score === 3 ? { label: "Solid Day", color: "text-cyan-400", glow: "" } :
    score >= 1  ? { label: "Keep Going", color: "text-amber-400", glow: "" } :
                  { label: "Not Started", color: "text-muted-foreground", glow: "" };

  // AI nudge
  const aiNudge = useMemo(() => {
    if (energy <= 2) return "Energy looks low — Coach Alex suggests a 20 min recovery + mobility session.";
    if (soreness)   return "Soreness flagged — switching today's plan to low-impact technical work.";
    if (!trainingDone && new Date().getHours() >= 18)
      return "Session still open — try a 15 min Quick Session to keep your streak alive.";
    if (score >= 4) return "Great consistency. Difficulty for tomorrow's session bumped +1 level.";
    return "On track. Stick to today's blueprint and log results after training.";
  }, [energy, soreness, trainingDone, score]);

  return (
    <AppLayout>
      <PageHeader
        eyebrow="Daily OS"
        title="Player Checklist"
        description="Your 5-block daily operating system. Build habits, feed the SPL Index, and stay accountable."
      >
        <Button variant="outline" size="sm"><CalendarIcon className="h-4 w-4" /> Week view</Button>
        <Button size="sm" className="bg-gradient-ember text-primary-foreground"><Sparkles className="h-4 w-4" /> Save day</Button>
      </PageHeader>

      <div className="px-6 pb-10 space-y-6">
        {/* Daily score header */}
        <Card className="card-elevated p-6 ring-ember">
          <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
            <div className={cn("relative h-24 w-24 rounded-2xl bg-gradient-card border border-border/60 flex flex-col items-center justify-center", tier.glow)}>
              <Flame className={cn("h-5 w-5 absolute top-2 right-2", tier.color)} />
              <div className="font-display text-4xl font-bold text-gradient">{score}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">/ 5</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className={cn("text-xs font-semibold uppercase tracking-[0.2em]", tier.color)}>{tier.label}</span>
                <span className="text-xs text-muted-foreground">· {new Date().toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" })}</span>
              </div>
              <Progress value={(score / 5) * 100} className="h-2" />
              <div className="flex flex-wrap gap-2 pt-1">
                {(Object.keys(blockMeta) as Block[]).map((b) => {
                  const done = b === "morning" ? morningDone
                    : b === "training" ? trainingDone
                    : b === "iq" ? iqDoneFlag
                    : b === "wellness" ? wellnessDoneFlag
                    : reflectionDone;
                  const Icon = blockMeta[b].icon;
                  return (
                    <span key={b} className={cn(
                      "inline-flex items-center gap-1.5 text-[11px] px-2 py-1 rounded-full border",
                      done ? "border-primary/40 bg-primary/10 text-primary" : "border-border/60 text-muted-foreground",
                    )}>
                      <Icon className="h-3 w-3" /> {blockMeta[b].label}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="max-w-xs rounded-lg border border-primary/30 bg-primary/5 p-3">
              <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-primary mb-1">
                <Sparkles className="h-3 w-3" /> Coach Alex
              </div>
              <p className="text-xs text-foreground/90 leading-relaxed">{aiNudge}</p>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-5">
          {/* Morning */}
          <BlockCard block="morning" complete={morningDone}>
            <div className="space-y-4">
              <SliderRow label="How do you feel today?" value={feel} onChange={setFeel} />
              <SliderRow label="Energy level" value={energy} onChange={setEnergy} />
              <SliderRow label="Sleep quality" value={sleep} onChange={setSleep} />
              <label className="flex items-center gap-3 text-sm pt-1 cursor-pointer">
                <Checkbox checked={soreness} onCheckedChange={(v) => setSoreness(!!v)} />
                <span>Soreness or pain today</span>
              </label>
              <div className="rounded-md bg-muted/30 border border-border/50 px-3 py-2 text-xs text-muted-foreground">
                <span className="text-foreground font-medium">Today's focus:</span> First-touch under pressure · Scanning frequency
              </div>
            </div>
          </BlockCard>

          {/* Training */}
          <BlockCard block="training" complete={trainingDone}>
            <div className="space-y-2">
              {trainingTasks.map((t, i) => (
                <TaskRow key={t} checked={trainDone[i]} onToggle={() => toggle(trainDone, setTrainDone, i)} label={t} />
              ))}
            </div>
            <div className="pt-2 border-t border-border/50 space-y-3">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">After training</div>
              <SliderRow label="Session rating" value={sessionRating} onChange={setSessionRating} />
              <SliderRow label="Energy after session" value={postEnergy} onChange={setPostEnergy} />
              <SliderRow label="Confidence level" value={confidence} onChange={setConfidence} />
            </div>
          </BlockCard>

          {/* IQ */}
          <BlockCard block="iq" complete={iqDoneFlag}>
            <div className="space-y-2">
              {iqTasks.map((t, i) => (
                <TaskRow key={t} checked={iqDone[i]} onToggle={() => toggle(iqDone, setIqDone, i)} label={t} />
              ))}
            </div>
            <div className="rounded-md border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 text-xs">
              <span className="text-cyan-400 font-medium">Prompt of the day:</span>{" "}
              <span className="text-foreground/90">When should I scan before receiving?</span>
            </div>
          </BlockCard>

          {/* Wellness */}
          <BlockCard block="wellness" complete={wellnessDoneFlag}>
            <div className="space-y-2">
              {wellnessTasks.map((t, i) => (
                <TaskRow key={t} checked={wellDone[i]} onToggle={() => toggle(wellDone, setWellDone, i)} label={t} />
              ))}
            </div>
            <div className="text-[11px] text-muted-foreground">Sleep target: <span className="text-foreground font-medium">8+ hours</span></div>
          </BlockCard>

          {/* Reflection */}
          <BlockCard block="reflection" complete={reflectionDone}>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <div className="text-xs text-muted-foreground">What went well today?</div>
                <Textarea rows={2} value={wentWell} onChange={(e) => setWentWell(e.target.value)} placeholder="One quick win…" />
              </div>
              <div className="space-y-1.5">
                <div className="text-xs text-muted-foreground">What can I improve?</div>
                <Textarea rows={2} value={improve} onChange={(e) => setImprove(e.target.value)} placeholder="One area to sharpen…" />
              </div>
              <label className="flex items-center gap-3 text-sm cursor-pointer">
                <Checkbox checked={followedPlan} onCheckedChange={(v) => setFollowedPlan(!!v)} />
                <span>I followed my plan today</span>
              </label>
              <SliderRow label="Effort level" value={effort} onChange={setEffort} />
              <div className="space-y-1.5">
                <div className="text-xs text-muted-foreground">Optional note (Coach Alex can analyze)</div>
                <Textarea rows={2} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Anything on your mind…" />
              </div>
            </div>
          </BlockCard>

          {/* Weekly add-on */}
          <Card className="card-elevated p-5 space-y-4 lg:col-span-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-card border border-border/60 flex items-center justify-center text-primary">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display font-semibold">Weekly Reflection</div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Sundays · 5 min</div>
                </div>
              </div>
              <Button variant="outline" size="sm">Open weekly review</Button>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { label: "Daily score avg", value: "4.2 / 5", sub: "+0.4 vs last week" },
                { label: "Sessions completed", value: "5 / 6", sub: "Streak: 12 days" },
                { label: "Top focus next week", value: "Scanning", sub: "AI-prescribed" },
              ].map((s) => (
                <div key={s.label} className="rounded-lg border border-border/60 bg-muted/20 p-3">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
                  <div className="font-display text-xl font-bold mt-1">{s.value}</div>
                  <div className="text-[11px] text-primary mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default DailyChecklist;
