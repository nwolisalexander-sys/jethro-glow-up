import { Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const results = [
  "A clear product.",
  "A focused launch.",
  "A profitable system behind your content, built to compound, not burn you out.",
];

const ResultSection = () => {
  return (
    <section id="result" className="section-spacing px-6 relative">
      <div className="absolute inset-0 gradient-glow opacity-20" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <div className="pill-badge mb-6">Outcome</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
            The result
          </h2>
        </ScrollReveal>
        <div className="mt-10 space-y-4">
          {results.map((r, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="flex items-start gap-4 gradient-card rounded-xl border border-border p-6 text-left">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-lg text-foreground/90">{r}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={450}>
          <p className="mt-8 text-lg text-muted-foreground">
            Instead of chasing brand deals, you start building something you actually own.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ResultSection;
