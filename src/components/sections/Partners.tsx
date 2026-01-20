import { motion } from "framer-motion";

const partners = [
  "NVIDIA",
  "BOSTON DYNAMICS",
  "UNITREE",
  "AGILITY",
  "SICK",
  "KUKA",
  "ABB",
  "FIGURE",
  "BOSCH",
  "SCALE",
];

export function Partners() {
  return (
    <section className="py-20 relative overflow-hidden border-y border-border/30">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
            TRUSTED BY OEM PARTNERS
          </span>
        </motion.div>

        {/* Scrolling logos */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex gap-12 pr-12"
            >
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-8 py-4 rounded-lg border border-border/30 bg-card/20 hover:border-primary/30 hover:bg-card/40 transition-all duration-300"
                >
                  <span className="text-lg font-bold text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
                    {partner}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
