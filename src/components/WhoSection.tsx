const WhoSection = () => {
  return (
    <section id="who" className="section-spacing px-6 relative">
      <div className="absolute inset-0 gradient-glow opacity-20" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="pill-badge mb-6">Ideal Partner</div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
          Who we work with
        </h2>
        <div className="mt-10 gradient-card rounded-2xl border border-border p-10 md:p-14 text-left space-y-6">
          <p className="text-lg text-foreground/90 font-medium">
            You have 20k+ followers, solid engagement, and an audience that trusts you.
          </p>
          <p className="text-lg text-muted-foreground">
            Now you're ready to monetize beyond brand deals — with a digital product.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoSection;
