import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, MapPin, Trophy, Settings } from "lucide-react";

const Profile = () => {
  return (
    <AppLayout>
      <div className="p-6 md:p-10 lg:p-12">
        <PageHeader eyebrow="Profile" title="Marco Jansen">
          <Button variant="outline" size="sm"><Settings className="h-3.5 w-3.5 mr-2" />Edit</Button>
        </PageHeader>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="card-elevated border-border/60 p-6 lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center font-display text-xl font-bold text-primary-foreground">
                MJ
              </div>
              <div>
                <div className="font-display font-bold text-lg">Marco Jansen</div>
                <div className="text-xs text-muted-foreground">U17 · Right Winger</div>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between"><span className="text-muted-foreground flex items-center gap-2"><MapPin className="h-3.5 w-3.5" />Club</span><span className="font-medium">FC Lovable</span></div>
              <div className="flex items-center justify-between"><span className="text-muted-foreground flex items-center gap-2"><Target className="h-3.5 w-3.5" />Level</span><span className="font-medium">Advanced</span></div>
              <div className="flex items-center justify-between"><span className="text-muted-foreground flex items-center gap-2"><Trophy className="h-3.5 w-3.5" />SPL Index</span><span className="font-medium text-primary">74</span></div>
            </div>
          </Card>

          <Card className="card-elevated border-border/60 p-6 lg:col-span-2">
            <h3 className="font-display text-lg font-bold mb-4">Goals</h3>
            <div className="space-y-3">
              {[
                "Make the U18 starting eleven by season end",
                "Hit 80+ on first touch & passing accuracy",
                "Train 5 days per week consistently",
              ].map((g, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg border border-border/60 p-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-mono">0{i+1}</div>
                  <span className="text-sm">{g}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
