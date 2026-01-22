import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { label: "Edge Latency", value: 8, suffix: "ms", description: "Real-time response" },
  { label: "Vision Refresh", value: 120, suffix: "Hz", description: "Precision tracking" },
  { label: "Payload Capacity", value: 45, suffix: "kg", description: "Heavy-duty lifting" },
  { label: "Uptime", value: 99.9, suffix: "%", description: "Enterprise reliability" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current * 10) / 10);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <div ref={ref} className="font-mono tabular-nums">
      <span className="text-foreground">{displayValue}</span>
      <span className="text-primary ml-1">{suffix}</span>
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="absolute inset-0 bg-grid-dense opacity-30" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-primary tracking-[0.2em] uppercase mb-4 px-4 py-2 rounded-full badge-premium">
            REAL-TIME METRICS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Performance <span className="text-gradient">at Scale</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl card-premium transition-all duration-500 hover:scale-[1.02]">
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Value */}
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tight">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                
                {/* Label */}
                <div className="text-base font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                
                {/* Description */}
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-primary/20 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
