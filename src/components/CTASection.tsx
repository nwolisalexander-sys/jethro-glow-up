import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-spacing px-6 relative">
      <div className="absolute inset-0 gradient-glow" />
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
          Ready to turn your audience into a real business?
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Apply to partner with us. We'll identify the fastest path to turn your audience into predictable revenue.
        </p>
        <div className="mt-10">
          <a
            href="https://jethroworks.com/apply-to-work-with-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-all shadow-glow"
          >
            Apply to Work With Us <ArrowUpRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-sm text-muted-foreground italic">*Limited partnerships*</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
