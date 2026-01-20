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
    <section id="showcase" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">
              F.A.Q.
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about deploying ThemisAevra in your operations.
            </p>
          </motion.div>

          {/* Right column - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-xl px-6 bg-card/30 backdrop-blur-sm data-[state=open]:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-semibold pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
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
