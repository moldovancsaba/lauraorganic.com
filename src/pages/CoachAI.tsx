import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Briefcase, Sparkles, Download, Share2, Calendar, Users } from "lucide-react";

const CoachAI = () => {
  return (
    <AppLayout>
      <div className="p-6 md:p-10 lg:p-12">
        <PageHeader
          eyebrow="Pro · Coach AI"
          title="Your AI Assistant Coach"
          description="Build full sessions, weekly plans and curricula in seconds. Designed for clubs, academies and independent coaches."
        >
          <Button variant="outline" size="sm"><Briefcase className="h-3.5 w-3.5 mr-2" />For teams</Button>
        </PageHeader>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Card className="card-elevated border-border/60 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <h3 className="font-display font-semibold">Smart Builder</h3>
            </div>

            <div className="space-y-4">
              {[
                { l: "Age group", v: "U12" },
                { l: "Level", v: "Academy" },
                { l: "Players", v: "16" },
                { l: "Days / week", v: "3" },
                { l: "Session length", v: "75 min" },
                { l: "Focus", v: "Possession + 1v1" },
                { l: "Formation", v: "1-4-3-3" },
              ].map((f) => (
                <div key={f.l} className="grid grid-cols-[120px_1fr] items-center gap-3">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">{f.l}</label>
                  <Input defaultValue={f.v} className="bg-muted/40 h-9" />
                </div>
              ))}
            </div>

            <Button className="w-full mt-6 bg-gradient-primary text-primary-foreground shadow-glow">
              <Sparkles className="h-4 w-4 mr-2" /> Generate weekly plan
            </Button>
          </Card>

          <Card className="card-elevated border-border/60 p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px shimmer" />
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-primary mb-1">AI Output</div>
                <h3 className="font-display font-bold text-lg">Weekly plan · U12 Academy</h3>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon"><Download className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon"><Share2 className="h-4 w-4" /></Button>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { d: "Day 1 · Mon", focus: "Technical + light physical", blocks: ["Activation", "Passing patterns", "Rondo 4v2", "Conditioning finisher"] },
                { d: "Day 2 · Wed", focus: "Tactical + cognitive", blocks: ["Possession 6v6+3", "Decision drills", "SSG with triggers"] },
                { d: "Day 3 · Fri", focus: "High intensity + game", blocks: ["Sprint ladder", "Pressing scenarios", "11v11 game"] },
              ].map((d) => (
                <div key={d.d} className="rounded-lg border border-border/60 bg-background/40 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 text-primary" />
                      <span className="font-medium text-sm">{d.d}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{d.focus}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {d.blocks.map((b) => (
                      <span key={b} className="text-xs rounded-md bg-muted px-2 py-1">{b}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 pt-6 border-t border-border/60">
              {[
                { icon: Users, l: "Built for", v: "16 players" },
                { icon: Calendar, l: "Span", v: "1 week · editable" },
                { icon: Sparkles, l: "Drills", v: "12 suggested" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <s.icon className="h-4 w-4 text-primary mx-auto mb-1" />
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                  <div className="text-sm font-medium">{s.v}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default CoachAI;
