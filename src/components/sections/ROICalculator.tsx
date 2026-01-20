import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { DollarSign, Users, TrendingUp, Clock } from "lucide-react";

export function ROICalculator() {
  const [workers, setWorkers] = useState([50]);
  const [hourlyRate, setHourlyRate] = useState([28]);

  const calculations = useMemo(() => {
    const numWorkers = workers[0];
    const rate = hourlyRate[0];
    const hoursPerYear = 2080; // 40 hours * 52 weeks
    
    const currentCost = numWorkers * rate * hoursPerYear;
    const robotCost = currentCost * 0.35; // 65% savings estimate
    const savings = currentCost - robotCost;
    const roi = ((savings / robotCost) * 100).toFixed(0);
    
    return {
      currentCost,
      robotCost,
      savings,
      roi,
    };
  }, [workers, hourlyRate]);

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">
            ROI CALCULATOR
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Calculate Your <span className="text-primary">Savings</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how ThemisAevra can transform your operational costs.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm"
          >
            {/* Sliders */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Workers slider */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    Number of Pickers
                  </label>
                  <span className="text-2xl font-bold font-mono">{workers[0]}</span>
                </div>
                <Slider
                  value={workers}
                  onValueChange={setWorkers}
                  min={10}
                  max={200}
                  step={5}
                  className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
                />
              </div>

              {/* Hourly rate slider */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    Hourly Rate
                  </label>
                  <span className="text-2xl font-bold font-mono">${hourlyRate[0]}/hr</span>
                </div>
                <Slider
                  value={hourlyRate}
                  onValueChange={setHourlyRate}
                  min={15}
                  max={50}
                  step={1}
                  className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
                />
              </div>
            </div>

            {/* Results */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Current Cost */}
              <div className="p-6 rounded-xl bg-secondary/30 border border-border/30">
                <div className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Current Annual Cost
                </div>
                <div className="text-2xl md:text-3xl font-bold font-mono">
                  ${(calculations.currentCost / 1000000).toFixed(1)}M
                </div>
              </div>

              {/* Savings */}
              <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 glow-green">
                <div className="text-sm text-primary mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Annual Savings
                </div>
                <div className="text-2xl md:text-3xl font-bold font-mono text-primary">
                  ${(calculations.savings / 1000000).toFixed(1)}M
                </div>
              </div>

              {/* ROI */}
              <div className="p-6 rounded-xl bg-secondary/30 border border-border/30">
                <div className="text-sm text-muted-foreground mb-2">
                  Estimated ROI
                </div>
                <div className="text-2xl md:text-3xl font-bold font-mono">
                  {calculations.roi}%
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
