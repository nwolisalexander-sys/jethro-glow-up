import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/alex.nwolisa?igsh=MWl0eWJpaTR4eHRkNQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="mailto:nwolisalexander@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
          >
            <Mail className="w-5 h-5" />
            <span>contact@jethroworks.com</span>
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Jethro Works. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
