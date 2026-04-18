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
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/mind" element={<Mind />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/coach-ai" element={<CoachAI />} />
          <Route path="/intel" element={<Intel />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
