import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DomainBadge } from "@/components/DomainBadge";
import {
  Users, Plus, AlertTriangle, TrendingUp, TrendingDown, Sparkles,
  Calendar, ArrowUpRight, Activity,
} from "lucide-react";

const squad = [
  { n: "Marco J.", pos: "RW", load: 78, idx: 74, trend: "up", risk: "low" },
  { n: "Diego L.", pos: "ST", load: 92, idx: 81, trend: "up", risk: "medium" },
  { n: "Kai O.", pos: "CM", load: 64, idx: 69, trend: "down", risk: "low" },
  { n: "Tomi S.", pos: "CB", load: 88, idx: 76, trend: "up", risk: "high" },
  { n: "Iván R.", pos: "LB", load: 55, idx: 71, trend: "up", risk: "low" },
  { n: "Noah B.", pos: "GK", load: 42, idx: 80, trend: "up", risk: "low" },
];

const Squad = () => (
  <AppLayout>
    <div className="p-6 md:p-10 lg:p-12">
      <PageHeader
        eyebrow="Pro · Squad"
        title="Your team in one screen."
        description="Live load, risk and progress for every player. Built for coaches and academies."
      >
        <Button variant="outline" size="sm"><Calendar className="h-3.5 w-3.5 mr-2" />Week view</Button>
        <Button size="sm" className="bg-gradient-ember text-primary-foreground"><Plus className="h-3.5 w-3.5 mr-2" />Add player</Button>
      </PageHeader>

      {/* Top row */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        {[
          { l: "Players", v: "16", icon: Users },
          { l: "Avg SPL Index", v: "75", icon: Activity },
          { l: "At risk", v: "2", icon: AlertTriangle, accent: true },
          { l: "Sessions / week", v: "12", icon: Calendar },
        ].map((s) => (
          <Card key={s.l} className="card-elevated border-border/60 p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</span>
              <s.icon className={`h-4 w-4 ${s.accent ? "text-domain-physical" : "text-primary"}`} />
            </div>
            <div className={`font-display text-3xl font-bold ${s.accent ? "text-domain-physical" : ""}`}>{s.v}</div>
          </Card>
        ))}
      </div>

      {/* Roster table */}
      <Card className="card-elevated border-border/60 overflow-hidden mb-8">
        <div className="p-5 border-b border-border/60 flex items-center justify-between">
          <h3 className="font-display font-semibold">Roster</h3>
          <Button variant="ghost" size="sm" className="text-muted-foreground">Export <ArrowUpRight className="h-3.5 w-3.5 ml-1" /></Button>
        </div>
        <div className="divide-y divide-border/60">
          <div className="grid grid-cols-[1fr_60px_1.2fr_1.2fr_80px_60px] items-center px-5 py-2 text-[10px] uppercase tracking-widest text-muted-foreground">
            <span>Player</span><span>Pos</span><span>7-day load</span><span>SPL Index</span><span>Trend</span><span>Risk</span>
          </div>
          {squad.map((p) => (
            <div key={p.n} className="grid grid-cols-[1fr_60px_1.2fr_1.2fr_80px_60px] items-center px-5 py-3 hover:bg-muted/30 transition-colors text-sm">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-ember flex items-center justify-center text-xs font-bold text-primary-foreground">
                  {p.n.split(" ").map(w => w[0]).join("")}
                </div>
                <span className="font-medium">{p.n}</span>
              </div>
              <span className="text-muted-foreground text-xs">{p.pos}</span>
              <div className="flex items-center gap-2 pr-4">
                <Progress value={p.load} className="h-1 flex-1" />
                <span className="font-mono text-xs w-8">{p.load}</span>
              </div>
              <div className="flex items-center gap-2 pr-4">
                <Progress value={p.idx} className="h-1 flex-1" />
                <span className="font-mono text-xs w-8">{p.idx}</span>
              </div>
              <div>
                {p.trend === "up"
                  ? <span className="inline-flex items-center gap-1 text-xs text-primary"><TrendingUp className="h-3 w-3" />+</span>
                  : <span className="inline-flex items-center gap-1 text-xs text-muted-foreground"><TrendingDown className="h-3 w-3" />−</span>}
              </div>
              <span className={`text-[10px] uppercase tracking-widest font-bold ${
                p.risk === "high" ? "text-domain-physical" :
                p.risk === "medium" ? "text-accent" :
                "text-domain-recovery"
              }`}>{p.risk}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* AI insights */}
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { t: "Tomi S. — high risk", d: "3 sessions over 90% load. Recommend mobility + recovery tomorrow.", domain: "physical" as const },
          { t: "Diego L. — peak form", d: "SPL Index +6 this week. Push him 1v1 work to capitalize.", domain: "technical" as const },
          { t: "Kai O. — energy dip", d: "Mood check-ins lower. Schedule a 1:1 + lighter mental block.", domain: "mental" as const },
        ].map((i) => (
          <Card key={i.t} className="card-elevated border-border/60 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <DomainBadge domain={i.domain} label={i.domain} />
            </div>
            <div className="font-medium text-sm mb-1">{i.t}</div>
            <p className="text-xs text-muted-foreground">{i.d}</p>
          </Card>
        ))}
      </div>
    </div>
  </AppLayout>
);

export default Squad;
