import { Target, Rocket, Settings } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    icon: Target,
    label: "Strategy",
    title: "Turn attention into a clear, sellable offer.",
    description:
      "We shape your audience insights into a strong positioning, product idea, and pricing — so you're not guessing what to sell or how to sell it.",
  },
  {
    icon: Rocket,
    label: "Launch",
    title: "Execute once. Launch right.",
    description:
      "We build and run the entire launch system: pages, payments, delivery, and timelines — so your first launch is focused, clean, and repeatable.",
  },
  {
    icon: Settings,
    label: "Operations",
    title: "Make it run without you.",
    description:
      "We handle fulfillment, optimisation, and scaling behind the scenes — turning your product into a system that compounds while you keep creating.",
  },
];

const ProcessSection = () => {
  return (
    <section id="how" className="section-spacing px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="pill-badge mb-6">Process</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              How we work with creators
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="group gradient-card rounded-2xl border border-border p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-glow h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
                  {step.label}
                </span>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
