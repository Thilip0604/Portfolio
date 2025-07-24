import { Github, Linkedin, Instagram,Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/Thilip0604"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn", 
      url: "https://linkedin.com/in/thilipk0604"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      url: "https://www.instagram.com/__.thxlip.__/"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      name: "Email",
      url: "mailto:kthilip0604@example.com"
    }

  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-background border-t border-border/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-center">
          {/* Brand */}
          <div>
            <div 
              onClick={scrollToTop}
              className="text-xl md:text-2xl font-bold text-primary cursor-pointer hover:text-accent transition-colors duration-300 mb-2"
            >
              Thilip K<span className="text-foreground">.</span>
            </div>
            <p className="text-foreground/60 text-sm">
               Passionate Fresher & Eager to Learn New Tech
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center sm:justify-start md:justify-center space-x-4 md:space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted/30 rounded-xl flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center sm:text-left md:text-right">
            <p className="text-foreground/60 text-sm flex items-center justify-center sm:justify-start md:justify-end">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" /> by Thilip K
            </p>
            <p className="text-foreground/40 text-xs mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>

        {/* Scroll to top button */}
        {/* <div className="mt-8 pt-8 border-t border-border/20 text-center">
          <button
            onClick={scrollToTop}
            className="text-foreground/60 hover:text-primary transition-colors duration-300 text-sm font-medium"
          >
            Back to Top ↑
          </button>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;