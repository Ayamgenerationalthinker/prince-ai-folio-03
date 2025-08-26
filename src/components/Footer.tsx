import { Brain, Github, Linkedin, Youtube, MessageCircle, Heart } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Ayamgenerationalthinker", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/prince-kojo-ofosu-fiebor-48917a268/", label: "LinkedIn" },
    { icon: MessageCircle, href: "https://www.instagram.com/agt_tech_/", label: "Instagram (AGT_TECH_)" },
    { icon: MessageCircle, href: "#", label: "TikTok (Coach_AGT)" },
  ];

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">Prince Fiebor</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Computer Science student and aspiring AI researcher, dedicated to creating 
              meaningful technological solutions for global impact.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
              <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experience</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold">Connect With Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Follow my journey in AI, research, and education.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Prince Fiebor. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and modern web technologies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};