import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 gradient-glow" />

      {/* Floating dots */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="glow-dot"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="pill-badge mb-8 animate-fade-in-up">
          Jethro Works — Backend Operator
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight text-foreground animate-fade-in-up-delay-1">
          Turn Your Audience Into a Scalable Business
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up-delay-2">
          We build and operate complete digital product systems that generate predictable revenue so you can focus on creating while we handle the backend.
        </p>

        <div className="mt-10 animate-fade-in-up-delay-3">
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

export default HeroSection;
