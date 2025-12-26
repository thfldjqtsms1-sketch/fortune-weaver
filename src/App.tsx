import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tarot from "./pages/Tarot";
import Fortune from "./pages/Fortune";
import Spiritual from "./pages/Spiritual";
import Guide from "./pages/Guide";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/fortune-weaver/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tarot" element={<Tarot />} />
          <Route path="/fortune" element={<Fortune />} />
          <Route path="/spiritual" element={<Spiritual />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          {/* 추가 라우트들 - 추후 구현 */}
          <Route path="/reservation" element={<Home />} />
          <Route path="/new-counselors" element={<Tarot />} />
          <Route path="/favorites" element={<Home />} />
          <Route path="/verified" element={<Home />} />
          <Route path="/popular" element={<Home />} />
          <Route path="/login" element={<Home />} />
          <Route path="/register" element={<Home />} />
          <Route path="/reviews" element={<Home />} />
          <Route path="/events" element={<Home />} />
          <Route path="/faq" element={<Guide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
