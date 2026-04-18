import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { DomainBadge } from "@/components/DomainBadge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Footprints, Zap, Brain, Activity, HeartPulse, Play, Clock, Flame, Filter,
} from "lucide-react";

const sessions = [
  { title: "Improve passing", desc: "Sharpen short, long & one-touch", domain: "technical" as const, icon: Footprints, mins: 35, intensity: "Medium" },
  { title: "Speed & agility", desc: "Acceleration ladders + COD", domain: "physical" as const, icon: Zap, mins: 28, intensity: "High" },
  { title: "Game intelligence", desc: "Scanning & decision rondos", domain: "cognitive" as const, icon: Brain, mins: 25, intensity: "Low" },
  { title: "Confidence training", desc: "Repeat success patterns", domain: "mental" as const, icon: Activity, mins: 18, intensity: "Low" },
  { title: "Recovery day", desc: "Mobility + breathing reset", domain: "recovery" as const, icon: HeartPulse, mins: 22, intensity: "Easy" },
  { title: "First touch lab", desc: "Wall work, control, weight", domain: "technical" as const, icon: Footprints, mins: 30, intensity: "Medium" },
  { title: "Endurance build", desc: "Interval base capacity", domain: "physical" as const, icon: Zap, mins: 45, intensity: "High" },
  { title: "Pre-game routine", desc: "Activate body + mind", domain: "mental" as const, icon: Activity, mins: 12, intensity: "Easy" },
];

const Train = () => {
  return (
    <AppLayout>
      <div className="p-6 md:p-10 lg:p-12">
        <PageHeader
          eyebrow="Train"
          title="What should I train today?"
          description="Pick a goal — your AI coach will adapt the session to your fatigue, mood and last performance."
        >
          <Button variant="outline" size="sm"><Filter className="h-3.5 w-3.5 mr-2" />Filter</Button>
          <Button size="sm" className="bg-gradient-primary text-primary-foreground"><Flame className="h-3.5 w-3.5 mr-2" />Quick 15</Button>
        </PageHeader>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="bg-muted/40">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
            <TabsTrigger value="physical">Physical</TabsTrigger>
            <TabsTrigger value="cognitive">Cognitive</TabsTrigger>
            <TabsTrigger value="mental">Mental</TabsTrigger>
            <TabsTrigger value="recovery">Recovery</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {sessions.map((s) => (
                <Card key={s.title} className="card-elevated border-border/60 p-5 group hover:border-primary/40 transition-all cursor-pointer">
                  <div
                    className="h-10 w-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `hsl(var(--domain-${s.domain}) / 0.15)`, color: `hsl(var(--domain-${s.domain}))` }}
                  >
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-1">{s.title}</h3>
                  <p className="text-xs text-muted-foreground mb-4">{s.desc}</p>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{s.mins}m</span>
                      <span>· {s.intensity}</span>
                    </div>
                    <DomainBadge domain={s.domain} label={s.domain} />
                  </div>
                  <Button size="sm" variant="ghost" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Play className="h-3.5 w-3.5 mr-2 fill-current" /> Start
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>
          {["technical","physical","cognitive","mental","recovery"].map((t) => (
            <TabsContent key={t} value={t} className="mt-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {sessions.filter(s => s.domain === t).map((s) => (
                  <Card key={s.title} className="card-elevated border-border/60 p-5">
                    <h3 className="font-display font-semibold">{s.title}</h3>
                    <p className="text-xs text-muted-foreground">{s.desc}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Train;
