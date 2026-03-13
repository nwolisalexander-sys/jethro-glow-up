import { Handshake } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ModelSection = () => {
  return (
    <section id="model" className="section-spacing px-6">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <div className="pill-badge mb-6">Our Model</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
            We Only Win If You Win
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="mt-10 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <div className="gradient-card rounded-2xl border border-border p-10 md:p-14 space-y-6 text-left">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-2">
                <Handshake className="w-7 h-7 text-primary" />
              </div>
              <p>
                We don't charge upfront fees. We don't sell courses or consulting. We partner with creators and split revenue.
              </p>
              <p>
                That means if you don't make money, neither do we. There's no risk on your end — we only win when you win.
              </p>
              <p className="text-foreground font-medium">
                We handle the strategy, product creation, launch, and operations. You keep doing what you do best: creating content and building trust with your audience.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ModelSection;
