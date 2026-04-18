import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Video, FileText, ImageIcon, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";

const Analyze = () => {
  return (
    <AppLayout>
      <div className="p-6 md:p-10 lg:p-12">
        <PageHeader
          eyebrow="Analyze"
          title="Upload. Get coached."
          description="Drop a clip, a match note or a still — your AI coach reads technical, decision and mental cues in seconds."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2 card-elevated border-border/60 border-dashed border-2 p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-glow opacity-40" />
            <div className="relative">
              <div className="mx-auto h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 animate-float">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Drop your training video</h3>
              <p className="text-sm text-muted-foreground mb-5 max-w-sm mx-auto">
                MP4, MOV up to 500MB · or paste a YouTube/Veo link.
              </p>
              <div className="flex justify-center gap-2 flex-wrap">
                <Button className="bg-gradient-primary text-primary-foreground"><Video className="h-4 w-4 mr-2" />Upload video</Button>
                <Button variant="outline"><FileText className="h-4 w-4 mr-2" />Paste notes</Button>
                <Button variant="outline"><ImageIcon className="h-4 w-4 mr-2" />Add image</Button>
              </div>
            </div>
          </Card>

          <Card className="card-elevated border-border/60 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-4 w-4 text-primary" />
              <h3 className="font-medium">What AI extracts</h3>
            </div>
            <ul className="space-y-3 text-sm">
              {[
                ["Technical", "Body shape, touch quality, pass weight"],
                ["Decision", "Scanning frequency, choice quality"],
                ["Mental", "Hesitation, urgency, recovery after error"],
                ["Physical", "Sprint count, intensity windows"],
              ].map(([k, v]) => (
                <li key={k} className="flex gap-3">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium">{k}</div>
                    <div className="text-xs text-muted-foreground">{v}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-10">
          <h3 className="font-display text-xl font-bold mb-4">Recent analysis</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: "Sun training · 1v1 reps", verdict: "Body open. Decision rushed in 3/8 reps.", flag: "warn" },
              { title: "Match vs Eagles · 2nd half", verdict: "Scanning rate dropped 14% after min 60.", flag: "warn" },
              { title: "Finishing session · Tue", verdict: "Excellent contact. Confidence up.", flag: "ok" },
            ].map((a) => (
              <Card key={a.title} className="card-elevated border-border/60 p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">{a.title}</div>
                  {a.flag === "ok" ? (
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-domain-physical" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{a.verdict}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Analyze;
