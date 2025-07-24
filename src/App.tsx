import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // ✅ Import Helmet

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Journal from "./pages/Journal";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import WeddingPhotography from "./pages/services/WeddingPhotography";
import MaternityPhotography from "./pages/services/MaternityPhotography";
import PortraitPhotography from "./pages/services/PortraitPhotography";
import FashionPhotography from "./pages/services/FashionPhotography";
import EventPhotography from "./pages/services/EventPhotography";
import CommercialPhotography from "./pages/services/CommercialPhotography";
import BookNow from "./pages/BookNow";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* ✅ Google Site Verification Helmet */}
      <Helmet>
        <meta
          name="google-site-verification"
          content="BRUWd5Low7BpBksDhSOL-Kqx-pBFtjO0IwUxiDK5gsg"
        />
      </Helmet>

      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/shop" element={<Shop />} /> */}
            <Route path="/services/wedding" element={<WeddingPhotography />} />
            <Route path="/services/maternity" element={<MaternityPhotography />} />
            <Route path="/services/portrait" element={<PortraitPhotography />} />
            <Route path="/services/fashion" element={<FashionPhotography />} />
            <Route path="/services/event" element={<EventPhotography />} />
            <Route path="/services/commercial" element={<CommercialPhotography />} />
            <Route path="/book-now" element={<BookNow />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
