import { motion } from "framer-motion";
import { Brain, Users, Zap, Shield, Cpu, Eye } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Cognitive Engine",
    description: "Multi-modal LLM backbone with real-time decision making and contextual awareness for complex industrial tasks.",
  },
  {
    icon: Users,
    title: "Human-Sync",
    description: "Seamless collaboration protocols enabling safe co-working with human operators in shared workspaces.",
  },
  {
    icon: Zap,
    title: "Zero Latency",
    description: "Edge-first architecture with 8ms response times for time-critical operations and real-time adaptability.",
  },
  {
    icon: Shield,
    title: "Safety Override",
    description: "ISO 10218-1 compliant with deterministic Red Button layer that overrides AI decisions if boundaries are breached.",
  },
  {
    icon: Cpu,
    title: "Fleet Intelligence",
    description: "Distributed computing mesh allowing coordinated multi-agent operations across entire facilities.",
  },
  {
    icon: Eye,
    title: "360° Perception",
    description: "Multi-sensor fusion with LIDAR, depth cameras, and tactile feedback for complete environmental awareness.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-primary/5 blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">
            CAPABILITIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for the <span className="text-primary">Real World</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Industrial-grade AI systems designed for precision, safety, and seamless integration into existing operations.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:glow-green transition-all">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
