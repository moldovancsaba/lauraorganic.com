import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Swords, Users, Flame } from "lucide-react";

const Community = () => {
  const board = [
    { rank: 1, name: "Luca R.", pos: "WG", score: 92 },
    { rank: 2, name: "Aïssa K.", pos: "CM", score: 88 },
    { rank: 3, name: "You · Marco", pos: "WG", score: 74, you: true },
    { rank: 4, name: "Diego F.", pos: "ST", score: 71 },
    { rank: 5, name: "Sven O.", pos: "CB", score: 69 },
  ];
  return (
    <AppLayout>
      <div className="p-6 md:p-10 lg:p-12">
        <PageHeader eyebrow="Community" title="Train alone. Compete together." />

        <div className="grid gap-6 lg:grid-cols-3 mb-10">
          {[
            { title: "Weekly Challenge", desc: "200 first-touch reps · 4 days left", icon: Flame },
            { title: "1v1 Duel", desc: "Score the most goals in 60s", icon: Swords },
            { title: "Squad", desc: "Train with your club teammates", icon: Users },
          ].map((c) => (
            <Card key={c.title} className="card-elevated border-border/60 p-5">
              <c.icon className="h-5 w-5 text-primary mb-3" />
              <h3 className="font-display font-semibold mb-1">{c.title}</h3>
              <p className="text-xs text-muted-foreground mb-4">{c.desc}</p>
              <Button size="sm" variant="outline" className="w-full">Join</Button>
            </Card>
          ))}
        </div>

        <Card className="card-elevated border-border/60 p-6">
          <div className="flex items-center gap-2 mb-5">
            <Trophy className="h-5 w-5 text-primary" />
            <h3 className="font-display text-xl font-bold">Leaderboard · This week</h3>
          </div>
          <div className="space-y-2">
            {board.map((p) => (
              <div
                key={p.rank}
                className={`flex items-center gap-4 rounded-lg border px-4 py-3 ${p.you ? "border-primary/40 bg-primary/5" : "border-border/60"}`}
              >
                <div className="w-8 font-mono text-sm text-muted-foreground">#{p.rank}</div>
                <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                  {p.name[0]}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">{p.name}</div>
                  <div className="text-xs text-muted-foreground">{p.pos}</div>
                </div>
                <div className="font-display text-xl font-bold text-primary">{p.score}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Community;
