const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6 text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Jethro Works. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
