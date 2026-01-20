import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const formFactors = [
  { id: "bipedal", name: "Bipedal", description: "Humanoid form for complex environments" },
  { id: "wheeled", name: "Wheeled", description: "Maximum speed and efficiency" },
  { id: "torso", name: "Torso", description: "Fixed-base manipulation" },
];

const tiers = [
  { id: "standard", name: "Standard", price: "Contact", features: ["8ms latency", "Basic autonomy", "Standard support"] },
  { id: "pro", name: "Pro", price: "Contact", features: ["4ms latency", "Advanced AI", "Priority support"] },
  { id: "enterprise", name: "Enterprise", price: "Custom", features: ["2ms latency", "Full autonomy", "Dedicated team"] },
];

export function Configurator() {
  const [selectedForm, setSelectedForm] = useState("bipedal");
  const [selectedTier, setSelectedTier] = useState("pro");

  return (
    <section id="specs" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
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
            FLEET CONFIGURATOR
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Configure Your <span className="text-primary">Fleet</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Select your form factor and intelligence tier to build the perfect solution for your operation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form Factor Selection */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">
              Form Factor
            </h3>
            <div className="space-y-3">
              {formFactors.map((form) => (
                <button
                  key={form.id}
                  onClick={() => setSelectedForm(form.id)}
                  className={cn(
                    "w-full p-4 rounded-xl border text-left transition-all duration-300",
                    selectedForm === form.id
                      ? "border-primary bg-primary/10 glow-green"
                      : "border-border/50 bg-card/30 hover:border-border"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold mb-1">{form.name}</div>
                      <div className="text-sm text-muted-foreground">{form.description}</div>
                    </div>
                    <div className={cn(
                      "w-4 h-4 rounded-full border-2 transition-colors",
                      selectedForm === form.id
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    )} />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tier Selection */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">
              Intelligence Tier
            </h3>
            <div className="space-y-3">
              {tiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className={cn(
                    "w-full p-4 rounded-xl border text-left transition-all duration-300",
                    selectedTier === tier.id
                      ? "border-primary bg-primary/10 glow-green"
                      : "border-border/50 bg-card/30 hover:border-border"
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold">{tier.name}</div>
                    <div className={cn(
                      "w-4 h-4 rounded-full border-2 transition-colors",
                      selectedTier === tier.id
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    )} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tier.features.map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="px-8 py-6 text-lg font-semibold glow-green">
            Request Configuration Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
