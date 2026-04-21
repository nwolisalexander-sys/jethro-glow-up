import ScrollReveal from "@/components/ScrollReveal";

const ProblemSection = () => {
  return (
    <section id="problem" className="section-spacing px-6 relative">
      <div className="absolute inset-0 gradient-glow opacity-30" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <div className="pill-badge mb-6">The Problem</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
            Most creators have attention not leverage.
          </h2>
        </ScrollReveal>
        <div className="mt-10 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <ScrollReveal delay={100}>
            <p>
              Creators spend years building an audience, but monetization often stays limited to sponsorships, one-off deals, or inconsistent launches.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p>
              Turning attention into a real business requires strategy, systems, execution, and optimisation, all of which pull focus away from creating.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="text-foreground font-medium">
              That's where most creators get stuck.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
