import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Platform", href: "#home" },
  { label: "Capabilities", href: "#features" },
  { label: "Specifications", href: "#specs" },
  { label: "Solutions", href: "#showcase" },
];

export function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 h-screen w-16 lg:w-20 flex flex-col items-center py-8 border-r border-border/50 glass"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="mb-12"
      >
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center glow-green">
          <span className="text-primary font-bold text-lg lg:text-xl">T</span>
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col items-center gap-6">
        {navItems.map((item, index) => (
          <motion.a
            key={item.href}
            href={item.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className={cn(
              "group relative w-full flex justify-center py-3",
              "text-muted-foreground hover:text-foreground transition-colors"
            )}
          >
            {/* Vertical text for desktop */}
            <span 
              className="hidden lg:block text-xs font-medium tracking-widest uppercase"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              {item.label}
            </span>
            
            {/* Dot indicator for mobile */}
            <span className="lg:hidden w-2 h-2 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors" />
            
            {/* Active indicator */}
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 bg-primary transition-all group-hover:h-full" />
          </motion.a>
        ))}
      </nav>

      {/* Get Started Button */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-auto px-3 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors glow-green"
      >
        <span className="hidden lg:inline">Start</span>
        <span className="lg:hidden">→</span>
      </motion.a>
    </motion.aside>
  );
}
