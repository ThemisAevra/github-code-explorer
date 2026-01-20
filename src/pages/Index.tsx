import { Sidebar } from "@/components/layout/Sidebar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { Configurator } from "@/components/sections/Configurator";
import { ROICalculator } from "@/components/sections/ROICalculator";
import { Partners } from "@/components/sections/Partners";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-16 lg:ml-20">
        <Hero />
        <Stats />
        <Features />
        <Configurator />
        <ROICalculator />
        <Partners />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
