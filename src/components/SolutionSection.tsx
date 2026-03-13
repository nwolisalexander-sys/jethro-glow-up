import ScrollReveal from "@/components/ScrollReveal";

const SolutionSection = () => {
  return (
    <section className="section-spacing px-6">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <div className="pill-badge mb-6">About Us</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
            That's where Jethro Works comes in.
          </h2>
        </ScrollReveal>
        <div className="mt-10 space-y-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          <ScrollReveal delay={100}>
            <p className="text-foreground/90 font-medium text-xl md:text-2xl">
              We partner with creators to build, launch, and operate digital products — from strategy and positioning to execution and optimisation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p>
              Some creators work with us on a single launch. Others continue building multiple products over time. There's no pressure to commit long-term — we focus on proving value first and letting the partnership grow naturally.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="text-foreground font-medium">
              You stay focused on creating. We handle the business behind the scenes.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
