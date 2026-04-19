import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DomainBadge } from "@/components/DomainBadge";
import { Search, Filter, Play, Clock, Star, Bookmark, Sparkles } from "lucide-react";

const drills = [
  { n: "Triangle rondo 4v2", domain: "cognitive" as const, mins: 12, level: "All", tag: "Possession", saved: true },
  { n: "Wall pass ladder", domain: "technical" as const, mins: 8, level: "Beginner", tag: "First touch" },
  { n: "10m sprint × 6", domain: "physical" as const, mins: 10, level: "Advanced", tag: "Acceleration" },
  { n: "1v1 channel duels", domain: "technical" as const, mins: 15, level: "Intermediate", tag: "Dribbling", saved: true },
  { n: "Box breathing reset", domain: "mental" as const, mins: 5, level: "All", tag: "Pre-game" },
  { n: "Cone weave + finish", domain: "technical" as const, mins: 12, level: "Intermediate", tag: "Finishing" },
  { n: "Yo-Yo IR1 short", domain: "physical" as const, mins: 18, level: "Advanced", tag: "Endurance" },
  { n: "Scan-and-pass color", domain: "cognitive" as const, mins: 10, level: "All", tag: "Scanning" },
  { n: "Mobility flow", domain: "recovery" as const, mins: 12, level: "All", tag: "Mobility", saved: true },
];

const Drills = () => (
  <AppLayout>
    <div className="p-6 md:p-10 lg:p-12">
      <PageHeader
        eyebrow="Library"
        title="220+ drills, indexed."
        description="Search by domain, time, level or game situation. Your AI coach pulls from this when building sessions."
      >
        <Button variant="outline" size="sm"><Bookmark className="h-3.5 w-3.5 mr-2" />Saved · 3</Button>
      </PageHeader>

      {/* Search bar */}
      <Card className="card-elevated border-border/60 p-4 mb-8 flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search drills, e.g. 'first touch under pressure'" className="pl-10 h-11 bg-muted/40" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {["All", "Technical", "Physical", "Cognitive", "Mental", "Recovery"].map((c, i) => (
            <Button key={c} size="sm" variant={i === 0 ? "default" : "outline"} className={i === 0 ? "bg-gradient-ember text-primary-foreground" : ""}>{c}</Button>
          ))}
          <Button size="sm" variant="ghost"><Filter className="h-3.5 w-3.5 mr-2" />More</Button>
        </div>
      </Card>

      {/* AI suggested */}
      <Card className="card-elevated border-border/60 p-5 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px shimmer" />
        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-lg bg-gradient-ember flex items-center justify-center shrink-0"><Sparkles className="h-5 w-5 text-primary-foreground" /></div>
          <div className="flex-1">
            <div className="text-[11px] uppercase tracking-[0.2em] text-primary mb-1">For you today</div>
            <p className="text-sm">Based on your last session, prioritize <strong>Wall pass ladder</strong> and <strong>Scan-and-pass color</strong> — both train the perception → execution loop you scored low on.</p>
          </div>
          <Button size="sm" variant="outline">Auto-build</Button>
        </div>
      </Card>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {drills.map((d) => (
          <Card key={d.n} className="card-elevated border-border/60 p-5 group hover:border-primary/40 transition-all cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <DomainBadge domain={d.domain} label={d.domain} />
              <Bookmark className={`h-4 w-4 ${d.saved ? "fill-primary text-primary" : "text-muted-foreground"}`} />
            </div>
            <h3 className="font-display font-semibold text-base mb-1">{d.n}</h3>
            <p className="text-xs text-muted-foreground mb-4">{d.tag} · {d.level}</p>
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{d.mins} min</span>
              <span className="flex items-center gap-1"><Star className="h-3 w-3 text-primary" />4.8</span>
            </div>
            <Button size="sm" variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Play className="h-3.5 w-3.5 mr-2 fill-current" />Run drill
            </Button>
          </Card>
        ))}
      </div>
    </div>
  </AppLayout>
);

export default Drills;
