import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import {
  Home, Dumbbell, Video, BookOpen, TrendingUp, Users, Brain, User2,
  Sparkles, Briefcase,
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const main = [
  { title: "Home", url: "/", icon: Home },
  { title: "Train", url: "/train", icon: Dumbbell },
  { title: "Analyze", url: "/analyze", icon: Video },
  { title: "Learn", url: "/learn", icon: BookOpen },
  { title: "Progress", url: "/progress", icon: TrendingUp },
];

const more = [
  { title: "Mind", url: "/mind", icon: Brain },
  { title: "Community", url: "/community", icon: Users },
  { title: "Profile", url: "/profile", icon: User2 },
];

const pro = [
  { title: "Coach AI", url: "/coach-ai", icon: Briefcase },
  { title: "Player Intel", url: "/intel", icon: Sparkles },
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

  const renderGroup = (label: string, items: typeof main) => (
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
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="relative">
            <div className="h-8 w-8 rounded-md bg-gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground">
              S
            </div>
            <div className="absolute inset-0 rounded-md bg-primary/40 blur-md -z-10" />
          </div>
          {!collapsed && (
            <div className="leading-tight">
              <div className="font-display font-bold tracking-tight">SPL</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">AI Platform</div>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        {renderGroup("Player", main)}
        {renderGroup("More", more)}
        {renderGroup("Pro", pro)}
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
