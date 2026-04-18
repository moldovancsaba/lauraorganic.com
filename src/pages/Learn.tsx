import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Compass, Users, MessageCircle, ArrowUpRight } from "lucide-react";

const tracks = [
  { title: "Tactics 101", desc: "Pressing, build-up, transitions", icon: Compass, count: 24 },
  { title: "Position playbook", desc: "By role: WG, CM, CB, GK…", icon: Users, count: 11 },
  { title: "Game understanding", desc: "Read the game like a pro", icon: BookOpen, count: 18 },
  { title: "Coach Q&A", desc: "Ask anything, get answers", icon: MessageCircle, count: 0 },
];

const Learn = () => {
  return (
    <AppLayout>
      <div className="p-6 md:p-10 lg:p-12">
        <PageHeader
          eyebrow="Learn"
          title="Know the game. Win the game."
          description="A living library: tactics, positioning, decision-making and coach Q&A — all matched to your level and position."
        />

        <div className="relative max-w-xl mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Ask: How do I press as a #10?" className="pl-10 h-12 bg-muted/40" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {tracks.map((t) => (
            <Card key={t.title} className="card-elevated border-border/60 p-5 group hover:border-primary/40 transition-all cursor-pointer">
              <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold mb-1">{t.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">{t.desc}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{t.count} lessons</span>
                <ArrowUpRight className="h-4 w-4 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Card>
          ))}
        </div>

        <h3 className="font-display text-xl font-bold mb-4">For your position · Winger</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Top wingers scan 6–8 times before receiving",
            "Cutting in vs going outside: when to choose",
            "Creating 1v1s — body feints that work",
          ].map((q, i) => (
            <Card key={i} className="card-elevated border-border/60 p-5">
              <div className="font-mono text-xs text-primary mb-2">Lesson 0{i+1}</div>
              <p className="text-sm leading-relaxed">{q}</p>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Learn;
