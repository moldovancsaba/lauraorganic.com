import { AppLayout } from "@/components/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Send, Mic, Plus, MessageSquare, Footprints, Brain, Activity, Zap } from "lucide-react";

const chips = [
  { icon: Footprints, label: "Why am I losing my first touch under pressure?" },
  { icon: Brain, label: "How do I scan more before receiving?" },
  { icon: Activity, label: "Build me a pre-match routine" },
  { icon: Zap, label: "I'm tired today — what should I do?" },
];

const messages = [
  { role: "ai" as const, text: "Hi Marco. I noticed your scan rate dropped 14% in the second half of your last match. Want me to add a 5-minute scanning drill before today's session?" },
  { role: "you" as const, text: "Yes, but keep total time under 45 minutes." },
  { role: "ai" as const, text: "Done. I trimmed your finishing block from 12 to 8 reps and added the scanning drill. Total: 42 minutes. Ready when you are." },
];

const AIChat = () => (
  <AppLayout>
    <div className="grid lg:grid-cols-[280px_1fr] min-h-[calc(100vh-3.5rem)]">
      {/* Conversations sidebar */}
      <aside className="border-r border-border bg-background/40 hidden lg:flex flex-col">
        <div className="p-4 border-b border-border">
          <Button className="w-full bg-gradient-ember text-primary-foreground shadow-ember">
            <Plus className="h-4 w-4 mr-2" />New chat
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {[
            "Today's session adjustments",
            "Pre-match routine v2",
            "Why my left foot is weaker",
            "Recovery week plan",
            "Train like Mbappé",
          ].map((c, i) => (
            <button key={i} className={`w-full text-left rounded-lg px-3 py-2.5 text-sm hover:bg-muted/50 transition-colors ${i === 0 ? "bg-muted/60 text-foreground" : "text-muted-foreground"}`}>
              <MessageSquare className="h-3.5 w-3.5 inline mr-2 opacity-60" />
              {c}
            </button>
          ))}
        </div>
      </aside>

      {/* Conversation */}
      <div className="flex flex-col">
        <header className="border-b border-border p-4 flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-ember flex items-center justify-center"><Sparkles className="h-4 w-4 text-primary-foreground" /></div>
          <div>
            <div className="font-display font-bold">Coach AI</div>
            <div className="text-[10px] uppercase tracking-widest text-primary">Live · trained on your data</div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 max-w-3xl mx-auto w-full">
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-3 ${m.role === "you" ? "justify-end" : ""}`}>
              {m.role === "ai" && <div className="h-8 w-8 rounded-full bg-gradient-ember flex items-center justify-center shrink-0"><Sparkles className="h-3.5 w-3.5 text-primary-foreground" /></div>}
              <Card className={`p-4 max-w-[80%] ${m.role === "ai" ? "card-elevated border-border/60" : "bg-primary text-primary-foreground border-transparent"}`}>
                <p className="text-sm leading-relaxed">{m.text}</p>
              </Card>
            </div>
          ))}

          {/* Suggestions */}
          <div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Try asking</div>
            <div className="grid gap-2 sm:grid-cols-2">
              {chips.map((c) => (
                <button key={c.label} className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/40 p-3 text-left text-sm hover:border-primary/40 transition-colors">
                  <c.icon className="h-4 w-4 text-primary shrink-0" />
                  <span>{c.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Composer */}
        <div className="border-t border-border p-4">
          <div className="max-w-3xl mx-auto flex items-center gap-2">
            <div className="relative flex-1">
              <Input placeholder="Ask your coach anything…" className="h-12 pr-12 bg-muted/40" />
              <Button size="icon" variant="ghost" className="absolute right-1 top-1 h-10 w-10"><Mic className="h-4 w-4" /></Button>
            </div>
            <Button size="icon" className="h-12 w-12 bg-gradient-ember text-primary-foreground shadow-ember"><Send className="h-4 w-4" /></Button>
          </div>
          <div className="text-[10px] text-center text-muted-foreground mt-2">Coach AI uses your training data, mood, sleep & match history.</div>
        </div>
      </div>
    </div>
  </AppLayout>
);

export default AIChat;
