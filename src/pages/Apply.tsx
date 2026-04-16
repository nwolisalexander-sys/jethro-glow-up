import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Apply = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
        <div className="flex items-center justify-between px-6 py-3 rounded-2xl border border-border bg-card/80 backdrop-blur-xl">
          <Link to="/" className="font-heading text-lg font-bold text-foreground tracking-tight">
            Jethro Works
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </div>
      </nav>

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
            Apply to Work With Us
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Fill out the form below and we'll get back to you shortly.
          </p>
        </div>
        <div className="max-w-2xl mx-auto rounded-2xl border-2 border-transparent bg-[hsl(230_25%_12%)] backdrop-blur-xl p-6 md:p-10" style={{ borderImage: 'linear-gradient(135deg, hsl(var(--primary)), hsl(280, 80%, 60%)) 1' }}>
          <iframe
            data-tally-src="https://tally.so/embed/68N4Pe?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="500"
            frameBorder={0}
            title="Apply to Work With Us"
          />
        </div>
      </div>
    </div>
  );
};

export default Apply;
