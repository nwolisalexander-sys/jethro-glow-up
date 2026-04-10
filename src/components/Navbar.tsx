import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="flex items-center justify-between px-6 py-3 rounded-2xl border border-border bg-card/80 backdrop-blur-xl">
        <span className="font-heading text-lg font-bold text-foreground tracking-tight">
          Jethro Works
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#how" className="hover:text-foreground transition-colors">Process</a>
          <a href="#who" className="hover:text-foreground transition-colors">Who We Work With</a>
          <a href="#model" className="hover:text-foreground transition-colors">Our Model</a>
          <a href="#result" className="hover:text-foreground transition-colors">Results</a>
        </div>
        <Link
          to="/apply"
          className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Apply Now <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
