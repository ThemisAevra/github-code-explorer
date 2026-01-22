import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is it safe to work alongside humans?",
    answer: "Yes. We comply with ISO 10218-1 using a deterministic \"Red Button\" layer that overrides AI decisions if safety boundaries are breached. Our systems are designed for collaborative environments with humans.",
  },
  {
    question: "What is the battery life?",
    answer: "4 hours of heavy lattice manipulation, or 8 hours of mixed logistics tasks. Batteries are hot-swappable in 30 seconds, ensuring minimal downtime.",
  },
  {
    question: "Do I need to change my warehouse layout?",
    answer: "No. ThemisAevra is designed for \"Brownfield\" deployments. It navigates existing aisles, stairs, and doors designed for humans. No infrastructure changes required.",
  },
  {
    question: "What is the deployment timeline?",
    answer: "Typical deployment takes 2-4 weeks from contract signing to operational status. This includes site assessment, configuration, training, and validation.",
  },
  {
    question: "How does the pricing model work?",
    answer: "We offer flexible pricing including upfront purchase, lease, and RaaS (Robotics as a Service) models. Contact our sales team for a customized quote based on your requirements.",
  },
];

export function FAQ() {
  return (
    <section id="showcase" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="inline-block text-xs font-mono text-primary tracking-[0.2em] uppercase mb-4 px-4 py-2 rounded-full badge-premium">
              F.A.Q.
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Frequently Asked{" "}
              <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Everything you need to know about deploying ThemisAevra in your operations.
            </p>
            
            {/* Decorative element */}
            <div className="hidden lg:block mt-12">
              <div className="w-24 h-24 rounded-2xl border border-primary/20 bg-primary/5 flex items-center justify-center">
                <span className="text-4xl">?</span>
              </div>
            </div>
          </motion.div>

          {/* Right column - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-0 rounded-2xl overflow-hidden card-premium data-[state=open]:shadow-[0_0_30px_hsl(var(--primary)/0.1)]"
                >
                  <AccordionTrigger className="text-left hover:no-underline px-6 py-5 text-base font-semibold hover:text-primary transition-colors [&[data-state=open]]:text-primary">
                    <span className="pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground px-6 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
