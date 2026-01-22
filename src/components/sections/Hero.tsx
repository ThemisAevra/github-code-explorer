import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Cpu, Zap } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Premium background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/10" />
      
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      {/* Noise texture */}
      <div className="absolute inset-0 noise" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ 
          y: [0, 30, 0],
          scale: [1, 0.9, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-accent/20 to-primary/10 rounded-full blur-[100px]"
      />

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-32 h-32 border border-primary/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-40 left-32 w-24 h-24 border border-accent/10 rotate-45"
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Premium status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full badge-premium mb-10"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
            </span>
            <span className="text-sm font-medium text-primary tracking-wide">SYSTEM ACTIVE</span>
          </motion.div>

          {/* Main heading with refined typography */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tighter mb-8"
          >
            <span className="block text-foreground">Human-Level</span>
            <span className="block text-gradient glow-text-green mt-2">Intelligence.</span>
          </motion.h1>

          {/* Refined subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            Autonomous physical agents engineered for{" "}
            <span className="text-foreground font-medium">high-stakes operations</span> and{" "}
            <span className="text-foreground font-medium">industrial precision</span>.
          </motion.p>

          {/* Premium CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20"
          >
            <Button
              size="xl"
              variant="premium"
              className="group min-w-[220px]"
            >
              <span className="relative z-10 flex items-center gap-2">
                System Overview
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            <Button
              variant="glass"
              size="xl"
              className="group min-w-[220px]"
            >
              <Play className="h-5 w-5 mr-1 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Premium trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {[
              { icon: Shield, label: "ISO 10218-1 Certified" },
              { icon: Cpu, label: "Enterprise Ready" },
              { icon: Zap, label: "24/7 Support" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/5 border border-primary/10 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Premium bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />
      
      {/* Decorative line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      />
    </section>
  );
}
