import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { SkillRadar } from "@/components/SkillRadar";
import {
  microSkills, splIndex, domainScore, priorityDevelopmentAreas, domainMeta, cohort,
} from "@/lib/spl-index";
import {
  TrendingUp, Flame, Calendar, Award, AlertCircle, Download, FileText,
  Footprints, Brain, Zap, Target, Mail, Users,
} from "lucide-react";

const ProgressPage = () => {
  const idx = splIndex();
  const skill = domainScore("skill");
  const psych = domainScore("psych");
  const physical = domainScore("physical");
  const pdas = priorityDevelopmentAreas();
  const trajectory = [62, 64, 63, 66, 68, 67, 70, 71, 72, 73, 74, idx];

  return (
    <AppLayout>
      <div className="p-6 md:p-10 lg:p-12">
        <PageHeader
          eyebrow="Progress · SPL Player Index"
          title="The full picture, always current."
          description="Three domains. 27 micro-skills. Updated after every session — benchmarked against your age group."
        >
          <Button variant="outline" size="sm"><FileText className="h-3.5 w-3.5 mr-2" />Monthly report</Button>
          <Button size="sm" className="bg-gradient-ember text-primary-foreground"><Download className="h-3.5 w-3.5 mr-2" />Export PDF</Button>
        </PageHeader>

        {/* Index hero */}
        <Card className="card-elevated border-border/60 p-6 md:p-8 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
          <div className="relative grid lg:grid-cols-[auto_1fr] gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="text-[11px] uppercase tracking-[0.22em] text-primary mb-2">SPL Index · U14 Winger</div>
              <div className="font-display text-7xl md:text-8xl font-bold text-gradient leading-none">{idx}</div>
              <div className="text-sm text-muted-foreground mt-2">+3 this week · 71st percentile</div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { l: "Skill", v: skill, w: "40%", icon: Footprints, color: "domain-technical" },
                { l: "Psychological", v: psych, w: "35%", icon: Brain, color: "domain-mental" },
                { l: "Physical", v: physical, w: "25%", icon: Zap, color: "domain-physical" },
              ].map((d) => (
                <Card key={d.l} className="border-border/60 bg-background/40 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <d.icon className="h-4 w-4" style={{ color: `hsl(var(--${d.color}))` }} />
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{d.w}</span>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{d.l}</div>
                  <div className="font-display text-3xl font-bold mt-1">{d.v}</div>
                  <Progress value={d.v} className="h-1 mt-2" />
                </Card>
              ))}
            </div>
          </div>
        </Card>

        {/* Radar + PDAs */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] mb-8">
          <Card className="card-elevated border-border/60 p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-primary mb-1">Spider profile</div>
                <h3 className="font-display text-xl font-bold">27 micro-skills · vs U14 benchmark</h3>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary" />You</span>
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-muted-foreground" />Benchmark</span>
              </div>
            </div>
            <SkillRadar height={420} />
          </Card>

          <Card className="card-elevated border-border/60 p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="h-4 w-4 text-domain-physical" />
              <h3 className="font-display font-semibold">Priority Development Areas</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-5">Auto-flagged when score is below 85% of age-group benchmark.</p>
            <div className="space-y-3">
              {pdas.map((m) => {
                const ratio = Math.round((m.score / m.benchmark) * 100);
                return (
                  <div key={m.key} className="rounded-lg border border-border/60 bg-background/40 p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{m.label}</span>
                      <span className="font-mono text-xs text-domain-physical">{ratio}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 relative h-1 rounded-full bg-muted overflow-hidden">
                        <div className="absolute h-full bg-domain-physical/70" style={{ width: `${m.score}%` }} />
                        <div className="absolute h-full w-px bg-foreground/60" style={{ left: `${m.benchmark}%` }} />
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground w-10 text-right">{m.score}/{m.benchmark}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button variant="outline" size="sm" className="w-full mt-5 border-primary/30 text-primary hover:bg-primary/10">
              <Target className="h-3.5 w-3.5 mr-2" />Build PDA session
            </Button>
          </Card>
        </div>

        {/* Trajectory + Consistency */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] mb-8">
          <Card className="card-elevated border-border/60 p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-1">Index trajectory</div>
                <h3 className="font-display font-semibold">12-week movement</h3>
              </div>
              <div className="flex items-center gap-1 text-xs text-primary"><TrendingUp className="h-3.5 w-3.5" />+12 in 12 weeks</div>
            </div>
            <div className="h-40 flex items-end gap-2">
              {trajectory.map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full rounded-t bg-gradient-ember" style={{ height: `${v}%`, opacity: 0.4 + (i / trajectory.length) * 0.6 }} />
                  <span className="text-[9px] text-muted-foreground">W{i + 1}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="card-elevated border-border/60 p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display font-semibold">Consistency · 12 weeks</h3>
              <Flame className="h-4 w-4 text-primary" />
            </div>
            <div className="grid grid-cols-12 gap-1">
              {Array.from({ length: 84 }).map((_, i) => {
                const v = Math.random();
                const cls = v > 0.7 ? "bg-primary" : v > 0.4 ? "bg-primary/40" : v > 0.2 ? "bg-muted" : "bg-muted/40";
                return <div key={i} className={`aspect-square rounded-sm ${cls}`} />;
              })}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 pt-4 border-t border-border/60">
              <div><div className="font-display text-xl font-bold">42</div><div className="text-[10px] uppercase tracking-wider text-muted-foreground">Sessions</div></div>
              <div><div className="font-display text-xl font-bold flex items-center gap-1"><Flame className="h-4 w-4 text-primary" />12</div><div className="text-[10px] uppercase tracking-wider text-muted-foreground">Streak</div></div>
              <div><div className="font-display text-xl font-bold">81%</div><div className="text-[10px] uppercase tracking-wider text-muted-foreground">Adherence</div></div>
            </div>
          </Card>
        </div>

        {/* All micro-skills bar list */}
        <Card className="card-elevated border-border/60 p-6 mb-8">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-primary mb-1">All micro-skills</div>
              <h3 className="font-display font-semibold">27 skills · benchmark line shown</h3>
            </div>
          </div>
          <div className="grid gap-x-6 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
            {microSkills.map((m) => {
              const meta = domainMeta[m.domain];
              return (
                <div key={m.key} className="flex items-center gap-3 py-1.5">
                  <span className="text-xs w-32 truncate">{m.label}</span>
                  <div className="flex-1 relative h-1.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="absolute h-full"
                      style={{ width: `${m.score}%`, backgroundColor: `hsl(var(--${meta.color}))` }}
                    />
                    <div className="absolute h-full w-px bg-foreground/70" style={{ left: `${m.benchmark}%` }} />
                  </div>
                  <span className="font-mono text-xs w-7 text-right">{m.score}</span>
                  {m.confidence === "low" && <span className="text-[9px] text-muted-foreground" title="Low confidence">~</span>}
                </div>
              );
            })}
          </div>
        </Card>

        {/* Cohort + Parent report */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] mb-8">
          <Card className="card-elevated border-border/60 p-6 relative overflow-hidden">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-primary">Cohort comparison</div>
                  <div className="text-xs text-muted-foreground">Anonymous {cohort.ageBand} {cohort.position}s globally</div>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <div className="font-display text-3xl font-bold text-gradient">#{cohort.rank}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">of {cohort.cohortSize.toLocaleString()}</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold">{cohort.percentile}<span className="text-base text-muted-foreground">th</span></div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Percentile</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold">{cohort.cohortAverage}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Cohort avg</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-primary">+12</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Growth · 12 wks</div>
                </div>
              </div>
              <div className="mt-5 pt-5 border-t border-border/60">
                <div className="text-xs text-muted-foreground mb-2">Where you sit vs cohort</div>
                <div className="relative h-2 rounded-full bg-muted overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-gradient-ember" style={{ width: `${cohort.percentile}%` }} />
                  <div className="absolute top-0 bottom-0 w-px bg-foreground/60" style={{ left: "50%" }} title="Median" />
                </div>
                <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
                  <span>Bottom 10%</span><span>Median</span><span>Top 10%</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="card-elevated border-border/60 p-6">
            <div className="flex items-center gap-2 mb-3">
              <Mail className="h-4 w-4 text-primary" />
              <h3 className="font-display font-semibold">Parent report</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Simplified monthly snapshot for parents — milestones, focus areas, and Coach Alex's note.
            </p>
            <div className="space-y-2 mb-5">
              <div className="flex items-center justify-between text-sm py-1.5 border-b border-border/40">
                <span>Last sent</span><span className="text-muted-foreground">Mar 31</span>
              </div>
              <div className="flex items-center justify-between text-sm py-1.5 border-b border-border/40">
                <span>Recipient</span><span className="text-muted-foreground truncate">parent@…</span>
              </div>
              <div className="flex items-center justify-between text-sm py-1.5">
                <span>Next auto-send</span><span className="text-primary">Apr 30</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full border-primary/30 text-primary hover:bg-primary/10">
              <Mail className="h-3.5 w-3.5 mr-2" />Preview & send now
            </Button>
          </Card>
        </div>

        {/* Records */}
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { l: "Best 10m sprint", v: "1.78s", icon: Zap },
            { l: "Highest SPL Index", v: "76", icon: Award },
            { l: "Longest streak", v: "21 days", icon: Flame },
            { l: "Sessions this month", v: "18", icon: Calendar },
          ].map((r) => (
            <Card key={r.l} className="card-elevated border-border/60 p-5">
              <r.icon className="h-4 w-4 text-primary mb-2" />
              <div className="font-display text-2xl font-bold">{r.v}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{r.l}</div>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default ProgressPage;
