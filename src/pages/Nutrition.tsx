import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Apple, Droplets, Moon, Sun, Utensils, Sparkles, Plus, Coffee,
  Salad, Beef, Activity,
} from "lucide-react";

const macros = [
  { l: "Protein", v: 92, target: 140, unit: "g", color: "domain-physical" },
  { l: "Carbs", v: 220, target: 320, unit: "g", color: "domain-technical" },
  { l: "Fats", v: 48, target: 70, unit: "g", color: "domain-recovery" },
  { l: "Water", v: 1.8, target: 3, unit: "L", color: "domain-cognitive" },
];

const meals = [
  { time: "07:30", name: "Oats + berries + whey", kcal: 420, tag: "Pre-train" , icon: Coffee},
  { time: "13:00", name: "Chicken bowl + rice + greens", kcal: 680, tag: "Recovery", icon: Salad },
  { time: "16:30", name: "Banana + nut butter", kcal: 280, tag: "Snack", icon: Apple },
  { time: "20:00", name: "Salmon + sweet potato + veg", kcal: 720, tag: "Dinner", icon: Beef },
];

const Nutrition = () => (
  <AppLayout>
    <div className="p-6 md:p-10 lg:p-12">
      <PageHeader
        eyebrow="Fuel"
        title="Eat to perform."
        description="Lightweight nutrition tracking aligned to your training load — your AI coach scales targets every day."
      >
        <Button variant="outline" size="sm"><Sparkles className="h-3.5 w-3.5 mr-2" />Generate meal plan</Button>
        <Button size="sm" className="bg-gradient-ember text-primary-foreground"><Plus className="h-3.5 w-3.5 mr-2" />Log meal</Button>
      </PageHeader>

      {/* Macros + sleep */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {macros.map((m) => (
          <Card key={m.l} className="card-elevated border-border/60 p-5 relative overflow-hidden">
            <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full opacity-15 blur-2xl" style={{ backgroundColor: `hsl(var(--${m.color}))` }} />
            <div className="relative">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{m.l}</div>
              <div className="font-display text-3xl font-bold">
                {m.v}
                <span className="text-base text-muted-foreground"> / {m.target} {m.unit}</span>
              </div>
              <Progress value={(m.v / m.target) * 100} className="h-1 mt-3 bg-muted" />
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Today's meals */}
        <Card className="card-elevated border-border/60 p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Utensils className="h-4 w-4 text-primary" />
              <h3 className="font-display font-semibold">Today's intake</h3>
            </div>
            <span className="text-xs text-muted-foreground">2,100 / 2,800 kcal</span>
          </div>
          <div className="space-y-3">
            {meals.map((m) => (
              <div key={m.time} className="flex items-center gap-4 rounded-lg border border-border/60 bg-background/40 p-3 hover:border-primary/40 transition-colors">
                <div className="font-mono text-xs text-muted-foreground w-12">{m.time}</div>
                <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center"><m.icon className="h-4 w-4" /></div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">{m.name}</div>
                  <div className="text-xs text-muted-foreground">{m.tag}</div>
                </div>
                <div className="font-mono text-sm">{m.kcal} kcal</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Sleep + hydration ring */}
        <div className="space-y-6">
          <Card className="card-elevated border-border/60 p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px shimmer" />
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Moon className="h-4 w-4 text-domain-mental" />
                <span className="font-medium">Sleep</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-domain-recovery">+ Optimal</span>
            </div>
            <div className="font-display text-4xl font-bold mb-1">7h 48m</div>
            <p className="text-xs text-muted-foreground">87 / 100 score · 1h 22m deep</p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div><div className="font-mono">23:14</div><div className="text-muted-foreground text-[10px]">Bed</div></div>
              <div><div className="font-mono">07:02</div><div className="text-muted-foreground text-[10px]">Wake</div></div>
              <div><div className="font-mono">62</div><div className="text-muted-foreground text-[10px]">HRV</div></div>
            </div>
          </Card>

          <Card className="card-elevated border-border/60 p-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="font-medium text-sm">AI tip</span>
            </div>
            <p className="text-sm leading-relaxed text-foreground/90">
              You burned 620 kcal today — push protein 30g higher tonight to hit recovery targets before tomorrow's session.
            </p>
          </Card>
        </div>
      </div>
    </div>
  </AppLayout>
);

export default Nutrition;
