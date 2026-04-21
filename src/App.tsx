import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Train from "./pages/Train.tsx";
import Analyze from "./pages/Analyze.tsx";
import Learn from "./pages/Learn.tsx";
import ProgressPage from "./pages/ProgressPage.tsx";
import Community from "./pages/Community.tsx";
import Mind from "./pages/Mind.tsx";
import Profile from "./pages/Profile.tsx";
import CoachAI from "./pages/CoachAI.tsx";
import Intel from "./pages/Intel.tsx";
import Session from "./pages/Session.tsx";
import Paths from "./pages/Paths.tsx";
import MatchCenter from "./pages/MatchCenter.tsx";
import Nutrition from "./pages/Nutrition.tsx";
import Squad from "./pages/Squad.tsx";
import Drills from "./pages/Drills.tsx";
import AIChat from "./pages/AIChat.tsx";
import Academy from "./pages/Academy.tsx";
import Onboarding from "./pages/Onboarding.tsx";
import CalendarPage from "./pages/Calendar.tsx";
import Network from "./pages/Network.tsx";
import DailyChecklist from "./pages/DailyChecklist.tsx";
import Overview from "./pages/Overview.tsx";
import AthleteIQ from "./pages/AthleteIQ.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/train" element={<Train />} />
          <Route path="/session" element={<Session />} />
          <Route path="/drills" element={<Drills />} />
          <Route path="/paths" element={<Paths />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/match" element={<MatchCenter />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/mind" element={<Mind />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<AIChat />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/coach-ai" element={<CoachAI />} />
          <Route path="/intel" element={<Intel />} />
          <Route path="/squad" element={<Squad />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/network" element={<Network />} />
          <Route path="/daily" element={<DailyChecklist />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/athlete-iq" element={<AthleteIQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
