import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Wind, Sun, Moon, Smile, Frown, Meh } from "lucide-react";

const Mind = () => {
  return (
    <AppLayout>
      <div className="p-6 md:p-10 lg:p-12">
        <PageHeader
          eyebrow="Mind"
          title="The mental edge."
          description="A daily check-in shapes today's session. Mood · energy · sleep — your AI coach reads it all."
        />

        <Card className="card-elevated border-border/60 p-8 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-40" />
          <div className="relative">
            <div className="text-[11px] uppercase tracking-[0.2em] text-primary mb-2">Daily check-in</div>
            <h3 className="font-display text-2xl font-bold mb-6">How are you feeling today?</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Smile, label: "Energized", color: "domain-technical" },
                { icon: Meh, label: "Steady", color: "domain-cognitive" },
                { icon: Frown, label: "Drained", color: "domain-mental" },
              ].map((m) => (
                <button
                  key={m.label}
                  className="flex items-center gap-2 rounded-full border border-border/80 px-5 py-2.5 hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  <m.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{m.label}</span>
                </button>
              ))}
            </div>
          </div>
        </Card>

        <h3 className="font-display text-xl font-bold mb-4">Routines</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Sun, title: "Morning prime", mins: 5, desc: "Set the tone for the day" },
            { icon: Brain, title: "Pre-game focus", mins: 8, desc: "Dial in concentration" },
            { icon: Wind, title: "Box breathing", mins: 4, desc: "Calm, repeatable, instant" },
            { icon: Moon, title: "Sleep wind-down", mins: 10, desc: "Recover deeper" },
          ].map((r) => (
            <Card key={r.title} className="card-elevated border-border/60 p-5">
              <r.icon className="h-5 w-5 text-primary mb-3" />
              <h4 className="font-display font-semibold mb-1">{r.title}</h4>
              <p className="text-xs text-muted-foreground mb-4">{r.desc}</p>
              <Button size="sm" variant="outline" className="w-full">{r.mins} min</Button>
            </Card>
          ))}
        </div>

        <Card className="card-elevated border-border/60 p-6 mt-8 flex items-center gap-4">
          <Heart className="h-8 w-8 text-primary shrink-0" />
          <div>
            <div className="font-medium">Mindset trend: trending up</div>
            <div className="text-xs text-muted-foreground">7-day average confidence at 82 — your highest yet.</div>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Mind;
