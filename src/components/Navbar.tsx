import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "About Us", href: "#about" },
  { label: "Process", href: "#how" },
  { label: "Who We Work With", href: "#who" },
  { label: "Our Model", href: "#model" },
  { label: "Results", href: "#result" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full">
        <div className="flex items-center justify-between px-6 py-4 bg-card/80 backdrop-blur-xl border-b border-border">
          <span className="font-heading text-lg font-bold text-foreground tracking-tight">
            Jethro Works
          </span>
          <button
            onClick={() => setOpen(!open)}
            className="text-foreground p-1"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-start pt-24 px-8 h-full">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <Link
            to="/apply"
            onClick={() => setOpen(false)}
            className="mt-10 flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary text-primary-foreground text-base font-semibold hover:bg-primary/90 transition-colors"
          >
            Apply Now <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
