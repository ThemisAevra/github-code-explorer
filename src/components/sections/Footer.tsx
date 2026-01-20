import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Platform", href: "#home" },
    { label: "Capabilities", href: "#features" },
    { label: "Specifications", href: "#specs" },
    { label: "Pricing", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Support", href: "#" },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com/ThemisAevra", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/30 bg-card/20">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold">ThemisAevra</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs mb-6">
              Building human-level intelligence for industrial precision. 
              Autonomous physical agents for the real world.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-border/50 bg-card/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h4 className="font-semibold uppercase text-xs tracking-wider text-muted-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ThemisAevra. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono text-primary">SYSTEM ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
