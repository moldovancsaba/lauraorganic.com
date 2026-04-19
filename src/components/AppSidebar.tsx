import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import {
  Home, Dumbbell, Video, BookOpen, TrendingUp, Users, Brain, User2,
  Sparkles, Briefcase, Compass, PlayCircle, Trophy, Apple, MessageCircle,
  Library, GraduationCap, Calendar, UserPlus, ListChecks,
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

// Tier 1 — Core moat
const core = [
  { title: "Home", url: "/", icon: Home },
  { title: "Daily Checklist", url: "/daily", icon: ListChecks },
  { title: "Train", url: "/train", icon: Dumbbell },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Live Session", url: "/session", icon: PlayCircle },
  { title: "Analyze", url: "/analyze", icon: Video },
  { title: "Progress", url: "/progress", icon: TrendingUp },
  { title: "Coach Alex", url: "/chat", icon: MessageCircle },
];

// Tier 2 — Engagement & differentiation
const develop = [
  { title: "Academy", url: "/academy", icon: GraduationCap },
  { title: "Drills", url: "/drills", icon: Library },
  { title: "Paths", url: "/paths", icon: Compass },
  { title: "Player Intel", url: "/intel", icon: Sparkles },
  { title: "Learn", url: "/learn", icon: BookOpen },
];

// Wellness
const wellness = [
  { title: "Mind", url: "/mind", icon: Brain },
  { title: "Fuel", url: "/nutrition", icon: Apple },
  { title: "Match Center", url: "/match", icon: Trophy },
];

// Tier 3 — Retention & expansion
const community = [
  { title: "Network", url: "/network", icon: UserPlus },
  { title: "Community", url: "/community", icon: Users },
];

const pro = [
  { title: "Coach AI (B2B)", url: "/coach-ai", icon: Briefcase },
  { title: "Squad", url: "/squad", icon: Users },
];

const account = [
  { title: "Profile", url: "/profile", icon: User2 },
  { title: "Onboarding", url: "/onboarding", icon: Sparkles },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const { pathname } = useLocation();

  const linkCls = (active: boolean) =>
    cn(
      "flex items-center gap-3 rounded-md px-2 py-2 text-sm transition-colors",
      active
        ? "bg-sidebar-accent text-primary font-medium"
        : "text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-foreground",
    );

  const renderGroup = (label: string, items: typeof core) => (
    <SidebarGroup>
      {!collapsed && <SidebarGroupLabel className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">{label}</SidebarGroupLabel>}
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const active = item.url === "/" ? pathname === "/" : pathname.startsWith(item.url);
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <RouterNavLink to={item.url} end={item.url === "/"} className={linkCls(active)}>
                    <item.icon className="h-4 w-4 shrink-0" />
                    {!collapsed && <span>{item.title}</span>}
                    {!collapsed && active && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
                    )}
                  </RouterNavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <Sidebar collapsible="icon" className="border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2.5 px-2 py-2">
          <div className="relative">
            <div className="h-9 w-9 rounded-lg bg-gradient-ember flex items-center justify-center font-display font-bold text-primary-foreground shadow-ember">
              S
            </div>
            <div className="absolute inset-0 rounded-lg bg-primary/50 blur-lg -z-10" />
          </div>
          {!collapsed && (
            <div className="leading-tight">
              <div className="font-display font-bold tracking-tight text-base">SPL</div>
              <div className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground">Academy</div>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        {renderGroup("Core · Tier 1", core)}
        {renderGroup("Develop · Tier 2", develop)}
        {renderGroup("Wellness", wellness)}
        {renderGroup("Community · Tier 3", community)}
        {renderGroup("Pro", pro)}
        {renderGroup("Account", account)}
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-3">
        {!collapsed ? (
          <div className="rounded-lg bg-gradient-card border border-sidebar-border p-3">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium">SPL Index</span>
            </div>
            <div className="font-display text-2xl font-bold text-gradient">74<span className="text-sm text-muted-foreground">/100</span></div>
            <div className="text-[10px] text-muted-foreground mt-1">+3 this week</div>
          </div>
        ) : (
          <div className="h-8 w-8 rounded-md bg-sidebar-accent flex items-center justify-center text-xs font-bold text-primary mx-auto">74</div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
